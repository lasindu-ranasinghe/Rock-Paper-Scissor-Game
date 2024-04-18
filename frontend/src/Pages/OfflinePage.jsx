import React, { useState,useEffect } from "react";
import Box from "@mui/material/Box";
import { Grid, Avatar, Button } from "@mui/material";
import { playRound, getRandomChoice} from "../Services/OfflineGameLogic";

function OfflinePage() {

  const [userInput, setUserInput] = useState('undefine');
  const [computervalue, setcomputervalue] = useState('undefine');
  const [resultStatus, setresultStatus] = useState('');
  const [time, settime] = useState(null);
  const [resultIsVissible, setresultIsVissible] = useState(false);
  const [winingScore, setWinningScore] = useState(0);
  const [totalrounds, setTotalrounds] = useState(0);

  useEffect(() => {
        let timerId = null;
        if (time > 0) {
            timerId = setTimeout(() => settime(time - 1), 1000);
        } else if (time === 0) {
            handleCountComplete();
        }

        return () => clearTimeout(timerId);
    }, [time]);

  useEffect(() => {
    if (computervalue !== "undefine") { 
        const result = playRound(userInput, computervalue);
        if(result==='win'){setWinningScore(winingScore + 1)}
        setTotalrounds(totalrounds + 1);
        setresultStatus(result);
    }
}, [computervalue, userInput]);

//Handle Start Batle Button
  const hanbleBatleButton = () => {
    settime(3);
  };

  //Handle PLay Again Button
  const hanblePlayAgainButton = () => {
    setUserInput('undefine');
    setcomputervalue('undefine');
    setresultStatus('');
    settime(null);
    setresultIsVissible(false);
  };
//Functions wich should exeute after the timer
  const handleCountComplete = async() => { 
    setcomputervalue( await getRandomChoice());
    setresultIsVissible(true);
  };

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
              backgroundImage: `url('/Images/${userInput}.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Grid>
          <Grid item xs={2}>
            {resultIsVissible && (
              <Box sx={{
                backgroundImage: `url('/Images/${resultStatus}.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center", 
                height: "100%", 
                width: "100%"
              }} />
            )}
            {!resultIsVissible && (
              <Box fullWidth sx={{
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                borderRadius:'40px',
                position: "sticky",
                height:"100%", 
                display: "flex",
                flexDirection:'column',
                alignItems: "center",  
                justifyContent: "center" 
              }}>
                <h2 style={{ color: 'black',fontSize:'30px' }}>Select Within: </h2>
                <h2 style={{ color: 'black',fontSize:'100px' }}>{time}</h2>
              </Box>
            )}
          </Grid>

          <Grid
            item
            xs={5}
            sx={{
              backgroundImage: `url('/Images/${computervalue}.png')`,
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
          onClick={() =>{setUserInput('rock')}}
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
          onClick={() =>{setUserInput('paper')}}
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
          src="/Images/scissor.png"
          onClick={() =>{setUserInput('scissor')}}
          sx={{
            width: 70,
            height: 70,
            margin: "10px",
            backgroundColor: "black",
            border: "solid red",
          }}
        />
        <Button onClick={hanbleBatleButton} variant="contained" sx={{marginLeft:'auto',backgroundColor:'black', borderRadius:'30px', height:'50px',marginTop:'20px'}}>
          Start the Battle
        </Button>
        <Button onClick={hanblePlayAgainButton} variant="contained" sx={{marginLeft:'auto',backgroundColor:'black', borderRadius:'30px', height:'50px',marginTop:'20px'}}>
          Play Again
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
            Score : {winingScore} / {totalrounds}
          </span>
        </Box>
      </Box>
    </div>
  );
}

export default OfflinePage;
