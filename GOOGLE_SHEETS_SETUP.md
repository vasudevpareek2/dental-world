# Google Sheets Integration Setup

This guide will help you set up the Google Sheets integration for the appointment booking form.

## Step 1: Set Up Google Apps Script

1. Go to [Google Apps Script](https://script.google.com/)
2. Click **"New Project"**
3. Delete the default code and paste the code from `google-apps-script.js` file
4. The Sheet ID is already configured: `1YHVmsyH-XeKAZbSgwOSUeyU2bOu2s6DmRMtljQ9l0s4`
5. Click **"Save"** (Ctrl+S or Cmd+S)
6. Give your project a name (e.g., "Dental Clinic Appointments")

## Step 2: Deploy as Web App

1. Click **"Deploy"** > **"New deployment"**
2. Click the gear icon (⚙️) next to "Select type"
3. Choose **"Web app"**
4. Configure the settings:
   - **Description**: "Dental Clinic Appointment Form Handler"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
5. Click **"Deploy"**
6. **Copy the Web App URL** (it will look like: `https://script.google.com/macros/s/.../exec`)

## Step 3: Configure Environment Variable

1. Create a `.env.local` file in the root of your project (if it doesn't exist)
2. Add the following line:
   ```
   GOOGLE_SCRIPT_URL=your_web_app_url_here
   ```
   Replace `your_web_app_url_here` with the URL you copied in Step 2
3. Save the file

## Step 4: Restart Your Development Server

1. Stop your Next.js development server (Ctrl+C)
2. Start it again with `npm run dev`
3. The form should now submit to your Google Sheet!

## Testing

1. Click "Book Appointment" on your website
2. Fill out the form with test data
3. Submit the form
4. Check your Google Sheet - the data should appear in columns A (NAME), B (DATE), C (TIME), and D (PHONE NO)

## Troubleshooting

- **Data not appearing in sheet**: Make sure the Sheet ID in the script matches your sheet
- **CORS errors**: Ensure "Who has access" is set to "Anyone" in the deployment settings
- **403 Forbidden**: You may need to authorize the script the first time (click "Review Permissions")

## Sheet Structure

Your Google Sheet should have the following columns in row 1:
- Column A: NAME
- Column B: DATE
- Column C: TIME
- Column D: PHONE NO

The script will automatically append new rows with the submitted data.


