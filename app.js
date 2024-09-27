// Import Express and WebSocket modules
const express = require('express');    // Handles HTTP routes
const WebSocket = require('ws');       // Handles WebSocket connections
const http = require('http');          // Native Node.js HTTP module to create an HTTP server

// Create an Express app
const app = express();

// Create an HTTP server using the Express app
// This allows both HTTP requests and WebSocket connections on the same server
const server = http.createServer(app);

// Create a WebSocket server, using the HTTP server
const wss = new WebSocket.Server({ server });

// Listen for WebSocket connections
wss.on('connection', (ws) => {
  console.log('A client connected via WebSocket');

  // Listen for messages from the client
  ws.on('message', (message) => {
    console.log('Received message from client:', message.toString());

    // Respond back to the client through WebSocket
    ws.send('Server received: ' + message.toString());
  });

  // Handle client disconnect
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// HTTP Route for normal GET requests
// This route handles normal HTTP traffic for browsers
app.get('/', (req, res) => {
  res.send('Hello, this is an HTTP server that supports WebSocket connections!');
});

// Start the server on port 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
