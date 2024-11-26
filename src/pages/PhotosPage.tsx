import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Masonry } from "@mui/lab";
import styled from "@emotion/styled";
import { theme } from "styles/BasicTheme";

// TODO: need to implement this in a way better way - why does it need require?

const StyledPhotosPage = styled(Box)({
  [theme.breakpoints.down("lg")]: {
    padding: "1em",
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
  return (
    <StyledPhotosPage>
      <h1>Photos</h1>
      <Masonry spacing={2} columns={{ xs: 2, sm: 2, md: 3 }}>
        <Box>
          <img
            src={require("../assets/eiffel.webp")}
            loading="lazy"
            width={"100%"}
            alt="Photo of the Eiffel Tower in Paris through some trees"
          ></img>
          <Typography>Eiffel through trees</Typography>
        </Box>
        <Box>
          <img
            src={require("../assets/canada_night_market.webp")}
            loading="lazy"
            width={"100%"}
            alt="Canada Night Market"
          ></img>
          <Typography>night market</Typography>
        </Box>
        <Box>
          <img
            src={require("../assets/paris_split.webp")}
            loading="lazy"
            width={"100%"}
            alt="A view of the Seine River from the Eiffel Tower"
          ></img>
          <Typography>the river Seine</Typography>
        </Box>
        <Box>
          <img
            src={require("../assets/cinque_terre.webp")}
            loading="lazy"
            width={"100%"}
            alt="A view of the town of Vernazza in Cinque Terre"
          ></img>
          <Typography>vernazza</Typography>
        </Box>
        <Box>
          <img
            src={require("../assets/venice_quiet.webp")}
            loading="lazy"
            width={"100%"}
            alt="A photo of a quiet Venice night"
          ></img>
          <Typography>venice (quiet)</Typography>
        </Box>
        <Box>
          <img
            src={require("../assets/ferry_view.webp")}
            loading="lazy"
            width={"100%"}
            alt="A view of Seattle from the ferry"
          ></img>
          <Typography>ferry view</Typography>
        </Box>
        <Box>
          <img
            src={require("../assets/malatang.webp")}
            loading="lazy"
            width={"100%"}
            alt="malatang"
          ></img>
          <Typography>麻辣燙</Typography>
        </Box>
        <Box>
          <img
            src={require("../assets/circle.jpg")}
            loading="lazy"
            width={"100%"}
            alt="circle"
          ></img>
        </Box>
        <Box>
          <img
            src={require("../assets/waterfront.webp")}
            loading="lazy"
            width={"100%"}
            alt="A view of Taipei 101 from Elephant Mountain"
          ></img>
        </Box>
        <Box>
          <img
            src={require("../assets/taipei_101_landscape.webp")}
            loading="lazy"
            width={"100%"}
            alt="A view of Taipei 101 from Elephant Mountain"
          ></img>
          <Typography>象山</Typography>
        </Box>
      </Masonry>
      <Typography textAlign="left">More to come...</Typography>
    </StyledPhotosPage>
  );
};

export default PhotosPage;
