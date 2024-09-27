const WebSocket = require('ws');
const ws = new WebSocket('ws://localhost:3000');

// When the WebSocket connection opens
ws.onopen = () => {
  console.log('Connected to WebSocket server');
  
  // Send a message to the server
  ws.send('Hello from client');
};

// When a message is received from the server
ws.onmessage = (event) => {
  console.log('Message from server:', event.data);
};

// When the connection is closed
ws.onclose = () => {
  console.log('WebSocket connection closed');
};



// Procedure :
// Open Brownser Console and paste the code
// run the server first and then client later