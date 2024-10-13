import React from 'react';
import { Box, Grid2 as Grid, Link, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { theme } from 'styles/BasicTheme';
import { IoIosMail } from 'react-icons/io'
import { colors } from 'constants/colors';
const StyledIndexPage = styled(Box)({
  width: '60vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '90vh',

  [theme.breakpoints.down('lg')]: {
    width: '100%',
    height: '100vh'
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
      right: '86%',
      width: '30%'
    }
  }
})

const Mailto = ({ email, subject, body, children }: any) => {
  return (
    <Link sx={{textDecoration: 'none'}} href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</Link>
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
  },
  [theme.breakpoints.up('lg')]: {
    width: '90%'
  }
})

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
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', width: '70%'}}>
        <Typography sx={{fontSize: 120, fontWeight: 500, fontFamily: 'inherit'}}>
          Hello!
        </Typography>
        <GalleryBox>

          <CustomBox backgroundColor='lightgray' height='15vh'>
            Hi, I&apos;m Evan! I am a Software Engineer based in Seattle, WA. I recently graduated from UW, here are a few things I enjoy!
          </CustomBox>
          <CustomBox backgroundColor='' image={true}>
            <img src={require('../assets/hiking.png')} loading='lazy'/><Typography>Hiking around the PNW</Typography>
          </CustomBox>

          <CustomBox backgroundColor='' height='fit-content' image={true}>
            <img src={require('../assets/rock_climbing.jpg')} loading='lazy'/>
            <Typography>Rock climbing!</Typography>
          </CustomBox>

          <Mailto email="jinevang@gmail.com" subject="" body="">
          <CustomBox backgroundColor={colors.basicBlue.light} height='10vh'>
                <Typography color={colors.basicBlue.darkest} fontSize={20}>Send me an email!</Typography>
              </CustomBox>
          </Mailto>
          <CustomBox backgroundColor={colors.basicBlue.light} height='20vh'>
              <Typography>
                I love making music and taking photos - take a look at the other pages on the site if you&apos;d like!
              </Typography>
          </CustomBox>
          <CustomBox backgroundColor='' height='fit-content' image={true}>
            <img src={require('../assets/piano.jpg')} loading='lazy'/>
            <Typography>Playing piano (I&apos;m the one not in the red)</Typography>
          </CustomBox>




        </GalleryBox>
      </Box>
    <Me><img src={require('../assets/Subject.png')}></img></Me>
    </StyledIndexPage>
    
  );
};

export default IndexPage;