import { colors } from 'constants/colors';
import React from 'react';
import styled from 'styled-components';

const StyledNavBar = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2ch;
  position: fixed;
  border: 1px solid green;

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  a:visited {
    color: ${colors.basicBlue.darker};
  }
`;


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