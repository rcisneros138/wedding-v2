# Wedding RSVP Email System

## Overview
The wedding website includes an email notification system that sends confirmation emails to guests after they RSVP and allows for sending update emails to all confirmed guests.

## Features
- **Automatic Confirmation Emails**: Sent immediately after successful RSVP submission
- **Themed Email Templates**: Beautiful HTML emails matching the wedding design
- **Email Tracking**: Database tracking of all sent emails
- **Bulk Update Capability**: Send updates to all confirmed guests
- **Error Handling**: Graceful handling of email failures without blocking RSVP submission

## Setup

### 1. Sign up for Resend
1. Go to [Resend.com](https://resend.com) and create an account
2. Verify your sending domain
3. Get your API key

### 2. Configure Environment Variables

#### For Local Development
Create or update `.dev.vars`:
```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
```

#### For Production
Add the secret using Wrangler:
```bash
npx wrangler secret put RESEND_API_KEY
```

### 3. Update Email Settings
Edit `/app/services/email/email-service.ts`:
```typescript
this.fromEmail = 'noreply@your-domain.com' // Update with your verified domain
this.fromName = 'Ashlyn & Royal' // Update with your names
```

### 4. Deploy Database Changes
Run the email tracking migration:
```bash
# Local
npm run db:migrate:local

# Production
npm run db:migrate:remote
```

## Email Templates

### Confirmation Emails
- **Attending**: Warm welcome message with wedding details
- **Not Attending**: Understanding message with appreciation

### Update Emails
- Simple template for sending wedding updates
- Maintains consistent branding

## Sending Bulk Updates

The system includes an admin endpoint for sending updates to all confirmed guests:

```bash
POST /api/admin/send-update
{
  "subject": "Wedding Update: Transportation Info",
  "content": "Dear guests,\n\nWe're excited to share...",
  "testMode": true // Set to false for production
}
```

**Note**: This endpoint should be protected with authentication in production.

## Email Tracking

All emails are tracked in the database:
- `rsvps` table: Tracks confirmation email status
- `email_logs` table: Detailed log of all email attempts

## Troubleshooting

### Email not sending?
1. Check that `RESEND_API_KEY` is configured
2. Verify your domain in Resend dashboard
3. Check the application logs for errors
4. Review the `email_logs` table for failure details

### Rate Limits
- Resend free tier: 3,000 emails/month
- The bulk email function includes delays to respect rate limits

## Testing

Use the provided test script:
```bash
# Update test-email.js with your API key and email
node test-email.js
```

## Future Enhancements
When upgrading to Cloudflare Workers Paid plan:
- Implement Cloudflare Queues for better reliability
- Add retry logic with exponential backoff
- Enable true async processing
- Add email scheduling capabilities