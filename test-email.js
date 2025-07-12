// Test script for email functionality
// Run with: node test-email.js

import { Resend } from 'resend'

// Replace with your actual Resend API key for testing
const RESEND_API_KEY = 'your_resend_api_key_here'

// Replace with your verified domain email
const FROM_EMAIL = 'hello@example.com'
const TEST_EMAIL = 'test@example.com'

async function testEmail() {
  const resend = new Resend(RESEND_API_KEY)
  
  console.log('Sending test email...')
  
  try {
    const result = await resend.emails.send({
      from: `Ashlyn & Royal <${FROM_EMAIL}>`,
      to: TEST_EMAIL,
      subject: '🎉 Test: We\'re excited to celebrate with you!',
      html: `
        <h1>Test Email</h1>
        <p>This is a test of the wedding RSVP email system.</p>
        <p>If you receive this, the email integration is working!</p>
      `
    })
    
    console.log('Email sent successfully!')
    console.log('Message ID:', result.data?.id)
  } catch (error) {
    console.error('Failed to send email:', error)
  }
}

testEmail()