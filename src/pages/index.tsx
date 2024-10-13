import React from 'react';
import { Box, Grid2 as Grid, Link, Typography } from '@mui/material';

import styled from '@emotion/styled';
import { theme } from 'styles/BasicTheme';
import { IoIosMail } from 'react-icons/io'
import { colors } from 'constants/colors';
import { Masonry } from '@mui/lab';
const StyledIndexPage = styled(Box)({
  width: '60vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyItems: 'center',
  height: '90vh',

  [theme.breakpoints.down('lg')]: {
    width: '95%',
    height: '100vh',
  }
})

const Me = styled(Box)({
  [theme.breakpoints.down('lg')]: {
    '& img': {
      position: 'fixed',
      width: '20%',
      left: '1rem',
      bottom: '-5%'
    }
  },

  [theme.breakpoints.down('sm')]: {
    '& img': {
      width: '40%',
      left: '-1rem',
    }
  },

  [theme.breakpoints.up('lg')]: {
    '& img': {
      position: 'absolute',
      bottom: '-15%',
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


  // Apply the backgroundColor prop if it exists
  backgroundColor: backgroundColor || 'white',

  // Conditionally apply a background image if the image prop is true
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

  return(
    <StyledIndexPage>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', width: '100%'}}>
        <Typography sx={{fontSize: 120, fontWeight: 500, fontFamily: 'inherit'}}>
          Hello!
        </Typography>
        <Masonry columns={{lg: 3, md: 1}} spacing={2} sequential>

          <CustomBox backgroundColor={colors.basicBlue.light} height='15vh' >
            <Typography fontSize={{lg: '1vw', md: 14}}>Hi, I&apos;m Evan! I am a Software Engineer based in Seattle, WA. I recently graduated from UW, here are a few things I enjoy!</Typography>
          </CustomBox>

          <CustomBox backgroundColor='' height='fit-content' image={true} key={3}>
            <img src={require('../assets/rock_climbing.jpg')} loading='lazy'/>
            <Typography>Rock climbing!</Typography>
          </CustomBox>
          <CustomBox backgroundColor={colors.basicBlue.light} height='20vh'>
              <Typography fontSize={16}>
                I love making music and taking photos - take a look at the other pages on the site if you&apos;d like!
              </Typography>
          </CustomBox>
          <CustomBox backgroundColor='' image={true}>
            <img src={require('../assets/hiking.png')} loading='lazy'/><Typography>Hiking around the PNW</Typography>
          </CustomBox>

          <CustomBox backgroundColor={colors.basicBlue.light} height='10vh'>
          <Mailto email="jinevang@gmail.com" subject="" body="">
                <Typography color={colors.basicBlue.darkest} fontSize={20}>Send me an email!</Typography>
          </Mailto>
              </CustomBox>
          <CustomBox backgroundColor='' height='fit-content' image={true}>
            <img src={require('../assets/piano.jpg')} loading='lazy'/>
            <Typography fontSize={14}>Playing piano (I&apos;m the one not in the red)</Typography>
          </CustomBox>




        </Masonry>
      </Box>
    <Me><img src={require('../assets/Subject.png')}></img></Me>
    </StyledIndexPage>
    
  );
};

export default IndexPage;