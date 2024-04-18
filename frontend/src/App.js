import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import OfflinePage from "./Pages/OfflinePage";

function App() {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "black",
          height: "100vh",
          backgroundImage: `url('/Images/background.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <OfflinePage />
      </Box>
    </div>
  );
}

export default App;
