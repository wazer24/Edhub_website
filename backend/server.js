require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

const publicRoutes = require('./routes/publicRoutes');
const submissionRoutes = require('./routes/submissionRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Core middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check (outside versioned API)
app.get('/health', (req, res) => {
  res.json({ success: true, service: 'education-hub-api', uptime: process.uptime() });
});

// API v1 — public routes share the same /api/v1 prefix
app.use('/api/v1', publicRoutes);
app.use('/api/v1', submissionRoutes);
app.use('/api/v1/admin', adminRoutes);

// 404 for unknown routes
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// Central error handler (async errors and Mongoose errors)
app.use(errorHandler);

async function start() {
  await connectDB();
  return new Promise((resolve, reject) => {
    try {
      const server = app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
        resolve(server);
      });
      server.on('error', reject);
    } catch (e) {
      reject(e);
    }
  });
}

if (require.main === module) {
  start().catch((err) => {
    console.error('Failed to start server:', err);
    process.exit(1);
  });
}

module.exports = { app, start };
