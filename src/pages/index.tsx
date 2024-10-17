import React, { useEffect } from 'react';

// Components
import { Box, Link, Typography } from '@mui/material';
import { Masonry } from '@mui/lab';

// Icons, Themes, Colors
import styled from '@emotion/styled';
import { theme } from 'styles/BasicTheme';
import { colors } from 'constants/colors';
import { IoMail } from "react-icons/io5";

const StyledIndexPage = styled(Box)({
  width: '60vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyItems: 'center',
  alignContent: 'center',
  height: '100vh',
  

  [theme.breakpoints.down('lg')]: {
    width: '95%',
  }
})

const Me = styled(Box)({
  [theme.breakpoints.down('lg')]: {
    '& img': {
      display: 'none',
    }
  },
  [theme.breakpoints.up('lg')]: {
    '& img': {
      position: 'absolute',
      bottom: '0',
      right: '89%',
      width: '30%'
    }
  }
})

const Mailto = ({ email, subject, body, children }: any) => {
  return (
    <Box width={'100%'}>
    <Link sx={{textDecoration: 'none'}} href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</Link>
    </Box>
  );
};

const CustomBox = styled(Box)<{ backgroundColor?: string; image?: boolean }>(({ backgroundColor, image }) => ({
  borderRadius: '5px',
  width: '25ch',
  padding: image && '0ch' || '1ch',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignContent: 'center',
  gap: '0.5ch',
  alignItems: 'center',
  justifyItems: 'center',


  backgroundColor: backgroundColor || 'white',

  backgroundSize: 'cover',
  '& a': {
    color: colors.basicBlue.darkest,
    textDecoration: 'none'
  },
  'p': {
    fontFamily: 'inherit',
    padding: '1ch',
  },

  '& img': {
    width: '100%',
    borderRadius: '5px',
  },

  ':hover': {
    boxShadow: 'inset 100vh 100vw #ebeff5',
  },

  [theme.breakpoints.down('lg')]: {
    width: '90%',
  },
}));

const IndexPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return(
    <StyledIndexPage id='styledIndexPage'>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', alignContent: 'center', width: '100%'}}>
        <Typography sx={{fontSize: 110, fontWeight: 500, fontFamily: 'inherit', [theme.breakpoints.down('lg')]: {
          display: 'none',
        }}}>
          Hello!
        </Typography>
        <Masonry columns={{lg: 3, md: 1}} spacing={2} sequential sx={{maxHeight: 'fit-content'}}>

          <CustomBox backgroundColor={colors.basicBlue.light} height='15vh' >
            <Typography fontSize={{lg: '1vw', md: 14}}>Hi, I&apos;m Evan! I am a Software Engineer based in Seattle, WA. I recently graduated from UW, here are a few things I enjoy!</Typography>
          </CustomBox>

          <CustomBox backgroundColor='' height='fit-content' image={true} key={3}>
            <img src={require('../assets/rock_climbing.jpg')} loading='lazy'/>
            <Typography>Rock climbing!</Typography>
          </CustomBox>
          <CustomBox backgroundColor={colors.basicBlue.light} height='20vh'>
              <Typography fontSize={14}>
                I love making music and taking photos - take a look at the other pages on the site if you&apos;d like!
              </Typography>
          </CustomBox>
          <CustomBox backgroundColor='' image={true}>
            <img src={require('../assets/hiking.png')} loading='lazy'/><Typography>Hiking around the PNW</Typography>
          </CustomBox>

          <CustomBox backgroundColor={colors.basicBlue.light} height='10vh'>
          <Mailto email="jinevang@gmail.com" subject="" body="">
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><IoMail/> <Typography color={colors.basicBlue.darkest} fontSize={20}>Send me an email!</Typography></Box>
          </Mailto>
              </CustomBox>
          <CustomBox backgroundColor='' height='fit-content' image={true}>
            <img src={require('../assets/piano.jpg')} loading='lazy'/>
            <Typography fontSize={14}>Playing piano</Typography>
          </CustomBox>




        </Masonry>
      <Me><img src={require('../assets/Subject.png')}></img></Me>
      </Box>
    </StyledIndexPage>
    
  );
};

export default IndexPage;