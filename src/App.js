import React from 'react';
import { Typography, AppBar} from '@mui/material';

import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';


const App = () => {


  return (
    
      <div className='container' style={{
        display: 'flex',
        flexDirection: 'column',
        
        alignItems: 'center',
        width: '100%',
      }}>
        <AppBar style={{
          borderRadius: 15,
          margin: '30px auto',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '500px',
          border: '2px solid black',
        }} position="static" color="inherit">
          <Typography variant="h2" align="center">Video Chat</Typography>
        </AppBar>
        <VideoPlayer />
        <Sidebar>
          <Notifications />
        </Sidebar>
   
    </div>
  );
};

export default App;
