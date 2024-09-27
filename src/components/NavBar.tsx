import styled from '@emotion/styled';
import { AppBar, Grow, ThemeProvider } from '@mui/material';
import { colors } from 'constants/colors';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { theme } from 'styles/BasicTheme';

const StyledNavBar = styled(AppBar)({
  backgroundColor: 'transparent',
  ":active": {
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
    width: 'fit-content',
    backgroundColor: 'transparent',
  },

  [theme.breakpoints.down('md')]: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '3ch',
    backgroundColor: colors.basicBlue.default,
    ":active": {
    backgroundColor: colors.basicBlue.default,
    },
    transition: '0.5s normal',
    fontSize: '18px',
    height: '10vh',
    '& a': {
      ":visited": {
      color: 'white',
    },
    ":not:visited": {
      color: 'white'
    }
    }
  },

  boxShadow: 'none',
  
  'a': {
    color: colors.basicBlue.darker,
    textDecoration: 'none',
    backgroundColor: 'none',
    ":focus": {
      backgroundColor: 'none',
    },
    ":hover": {
      textDecoration: 'underline',
      cursor: 'pointer',
    },
    ":active": {
      textDecoration: 'underline',
    },
    ":visited": {
      color: colors.basicBlue.darker,
    },
    ":not:visited": {
      color: colors.basicBlue.darker
    }
  }
});

const navItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Resume',
    href:'/resume',
  },
  {
    label: 'Photos',
    href: '/photos',
  },
  {
    label: 'Music',
    href: '/music'  
  },
  {
    label: 'About',
    href: '/about'
  }
]

const NavBar = () => {

  const navigate = useNavigate();

  const navToRoute = (route: string) => {
    navigate(route);
  }

  return(<StyledNavBar>
    {navItems.map((item) => (
      <a key={item.href} onClick={() => {navToRoute(item.href)}}>{item.label}</a>
    ))}

  </StyledNavBar>
  );
};

export default NavBar;