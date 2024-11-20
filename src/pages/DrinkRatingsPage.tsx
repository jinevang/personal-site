import React from 'react';
import { Box, Chip, CircularProgress, Typography } from '@mui/material';
import { useGetPlacesQuery } from 'api/apiSlice';
import { FaBook, FaCoffee } from 'react-icons/fa';
import { FaBurger } from 'react-icons/fa6';
import styled from '@emotion/styled';
import { theme } from 'styles/BasicTheme';

const StyledDrinksPage = styled(Box)({
  [theme.breakpoints.down('lg')]: {
    'iframe': {
      width: '100%',
    },
    width: '90vw'
  },
  [theme.breakpoints.up('lg')]: {
    paddingTop: '1rem',
    paddingBottom: '5rem'
  },

  paddingBottom: '10rem'
})


const availableLocations = [
  'TP Tea 茶湯會', 'ShareTea', 'Happy Lemon', 'Coco 都可', 'Boiling Point 沸點'
]

const DrinkRatingsPage = () => {

  const {data, isLoading, isError } = useGetPlacesQuery({});

  const rows = data?.values.slice(1);
  const header = data?.values[0];


  const headerToKeyMap: { [key: string]: keyof DrinkLocation } = {
    Name: 'name',
    City: 'city',
    Type: 'type',
    'Study/Work?': 'studyWorkRating',
    'Drinks?': 'drinkRating',
    'Food?': 'foodRating',
    'Top Drinks': 'topDrinks',
    'Top Food': 'topFood',
    Notes: 'notes'
  };

  const formattedData: DrinkLocation[] = rows?.map((row) => {
    return row.reduce((acc, value, index) => {
      const customKey = headerToKeyMap[header[index]];
      if (customKey) {
        acc[customKey] = value;
      }
      return acc;
    }, {} as DrinkLocation);
  });

  return <StyledDrinksPage>
    <h1>Drink Ratings</h1>
    {formattedData && formattedData.map((location, i) => 
      <Box sx={{
        borderBottom: `1px solid lightgray`,
        padding: '1ch 2ch',
        width: '100%',
      }}key={i}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <Typography fontSize={20}>{location.name}</Typography>
            {<Chip label={location.type}/>}
          </Box>
          <Typography fontSize={12} flexShrink={0}>{location.city}</Typography>
        </Box>
        <Typography color='textPrimary' fontSize={12} mt={'1ch'}>Ratings</Typography>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          {location.studyWorkRating && location.studyWorkRating !== '-' && <><FaBook/>{location.studyWorkRating.replace('*', '')}</>}
          {location.drinkRating && location.drinkRating !== '-' && <><FaCoffee/>{location.drinkRating.replace('*', '')}</>}
          {location.foodRating && location.foodRating !== '-' && <><FaBurger/>{location.foodRating.replace('*', '')}</>}
        </Box>
        <Typography mt={'1ch'} fontSize={14} color='textSecondary'>
          {location.notes}
        </Typography>
      </Box>
    ) || isLoading && <CircularProgress/> || isError && <Typography>Oh no! There has been an error getting the drink ratings.</Typography>}
  </StyledDrinksPage>;
};

export default DrinkRatingsPage;