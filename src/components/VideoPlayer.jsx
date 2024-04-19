import React, { useContext } from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import { SocketContext } from '../Context';

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

  const style = {
 
    // Adding media query..
    
        width: '400px',
       
   
    
  };

  return (
    <div style={{margin: '0 auto', textAlign: 'center'}}>
    <Grid container style={{ justifyContent: 'center', margin: '0 auto', textAlign: 'center'}}>
      {stream && (
        <Paper style={{    padding: '10px',
        border: '2px solid black',
        margin: '10px',}}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
            <video playsInline muted ref={myVideo} autoPlay  style={ style} />
          </Grid>
        </Paper>
       )}
      {callAccepted && !callEnded && (
        <Paper style={{    padding: '10px',
        border: '2px solid black',
        margin: '10px',}}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
            <video playsInline muted ref={userVideo} autoPlay  style={ style} />
          </Grid>
        </Paper>
       )}
    </Grid>
    </div>
  );
};

export default VideoPlayer;
