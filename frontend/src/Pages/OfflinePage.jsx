import React from "react";
import Box from "@mui/material/Box";
import { Grid, Avatar, Button } from "@mui/material";

function OfflinePage() {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          minHeight: "100px",
          minWidth: "200px",
          zIndex: 1000,
          position: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h2 style={{ fontSize: "50px", color: "Black" }}>Rock Paper Scissor</h2>
        <span style={{ color: "Black", fontWeight: "bold" }}>Play Offline</span>
      </Box>
      <Box fullWidth sx={{ height: "400px", margin: "30px" }}>
        <Grid container spacing={0} sx={{ height: "inherit" }}>
          <Grid
            item
            xs={5}
            sx={{
              backgroundImage: `url('/Images/scissors.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Grid>
          <Grid item xs={2} sx={{
              backgroundImage: `url('/Images/win.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center", 
              }}
          ></Grid>
          <Grid
            item
            xs={5}
            sx={{
              backgroundImage: `url('/Images/rock.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: "scaleX(-1)"
            }}
          ></Grid>
        </Grid>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        fullWidth
        sx={{ margin: "20px", justifyContent: "flex-start" }}
      >
        <Avatar
          alt="Remy Sharp"
          src="/Images/rock.png"
          sx={{
            width: 70,
            height: 70,
            margin: "10px",
            backgroundColor: "black",
            border: "solid red",
          }}
        />
        <Avatar
          alt="Remy Sharp"
          src="/Images/paper.png"
          sx={{
            width: 70,
            height: 70,
            margin: "10px",
            backgroundColor: "black",
            border: "solid red",
          }}
        />
        <Avatar
          alt="Remy Sharp"
          src="/Images/scissors.png"
          sx={{
            width: 70,
            height: 70,
            margin: "10px",
            backgroundColor: "black",
            border: "solid red",
          }}
        />
        <Button variant="contained" sx={{marginLeft:'auto',backgroundColor:'black', borderRadius:'30px', height:'50px',marginTop:'20px'}}>
          Start the Battle
        </Button>
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderRadius: "10px",
            marginLeft: "auto",
            padding: "20px",
          }}
        >
          <span style={{ fontSize: "30px", textAlign: "center" }}>
            Score : 5 / 10
          </span>
        </Box>
      </Box>
    </div>
  );
}

export default OfflinePage;
