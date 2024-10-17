import styled from '@emotion/styled';
import { Toolbar, useTheme } from '@mui/material';
import { colors } from 'constants/colors';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { theme } from 'styles/BasicTheme';

const StyledNavBar = styled(Toolbar)<{textColor?: string, bgColor?: string}>(({ textColor, bgColor }) =>({
  backgroundColor: 'transparent',
  ":active": {
    backgroundColor: 'transparent',
  },

  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2ch',
    position: 'fixed',
    alignItems: 'center',
  
    left: '10ch',
    top: '40vh',
    bottom: '50vh',
    width: 'fit-content',
    backgroundColor: 'transparent',
  },
  zIndex: 1,

  [theme.breakpoints.down('lg')]: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '3ch',
    position: 'fixed',
    width: '100vw',
    backgroundColor: bgColor ?? colors.basicBlue.default,
    ":active": {
    backgroundColor: bgColor ?? colors.basicBlue.default,
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
  
  '& a': {
    color: textColor??colors.basicBlue.darkest,
    textDecoration: 'none',
    backgroundColor: 'transparent',
    textAlign: 'left',
    ":focus": {
      backgroundColor: 'transparent',
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
}));

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
  const theme = useTheme();
  const navToRoute = (route: string) => {
    navigate(route);
  }

  return(<StyledNavBar textColor={theme.palette.secondary.contrastText} bgColor={theme.palette.primary.main}>
    {navItems.map((item) => (
      <a key={item.href} onClick={() => {navToRoute(item.href)}}>{item.label}</a>
    ))}

  </StyledNavBar>
  );
};

export default NavBar;