import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import SinglePayerPage from "./Pages/SinglePayerPage";
import MenuPage from "./Pages/MenuPage";

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
        <SinglePayerPage /> 
        // <MenuPage />
      </Box>
    </div>
  );
}

export default App;
