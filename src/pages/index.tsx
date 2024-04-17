import React from 'react';
import { StyledIndexScreen } from '../styles/basic-styles';
import NavBar from '../components/NavBar';

const IndexPage = () => {
  return(
    <StyledIndexScreen>
      <div>
        <NavBar/>
      </div>
      <div>
        <h4>
          Hello hello
        </h4>
        <p>Welcome to the site by Evan</p>
        <p>Other things will be added here eventually</p>
      </div>
    </StyledIndexScreen>
  );
};

export default IndexPage;