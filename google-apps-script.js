/**
 * Google Apps Script Code
 * 
 * Instructions:
 * 1. Go to https://script.google.com/
 * 2. Click "New Project"
 * 3. Paste this code
 * 4. The Sheet ID is already configured: 1YHVmsyH-XeKAZbSgwOSUeyU2bOu2s6DmRMtljQ9l0s4
 * 5. Click "Deploy" > "New deployment"
 * 6. Select type: "Web app"
 * 7. Execute as: "Me"
 * 8. Who has access: "Anyone"
 * 9. Click "Deploy"
 * 10. Copy the Web App URL and add it to your .env.local file as GOOGLE_SCRIPT_URL
 * 
 * Sheet URL: https://docs.google.com/spreadsheets/d/1YHVmsyH-XeKAZbSgwOSUeyU2bOu2s6DmRMtljQ9l0s4/edit
 */

function doPost(e) {
  try {
    // Get the active spreadsheet
    const SHEET_ID = '1YHVmsyH-XeKAZbSgwOSUeyU2bOu2s6DmRMtljQ9l0s4';
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    
    // Parse the JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Extract values
    const name = data.name || '';
    const date = data.date || '';
    const time = data.time || '';
    const phone = data.phone || '';
    
    // Append data to the sheet
    // Columns: NAME (A), DATE (B), TIME (C), PHONE NO (D)
    sheet.appendRow([name, date, time, phone]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function (optional - for testing)
function test() {
  const testData = {
    name: 'Test User',
    date: '2024-01-01',
    time: '10:00',
    phone: '1234567890'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}

