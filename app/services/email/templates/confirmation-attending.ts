import { EmailData } from '../email-service'

export const confirmationAttendingTemplate = (data: EmailData): string => {
  const weddingDate = 'January 24, 2026'
  const weddingLocation = 'Excellence Riviera Cancun, Mexico'
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RSVP Confirmation - Amanda & Ray's Wedding</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
    
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
      background-color: #D9DDCD;
      padding: 40px 20px;
      text-align: center;
      position: relative;
    }
    
    .header h1 {
      font-family: 'Pacifico', cursive;
      color: #8C3112;
      font-size: 36px;
      margin: 0;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
    }
    
    .content {
      padding: 40px 30px;
      background-color: #ffffff;
    }
    
    .greeting {
      color: #8C3112;
      font-size: 24px;
      margin-bottom: 20px;
      font-weight: bold;
    }
    
    .message {
      color: #333;
      font-size: 16px;
      line-height: 1.6;
      margin-bottom: 20px;
    }
    
    .details-box {
      background-color: #D9DDCD;
      border-radius: 10px;
      padding: 25px;
      margin: 30px 0;
      box-shadow: 4px 4px 0 #8C3112;
    }
    
    .details-box h2 {
      color: #8C3112;
      font-size: 20px;
      margin-top: 0;
      margin-bottom: 15px;
    }
    
    .detail-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      color: #333;
    }
    
    .detail-label {
      font-weight: bold;
    }
    
    .cta-button {
      display: inline-block;
      background-color: #C7ACBE;
      color: #ffffff;
      padding: 15px 30px;
      text-decoration: none;
      border-radius: 30px;
      font-weight: bold;
      font-size: 16px;
      margin: 20px 0;
      box-shadow: 4px 4px 0 #70270E;
      transition: all 0.2s;
    }
    
    .footer {
      background-color: #8C3112;
      color: #ffffff;
      padding: 30px;
      text-align: center;
    }
    
    .footer p {
      margin: 5px 0;
      font-size: 14px;
    }
    
    .decorative-line {
      height: 3px;
      background: linear-gradient(90deg, transparent, #FEA88A 50%, transparent);
      margin: 30px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>See You In Mexico!</h1>
    </div>
    
    <div class="content">
      <div class="greeting">¡Hola ${data.guestName}!</div>
      
      <div class="message">
        We're absolutely thrilled that you'll be joining us for our special day! Your presence means the world to us, and we can't wait to celebrate our love with you in beautiful Riviera Cancun.
      </div>
      
      <div class="decorative-line"></div>
      
      <div class="details-box">
        <h2>Your RSVP Details</h2>
        <div class="detail-row">
          <span class="detail-label">Guest Name:</span>
          <span>${data.guestName}</span>
        </div>
        ${data.plusOneName ? `
        <div class="detail-row">
          <span class="detail-label">Plus One:</span>
          <span>${data.plusOneName}</span>
        </div>
        ` : ''}
        ${data.songRequests ? `
        <div class="detail-row">
          <span class="detail-label">Song Requests:</span>
          <span>${data.songRequests}</span>
        </div>
        ` : ''}
        ${data.bookedRoom ? `
        <div class="detail-row">
          <span class="detail-label">Hotel Room:</span>
          <span>Booked ✓</span>
        </div>
        ` : ''}
      </div>
      
      <div class="details-box">
        <h2>Wedding Details</h2>
        <div class="detail-row">
          <span class="detail-label">Date:</span>
          <span>${weddingDate}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Time:</span>
          <span>4:30 PM</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Location:</span>
          <span>${weddingLocation}</span>
        </div>
      </div>
      
      <div class="message">
        <strong>What's Next?</strong><br>
        Keep an eye on your inbox for important updates about travel, accommodations, and wedding weekend activities. We'll be sharing more details as we get closer to the big day!
      </div>
      
      <div class="details-box" style="background-color: #FEA88A; background-color: rgba(254, 168, 138, 0.2); border: 2px solid #FEA88A;">
        <h2 style="color: #8C3112; text-align: center; margin-bottom: 20px;">⚠️ Important Booking Instructions</h2>
        <p style="text-align: center; color: #8C3112; font-weight: bold; margin-bottom: 20px;">
          Please follow these steps carefully to ensure you book the correct hotel with our group discount
        </p>
        
        <div style="margin-bottom: 20px;">
          <div style="display: flex; align-items: start; margin-bottom: 15px;">
            <div style="background-color: #8C3112; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; flex-shrink: 0;">1</div>
            <div>
              <p style="margin: 0 0 5px 0; color: #8C3112; font-weight: bold;">Select the CORRECT hotel:</p>
              <p style="margin: 0; color: #FEA88A; font-size: 18px; font-weight: bold;">EXCELLENCE RIVIERA CANCUN</p>
              <p style="margin: 0; color: #70270E; font-style: italic; font-size: 14px;">(NOT Excellence Playa Mujeres)</p>
            </div>
          </div>
          
          <div style="display: flex; align-items: start; margin-bottom: 15px;">
            <div style="background-color: #8C3112; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; flex-shrink: 0;">2</div>
            <div>
              <p style="margin: 0 0 5px 0; color: #8C3112; font-weight: bold;">Verify the promo code is applied:</p>
              <div style="display: inline-block; background-color: #D9DDCD; border: 2px solid #8C3112; padding: 8px 15px; border-radius: 5px; margin: 5px 0;">
                <code style="font-family: monospace; color: #FEA88A; font-size: 18px; font-weight: bold;">CLWJAN26XRC</code>
              </div>
              <p style="margin: 5px 0 0 0; color: #70270E; font-size: 14px;">This code gives you our special group rate!</p>
            </div>
          </div>
          
          <div style="display: flex; align-items: start;">
            <div style="background-color: #8C3112; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; flex-shrink: 0;">3</div>
            <div>
              <p style="margin: 0 0 5px 0; color: #8C3112; font-weight: bold;">Check your dates:</p>
              <p style="margin: 0 0 5px 0; color: #8C3112;">The wedding day is January 24, 2026 (we will be there from the 22nd to the 26th)</p>
              <p style="margin: 0; color: #70270E; font-size: 14px;">The wedding is on January 24, 2026, but you're more than welcome to arrive as early or stay as long as you'd like. Whether you're planning a long weekend, a full vacation, or something in between, we'd love for you to enjoy the area at your own pace. Come early, linger late — whatever works best for you!</p>
            </div>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 25px;">
          <a href="https://booking.excellenceresorts.com/en/bookcore/availability/rooms/excellencerivera?cp=CLWJAN26XRC" class="cta-button" style="background-color: #FEA88A; box-shadow: 4px 4px 0 #8C3112;">Book Your Stay</a>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 20px;">
        <a href="https://rayandamanda.wedding" class="cta-button">Visit Our Wedding Website</a>
      </div>
      
      <div class="decorative-line"></div>
      
      <div class="message" style="text-align: center; font-style: italic; color: #666;">
        If you need to update your RSVP or have any questions, please don't hesitate to reach out to us.
      </div>
    </div>
    
    <div class="footer">
      <p>With love,</p>
      <p style="font-family: 'Pacifico', cursive; font-size: 24px; margin: 10px 0;">Amanda & Ray</p>
      <p>${weddingDate} • ${weddingLocation}</p>
    </div>
  </div>
</body>
</html>
`
}