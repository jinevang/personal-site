import React from 'react';
import { Box, Grid2 as Grid, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { theme } from 'styles/BasicTheme';
import { IoIosMail } from 'react-icons/io'
const StyledIndexPage = styled(Box)({
  width: '60vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: '1px solid black',
  height: '90vh',
  
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
  height: '80vh', 
  alignContent: 'center',
  flexWrap: 'wrap', 
  alignItems: 'center',

  [theme.breakpoints.down('lg')]: {
    flexWrap: 'nowrap'
  }
})

const CustomBox = styled(Box)<{backgroundColor?: string}>({
  borderRadius: '5px',
  width: '25ch',
  padding: '1ch',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  gap: '0.5ch',

  '& img': {
    width: '100%',
    borderRadius: '5px'
  },

  ':hover': {
    boxShadow: 'inset 100vh 100vw #ebeff5',
  },

  [theme.breakpoints.down('md')]: {
      width: '90%'
    
  }
})

const IndexPage = () => {
  return(
    <StyledIndexPage>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', width: '70%'}}>
        <Typography sx={{fontSize: 120, fontWeight: 500, fontFamily: 'inherit'}}>
          Hello!
        </Typography>
        <GalleryBox>

          <CustomBox backgroundColor='lightgray' height='15vh'>
            Hi, I&apos;m Evan Jin! I am a Software Engineer based in Seattle, WA. I recently graduated from UW, here are a few things I enjoy!
          </CustomBox>
          <CustomBox backgroundColor=''><img src={require('../assets/hiking.png')} loading='lazy'/><caption>Hiking around the PNW</caption></CustomBox>

          <CustomBox backgroundColor='' height='fit-content'><img src={require('../assets/rock_climbing.jpg')} loading='lazy'/><caption>Rock climbing!</caption></CustomBox>


          <CustomBox backgroundColor='' height='fit-content'><img src={require('../assets/piano.jpg')} loading='lazy'/><caption>Playing piano</caption></CustomBox>

          {/* <CustomBox backgroundColor='lightgray' height='25vh'>
              <IoIosMail/>
              <Mailto email="jinevang@gmail.com" subject="" body="">
              Send an email to me at jinevang@gmail.com
          </Mailto>
          </CustomBox>

          <CustomBox backgroundColor='lightgray' height='40vh'>Hello</CustomBox> */}


        </GalleryBox>
      </Box>
        <img style={{position: 'absolute', bottom: '0', right: '85%', width: '30%'}} src={require('../assets/Subject.png')}></img>
    </StyledIndexPage>
  );
};

export default IndexPage;