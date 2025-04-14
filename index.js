const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Test Render App</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
          h1 { color: #0066cc; }
          .container { max-width: 800px; margin: 0 auto; }
          .card { border: 1px solid #ddd; border-radius: 8px; padding: 20px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Test Render App</h1>
          <div class="card">
            <p>This is a simple test application deployed on Render.</p>
            <p>Current server time: ${new Date().toLocaleString()}</p>
            <p>Environment: ${process.env.NODE_ENV || 'development'}</p>
          </div>
          <div class="card">
            <h2>Server Information</h2>
            <ul>
              <li>Node.js Version: ${process.version}</li>
              <li>Platform: ${process.platform}</li>
              <li>Port: ${port}</li>
            </ul>
          </div>
        </div>
      </body>
    </html>
  `);
});

// Add a health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Add an environment variables endpoint (excluding sensitive data)
app.get('/env', (req, res) => {
  res.json({
    node_env: process.env.NODE_ENV || 'development',
    port: port,
    node_version: process.version,
    platform: process.platform
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Test app listening at http://0.0.0.0:${port}`);
});
