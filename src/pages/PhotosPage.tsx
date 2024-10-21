import styled from '@emotion/styled';
import { Box, Dialog, DialogContent } from '@mui/material';
import React, { useEffect, useState } from 'react';
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
      justifyContent: 'center',
      gap: '0.5ch',
    },
    textAlign: 'right',
  }
  
})

const StyledPhotosPage = styled(Box)({
  [theme.breakpoints.down('lg')]: {
    'h1': {
      display: 'flex',
      justifyContent: 'center'
    },
    paddingBottom: '3rem',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    width: '90vw',
  },
  [theme.breakpoints.up('lg')]: {
    paddingTop: '1rem',
    paddingBottom: '5rem'
  },
})

const PhotosPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(<StyledPhotosPage>
  <h1>Photos</h1>
    <ImageList>
      <img src={require('../assets/eiffel.webp')} loading='lazy' width={'100%'} ></img>
      <label><i>Eiffel Through Trees</i> - 2024</label>
      <img src={require('../assets/paris_split.webp')} loading='lazy' width={'100%'}></img>
      <label><i>Split View </i>- 2024</label>
      <img src={require('../assets/cinque_terre.webp')} loading='lazy' width={'100%'}></img>
      <label><i>Vernazza, Cinque Terre</i> - 2024</label>
      <img src={require('../assets/venice_quiet.webp')} loading='lazy' width={'100%'}></img>
      <label><i>Quiet Venetian Path</i> - 2024</label>
      <img src={require('../assets/ferry_view.webp')} loading='lazy' width={'100%'}></img>
      <label><i>Ferry View</i> - 2023</label>
      <img src={require('../assets/taipei_101_landscape.webp')} loading='lazy' width={'100%'}></img>
      <label><i>Taipei 101</i> - 2023</label>

    </ImageList>
  </StyledPhotosPage>);
};

export default PhotosPage;