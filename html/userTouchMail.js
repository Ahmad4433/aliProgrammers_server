const userTouchMail = (userName)=>{
    const template = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Contacting AliProgrammers</title>
        <style>
            /* Add your custom styles here */
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 20px;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #fff;
                padding: 40px;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            h1 {
                color: #333;
            }
            p {
                color: #666;
                line-height: 1.6;
            }
            .signature {
                margin-top: 20px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Thank You for Contacting AliProgrammers</h1>
            <p>Hello ${userName},</p>
            <p>We received your message and we greatly appreciate you taking the time to reach out to us.</p>
            <p>Our team at AliProgrammers will review your inquiry and get back to you as soon as possible.</p>
            <p>If you have any urgent matters, feel free to contact us directly via email at <a href="mailto:contact@aliprogrammers.com">contact@aliprogrammers.com</a>.</p>
            <p>Thank you again for choosing AliProgrammers. We look forward to assisting you!</p>
            <div class="signature">
                <p>Best regards,<br>AliProgrammers Team</p>
            </div>
        </div>
    </body>
    </html>`

    return template
}
module.exports = userTouchMail