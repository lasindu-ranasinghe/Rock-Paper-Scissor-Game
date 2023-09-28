import io from "socket.io-client";

const socket = io("http://localhost:3000");

// Optional: Define custom events or functions related to WebSocket communication
// For example:
// socket.on("messageReceived", (data) => {
//   // Handle incoming messages
// });

export default socket;
