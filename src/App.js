import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AppRouter from 'config/Routes';
// Components
import NavBar from 'components/NavBar';
import { Box, CssBaseline, IconButton, Switch, ThemeProvider, useMediaQuery, useTheme } from '@mui/material';

// Styles
import { StyledCenter } from 'styles/basic-styles';
import PageWrapper from 'components/PageWrapper';

// Icons, Themes, Styles
import { darkTheme, getTheme, lightTheme, theme } from 'styles/BasicTheme';
import { FaMoon } from 'react-icons/fa6';
import { store } from 'api/store';
import { Provider, useDispatch } from 'react-redux';
import { useAppSelector } from 'hooks/app';
import { FaLanguage } from 'react-icons/fa';
import { setLanguage } from 'reducers';
import MainContainer from 'pages/MainContainer';

function App() {
  return (
    <Provider store={store}>
      <MainContainer/>
    </Provider>

  );
}

export default App;