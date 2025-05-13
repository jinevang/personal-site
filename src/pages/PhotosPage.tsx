import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Masonry } from "@mui/lab";
import styled from "@emotion/styled";
import { theme } from "styles/BasicTheme";
import { useAppSelector } from "hooks/app";

// TODO: need to implement this in a way better way - why does it need require?

const StyledPhotosPage = styled(Box)({
  [theme.breakpoints.down("lg")]: {
    padding: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  padding: "2em",
  userSelect: "none",
  "& p": {
    fontSize: 14,
    textAlign: "center",
    fontStyle: "italic",
  },
});

const PhotosPage = () => {

  const {language} = useAppSelector((state) => state.general);
  return (
    <StyledPhotosPage>
      <h1>{language === 'EN' ? 'Photos' : '照片'}</h1>
      <Masonry spacing={1.5} columns={{ xs: 2, sm: 2, md: 3 }}>
        <Box>
          <img
            src={require("../assets/eiffel.webp")}
            loading="lazy"
            width={"100%"}
            alt="Photo of the Eiffel Tower in Paris through some trees"
          ></img>
        </Box>
        <Box>
          <img
            src={require("../assets/canada_night_market.webp")}
            loading="lazy"
            width={"100%"}
            alt="Canada Night Market"
          ></img>
        </Box>
        <Box>
          <img
            src={require("../assets/paris_split.webp")}
            loading="lazy"
            width={"100%"}
            alt="A view of the Seine River from the Eiffel Tower"
          ></img>
        </Box>
        <Box>
          <img
            src={require("../assets/cinque_terre.webp")}
            loading="lazy"
            width={"100%"}
            alt="A view of the town of Vernazza in Cinque Terre"
          ></img>
        </Box>
        <Box>
          <img
            src={require("../assets/tulips.webp")}
            loading="lazy"
            width={"100%"}
            alt="The Roozengaarde Tulips"
          ></img>
        </Box>
        <Box>
          <img
            src={require("../assets/venice_quiet.webp")}
            loading="lazy"
            width={"100%"}
            alt="A photo of a quiet Venice night"
          ></img>
        </Box>

        <Box>
          <img
            src={require("../assets/ferry_view.webp")}
            loading="lazy"
            width={"100%"}
            alt="A view of Seattle from the ferry"
          ></img>
        </Box>
        <Box>
          <img
            src={require("../assets/malatang.webp")}
            loading="lazy"
            width={"100%"}
            alt="malatang"
          ></img>
        </Box>
        <Box>
          <img
            src={require("../assets/circle.jpg")}
            loading="lazy"
            width={"100%"}
          ></img>
        </Box>
        <Box>
          <img
            src={require("../assets/waterfront.webp")}
            loading="lazy"
            width={"100%"}
          ></img>
        </Box>
        <Box>
          <img
            src={require("../assets/taipei_101_landscape.webp")}
            loading="lazy"
            width={"100%"}
            alt="A view of Taipei 101 from Elephant Mountain"
          ></img>
        </Box>
      </Masonry>
      <Typography textAlign="left">More to come...</Typography>
    </StyledPhotosPage>
  );
};

export default PhotosPage;
