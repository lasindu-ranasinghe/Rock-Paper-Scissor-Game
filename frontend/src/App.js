import React, { useState, useEffect } from "react";
import "./App.css";
import InputField from "./components/InputFields";
import Button from "./components/Button";
import OutputTextArea from "./components/OutputTextArea";
import io from "socket.io-client";

function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [output, setOutput] = useState("");
  const [room, setRoom] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  // Web Socket --------------------------------
  const socket = io("http://localhost:3001");

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
      setRoom(socket.id);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    socket.on("received-message", (message) => {
      setOutput(message);
    });

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, [socket]);

  //------------------------------------------

  const handleButtonClick = (roomValue) => {
    setOutput(roomValue);
  };

  const handleSendButtonClick = (message) => {
    setOutput(message);

    if (socket.connected) {
      // Include the room name when emitting the message
      socket.emit("send-message", message); // Assuming input2 contains the room name
    } else {
      console.log("Socket is not connected. Unable to send the message.");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Simple Message App</h1>

      <div className="row">
        <div className="col-md-6">
          <InputField
            placeholder="Message"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
          <InputField
            placeholder="Room"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />

          <Button
            text="Send"
            onClick={() => handleSendButtonClick(input1)}
            color="btn-primary"
          />
          <Button
            text="Join Room"
            onClick={() => handleButtonClick(input2)}
            color="btn-secondary"
            margineLeft="10px"
          />
        </div>
        <div>
          <h5
            style={{
              width: "100%",
              textAlign: "left",
              marginTop: "30px",
            }}
          >
            Dashboard
          </h5>
        </div>

        <div className="col-md-6">
          <OutputTextArea value={output} />
        </div>

        <div>
          <h5
            style={{
              width: "100%",
              textAlign: "left",
              marginTop: "30px",
            }}
          >
            Room
          </h5>
        </div>

        <div className="input-group mb-3">
          <OutputTextArea value={room} />
        </div>
      </div>
    </div>
  );
}

export default App;
