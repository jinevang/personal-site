import React, { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Chip,
  CircularProgress,
  IconButton,
  MenuItem,
  Select,
  Snackbar,
  Typography,
} from "@mui/material";
import { useGetPlacesQuery } from "api/apiSlice";
import { FaBook, FaCoffee } from "react-icons/fa";
import { FaBurger, FaXmark } from "react-icons/fa6";

import styled from "@emotion/styled";
import { theme } from "styles/BasicTheme";
import { useAppSelector } from "hooks/app";

const StyledDrinksPage = styled(Box)({
  [theme.breakpoints.down("lg")]: {
    iframe: {
      width: "100%",
    },
    width: "90vw",
  },
  [theme.breakpoints.up("lg")]: {
    paddingTop: "1rem",
    paddingBottom: "5rem",
  },

  paddingBottom: "10rem",
});

const availableLocations = [
  "TP Tea 茶湯會",
  "ShareTea",
  "Happy Lemon",
  "Coco 都可",
  "Boiling Point 沸點",
];

const DrinkRatingsPage = () => {
  const { data, isLoading, isError } = useGetPlacesQuery({});

  const [sortStyle, setSortStyle] = useState("city");
  const [drinkLocationData, setDrinkLocationData] = useState<DrinkLocation[]>(
    []
  );
  const rows = data?.values.slice(1);
  const header = data?.values[0];
  const [alertOpen, setAlertOpen] = useState(true);

  const {language} = useAppSelector((state) => state.general);

  const handleSort = (e) => {
    setSortStyle(e.target.value);

    switch (e.target.value) {
      case "city":
        setDrinkLocationData(
          drinkLocationData.sort((a, b) => a.city.localeCompare(b.city))
        );
        break;
      case "drinkRating":
        setDrinkLocationData(
          drinkLocationData.sort(
            (a, b) =>
              parseInt(b.drinkRating.replace("*", "")) -
              parseInt(a.drinkRating.replace("*", ""))
          )
        );
        break;
      case "name":
        setDrinkLocationData(
          drinkLocationData.sort((a, b) => a.name.localeCompare(b.name))
        );
        break;
      case "average":
        setDrinkLocationData(
          drinkLocationData.sort(
            (a, b) =>
              parseInt(b.drinkRating.replace("*", "")) -
              parseInt(a.drinkRating.replace("*", ""))
          )
        );
        break;
      default:
        break;
    }
  };

  const headerToKeyMap: { [key: string]: keyof DrinkLocation } = {
    Name: "name",
    City: "city",
    Type: "type",
    "Study/Work?": "studyWorkRating",
    "Drinks?": "drinkRating",
    "Food?": "foodRating",
    "Top Drinks": "topDrinks",
    "Top Food": "topFood",
    Notes: "notes",
  };

  useEffect(() => {
    const formattedData: DrinkLocation[] = rows?.map((row) => {
      return row.reduce((acc, value, index) => {
        const customKey = headerToKeyMap[header[index]];
        if (customKey) {
          acc[customKey] = value;
        }
        return acc;
      }, {} as DrinkLocation);
    });
    if (formattedData) {
      setDrinkLocationData(formattedData);
    }
  }, [data]);

  return (
    <StyledDrinksPage>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "left",
          width: '100%'
        }}
      >
        <h1>Drink Ratings</h1>
        {language === 'CN' && <Snackbar color='info' message={'不好意思，這頁還沒完成翻譯！'} action={<IconButton color={'inherit'} onClick={() => setAlertOpen(false)}><FaXmark/></IconButton>} open={alertOpen} anchorOrigin={{vertical: 'top', horizontal: 'center'}} onClose={() => setAlertOpen(false)}/>}
        
        <Select
          sx={{
            height: "5ch",
          }}
          value={sortStyle}
          onChange={handleSort}
        >
          <MenuItem value={"city"}>Sort by City</MenuItem>
          <MenuItem value={"drinkRating"}>Sort by Drink Rating</MenuItem>
          <MenuItem value={"name"}>Sort by Location Name</MenuItem>
        </Select>
      </Box>
      <Typography>
        List of cafés and drink shops with related ratings (rated out of 7)
      </Typography>
      {(drinkLocationData &&
        drinkLocationData.map((location, i) => (
          <Box
            sx={{
              borderBottom: `1px solid lightgray`,
              padding: "1ch 2ch",
              width: "100%",
            }}
            key={i}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <Typography fontSize={20}>{location.name}</Typography>
                {<Chip label={location.type} size="small" />}
              </Box>
              <Typography fontSize={12} flexShrink={0} pl="1rem">
                {location.city}
              </Typography>
            </Box>
            <Typography color="textPrimary" fontSize={12} mt={"1ch"}>
              Ratings
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              {location.drinkRating && location.drinkRating !== "-" && (
                <>
                  <FaCoffee />
                  {location.drinkRating.replace("*", "")}
                </>
              )}
              {location.foodRating && location.foodRating !== "-" && (
                <>
                  <FaBurger />
                  {location.foodRating.replace("*", "")}
                </>
              )}
              {location.studyWorkRating && location.studyWorkRating !== "-" && (
                <>
                  <FaBook />
                  {location.studyWorkRating.replace("*", "")}
                </>
              )}
            </Box>
            <Typography mt={"1ch"} fontSize={14} color="textSecondary">
              {location.notes}
            </Typography>
          </Box>
        ))) ||
        (isLoading && <CircularProgress />) ||
        (isError && (
          <Typography>
            Oh no! There has been an error getting the drink ratings.
          </Typography>
        ))}
    </StyledDrinksPage>
  );
};

export default DrinkRatingsPage;
