# Google Sheets Form Integration Setup

This guide explains how to connect the Genesis contact form to Google Sheets with UTM tracking.

## Overview

Form submissions are sent to a Google Apps Script Web App, which writes data to a Google Sheet. This approach:
- Works with static site hosting (no server required)
- Captures UTM parameters automatically for attribution
- Tracks which CTA/page brought the user to the form
- Requires no backend infrastructure

## Data Captured

| Field | Source | Required |
|-------|--------|----------|
| Timestamp | Auto-captured | Yes |
| First Name | User input | Yes |
| Surname | User input | Yes |
| Email | User input | Yes |
| Company/Sector | User input | Yes |
| Concern | User dropdown | Yes |
| Interest | User dropdown | Yes |
| Notes | User input | No |
| Source | Auto from URL `?source=` | Yes |
| UTM Source | Auto from URL `?utm_source=` | No |
| UTM Medium | Auto from URL `?utm_medium=` | No |
| UTM Campaign | Auto from URL `?utm_campaign=` | No |
| Status | Default: "pending" | Yes |

## Setup Steps

### 1. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Genesis Contact Form Submissions"
4. In Row 1, add these headers (exactly as shown):

```
Timestamp | First Name | Surname | Email | Company/Sector | Concern | Interest | Notes | Source | UTM Source | UTM Medium | UTM Campaign | Status | Follow-up
```

### 2. Create the Google Apps Script

1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete any existing code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    // Append row with form data
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.firstName || '',
      data.surname || '',
      data.email || '',
      data.companySector || '',
      data.concern || '',
      data.interest || '',
      data.notes || '',
      data.source || 'direct',
      data.utmSource || '',
      data.utmMedium || '',
      data.utmCampaign || '',
      data.status || 'pending',
      '' // Follow-up column (filled manually)
    ]);

    // Optional: Send email notification
    // Uncomment and configure if you want email alerts
    /*
    MailApp.sendEmail({
      to: 'your-email@example.com',
      subject: 'New Genesis Contact Form Submission',
      body: `
        New submission received:

        Name: ${data.firstName} ${data.surname}
        Email: ${data.email}
        Company/Sector: ${data.companySector}
        Concern: ${data.concern}
        Interest: ${data.interest}
        Notes: ${data.notes}

        --- Attribution ---
        Source: ${data.source}
        UTM Source: ${data.utmSource}
        UTM Medium: ${data.utmMedium}
        UTM Campaign: ${data.utmCampaign}
      `
    });
    */

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle GET requests (for testing)
function doGet(e) {
  return ContentService
    .createTextOutput('Genesis Form Handler is running')
    .setMimeType(ContentService.MimeType.TEXT);
}
```

4. Click **Save** (Ctrl/Cmd + S)
5. Name the project "Genesis Form Handler"

### 3. Deploy the Web App

1. Click **Deploy > New deployment**
2. Click the gear icon and select **Web app**
3. Configure:
   - **Description**: "Genesis Contact Form Handler"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone" (required for form submissions)
4. Click **Deploy**
5. **Authorize** the app when prompted (click through the "unsafe" warning - this is your own script)
6. Copy the **Web app URL** - it looks like: `https://script.google.com/macros/s/XXXX/exec`

### 4. Add the URL to Your Environment

Create or update `.env.local` in your project root:

```env
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

For production (Vercel/Netlify), add this as an environment variable in your hosting dashboard.

## Source Tracking

The form automatically captures which CTA brought the user to the contact page:

| Source Value | Location |
|--------------|----------|
| `nav-cta` | Desktop navigation button |
| `mobile-nav-cta` | Mobile navigation button |
| `hero-cta` | Homepage hero |
| `footer-cta` | Homepage footer CTA |
| `platform-hero` | Platform page hero |
| `platform-footer-cta` | Platform page footer |
| `pricing-core` | Pricing - Core tier |
| `pricing-advanced` | Pricing - Advanced tier |
| `pricing-enterprise` | Pricing - Enterprise tier |
| `pricing-footer-cta` | Pricing page footer |
| `solutions-footer-cta` | Solutions page footer |
| `company-footer-cta` | Company page footer |
| `case-studies-footer-cta` | Case Studies page footer |
| `direct` | Direct navigation (no source param) |

### UTM Parameters

For campaigns, append UTM parameters to any link pointing to the contact page:

```
https://genesis.com/contact?source=linkedin-post&utm_source=linkedin&utm_medium=social&utm_campaign=launch-q1
```

## Testing

1. Start your dev server: `npm run dev`
2. Go to `/contact?source=test&utm_source=test&utm_medium=test&utm_campaign=test`
3. Fill out and submit the form
4. Check your Google Sheet for the new row with all tracking data

## Example Row

| Timestamp | First Name | Surname | Email | Company/Sector | Concern | Interest | Notes | Source | UTM Source | UTM Medium | UTM Campaign | Status | Follow-up |
|-----------|------------|---------|-------|----------------|---------|----------|-------|--------|------------|------------|--------------|--------|-----------|
| 2025-01-23T10:30:00Z | Jane | Smith | jane@acme.com | Acme / B2B SaaS | Proving ROI to leadership | The Genesis Profile | We post 3x/week but can't prove impact | hero-cta | linkedin | social | launch-q1 | pending | |

## Managing Leads

The "Status" and "Follow-up" columns are for your CRM workflow:

**Status options:**
- `pending` - New submission, not yet contacted
- `contacted` - Initial outreach sent
- `qualified` - Good fit, in discussion
- `converted` - Became a customer
- `not-qualified` - Not a good fit
- `no-response` - No reply after follow-ups

**Follow-up column:**
Use for dates, notes, or next actions.

## Troubleshooting

### Form submits but no data appears

- Verify the script URL is correct in your environment variables
- Check the Apps Script execution log: **Extensions > Apps Script > Executions**
- Ensure the sheet headers match exactly (14 columns)

### CORS errors

The form uses `mode: 'no-cors'` which means:
- You won't see response data in the browser
- The request still goes through
- Check the Google Sheet directly for success

### Script authorization issues

If you update the script, you may need to re-authorize:
1. Go to **Deploy > Manage deployments**
2. Click the pencil icon to edit
3. Create a new version
4. Click **Deploy**

## Security Considerations

- The Google Sheet URL is public but obscured (requires knowing the exact URL)
- Consider adding rate limiting via Apps Script if spam becomes an issue
- For sensitive data, consider a more robust backend solution
- The form data is stored in Google's infrastructure under your account

## Adding Email Notifications

Uncomment the `MailApp.sendEmail` section in the script and configure:

```javascript
MailApp.sendEmail({
  to: 'leads@yourcompany.com',
  subject: 'New Genesis Contact Form Submission',
  body: `...`
});
```

Then re-deploy the script.

## Data Export

From Google Sheets, you can:
- **File > Download** as CSV/Excel
- Connect to CRM tools via Zapier/Make
- Use Google Sheets API for automated sync
- Set up conditional formatting for status column
