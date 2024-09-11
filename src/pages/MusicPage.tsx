import { Box } from '@mui/material';
import React from 'react';

const MusicPage = () => {
  return(<Box>
    <h1>Music</h1>
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '2ch'}}>
        <iframe width='560' height='315' src='https://www.youtube.com/embed/UqjIRZik4C4?si=BSEek4zISotZGbO4' title='YouTube video player' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'>
        </iframe>
        <iframe width='560'height='315' src='https://www.youtube.com/embed/8ZjBeWsHQ90?si=WppzEUg5291qFzwJ' title='YouTube video player'  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>

        <iframe width='560' height='315' src='https://www.youtube.com/embed/Bj6i43N8Vy4?si=vKnWy4FvCk8RAJYs' title='YouTube video player' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>
      </Box>
    </Box>
  );
};

export default MusicPage;