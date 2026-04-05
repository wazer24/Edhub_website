const mongoose = require('mongoose');

/**
 * Connects to MongoDB using MONGODB_URI from environment.
 * Set MONGODB_URI=memory (development only) to use an embedded DB when you have no local MongoDB.
 * Exits the process on failure so the app does not run insecurely without a DB.
 */
async function connectDB() {
  let uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('MONGODB_URI is not defined in environment variables.');
    process.exit(1);
  }

  if (uri === 'memory') {
    if (process.env.NODE_ENV === 'production') {
      console.error('MONGODB_URI=memory is not allowed in production.');
      process.exit(1);
    }
    let MongoMemoryServer;
    try {
      ({ MongoMemoryServer } = require('mongodb-memory-server'));
    } catch {
      console.error(
        'MONGODB_URI=memory requires mongodb-memory-server. Run npm install in backend/ (include devDependencies).'
      );
      process.exit(1);
    }
    const memoryServer = await MongoMemoryServer.create();
    global.__educationHubMongoMemory = memoryServer;
    uri = memoryServer.getUri();
    console.warn('Using in-memory MongoDB — data is lost when the server stops.');
  }

  try {
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
}

module.exports = connectDB;
