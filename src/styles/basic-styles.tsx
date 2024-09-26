import styled from 'styled-components';
import { colors } from 'constants/colors';

export const StyledIndexScreen = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  justify-content: space-between;

  overflow: auto;
`;

export const StyledCenter = styled.div`
  position: absolute;
  margin-left: -50px;

  top: 10%;

  display: flex;
  flex-direction: row;
  gap: 100px;
  justify-content: space-between;
  align-items: top;
  right: 25vw;
  width: 70%;
  left: 25vw;

  padding-bottom: 25px;
`;

export const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${colors.basicBlue.default};

  padding: 6px 8px;
  text-align: right;
  right: 0;
  `;