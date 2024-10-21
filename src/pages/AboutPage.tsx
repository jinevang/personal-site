import React, { useEffect } from 'react';

// Components
import { Box, List, ListItem, Typography, useTheme } from '@mui/material';

// Styles & Colors
import styled from '@emotion/styled';
import { theme } from 'styles/BasicTheme';
import { FaGithub, FaLinkedin, FaSpotify } from "react-icons/fa";

const StyledAbout = styled(Box)<{$linkColor: string}>(({$linkColor}) => ({
  [theme.breakpoints.down('lg')]: {
    paddingTop: 0,
    paddingBottom: '3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '90vw',
  },

  '& a': {
    color: $linkColor,
    ':visited': {
      color: $linkColor,
    },
    ':active': {
      color: $linkColor
    },
    ':hover': {
      color: $linkColor
    }
  },

  [theme.breakpoints.up('lg')]: {
    paddingTop: '12vh',
  },

  '&[data-testid=tracklist]': {
    display: 'none',
  }
  
}));

const AboutPage = () => {

  const theme = useTheme();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return(<StyledAbout $linkColor={theme.palette.primary.contrastText}>
    <h1>About</h1>
    <p>Hi, I&apos;m Evan! I&apos;m a software engineer based in Seattle.
    </p>
    {/* <Typography sx={{fontFamily: 'inherit', fontSize: 20, fontWeight: 600}}>
      Who?
    </Typography> */}
    <List>
      <ListItem disablePadding>🦦 recently graduated CSSE student from UWB</ListItem>
      <ListItem disablePadding>🧑🏻‍💻 full-stack software developer</ListItem>
      <ListItem disablePadding>🎵 I love playing, making, and listening to music</ListItem>
      <ListItem disablePadding>🧗🏻 I love rock climbing and tennis</ListItem>
      <ListItem disablePadding>
        <span>
          🎹 take a look at my <a href='https://bit.ly/albumratings' target='_blank' rel='noopener noreferrer'>
          album rating list</a>
          </span>
        </ListItem>
      <ListItem disablePadding>
        <span>🧋 take a look at my <a href='https://bit.ly/drinkratings' target='_blank' rel='noopener noreferrer'>
        drink ratings (rated out of 7)</a>
        </span>
      </ListItem>
      <ListItem disablePadding>
        <span>🎶 follow me on <a href='https://open.spotify.com/user/jinsilky?si=758524874766450b' target='_blank' rel='noopener noreferrer'>spotify!</a>
        </span>
      </ListItem>
      <br/>
      In my recent rotation:
      <ListItem disablePadding>
      <iframe style={{borderRadius: '12px', borderColor: 'transparent' 
      }} src="https://open.spotify.com/embed/playlist/5xiUSBjTZa8DZzOLJFMYg8?utm_source=generator" width="100%" height="100ch" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </ListItem>
    </List>
    <Typography sx={{fontFamily: 'inherit', fontSize: 20, fontWeight: 600}}>
    Links</Typography>
    <List sx={{[theme.breakpoints.down('lg')]: {
      display: 'flex',
      gap: '3ch'
    }}}>
      <ListItem disablePadding alignItems='center' sx={{display: 'flex', gap: '0.5ch'}}><FaGithub/> <a href='https://github.com/jinevang' target='_blank' rel='noopener noreferrer'>GitHub</a></ListItem>
      <ListItem disablePadding alignItems='center' sx={{display: 'flex', gap: '0.5ch'}}><FaLinkedin/><a href='https://www.linkedin.com/in/evanjin/' target='_blank' rel='nooperner noreferrer'>LinkedIn</a></ListItem>
    </List>
  </StyledAbout>);
};

export default AboutPage;