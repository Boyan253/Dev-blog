const nodemailer = require('nodemailer');
const { google } = require('googleapis');

async function sendEmail() {
  // Create a transporter using the SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'naboyantesta@gmail.com',
      clientId: '423594124873-hujaku3ubk4t9ac8ksgjpbu6g0lvvqbv.apps.googleusercontent.com',
      clientSecret: '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',
      refreshToken: 'your_refresh_token',
      accessToken: 'https://accounts.google.com/o/oauth2/auth',
    },
  });

  // Define the email options
  const mailOptions = {
    from: 'naboyantesta@gmail.com',
    to: 'bobo.boyaniliev@gmail.com',
    subject: 'Hello from ChatGPT',
    text: 'This is an automated email sent using JavaScript!',
  };

  try {
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
  } catch (error) {
    console.log('Error occurred while sending the email:', error);
  }
}

// Call the function to send the email
sendEmail();
