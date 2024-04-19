import React from 'react';
import Box from "@mui/material/Box";
import { Avatar, Grid } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

function MenuPage() {
  return (
    <div>
      <Box fullWidth
      sx={{height:'100px', backgroundColor:'white', display:'flex', flexDirection:'row'}}
      >
        <span>Rock Paper Scissoor</span>
        <div style={{display:'flex', flexDirection:'row'}}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <span style={{padding:'10px'}}>Lasindu Ranasinghe</span>
        </div>
      </Box>
      <Box fullWidth sx={{height:'400px',margin:'20px', marginTop:'80px', display:'flex', flexDirection:'row'}}>
        <Grid container spacing={0}>
            <Grid item xs={6}>
                <Box sx={{ height:'100%',padding:'80px'}} fullWidth>
                    <Avatar sx={{ bgcolor: 'green' , height:'200px', width:'200px', margin:'auto'}}>
                    <PersonIcon />
                    </Avatar>
                    <span style={{margin:'auto'}}>Single Play</span>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box sx={{ height:'100%',padding:'80px'}} fullWidth>
                    <Avatar sx={{ bgcolor: 'green' , height:'200px', width:'200px', margin:'auto'}}>
                    <GroupAddIcon />
                    </Avatar>
                    <span style={{margin:'auto'}}>Multi Play</span>
                </Box>
            </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default MenuPage
