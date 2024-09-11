import styled from 'styled-components';
import { colors } from 'constants/colors';

export const StyledNavBar = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2ch;
  position: fixed;
  width: 100%;

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