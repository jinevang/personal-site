import React from 'react';
import { StyledFooter } from 'styles/basic-styles';

const Footer = () => {
  return(<StyledFooter>© Evan Jin {(new Date()).getFullYear()}</StyledFooter>)
}

export default Footer;