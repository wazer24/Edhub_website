const { google } = require('googleapis');

/**
 * Builds a JWT client from env vars. Private keys in .env often escape newlines as \\n.
 */
function getSheetsClient() {
  const rawKey = process.env.GOOGLE_PRIVATE_KEY || '';
  const privateKey = rawKey.replace(/\\n/g, '\n');

  if (!process.env.GOOGLE_CLIENT_EMAIL || !privateKey || !process.env.GOOGLE_SHEET_ID) {
    throw new Error(
      'Google Sheets is not configured. Set GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, and GOOGLE_SHEET_ID.'
    );
  }

  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return google.sheets({ version: 'v4', auth });
}

/**
 * Appends one lead row to the configured spreadsheet.
 * @param {Object} leadData - Name, Phone, Email, Class, Target Exam, Message, Date
 */
async function appendLeadToSheet(leadData) {
  if (process.env.GOOGLE_SHEETS_ENABLED === 'false') {
    console.warn('[googleSheets] append skipped (GOOGLE_SHEETS_ENABLED=false)');
    return;
  }

  const sheets = getSheetsClient();
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  const range = process.env.GOOGLE_SHEET_RANGE || 'Sheet1!A:G';

  const rowDate =
    leadData.date instanceof Date
      ? leadData.date.toISOString()
      : leadData.date || new Date().toISOString();

  const values = [
    [
      leadData.studentName ?? '',
      leadData.phone ?? '',
      leadData.email ?? '',
      leadData.classLevel ?? '',
      leadData.targetExam ?? '',
      leadData.message ?? '',
      rowDate,
    ],
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody: { values },
  });
}

module.exports = { appendLeadToSheet, getSheetsClient };
