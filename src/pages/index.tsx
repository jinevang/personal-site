import React from 'react';
import CustomBox from 'components/CustomBox';
import { Box, Grid2 as Grid, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { theme } from 'styles/BasicTheme';
import { IoIosMail } from 'react-icons/io'
const StyledIndexPage = styled(Box)({

})

const Mailto = ({ email, subject, body, children }: any) => {
  return (
    <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
  );
};

const GalleryBox = styled(Box)({
  display: 'flex', 
  flexDirection: 'column', 
  gap: '1ch', 
  width: '100%', 
  height: '75vh', 
  alignContent: 'center',
  flexWrap: 'wrap', 
  alignItems: 'center',

  [theme.breakpoints.down('md')]: {
    flexWrap: 'nowrap'
  }
})

const IndexPage = () => {
  return(
    <StyledIndexPage>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', width: '100%'}}>
      <Typography sx={{fontSize: 120, fontWeight: 500, fontFamily: 'inherit'}}>
        Hello!
      </Typography>
      <GalleryBox>
      <CustomBox backgroundColor='lightgray' height='15vh'>
        Hi, I&apos;m Evan Jin! I am a Software Engineer based in Seattle, WA!
      </CustomBox>
      <CustomBox backgroundColor='lightgray' height='20vh'>Hello</CustomBox>
      <CustomBox backgroundColor='lightgray' height='fit-content'><img src={require('../assets/malatang.png')} loading='lazy'/><caption>One of my favorite foods to eat near here - Spicy Malatang</caption></CustomBox>
      <CustomBox backgroundColor='lightgray' height='fit-content'><img src={require('../assets/lemon_boulder.jpg')} loading='lazy'/><caption>Rock climbing!</caption></CustomBox>
      <CustomBox backgroundColor='lightgray' height='25vh'>
    <IoIosMail/>
<Mailto email="jinevang@gmail.com" subject="" body="">
          Send an email to me at jinevang@gmail.com
      </Mailto>
      </CustomBox>

      <CustomBox backgroundColor='lightgray' height='40vh'>Hello</CustomBox>


      </GalleryBox>
      </Box>
        <img style={{position: 'absolute', bottom: '10%', right: '80%', width: '30%'}} src={require('../assets/Subject.png')}></img>
    </StyledIndexPage>
  );
};

export default IndexPage;