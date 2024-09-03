import { Box } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const ImageList = styled.div`
  display: flex;

  flex-direction: column;

  gap: 2ch;
  img {
    max-width: 60vw;
  }
`;

const PhotosPage = () => {
  return(<Box>
    <ImageList>
      <img src={require('../assets/IMG_0267.png')}></img>
      <label><i>Eiffel Through Trees</i> - 2024</label>
      <img src={require('../assets/IMG_0333.png')}></img>
      <label><i>Split View </i>- 2024</label>
      <img src={require('../assets/IMG_0567.png')}></img>
      <label><i>Cornerside Dinner</i> - 2024</label>
      <img src={require('../assets/IMG_1764.png')}></img>
      <label><i>Venice</i> - 2024</label>
      <img src={require('../assets/IMG_7365.png')}></img>
      <label><i>Ferry View</i> - 2023</label>
    </ImageList>
  </Box>);
};

export default PhotosPage;