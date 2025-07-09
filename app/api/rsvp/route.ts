import { getRequestContext } from '@cloudflare/next-on-pages'
import { rsvpFormSchema, type RSVPResponse, type TurnstileVerifyResponse, type RSVPRecord } from '@/app/types/rsvp'

export const runtime = 'edge'

export async function POST(request: Request) {
  try {
    // Get request context for Cloudflare bindings
    const { env } = getRequestContext()
    
    // Parse request body
    const body = await request.json() as { turnstileToken: string } & Record<string, any>
    const { turnstileToken, ...formData } = body

    // Validate form data
    const validationResult = rsvpFormSchema.safeParse(formData)
    if (!validationResult.success) {
      return Response.json({
        success: false,
        message: 'Invalid form data',
        error: 'Invalid form data',
        details: validationResult.error.errors
      }, { status: 400 })
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
        message: 'Security verification failed. Please try again.',
        error: 'Security verification failed'
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
          message: 'An RSVP with this email already exists. Your response has been updated.',
          error: 'Duplicate email'
        } as RSVPResponse, { status: 400 })
      }

      throw dbError
    }

  } catch (error) {
    console.error('RSVP submission error:', error)
    
    return Response.json({
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
      error: error instanceof Error ? error.message : 'Unknown error'
    } as RSVPResponse, { status: 500 })
  }
}

// GET endpoint to check if email has already RSVP'd
export async function GET(request: Request) {
  try {
    const { env } = getRequestContext()
    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')

    if (!email) {
      return Response.json({
        success: false,
        message: 'Email parameter is required',
        error: 'Missing email parameter'
      }, { status: 400 })
    }

    const result = await env.DB.prepare(
      'SELECT * FROM rsvps WHERE email = ?'
    ).bind(email).first()

    return Response.json({
      success: true,
      message: result ? 'RSVP found' : 'No RSVP found for this email',
      data: result as RSVPRecord | null,
      exists: !!result
    })

  } catch (error) {
    console.error('RSVP lookup error:', error)
    
    return Response.json({
      success: false,
      message: 'Failed to check RSVP status',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}