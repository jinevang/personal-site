import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import NavBar from 'components/NavBar';

// Styles
import { StyledCenter } from 'styles/basic-styles';

// Pages
import IndexPage from 'pages/index';
import ResumePage from 'pages/ResumePage';
import ErrorPage from 'pages/404Page';
import AboutPage from 'pages/AboutPage';
import PhotosPage from 'pages/PhotosPage';
import MusicPage from 'pages/MusicPage';
import Footer from 'components/Footer';
import PageWrapper from 'components/PageWrapper';
import DrinkRatingsPage from 'pages/DrinkRatingsPage';

function App() {
  return (
    <BrowserRouter>
      <StyledCenter>
        <div><NavBar/></div>
        <PageWrapper>
            <Routes>
              <Route index element={<IndexPage/>}/>
              <Route path='resume' element={<ResumePage/>}/>
              <Route path='about' element={<AboutPage/>}/>
              <Route path='photos' element={<PhotosPage/>}/>
              <Route path='music' element={<MusicPage/>}/>
              <Route path='*' element={<ErrorPage/>}/>
              <Route path='drinks' element={<DrinkRatingsPage/>}/>
            </Routes>
        </PageWrapper>
      </StyledCenter>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;