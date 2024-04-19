const express = require("express");
const cors = require("cors");
const http = require("http");
const socketIO = require("socket.io");
const connectDB = require("./Config/database");

// necessary routes
const userRoutes = require("./Routes/userRoutes");
const gameRoomRoutes = require("./Routes/gameRoomRoutes");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const allowedOrigins = ["http://localhost:3000", "http://localhost:8000"];

// middleware for the app
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: allowedOrigins,
  })
);
app.use("/api/users", userRoutes);
app.use("/api/game", gameRoomRoutes);

io.on("connection", (socket) => {
  console.log("A user connected");

  // When a client joins a room
  socket.on("joinRoom", (room) => {
    socket.join(room);
    console.log(`User joined room ${room}`);
  });

  // When a client sends a message to a room
  socket.on("sendMessage", (data) => {
    io.to(data.room).emit("message", data.message);
    console.log(`Message sent to room ${data.room}: ${data.message}`);
  });

  // When a client disconnects
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

console.log(`BACKEND SERVER STARTED`);

const port = process.env.PORT;

connectDB().then(() => {
  app.listen(port, () => {
    console.log("listening for requests");
  });
});

module.exports = app;
