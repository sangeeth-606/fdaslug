const express = require('express');
const { Client } = require('pg');
const app = express();
const port = 5000;

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'testdb',
  port: process.env.DB_PORT || 5432,
};

let dbClient = null;

// Try to connect with retries until Postgres is ready
async function connectWithRetry(retries = 10, delayMs = 3000) {
  for (let i = 1; i <= retries; i++) {
    try {
      dbClient = new Client(dbConfig);
      await dbClient.connect();
      console.log('Connected to Postgres');
      return;
    } catch (err) {
      console.error(`Failed to connect to Postgres (attempt ${i}/${retries}):`, err.message || err);
      if (i < retries) {
        console.log(`Waiting ${delayMs}ms before retrying...`);
        // eslint-disable-next-line no-await-in-loop
        await new Promise((r) => setTimeout(r, delayMs));
      }
    }
  }
  console.error('Exceeded max retries. Postgres is not available.');
}

// Start initial connection attempts (don't block server start)
connectWithRetry(15, 2000);

app.get('/api', async (req, res) => {
  try {
    if (!dbClient) {
      return res.status(503).send('Database not ready');
    }
    const result = await dbClient.query('SELECT NOW() AS time');
    res.send(`Hello from Express + Postgres! Server time: ${result.rows[0].time}`);
  } catch (err) {
    console.error('DB query error:', err);
    res.status(500).send('Database error');
  }
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
