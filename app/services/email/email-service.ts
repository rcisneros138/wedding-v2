import { Resend } from 'resend'
import { devLog, devError } from '@/app/utils/logger'
import { confirmationAttendingTemplate } from './templates/confirmation-attending'
import { confirmationNotAttendingTemplate } from './templates/confirmation-not-attending'
import { updateEmailTemplate } from './templates/update-template'
import { adminNotificationTemplate } from './templates/admin-notification'

export interface EmailData {
  guestName: string
  email: string
  attending: boolean
  plusOneName?: string | null
  songRequests?: string | null
  bookedRoom?: boolean
}

export interface EmailResult {
  success: boolean
  messageId?: string
  error?: string
}

export class EmailService {
  private resend: Resend
  private fromEmail: string
  private fromName: string

  constructor(apiKey: string) {
    this.resend = new Resend(apiKey)
    this.fromEmail = 'info@rayandamanda.wedding' // Update with your verified domain
    this.fromName = 'Amanda & Ray'
  }

  async sendRSVPConfirmation(data: EmailData): Promise<EmailResult> {
    try {
      const template = data.attending
        ? confirmationAttendingTemplate(data)
        : confirmationNotAttendingTemplate(data)

      const subject = data.attending
        ? "🎉 We're excited to celebrate with you!"
        : 'Thank you for letting us know'

      devLog('Sending email', {
        to: data.email,
        subject,
        attending: data.attending,
      })

      const result = await this.resend.emails.send({
        from: `${this.fromName} <${this.fromEmail}>`,
        to: data.email,
        subject,
        html: template,
        tags: [
          { name: 'type', value: 'rsvp-confirmation' },
          { name: 'attending', value: data.attending.toString() },
        ],
      })

      if (result.error) {
        devError('Email send error', result.error)
        return {
          success: false,
          error: result.error.message,
        }
      }

      devLog('Email sent successfully', {
        messageId: result.data?.id,
        to: data.email,
      })

      return {
        success: true,
        messageId: result.data?.id,
      }
    } catch (error) {
      devError('Email service error', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      }
    }
  }

  // Future method for bulk updates
  async sendUpdateEmail(
    emails: string[],
    subject: string,
    content: string,
  ): Promise<EmailResult[]> {
    // Implementation for bulk email sending
    // This would be used for sending updates to all guests
    const results: EmailResult[] = []

    // Generate HTML template
    const htmlContent = updateEmailTemplate(content)

    // Batch process to respect rate limits
    for (const email of emails) {
      try {
        const result = await this.resend.emails.send({
          from: `${this.fromName} <${this.fromEmail}>`,
          to: email,
          subject,
          html: htmlContent,
          tags: [{ name: 'type', value: 'wedding-update' }],
        })

        results.push({
          success: !result.error,
          messageId: result.data?.id,
          error: result.error?.message,
        })

        // Add small delay to respect rate limits
        await new Promise((resolve) => setTimeout(resolve, 100))
      } catch (error) {
        results.push({
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error',
        })
      }
    }

    return results
  }

  async sendAdminNotification(
    adminEmails: string[],
    rsvpData: EmailData & {
      phone?: string
      submittedAt: string
      ipAddress?: string
    }
  ): Promise<EmailResult[]> {
    const results: EmailResult[] = []
    
    const subject = `New RSVP: ${rsvpData.guestName} - ${rsvpData.attending ? 'Attending ✅' : 'Not Attending ❌'}`
    
    const htmlContent = adminNotificationTemplate({
      guestName: rsvpData.guestName,
      email: rsvpData.email,
      phone: rsvpData.phone,
      attending: rsvpData.attending,
      plusOneName: rsvpData.plusOneName || undefined,
      songRequests: rsvpData.songRequests || undefined,
      bookedRoom: rsvpData.bookedRoom,
      submittedAt: rsvpData.submittedAt,
      ipAddress: rsvpData.ipAddress
    })

    // Send to each admin email
    for (const adminEmail of adminEmails) {
      try {
        devLog('Sending admin notification', {
          to: adminEmail,
          guestName: rsvpData.guestName,
          attending: rsvpData.attending
        })

        const result = await this.resend.emails.send({
          from: `${this.fromName} Wedding RSVP <${this.fromEmail}>`,
          to: adminEmail,
          subject,
          html: htmlContent,
          tags: [
            { name: 'type', value: 'admin-notification' },
            { name: 'attending', value: rsvpData.attending.toString() }
          ]
        })

        if (result.error) {
          devError('Admin email send error', result.error)
          results.push({
            success: false,
            error: result.error.message
          })
        } else {
          devLog('Admin email sent successfully', {
            messageId: result.data?.id,
            to: adminEmail
          })
          results.push({
            success: true,
            messageId: result.data?.id
          })
        }
      } catch (error) {
        devError('Admin email service error', error)
        results.push({
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        })
      }
    }

    return results
  }
}
