import { getRequestContext } from '@cloudflare/next-on-pages'
import type { TurnstileVerifyResponse } from '@/app/types/rsvp'

export const runtime = 'edge'

export async function POST(request: Request) {
  try {
    // Get request context for Cloudflare bindings
    const { env } = getRequestContext()
    
    // Parse request body
    const { token } = await request.json() as { token: string }

    if (!token) {
      return Response.json({
        success: false,
        error: 'Token is required'
      }, { status: 400 })
    }

    // Verify with Cloudflare Turnstile
    const verifyEndpoint = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'
    
    const res = await fetch(verifyEndpoint, {
      method: 'POST',
      body: `secret=${encodeURIComponent(env.TURNSTILE_SECRET_KEY)}&response=${encodeURIComponent(token)}`,
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    })

    const data = await res.json() as TurnstileVerifyResponse

    return Response.json(data, {
      status: data.success ? 200 : 400,
      headers: {
        'content-type': 'application/json'
      }
    })

  } catch (error) {
    console.error('Turnstile verification error:', error)
    
    return Response.json({
      success: false,
      error: 'Verification failed'
    }, { status: 500 })
  }
}