const { google } = require('googleapis');
const fs = require('fs');

// Create OAuth2 client
const oAuth2Client = new google.auth.OAuth2(
    '423594124873-hujaku3ubk4t9ac8ksgjpbu6g0lvvqbv.apps.googleusercontent.com',
    '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',
    'http://localhost:3000/oauth2callback'
);

// Generate the authorization URL
const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/gmail.send']
});

console.log('Authorize this app by visiting the following URL:');
console.log(authUrl);

// Capture the authorization code from the callback URL
const authCode = 'https://accounts.google.com/o/oauth2/auth';

// Exchange the authorization code for refresh and access tokens
oAuth2Client.getToken(authCode, (err, tokens) => {
    if (err) {
        console.error('Error retrieving access token:', err);
        return;
    }

    const refreshToken = tokens.refresh_token;
    console.log('Refresh Token:', refreshToken);

    // Save the refresh token to a file
    fs.writeFileSync('refreshToken.json', JSON.stringify(tokens));
});
