import { getRequestContext } from '@cloudflare/next-on-pages'
import { rsvpFormSchema, type RSVPResponse, type TurnstileVerifyResponse, type RSVPRecord } from '@/app/types/rsvp'
import { devLog, devError, devLogSQL } from '@/app/utils/logger'

export const runtime = 'edge'

export async function POST(request: Request) {
  try {
    // Get request context for Cloudflare bindings
    const { env } = getRequestContext()
    
    // Parse request body
    const body = await request.json() as { turnstileToken: string } & Record<string, any>
    const { turnstileToken, ...formData } = body
    
    devLog('RSVP Request Received', {
      formData,
      headers: {
        'content-type': request.headers.get('content-type'),
        'user-agent': request.headers.get('user-agent'),
      }
    })

    // Validate form data
    const validationResult = rsvpFormSchema.safeParse(formData)
    if (!validationResult.success) {
      devError('Form Validation Failed', validationResult.error.errors)
      return Response.json({
        success: false,
        message: 'Invalid form data',
        error: 'Invalid form data',
        details: validationResult.error.errors
      }, { status: 400 })
    }
    
    devLog('Form Data Validated', validationResult.data)

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
      plus_one_name: validationResult.data.plusOneName || null,
      song_requests: validationResult.data.songRequests || null,
      booked_room: validationResult.data.bookedRoom || false,
      ip_address: clientIP
    }
    
    devLog('Prepared Database Data', rsvpData)

    // Insert into database
    try {
      const insertQuery = `
        INSERT INTO rsvps (
          guest_name, email, phone, attending, 
          plus_one_name, song_requests, booked_room, ip_address
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(email) DO UPDATE SET
          guest_name = excluded.guest_name,
          phone = excluded.phone,
          attending = excluded.attending,
          plus_one_name = excluded.plus_one_name,
          song_requests = excluded.song_requests,
          booked_room = excluded.booked_room,
          updated_at = CURRENT_TIMESTAMP
        RETURNING *
      `
      
      const queryParams = [
        rsvpData.guest_name,
        rsvpData.email,
        rsvpData.phone,
        rsvpData.attending ? 1 : 0, // SQLite uses 1/0 for boolean
        rsvpData.plus_one_name,
        rsvpData.song_requests,
        rsvpData.booked_room ? 1 : 0, // SQLite uses 1/0 for boolean
        rsvpData.ip_address
      ]
      
      devLogSQL(insertQuery, queryParams)
      
      const result = await env.DB.prepare(insertQuery).bind(...queryParams).first()

      if (!result) {
        throw new Error('Failed to save RSVP')
      }
      
      devLog('Database Insert Result', result)
      
      // Verify the insertion with a SELECT query
      const verificationQuery = 'SELECT * FROM rsvps WHERE email = ?'
      devLogSQL(verificationQuery, [rsvpData.email])
      
      const verification = await env.DB.prepare(verificationQuery)
        .bind(rsvpData.email)
        .first()
        
      devLog('Database Verification', {
        insertResult: result,
        verificationResult: verification,
        dataMatches: verification?.email === rsvpData.email
      })

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
      devError('Database Operation Failed', dbError)
      
      // Check if it's a duplicate email error
      if (dbError instanceof Error && dbError.message.includes('UNIQUE')) {
        devLog('Duplicate Email - Updating Existing RSVP', { email: rsvpData.email })
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