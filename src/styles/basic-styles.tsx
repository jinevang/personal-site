import { colors } from 'constants/colors';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { theme } from './BasicTheme';

export const StyledCenter = styled(Box)({
  position: 'absolute',
  top: '10%',
  gap: '100px',
  
  [theme.breakpoints.up('md')]: {
    marginLeft: '-50px',
    display: 'flex',
    justifyContent: 'space-between',
    right: '25vw',
    width: '70%',
    left: '25vw',
    paddingBottom: '25px',
    alignItems: 'top',
  },

  [theme.breakpoints.down('md')]: {
    top: '12vh',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 2ch',
    left: 0,
    marginLeft: 0,
    'h1': {
      display: 'flex',
      justifyContent: 'center'
    },
  }
})

export const StyledFooter = styled(Box)({
  position: 'fixed',
  bottom: 0,
  width: '100%',
  backgroundColor: colors.basicBlue.default,
  padding: '6px 8px',
  textAlign: 'right',
  right: 0,
})