import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import NavBar from 'components/NavBar';
import { Box, CssBaseline, Switch, ThemeProvider, useMediaQuery, useTheme } from '@mui/material';

// Styles
import { StyledCenter } from 'styles/basic-styles';

// Pages
import IndexPage from 'pages/index';
import ResumePage from 'pages/ResumePage';
import ErrorPage from 'pages/404Page';
import AboutPage from 'pages/AboutPage';
import PhotosPage from 'pages/PhotosPage';
import MusicPage from 'pages/MusicPage';
import PageWrapper from 'components/PageWrapper';
import DrinkRatingsPage from 'pages/DrinkRatingsPage';

// Icons, Themes, Styles
import { darkTheme, getTheme, lightTheme, theme } from 'styles/BasicTheme';
import { FaMoon } from 'react-icons/fa6';
import { store } from 'api/store';
import { Provider } from 'react-redux';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');

    if(!savedMode) {
      return prefersDarkMode.toString() === 'true';
    }

    return savedMode ? JSON.parse(savedMode) : false;
  });
  
  const handleThemeChange = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };
  
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Provider store={store}>

    <ThemeProvider theme={getTheme(darkMode ? 'dark' : 'light')}>
      <CssBaseline/>
      <PageWrapper>
        <BrowserRouter>
          <NavBar/>
          <Box sx={{display: 'flex', alignItems: 'center', position: 'fixed', right: 0, bottom: 0, zIndex: 1, [theme.breakpoints.down('lg')]: {
            backgroundColor: theme.palette.info.light, borderRadius: '50px', padding: '1ch', margin: '1ch' 
          }}}><FaMoon aria-label='Switch between light and dark mode' style={{borderRadius: '50px'}}size={20} onClick={handleThemeChange}/>
          {!isMobile && <Switch aria-label='Switch between light and dark mode' checked={darkMode} onChange={handleThemeChange}/>}
          </Box>
          <StyledCenter id='styledCenter'>
            <Routes>
              <Route path='' element={<IndexPage/>}/>
              <Route path='/' element={<IndexPage/>}/>
              <Route path='resume' element={<ResumePage/>}/>
              <Route path='about' element={<AboutPage/>}/>
              <Route path='photos' element={<PhotosPage/>}/>
              <Route path='music' element={<MusicPage/>}/>
              <Route path='*' element={<ErrorPage/>}/>
              <Route path='drinks' element={<DrinkRatingsPage/>}/>
            </Routes>
          </StyledCenter>
        </BrowserRouter>
      </PageWrapper>
    </ThemeProvider>
    </Provider>

  );
}

export default App;