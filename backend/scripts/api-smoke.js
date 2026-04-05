/**
 * Spins up in-memory MongoDB, starts the API, and exercises key routes.
 * Run: npm run test:api
 */
const { MongoMemoryServer } = require('mongodb-memory-server');

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

async function run() {
  const mongod = await MongoMemoryServer.create();
  process.env.MONGODB_URI = mongod.getUri();
  process.env.GOOGLE_SHEETS_ENABLED = 'false';
  process.env.PORT = process.env.SMOKE_PORT || '5055';

  const mongoose = require('mongoose');
  const { start } = require('../server');

  let server;
  try {
    server = await start();
  } catch (e) {
    await mongod.stop();
    throw e;
  }

  const base = `http://127.0.0.1:${process.env.PORT}`;

  try {
    let r = await fetch(`${base}/health`);
    assert(r.ok, `GET /health expected 200, got ${r.status}`);
    const health = await r.json();
    assert(health.success === true, 'health.success');

    r = await fetch(`${base}/api/v1/programmes`);
    assert(r.ok, `GET /api/v1/programmes`);
    const programmes = await r.json();
    assert(programmes.success && Array.isArray(programmes.data), 'programmes payload');

    r = await fetch(`${base}/api/v1/enquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        studentName: 'Smoke Test',
        phone: '+919999000001',
        email: 'smoke@example.com',
        classLevel: '11th',
        targetExam: 'JEE',
        message: 'automated smoke test',
      }),
    });
    const enquiryBodyText = await r.text();
    assert(r.status === 201, `POST /api/v1/enquiries expected 201, got ${r.status}: ${enquiryBodyText}`);
    const enquiry = JSON.parse(enquiryBodyText);
    assert(enquiry.success && enquiry.data.studentName === 'Smoke Test', 'enquiry response');

    r = await fetch(`${base}/api/v1/enquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ studentName: '', phone: '1' }),
    });
    assert(r.status === 400, 'validation should reject empty name');

    console.log('All API smoke checks passed.');
  } finally {
    await mongoose.connection.close().catch(() => {});
    await new Promise((resolve) => server.close(resolve));
    await mongod.stop();
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
