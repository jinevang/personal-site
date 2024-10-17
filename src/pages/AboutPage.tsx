import React from 'react';

// Components
import { Box, List, ListItem, Typography } from '@mui/material';

// Styles & Colors
import styled from '@emotion/styled';
import { theme } from 'styles/BasicTheme';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const StyledAbout = styled(Box)({
  width: '100%',
  [theme.breakpoints.down('lg')]: {
    paddingTop: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '90vw',
  },

  [theme.breakpoints.up('lg')]: {
    paddingTop: '10vh'
  }
})

const AboutPage = () => {
  return(<StyledAbout>
    <h1>About</h1>
    <p>Hi, I&apos;m Evan! I&apos;m a software engineer based in Seattle.
    </p>
    <Typography sx={{fontFamily: 'inherit', fontSize: 20, fontWeight: 600}}>
      Who?
    </Typography>
    <List>
      <ListItem disablePadding>🦦 recently graduated CSSE student from UWB</ListItem>
      <ListItem disablePadding>🧑🏻‍💻 full-stack software developer</ListItem>
      <ListItem disablePadding>🎵 I love playing, making, and listening to music</ListItem>
      <ListItem disablePadding>🧗🏻 I love rock climbing and tennis</ListItem>
      <ListItem disablePadding><span>🎹 take a look at my <a href='https://bit.ly/albumratings' target='_blank' rel='noopener noreferrer'>album rating list</a></span></ListItem>
      <ListItem disablePadding><span>🧋 take a look at my <a href='https://bit.ly/drinkratings' target='_blank' rel='noopener noreferrer'>drink ratings (rated out of 7)</a></span></ListItem>
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