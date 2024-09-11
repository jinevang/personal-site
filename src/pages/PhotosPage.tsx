import { Box, Dialog, DialogContent } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';

const ImageList = styled.div`
  display: flex;

  flex-direction: column;

  gap: 2ch;
  img {
    max-width: 60vw;
    border-radius: 8px;
  }
`;

const PhotosPage = () => {


  // const [overlayOn, setOverlayOn] = useState(false);
  // const [currentImage, setCurrentImage] = useState<string>('');

  return(<Box>
{/* <Dialog
  open={overlayOn}
  style={{width: '200px', marginLeft: '40%', backgroundColor: 'transparent'}} >
    {overlayOn ? <Box sx={{width: '50vw'}} component='img' src={require('../assets/IMG_0267.png')} alt='current'></Box>
    : null}
    </Dialog>     */}
  <h1>Photos</h1>
    <ImageList>
      <Box component='img' src={require('../assets/IMG_0267.png')} loading='lazy'></Box>
      <label><i>Eiffel Through Trees</i> - 2024</label>
      <img src={require('../assets/IMG_0333.png')} loading='lazy'></img>
      <label><i>Split View </i>- 2024</label>
      <img src={require('../assets/IMG_0567.png')} loading='lazy'></img>
      <label><i>Cornerside Dinner</i> - 2024</label>
      <img src={require('../assets/IMG_1764.png')} loading='lazy'></img>
      <label><i>Venice</i> - 2024</label>
      <img src={require('../assets/IMG_7365.png')} loading='lazy'></img>
      <label><i>Ferry View</i> - 2023</label>
    </ImageList>
  </Box>);
};

export default PhotosPage;