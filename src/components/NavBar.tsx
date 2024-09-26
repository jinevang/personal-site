import styled from '@emotion/styled';
import { AppBar, Grow, ThemeProvider } from '@mui/material';
import { colors } from 'constants/colors';
import React from 'react';
import { useParams } from 'react-router-dom';
import { theme } from 'styles/BasicTheme';


const StyledNavBar = styled(AppBar)({
  backgroundColor: 'transparent',
  ":active": {
    backgroundColor: 'transparent',
  },
  ":focus": {
    backgroundColor: 'transparent',
  },
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2ch',
    position: 'fixed',
  
    left: '10ch',
    top: '40vh',
    bottom: '50vh',
    width: '20vw',
    backgroundColor: 'transparent',
  },

  [theme.breakpoints.down('md')]: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '3ch',
    backgroundColor: colors.basicBlue.default,
    transition: '0.5s normal',
    fontSize: '26px',
  },

  boxShadow: 'none',
  
  '& a': {
    textDecoration: 'none',
    backgroundColor: 'none',
    ":focus": {
      backgroundColor: 'none',

    },
    ":hover": {
      textDecoration: 'underline',
    },
    ":active": {
      textDecoration: 'underline',
      backgroundColor: 'transparent'
    },
    ":visited": {
      color: colors.basicBlue.darker,
    },
    ":not:visited": {
      color: colors.basicBlue.darker
    }
  }
});

const NavBar = () => {

  const { location } = useParams();
  console.log(location);

  return(<StyledNavBar>
    
    <a href='/'>Home</a>
    <a href='/resume'>Resume</a>
    <a href='/photos'>Photos</a>
    <a href='/music'>Music</a>
    <a href='/about'>About</a>
  </StyledNavBar>
  );
};

export default NavBar;