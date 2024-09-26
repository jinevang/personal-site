import React from 'react';
import { StyledIndexScreen } from '../styles/basic-styles';
import CustomBox from 'components/CustomBox';
import { Box, Grid2 as Grid, Typography } from '@mui/material';

const IndexPage = () => {
  return(
    <Box sx={{width: '100%'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', width: '100%'}}>
      <Typography sx={{fontSize: 120, fontWeight: 500, fontFamily: 'inherit'}}>
        Hello!
      </Typography>
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '1ch', width: '100%', flexWrap: 'wrap', height: '75vh', alignContent: 'center'}}>
      <CustomBox backgroundColor='lightgray' height='15vh'>
        <Typography sx={{fontSize: '28px'}}>Software Engineer based in Seattle, WA</Typography>
      </CustomBox>
      <CustomBox backgroundColor='lightgray' height='20vh'>Hello</CustomBox>
      <CustomBox backgroundColor='lightgray' height='fit-content'><img src={require('../assets/malatang.png')}/></CustomBox>
      <CustomBox backgroundColor='lightgray' height='25vh'>Hello</CustomBox>
      <CustomBox backgroundColor='lightgray' height='25vh'>Hello</CustomBox>

      <CustomBox backgroundColor='lightgray' height='40vh'>Hello</CustomBox>


      </Box>
      </Box>
        <img style={{position: 'absolute', bottom: '10%', right: '80%', width: '30%'}} src={require('../assets/Subject.png')}></img>
    </Box>
  );
};

export default IndexPage;