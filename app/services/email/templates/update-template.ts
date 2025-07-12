export const updateEmailTemplate = (content: string): string => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Wedding Update - Ashlyn & Royal</title>
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
    
    .message {
      color: #333;
      font-size: 16px;
      line-height: 1.6;
      margin-bottom: 20px;
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
      <h1>Wedding Update</h1>
    </div>
    
    <div class="content">
      <div class="message">
        ${content.replace(/\n/g, '<br>')}
      </div>
      
      <div class="decorative-line"></div>
      
      <div style="text-align: center;">
        <a href="https://ashlyn-royal-wedding.com" class="cta-button">Visit Wedding Website</a>
      </div>
    </div>
    
    <div class="footer">
      <p>With love,</p>
      <p style="font-family: 'Pacifico', cursive; font-size: 24px; margin: 10px 0;">Ashlyn & Royal</p>
      <p>January 24, 2026 • Playa del Carmen, Mexico</p>
    </div>
  </div>
</body>
</html>
`
}