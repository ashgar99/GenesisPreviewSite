import { google } from 'googleapis';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Parse allowed origins from environment variable
const getAllowedOrigins = () => {
  const origins = process.env.ALLOWED_ORIGINS || 'https://genesisu.co';
  return origins.split(',').map(o => o.trim());
};

// Check if origin is allowed
const isOriginAllowed = (origin) => {
  if (!origin) return false;
  return getAllowedOrigins().some(allowed => origin === allowed);
};

// Email template
const getEmailHtml = () => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Genesis — We've received your interest</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1a1d21; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
  <div style="margin-bottom: 32px;">
    <h1 style="font-family: Georgia, serif; font-size: 24px; font-weight: 500; margin: 0 0 24px 0; color: #1a1d21;">Genesis</h1>
  </div>

  <p style="margin: 0 0 16px 0;">Thanks for registering your interest in Genesis.</p>

  <p style="margin: 0 0 16px 0;">We've added you to our early access list. Here's what happens next:</p>

  <ol style="margin: 0 0 24px 0; padding-left: 24px;">
    <li style="margin-bottom: 8px;">We'll review your submission within 48 hours</li>
    <li style="margin-bottom: 8px;">If Genesis is a fit, we'll reach out to schedule a brief intro call</li>
    <li style="margin-bottom: 8px;">Early registrants get priority access to our founding cohort</li>
  </ol>

  <p style="margin: 0 0 24px 0; padding: 16px; background-color: #f8f7f4; border-radius: 8px; border-left: 3px solid #4a7c7c;">
    Genesis helps marketing teams distinguish designed success from coincidence — so you can double down on what actually works.
  </p>

  <p style="margin: 0 0 24px 0;">Questions? Reply to this email.</p>

  <div style="border-top: 1px solid #eeece7; padding-top: 24px; margin-top: 32px; color: #9a968f; font-size: 14px;">
    <p style="margin: 0;">— The Genesis Team<br>
    <a href="https://genesisu.co" style="color: #4a7c7c; text-decoration: none;">genesisu.co</a></p>
  </div>
</body>
</html>
`;

export default async function handler(req, res) {
  const origin = req.headers.origin;

  // Set CORS headers
  if (isOriginAllowed(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, source, utmSource, utmMedium, utmCampaign } = req.body;

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  let sheetSuccess = false;
  let emailSuccess = false;

  try {
    // 1. Append to Google Sheet
    const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: 'Sheet1!A:G',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          email,
          new Date().toISOString(),
          source || 'direct',
          utmSource || '',
          utmMedium || '',
          utmCampaign || '',
          'pending'
        ]]
      }
    });

    sheetSuccess = true;

  } catch (sheetError) {
    console.error('Google Sheets error:', sheetError.message);
    // Continue to try sending email even if sheets fails
  }

  try {
    // 2. Send confirmation email
    await resend.emails.send({
      from: process.env.EMAIL_FROM || 'Genesis <hello@genesisu.co>',
      to: email,
      subject: "Genesis — We've received your interest",
      html: getEmailHtml(),
    });

    emailSuccess = true;

  } catch (emailError) {
    console.error('Resend error:', emailError.message);
  }

  // Return appropriate response
  if (sheetSuccess && emailSuccess) {
    return res.status(200).json({
      success: true,
      message: 'Registration complete'
    });
  } else if (sheetSuccess) {
    // Sheet worked but email failed - still consider it a success for the user
    return res.status(200).json({
      success: true,
      message: 'Registration complete',
      warning: 'Confirmation email may be delayed'
    });
  } else if (emailSuccess) {
    // Email worked but sheet failed - log this for manual follow-up
    console.error('Sheet failed but email sent for:', email);
    return res.status(200).json({
      success: true,
      message: 'Registration complete'
    });
  } else {
    // Both failed
    return res.status(500).json({
      success: false,
      error: 'Registration failed. Please try again.'
    });
  }
}
