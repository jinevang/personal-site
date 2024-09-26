import styled from 'styled-components';
import { colors } from 'constants/colors';

export const StyledNavBar = styled.nav`
@media (min-width: 1300px) {
  display: flex;
  flex-direction: column;
  gap: 2ch;
  position: fixed;
  width: 100%;
}

  font-family: "Poppins"
  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  a:visited {
    color: ${colors.basicBlue.darker};
  }

@media(max-width: 738px) {
  color: red;
}
`;