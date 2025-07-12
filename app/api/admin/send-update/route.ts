import { getRequestContext } from '@cloudflare/next-on-pages'
import { EmailService } from '@/app/services/email/email-service'
import { devLog, devError } from '@/app/utils/logger'

export const runtime = 'edge'

// This endpoint would be protected with authentication in production
// For now, it's a basic implementation to demonstrate bulk email capability

export async function POST(request: Request) {
  try {
    const { env } = getRequestContext()
    
    // In production, add authentication check here
    // For example: verify admin token, check session, etc.
    
    const body = await request.json()
    const { subject, content, testMode = false } = body
    
    if (!subject || !content) {
      return Response.json({
        success: false,
        message: 'Subject and content are required'
      }, { status: 400 })
    }
    
    if (!env.RESEND_API_KEY) {
      return Response.json({
        success: false,
        message: 'Email service not configured'
      }, { status: 500 })
    }
    
    // Get all confirmed RSVPs from database
    const query = testMode 
      ? 'SELECT email FROM rsvps WHERE attending = 1 LIMIT 5' // Test mode: only 5 emails
      : 'SELECT email FROM rsvps WHERE attending = 1'
      
    const results = await env.DB.prepare(query).all()
    
    if (!results.results || results.results.length === 0) {
      return Response.json({
        success: false,
        message: 'No confirmed RSVPs found'
      })
    }
    
    const emails = results.results.map((row: any) => row.email)
    
    devLog('Sending update emails', {
      recipientCount: emails.length,
      testMode,
      subject
    })
    
    // Send emails
    const emailService = new EmailService(env.RESEND_API_KEY)
    const emailResults = await emailService.sendUpdateEmail(emails, subject, content)
    
    // Log results
    const successCount = emailResults.filter(r => r.success).length
    const failureCount = emailResults.filter(r => !r.success).length
    
    // Log each email attempt in the database
    for (let i = 0; i < emails.length; i++) {
      const email = emails[i]
      const result = emailResults[i]
      
      const logQuery = `
        INSERT INTO email_logs (
          rsvp_id, email_type, recipient_email, subject, 
          status, message_id, error_message
        ) VALUES (
          (SELECT id FROM rsvps WHERE email = ?),
          'update',
          ?,
          ?,
          ?,
          ?,
          ?
        )
      `
      
      await env.DB.prepare(logQuery)
        .bind(
          email,
          email,
          subject,
          result.success ? 'sent' : 'failed',
          result.messageId || null,
          result.error || null
        )
        .run()
    }
    
    return Response.json({
      success: true,
      message: `Update emails sent: ${successCount} successful, ${failureCount} failed`,
      results: {
        total: emails.length,
        successful: successCount,
        failed: failureCount,
        details: testMode ? emailResults : undefined
      }
    })
    
  } catch (error) {
    devError('Admin send update error', error)
    
    return Response.json({
      success: false,
      message: 'Failed to send update emails',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}