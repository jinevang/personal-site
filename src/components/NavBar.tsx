import React from 'react';
import { StyledNavBar } from 'styles/nav-bar';

const NavBar = () => {
  return(<StyledNavBar>
    <a href='/'>Home</a>
    <a href='/resume'>Resume</a>
    <a href='/photos'>Photos</a>
    <a href='/music'>Music</a>
    <a href='/about'>About</a>
  </StyledNavBar>);
};

export default NavBar;