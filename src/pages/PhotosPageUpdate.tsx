import React, { useState } from "react";
import { Box, Modal, Typography } from "@mui/material";
import { Masonry } from "@mui/lab";
import styled from "@emotion/styled";

// TODO: need to implement this in a way better way - why does it need require?

const StyledPhotosPage = styled(Box)({
  padding: "2em",
  "& img": {
    borderRadius: "5px",
  },
  userSelect: "none",
});

const PhotosPageUpdate = () => {
  return (
    <StyledPhotosPage>
      <h1>Photos</h1>
      <Masonry spacing={3} columns={{ xs: 2, sm: 2, md: 3 }}>
        <Box>
          <img
            src={require("../assets/eiffel.webp")}
            loading="lazy"
            width={"100%"}
            alt="Photo of the Eiffel Tower in Paris through some trees"
          ></img>
          <Typography fontSize={14} textAlign={"center"}>
            <i>Eiffel through trees</i>
          </Typography>
        </Box>
        <Box>
          <img
            src={require("../assets/canada_night_market.webp")}
            loading="lazy"
            width={"100%"}
            alt="Canada Night Market"
          ></img>
          <Typography fontSize={14} textAlign={"center"}>
            <i>night market</i>
          </Typography>
        </Box>
        <Box>
          <img
            src={require("../assets/paris_split.webp")}
            loading="lazy"
            width={"100%"}
            alt="A view of the Seine River from the Eiffel Tower"
          ></img>
          <Typography fontSize={14} textAlign={"center"}>
            <i>the river Seine</i>
          </Typography>
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
            src={require("../assets/venice_quiet.webp")}
            loading="lazy"
            width={"100%"}
            alt="A photo of a quiet Venice night"
          ></img>
          <Typography fontSize={14} textAlign={"center"}>
            <i>venice (quiet)</i>
          </Typography>
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
          <Typography fontSize={14} textAlign={"center"}>
            <i>麻辣燙</i>
          </Typography>
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
          <Typography fontSize={14} textAlign={"center"}>
            <i>象山</i>
          </Typography>
        </Box>
      </Masonry>
      <Typography textAlign="left">More to come...</Typography>
    </StyledPhotosPage>
  );
};

export default PhotosPageUpdate;
