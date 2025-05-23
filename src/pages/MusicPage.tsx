import React, { useEffect } from "react";

// MUI
import { Box, Stack, Typography } from "@mui/material";

// Styles and Themes
import styled from "@emotion/styled";
import { theme } from "styles/BasicTheme";
import { useAppSelector } from "hooks/app";
import { strings } from "constants/strings";

const videos = [
  {
    id: "september-2023",
    title: "September 2023",
    credits:
      "Arranged by: Ryan Phan, Evan Jin, Darren Hartono, Richie Phan\nSolo Vocals: Richie Phan, Ryan Phan, Evan Jin, Darren Hartono\nBacking Vocals: Evan Jin, Ryan Phan\nPiano: Evan Jin, Ryan Phan\nBeatboxing: Darren Hartono\nCowbell: Ryan Phan\nGuitar (listen closely [it's muted]): Dustin Sumarli \n Moral support: Matthew Ly\nOriginal Song by Earth, Wind & Fire\nprod by jinevang",
    link: "https://www.youtube.com/embed/UqjIRZik4C4?si=BSEek4zISotZGbO4",
  },
  {
    id: "home-for-christmas",
    title: "I'll Be Home For Christmas",
    credits:
      "Arranged by Darren Hartono, Evan Jin, Richie Phan, Ryan Phan\nLead Vocals: Darren Hartono, Richie Phan, Evan Jin\nBacking Vocals: Darren Hartono, Richie Phan, Evan Jin\nBass: Ryan Phan\nPiano: Evan Jin\nSnaps: Evan Jin, Ryan Phan\nprod jinevang\nLyrics by Kim Gannon\nComposed by Walter Kent",
    link: "https://www.youtube.com/embed/8ZjBeWsHQ90?si=WppzEUg5291qFzwJ",
  },
  {
    id: "winter-wonderland",
    title: "Winter Wonderland",
    credits:
      "Performed by Darren Hartono, Richie Phan, Ryan Phan, & Evan Jin\nArranged by ALotOfRice, ScoopGuy, Slendarp, jinevang\nSolo Vocals: ALotOfRice, ScoopGuy, jinevang\nSolo: Slendarp\nPiano: Slendarp\nDrums: ALotOfRice\nBacking Vocals: ScoopGuy, Slendarp, jinevang\nBass (Cello): ScoopGuy\nprod. by jinevang\n\nOriginal composition/lyrics by Felix Bernard and Richard Bernhard Smith",
    link: "https://www.youtube.com/embed/Bj6i43N8Vy4?si=vKnWy4FvCk8RAJYs",
  },
];

const StyledMusicPage = styled(Box)({
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
  iframe: {
    border: "none",
    borderRadius: "5px",
  },
  paddingBottom: "10rem",
});

const MusicPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {language} = useAppSelector((state) => state.general); 

  // const [current, setCurrent] = useState('');

  // const handleVideoClick = (id: string) => {
  //   console.log('set with', id);
  //   setCurrent(id);
  // }

  return (
    <StyledMusicPage>
      <h1>{strings.general.music[language]}</h1>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "2ch" }}>
        {videos.map((v, i) => (
          <Box
            key={`video-frame-${i}`}
            sx={{
              display: "flex",
              gap: "2ch",
              justifyContent: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <iframe
              style={{ flexShrink: 0 }}
              key={`video-${i}`}
              width="560"
              height="315"
              src={v.link}
              title="YouTube video player"
              allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            ></iframe>
            {
              <Stack key={`video-info-${i}`}>
                <Typography
                  fontFamily={"inherit"}
                  fontSize={20}
                  textOverflow={"ellipsis"}
                >
                  {v.title}
                </Typography>
                <br/>
                <Box sx={{
                  [theme.breakpoints.down('md')]: {
                    display: 'none'
                  }
                }}>{v.credits.split('\n').map((l, i) => <Typography fontSize={12} key={i}>{l}</Typography>)}</Box>
              </Stack>
            }
          </Box>
        ))}
      </Box>
    </StyledMusicPage>
  );
};

export default MusicPage;
