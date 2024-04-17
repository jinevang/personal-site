import styled from 'styled-components';

export const StyledNavBar = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 12px;

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  a:visited {
    color: blue;
  }
`;