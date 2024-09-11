import React from 'react';
import { StyledIndexScreen } from '../styles/basic-styles';
import CustomBox from 'components/CustomBox';
import { Box, Grid2 as Grid, Typography } from '@mui/material';

const IndexPage = () => {
  return(
    <Box sx={{width: '100%', border: '1px solid green'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', border: '1px solid blue', width: '100%'}}>
      <Typography sx={{fontSize: 120, fontWeight: 600}}>
        Hello!
      </Typography>
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '1ch', width: '100%', flexWrap: 'wrap', border: '1px solid pink', height: '75vh', alignContent: 'flex-start'}}>
      <CustomBox backgroundColor='lightgray' height='15vh'>Hello</CustomBox>
      <CustomBox backgroundColor='lightgray' height='29vh'>Hello</CustomBox>
      <CustomBox backgroundColor='lightgray' height='33vh'>Hello</CustomBox>
      <CustomBox backgroundColor='lightgray' height='12vh'>Hello</CustomBox>
      <CustomBox backgroundColor='lightgray' height='25vh'>Hello</CustomBox>

      <CustomBox backgroundColor='lightgray' height='30vh'>Hello</CustomBox>


      </Box>
      </Box>
        
      {/* <CustomBox backgroundColor='#312509' image>
        <img src={require('../assets/lemon_boulder.jpg')}/>
        </CustomBox>
        <CustomBox backgroundColor='#65532F' image>
        <img src={require('../assets/circle_mirror.jpg')}/>
        </CustomBox> */}
        <img style={{position: 'absolute', bottom: '20px', right: '80%', width: '35%'}} src={require('../assets/Subject.png')}></img>
    </Box>
  );
};

export default IndexPage;