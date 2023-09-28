const http = require("http");
const { Server } = require("socket.io");

const httpServer = http.createServer();
const PORT = 3001;
const HOST = "0.0.0.0"; // or use your IP address

const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:3000"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  //console.log("Client connected");
  socket.on("send-message", (messege, room) => {
    socket.broadcast.emit("received-messege", messege);
    console.log(messege);
  });
});

httpServer.listen(PORT, HOST, () => {
  console.log("Server running on port:", PORT);
});
