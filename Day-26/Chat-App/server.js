// Import the required modules
import WebSocket, { WebSocketServer } from 'ws';

// Create a new WebSocket server on port 8080
const wss = new WebSocketServer({ port: 8080 });

const clients = new Set();

// Function to broadcast messages to all clients
function broadcastMessage(message) {
    if (message) {
        console.log("Broadcasting message to clients: ", message);
        clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    } else {
        console.log("No message to broadcast");
    }
}

// Listen for connection events
wss.on('connection', (ws) => {
    console.log('Client Connected');
    console.log('Clients before adding:', clients);
    clients.add(ws);
    console.log('Clients after adding:', Array.from(clients).map(c => c._socket.remoteAddress)); // Log client addresses or similar
});

    // Listen for messages from clients
    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
        broadcastMessage(message); 
    });

    ws.on('close', () => {
        console.log('Client disconnected');
        clients.delete(ws);
    });

    // Listen for errors
    ws.on('error', (error) => {
        console.error(`WebSocket error: ${error}`);
    });
});

console.log('WebSocket server is running on ws://localhost:8080');
