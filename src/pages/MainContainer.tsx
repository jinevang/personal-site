import React, { useState } from 'react';
import { Box, CssBaseline, Divider, IconButton, Switch, ThemeProvider, useMediaQuery } from "@mui/material"
import NavBar from "components/NavBar"
import PageWrapper from "components/PageWrapper"
import AppRouter from "config/Routes"
import { FaLanguage, FaMoon, FaSun } from "react-icons/fa"
import { BrowserRouter } from "react-router-dom"
import { StyledCenter } from "styles/basic-styles"
import { getTheme, theme } from "styles/BasicTheme"
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'hooks/app';
import { setLanguage } from 'reducers';

const MainContainer = () => {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const dispatch = useDispatch();

  const { language } = useAppSelector((state) => state.general);

  const [languageLocal, setLanguageLocal] = useState(language);
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

  return <ThemeProvider theme={getTheme(darkMode ? 'dark' : 'light')}>
        <CssBaseline/>
        <PageWrapper>
          <BrowserRouter>
            <NavBar/>
            <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              position: 'fixed',
              right: 0,
              bottom: 0,
              zIndex: 1,
              [theme.breakpoints.down('lg')]: {
                backgroundColor: theme.palette.info.light, 
                borderRadius: '50px', 
                padding: '0.5ch', 
                margin: '0ch 1ch' 
              }
            }}
            >
              <IconButton onClick={handleThemeChange} size='small' aria-label='Switch between light and dark mode' >
                {darkMode ? <FaSun /> : <FaMoon/>} 
              </IconButton>
              {!isMobile && <Switch aria-label='Switch between light and dark mode' checked={darkMode} onChange={handleThemeChange}/>}    
                |
                <IconButton onClick={() => { dispatch(setLanguage(languageLocal === 'EN' ? 'CN' : 'EN')); setLanguageLocal(languageLocal === 'EN' ? 'CN' : 'EN');}} size={isMobile ? 'small' : 'medium'}>
                  <FaLanguage/>
                </IconButton>
            </Box>
  
            <StyledCenter id='styledCenter'>
                <AppRouter/>
            </StyledCenter>
          </BrowserRouter>
        </PageWrapper>
      </ThemeProvider>
}

export default MainContainer;