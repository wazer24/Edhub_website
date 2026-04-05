/**
 * One-off: in-memory Mongo + real Google Sheets from .env, POST a test enquiry.
 * Run: node scripts/test-enquiry-sheets.js
 */
require('dotenv').config();

const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

const TEST_PORT = process.env.TEST_ENQUIRY_PORT || '5066';

async function main() {
  const mongod = await MongoMemoryServer.create();
  process.env.MONGODB_URI = mongod.getUri();
  process.env.PORT = TEST_PORT;

  const { start } = require('../server');
  let server;
  try {
    server = await start();
  } catch (e) {
    await mongod.stop();
    throw e;
  }

  const base = `http://127.0.0.1:${TEST_PORT}`;
  try {
    const res = await fetch(`${base}/api/v1/enquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        studentName: 'Sheet Test (automated)',
        phone: '+919999000099',
        email: 'sheet-test@example.com',
        classLevel: '11th',
        targetExam: 'JEE',
        message: 'Automated enquiry — check row in Google Sheet',
      }),
    });
    const text = await res.text();
    console.log('HTTP', res.status, text.slice(0, 500));
    if (!res.ok) process.exitCode = 1;
    else console.log('OK — open your Sheet; a new row should appear under the headers.');
  } finally {
    await mongoose.connection.close().catch(() => {});
    await new Promise((r) => server.close(r));
    await mongod.stop();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
