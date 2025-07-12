import { EmailData } from '../email-service'

export const confirmationNotAttendingTemplate = (data: EmailData): string => {
  const weddingDate = 'January 24, 2026'
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RSVP Confirmation - Ashlyn & Royal's Wedding</title>
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
      text-align: center;
    }
    
    .details-box p {
      color: #8C3112;
      font-size: 18px;
      margin: 10px 0;
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
    
    .heart {
      color: #FEA88A;
      font-size: 24px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You</h1>
    </div>
    
    <div class="content">
      <div class="greeting">Dear ${data.guestName},</div>
      
      <div class="message">
        Thank you so much for letting us know. While we'll miss having you with us on our special day, we completely understand that not everyone can make the journey to Mexico. Your love and support mean the world to us, regardless of the distance.
      </div>
      
      <div class="decorative-line"></div>
      
      <div class="details-box">
        <p class="heart">♥</p>
        <p>We'll be thinking of you on</p>
        <p style="font-weight: bold; font-size: 22px;">${weddingDate}</p>
      </div>
      
      <div class="message">
        We hope to celebrate with you in another way soon. Perhaps when we return from our honeymoon, we can share stories and photos from our special day over dinner!
      </div>
      
      <div class="message">
        If your plans change and you find that you're able to join us after all, please don't hesitate to reach out. We'd be delighted to have you there!
      </div>
      
      <div class="decorative-line"></div>
      
      <div class="message" style="text-align: center; font-style: italic; color: #666;">
        Your presence in our lives is a gift, and we're grateful for your friendship and love.
      </div>
    </div>
    
    <div class="footer">
      <p>With love and gratitude,</p>
      <p style="font-family: 'Pacifico', cursive; font-size: 24px; margin: 10px 0;">Ashlyn & Royal</p>
      <p>${weddingDate} • Playa del Carmen, Mexico</p>
    </div>
  </div>
</body>
</html>
`
}