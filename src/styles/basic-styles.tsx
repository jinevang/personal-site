import { colors } from 'constants/colors';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { theme } from './BasicTheme';

export const StyledCenter = styled(Box)({
  position: 'absolute',
  gap: '100px',

  '& p': {
    fontFamily: 'inherit',
  },
  [theme.breakpoints.up('lg')]: {
    marginLeft: '-50px',
    display: 'flex',
    justifyContent: 'space-between',
    right: '25vw',
    width: '70%',
    left: '25vw',
    alignItems: 'top',
  },

  [theme.breakpoints.down('lg')]: {
    top: '10vh',

    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    width: '100vw',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '100vw',
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