import styled from '@emotion/styled';
import { Box, Dialog, DialogContent } from '@mui/material';
import React, { useState } from 'react';
import { theme } from 'styles/BasicTheme';

const ImageList = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '2ch',

  '& img': {
    maxWidth: '60vw',
    borderRadius: '8px',
    [theme.breakpoints.down('lg')]: {
      maxWidth: '100vw',
      padding: 0,
      margin: 0,
    },
  },

  '& label': {
    [theme.breakpoints.down('lg')]: {
      alignItems: 'center',
      alignContent: 'center',
      display: 'flex',
      justifyContent: 'center'
    }
  }
  
})

const StyledPhotosPage = styled(Box)({
  [theme.breakpoints.down('lg')]: {
    'h1': {
      display: 'flex',
      justifyContent: 'center'
    },

    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    width: '90vw',
  },
  paddingBottom: '10rem'
})

const PhotosPage = () => {
  return(<StyledPhotosPage>

  <h1>Photos</h1>
    <ImageList>
      <Box component='img' src={require('../assets/eiffel.png')} loading='lazy' width={'100%'} ></Box>
      <label><i>Eiffel Through Trees</i> - 2024</label>
      <Box component='img' src={require('../assets/paris_split.png')} loading='lazy' width={'100%'}></Box>
      <label><i>Split View </i>- 2024</label>
      <Box component='img' src={require('../assets/paris_corner.png')} loading='lazy' width={'100%'}></Box>
      <label><i>Cornerside Dinner</i> - 2024</label>
      <Box component='img' src={require('../assets/venice_quiet.png')} loading='lazy' width={'100%'}></Box>
      <label><i>Quiet Venetian Path</i> - 2024</label>
      <Box component='img' src={require('../assets/ferry_view.png')} loading='lazy' width={'100%'}></Box>
      <label><i>Ferry View</i> - 2023</label>
      <Box component='img' src={require('../assets/taipei_101_landscape.jpg')} loading='lazy' width={'100%'}></Box>
      <label><i>Taipei 101</i> - 2023</label>

    </ImageList>
  </StyledPhotosPage>);
};

export default PhotosPage;