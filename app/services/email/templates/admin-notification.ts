interface AdminNotificationData {
  guestName: string
  email: string
  phone?: string
  attending: boolean
  plusOneName?: string
  songRequests?: string
  bookedRoom?: boolean
  submittedAt: string
  ipAddress?: string
}

export const adminNotificationTemplate = (data: AdminNotificationData): string => {
  const attendanceStatus = data.attending ? '✅ Attending' : '❌ Not Attending'
  const attendanceEmoji = data.attending ? '🎉' : '😢'
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New RSVP - ${data.guestName}</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Arial', sans-serif;
      background-color: #f5f5f5;
    }
    
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
    }
    
    .header {
      background-color: #8C3112;
      color: #ffffff;
      padding: 30px 20px;
      text-align: center;
    }
    
    .header h1 {
      margin: 0;
      font-size: 28px;
    }
    
    .status-badge {
      display: inline-block;
      padding: 8px 20px;
      margin: 10px 0;
      border-radius: 20px;
      font-weight: bold;
      ${data.attending 
        ? 'background-color: #4CAF50; color: white;' 
        : 'background-color: #f44336; color: white;'}
    }
    
    .content {
      padding: 30px;
    }
    
    .detail-section {
      background-color: #f8f8f8;
      border-radius: 8px;
      padding: 20px;
      margin: 20px 0;
    }
    
    .detail-row {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid #e0e0e0;
    }
    
    .detail-row:last-child {
      border-bottom: none;
    }
    
    .detail-label {
      font-weight: bold;
      color: #666;
    }
    
    .detail-value {
      color: #333;
      text-align: right;
      max-width: 60%;
    }
    
    .timestamp {
      text-align: center;
      color: #999;
      font-size: 14px;
      margin-top: 20px;
    }
    
    .quick-stats {
      background-color: #D9DDCD;
      padding: 20px;
      text-align: center;
      margin-top: 20px;
    }
    
    .stat {
      display: inline-block;
      margin: 0 15px;
    }
    
    .stat-number {
      font-size: 24px;
      font-weight: bold;
      color: #8C3112;
      display: block;
    }
    
    .stat-label {
      font-size: 14px;
      color: #666;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>${attendanceEmoji} New RSVP Received!</h1>
      <div class="status-badge">${attendanceStatus}</div>
    </div>
    
    <div class="content">
      <div class="detail-section">
        <h2 style="margin-top: 0; color: #8C3112;">Guest Information</h2>
        
        <div class="detail-row">
          <span class="detail-label">Name:</span>
          <span class="detail-value">${data.guestName}</span>
        </div>
        
        <div class="detail-row">
          <span class="detail-label">Email:</span>
          <span class="detail-value">${data.email}</span>
        </div>
        
        ${data.phone ? `
        <div class="detail-row">
          <span class="detail-label">Phone:</span>
          <span class="detail-value">${data.phone}</span>
        </div>
        ` : ''}
        
        ${data.attending && data.plusOneName ? `
        <div class="detail-row">
          <span class="detail-label">Plus One:</span>
          <span class="detail-value">${data.plusOneName}</span>
        </div>
        ` : ''}
        
        ${data.attending && data.songRequests ? `
        <div class="detail-row">
          <span class="detail-label">Song Requests:</span>
          <span class="detail-value">${data.songRequests}</span>
        </div>
        ` : ''}
        
        ${data.attending ? `
        <div class="detail-row">
          <span class="detail-label">Room Booked:</span>
          <span class="detail-value">${data.bookedRoom ? '✅ Yes' : '❌ Not Yet'}</span>
        </div>
        ` : ''}
      </div>
      
      ${data.attending ? `
      <div class="quick-stats">
        <p style="margin: 0 0 15px 0; font-weight: bold; color: #8C3112;">
          ${data.plusOneName ? '2 Guests Confirmed!' : '1 Guest Confirmed!'}
        </p>
        ${!data.bookedRoom ? `
        <p style="margin: 0; font-size: 14px; color: #666;">
          💡 Guest hasn't booked their room yet
        </p>
        ` : ''}
      </div>
      ` : `
      <div class="quick-stats">
        <p style="margin: 0; color: #666;">
          Guest won't be able to attend 😔
        </p>
      </div>
      `}
      
      <div class="timestamp">
        Submitted on ${data.submittedAt}
        ${data.ipAddress ? `<br><small>IP: ${data.ipAddress}</small>` : ''}
      </div>
    </div>
  </div>
</body>
</html>
`
}