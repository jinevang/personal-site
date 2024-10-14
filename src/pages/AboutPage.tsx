import React from 'react';
import { Box, List } from '@mui/material';
import styled from '@emotion/styled';
import { theme } from 'styles/BasicTheme';

const StyledAbout = styled(Box)({
  width: '100%',
  [theme.breakpoints.down('lg')]: {
    paddingTop: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  [theme.breakpoints.up('lg')]: {
    paddingTop: '20vh'
  }
})

const AboutPage = () => {
  return(<StyledAbout>
    <h1>About</h1>
    <p>Hi, I&apos;m Evan! I&apos;m a software engineer based in Seattle.
    </p>
    <h2>
      who is this person???
    </h2>
    <Box>
      <li>🦦 recently graduated CSSE student from UWB</li>
      <li>🥕 full-stack software dev enjoyer</li>
      <li>🎵 I love playing, making, and listening to music</li>
      <li>🧗🏻 I love rock climbing and tennis</li>
      <li>🎹 take a look at my <a href='https://bit.ly/albumratings' target='_blank' rel='noopener noreferrer'>album rating list</a></li>
      <li>🧋 take a look at my <a href='https://bit.ly/drinkratings' target='_blank' rel='noopener noreferrer'>drink ratings (rated out of 7)</a></li>
    </Box>
  </StyledAbout>);
};

export default AboutPage;