import React from 'react';
import { Box, List } from '@mui/material';

const AboutPage = () => {
  return(<Box width={'100%'}>
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
  </Box>);
};

export default AboutPage;