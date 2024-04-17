import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";

function App() {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "black",
          height: "100vh",
          backgroundImage: `url('/Images/background.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>
    </div>
  );
}

export default App;
