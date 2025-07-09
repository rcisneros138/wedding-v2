import { getRequestContext } from '@cloudflare/next-on-pages'
import { rsvpFormSchema, type RSVPResponse, type TurnstileVerifyResponse, type CloudflareEnv } from '@/app/types/rsvp'

export const runtime = 'edge'

export async function POST(request: Request) {
  try {
    // Get request context for Cloudflare bindings
    const { env } = getRequestContext() as { env: CloudflareEnv }
    
    // Parse request body
    const body = await request.json()
    const { turnstileToken, ...formData } = body

    // Validate form data
    const validationResult = rsvpFormSchema.safeParse(formData)
    if (!validationResult.success) {
      return Response.json({
        success: false,
        error: 'Invalid form data',
        details: validationResult.error.errors
      } as RSVPResponse, { status: 400 })
    }

    // Verify Turnstile token
    const turnstileVerifyEndpoint = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'
    const turnstileResponse = await fetch(turnstileVerifyEndpoint, {
      method: 'POST',
      body: `secret=${encodeURIComponent(env.TURNSTILE_SECRET_KEY)}&response=${encodeURIComponent(turnstileToken)}`,
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    })

    const turnstileData = await turnstileResponse.json() as TurnstileVerifyResponse

    if (!turnstileData.success) {
      return Response.json({
        success: false,
        error: 'Security verification failed. Please try again.'
      } as RSVPResponse, { status: 400 })
    }

    // Get client IP for logging
    const clientIP = request.headers.get('CF-Connecting-IP') || 
                    request.headers.get('X-Forwarded-For') || 
                    'unknown'

    // Prepare data for database
    const rsvpData = {
      guest_name: validationResult.data.guestName,
      email: validationResult.data.email,
      phone: validationResult.data.phone || null,
      attending: validationResult.data.attending,
      guest_count: validationResult.data.guestCount,
      plus_one_name: validationResult.data.plusOneName || null,
      dietary_restrictions: validationResult.data.dietaryRestrictions || null,
      special_requests: validationResult.data.specialRequests || null,
      ip_address: clientIP
    }

    // Insert into database
    try {
      const result = await env.DB.prepare(`
        INSERT INTO rsvps (
          guest_name, email, phone, attending, guest_count, 
          plus_one_name, dietary_restrictions, special_requests, ip_address
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(email) DO UPDATE SET
          guest_name = excluded.guest_name,
          phone = excluded.phone,
          attending = excluded.attending,
          guest_count = excluded.guest_count,
          plus_one_name = excluded.plus_one_name,
          dietary_restrictions = excluded.dietary_restrictions,
          special_requests = excluded.special_requests,
          updated_at = CURRENT_TIMESTAMP
        RETURNING *
      `).bind(
        rsvpData.guest_name,
        rsvpData.email,
        rsvpData.phone,
        rsvpData.attending ? 1 : 0, // SQLite uses 1/0 for boolean
        rsvpData.guest_count,
        rsvpData.plus_one_name,
        rsvpData.dietary_restrictions,
        rsvpData.special_requests,
        rsvpData.ip_address
      ).first()

      if (!result) {
        throw new Error('Failed to save RSVP')
      }

      // Return success response
      const message = rsvpData.attending 
        ? `Thank you ${rsvpData.guest_name}! We're excited to celebrate with you.`
        : `Thank you for letting us know, ${rsvpData.guest_name}. We'll miss you!`

      return Response.json({
        success: true,
        message,
        data: result
      } as RSVPResponse)

    } catch (dbError) {
      console.error('Database error:', dbError)
      
      // Check if it's a duplicate email error
      if (dbError instanceof Error && dbError.message.includes('UNIQUE')) {
        return Response.json({
          success: false,
          error: 'An RSVP with this email already exists. Your response has been updated.'
        } as RSVPResponse, { status: 400 })
      }

      throw dbError
    }

  } catch (error) {
    console.error('RSVP submission error:', error)
    
    return Response.json({
      success: false,
      error: 'An unexpected error occurred. Please try again later.'
    } as RSVPResponse, { status: 500 })
  }
}

// GET endpoint to check if email has already RSVP'd
export async function GET(request: Request) {
  try {
    const { env } = getRequestContext() as { env: CloudflareEnv }
    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')

    if (!email) {
      return Response.json({
        success: false,
        error: 'Email parameter is required'
      }, { status: 400 })
    }

    const result = await env.DB.prepare(
      'SELECT * FROM rsvps WHERE email = ?'
    ).bind(email).first()

    return Response.json({
      success: true,
      exists: !!result,
      data: result
    })

  } catch (error) {
    console.error('RSVP lookup error:', error)
    
    return Response.json({
      success: false,
      error: 'Failed to check RSVP status'
    }, { status: 500 })
  }
}