import React, { useEffect, useRef } from 'react';

// Components
import { Box, Link, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Masonry } from '@mui/lab';

// Icons, Themes, Colors
import styled from '@emotion/styled';
import { theme } from 'styles/BasicTheme';
import { colors } from 'constants/colors';
import { IoMail } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

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
  [theme.breakpoints.down('md')]: {
    '& img': {
      display: 'none',
    }
  },
  [theme.breakpoints.between('md', 'lg')]: {
    '& img': {
      position: 'fixed',
      bottom: '-10%',
      right: '80%',
      width: '30%',
    }
  },
  [theme.breakpoints.up('lg')]: {
    '& img': {
      position: 'absolute',
      bottom: '0',
      right: '89%',
      width: '30%'
    }
  },
})

const Mailto = ({ email, subject, body, children }: any) => {
  return (
    <Box width={'100%'}>
    <Link sx={{textDecoration: 'none'}} href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</Link>
    </Box>
  );
};

const CustomBox = styled(Box)<{ bgcolor?: string; image?: string, clickable?: boolean }>(({ bgcolor, image = false, clickable = false }) => ({
  [theme.breakpoints.up('lg')]: {
    width: !image && '30ch' || '32ch',
  },
  borderRadius: '5px',
  padding: image && '0ch' || '1ch',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignContent: 'center',
  gap: '0.5ch',
  alignItems: 'center',
  justifyItems: 'center',
  overflow: 'hidden',

  backgroundColor: bgcolor || 'transparent',

  backgroundSize: 'cover',
  '& video': {
    borderRadius: '5px',
    width: '100%',
  },
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

  [theme.breakpoints.down('sm')]: {
    width: '50%',
  },

  [theme.breakpoints.between('sm', 'md')]: {
    width: '50%',
  }
}));

const IndexPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const themeUser = useTheme();
  const videoRef = useRef(null);

  const handleClick = () => {
    if (videoRef.current) {
      if(videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const textColor = themeUser.palette.primary.contrastText;
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  return(
    <StyledIndexPage id='styledIndexPage'>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', alignContent: 'center', width: '100%'}}>
        <Typography sx={{color: textColor, fontSize: 110, fontWeight: 500, fontFamily: 'inherit', [theme.breakpoints.down('md')]: {
          display: 'none'
        }}}>
          Hello!
        </Typography>
        <Masonry columns={{lg: 3, sm: 2, xs: 1}} sequential={!isMobile} spacing={2} sx={{maxHeight: 'fit-content'}}>

          <CustomBox bgcolor={colors.basicBlue.light} height='15vh' >
            <Typography color='#111110' fontSize={{lg: '1vw', md: 14}}>Hi, I&apos;m Evan! I am a Software Engineer based in Seattle, WA. I recently graduated from UW, here are a few things I enjoy!</Typography>
          </CustomBox>

          <CustomBox bgcolor='' height='fit-content' image='true' key={3}>
            <img src={require('../assets/rock_climbing.jpg')}/>
            <Typography color={textColor}>Rock climbing</Typography>
          </CustomBox>
          <CustomBox bgcolor={colors.basicBlue.light} height='15vh' onClick={() => navigate('/drinks')} clickable>
              <Typography color='#111110' fontSize={{lg: '1vw', md: 14}} sx={{
                ':hover': {
                  cursor: 'pointer',
                }
              }}>
                There has been an update to the site! Check out the new Drink Ratings page (rated out of 7)
              </Typography>
          </CustomBox>
          <CustomBox bgcolor='' image='true'>
            <img src={require('../assets/hiking.webp')}/><Typography color={textColor}>Hiking around the PNW</Typography>
          </CustomBox>

          <CustomBox bgcolor={colors.basicBlue.light} height='9vh'>
            <Mailto email='me@jinevang.com' subject='' body=''>
                  <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><IoMail/> <Typography color={colors.basicBlue.darkest} fontSize={{lg: '1vw', md: 14}} >Send me an email!</Typography></Box>
            </Mailto>
              </CustomBox>
          <CustomBox bgcolor='' height='fit-content' image='true'>
            <video width='100%' height='100%' ref={videoRef} onClick={handleClick} controlsList='nofullscreen nodownload' controls>
              <source src={require('../assets/airportpiano.mp4')} type='video/mp4'/>
            </video>
            <Typography color={textColor} fontSize={{lg: '1vw', md: 14}}>Playing piano</Typography>
          </CustomBox>
        </Masonry>
      <Me><img src={require('../assets/looking_back.png')}></img></Me>
      </Box>
    </StyledIndexPage>
    
  );
};

export default IndexPage;