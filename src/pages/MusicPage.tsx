import React, { useEffect, useState } from "react";

// MUI
import { Box, Grid2, IconButton, Stack, Typography } from "@mui/material";

// Styles and Themes
import styled from "@emotion/styled";
import { theme } from "styles/BasicTheme";
import { useAppSelector } from "hooks/app";
import { strings } from "constants/strings";
import {
  FaPlay,
  FaPlayCircle,
  FaSoundcloud,
  FaStopCircle,
  FaYoutube,
} from "react-icons/fa";
import { colors } from "constants/colors";
import useResponsive from "hooks/useResponsive";

const releases: {
  title: string;
  releaseDate: string;
  image: string;
  soundcloudLink?: string;
  youtubeLinkToEmbed?: string;
  youtubeLink: string;
  tracklist: { title: string; artists?: string[]; length?: number }[];
}[] = [
  {
    title: "An Evan Christmas",
    releaseDate: "12/12/2025",
    soundcloudLink: "https://soundcloud.com/evanjin/sets/an-evan-christmas",
    youtubeLink:
      "https://www.youtube.com/playlist?list=PLziapNNLJO45GDz7DCjPzlvUTnaRBKIFr",
    tracklist: [
      {
        title: "It's Gonna Snow (Intro)",
        artists: ["Evan Jin"],
        length: 1,
      },
      {
        title: "Winter Wonderland",
        artists: ["Evan Jin", "Darren Hartono", "Richie Phan", "Ryan Phan"],
      },
      {
        title: "Where Did My Scarf Go? (Interlude)",
        artists: ["Evan Jin"],
      },
      {
        title: "I'll Be Home for Christmas",
        artists: ["Evan Jin", "Darren Hartono", "Richie Phan", "Ryan Phan"],
      },
      {
        title: "The Christmas Song",
        artists: ["Evan Jin"],
      },
    ],
    youtubeLinkToEmbed:
      "https://www.youtube.com/embed/videoseries?si=bu0KZHKdCbtvAkT-&amp;controls=0&amp;list=PLziapNNLJO45GDz7DCjPzlvUTnaRBKIFr",
    image: "an_evan_christmas.jpeg",
  },
  {
    title: "September 2023: The Most Ambitious Update",
    releaseDate: "09/21/2023",
    soundcloudLink:
      "https://soundcloud.com/evanjin/september-2023-the-most-ambitious-update",
    tracklist: [
      {
        title: "September 2023: The Most Ambitious Update",
        artists: ["Evan Jin", "Darren Hartono", "Richie Phan", "Ryan Phan"],
      },
    ],
    youtubeLink: "https://www.youtube.com/watch?v=UqjIRZik4C4",
    youtubeLinkToEmbed:
      "https://www.youtube.com/embed/UqjIRZik4C4?si=Qk5AkfDSXP_6cZU9",
    image: "September_2023.png",
  },
  // {
  //   title: 'September 2022',
  //   releaseDate: '09/21/2022',
  //   soundcloudLink: 'https://soundcloud.com/evanjin/september?in=evanjin/sets/september',
  //   tracklist: [
  //     {
  //       title: 'September 2022',
  //       artists: ['Evan Jin', 'Darren Hartono', 'Richie Phan']
  //     }
  //   ],
  //   youtubeLinkToEmbed:'https://www.youtube.com/embed/akQwinO5fYE?si=TCUnogDsOLAviAHS',
  //   image: 'september_2022.jpeg',
  //   youtubeLink: 'https://www.youtube.com/watch?v=akQwinO5fYE'
  // }
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
  width: "100%",
});

const MusicPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {isMobile} = useResponsive();
  
  const [playing, setPlaying] = useState<number>();
  const [hovering, setHovering] = useState<number>();

  const { language } = useAppSelector((state) => state.general);

  return (
    <StyledMusicPage>
      <h1>{strings.general.music[language]}</h1>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2ch",
          width: "100%",
        }}
      >
        {releases?.map((r, i) => (
          <Box key={`release-${r.title}`} width="100%">
              {isMobile && <Typography fontSize={22} sx={{ pb: "8px" }} fontWeight={500}>
                  {r.title}
                </Typography>}
            <Stack direction="row" gap="18px" width="100%">
              <Stack width="30%" gap="8px">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    width: "100%",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => {
                    setHovering(i);
                  }}
                  onMouseLeave={() => setHovering(-1)}
                  onClick={(e) => {
                    e.stopPropagation();
                    setPlaying(playing === i ? -1 : i);
                  }}
                >
                  <FaPlayCircle
                    size="100px"
                    style={{
                      position: "absolute",
                      display:
                        hovering === i && playing !== i ? "inherit" : "none",
                    }}
                  />
                  <FaStopCircle
                    size="100px"
                    style={{
                      position: "absolute",
                      display:
                        hovering === i && playing === i ? "inherit" : "none",
                    }}
                  />
                  <img
                    src={require(`../assets/${r.image}`)}
                    style={
                      hovering === i
                        ? {
                            opacity: 0.75,
                            width: "100%",
                            display: "inherit",
                          }
                        : {
                            width: "100%",
                            display: "inherit",
                          }
                    }
                  />
                </Box>
                <Stack direction="row" gap="8px" justifyContent={"center"}>
                  {r.soundcloudLink && (
                    <IconButton href={r.soundcloudLink} target="_blank">
                      <FaSoundcloud color={colors.mediaColors.soundcloud} />
                    </IconButton>
                  )}
                  {r.youtubeLink && (
                    <IconButton href={r.youtubeLink} target="_blank">
                      <FaYoutube color={colors.mediaColors.youtube} />
                    </IconButton>
                  )}
                </Stack>
              </Stack>
              <Stack>
                {!isMobile && <Typography fontSize={22} sx={{ pb: "8px" }} fontWeight={500}>
                  {r.title}
                </Typography>}
                <Stack width="100%" gap="6px">
                  {r?.tracklist?.map((t, ti) => (
                    <Stack direction='row' alignItems='baseline' gap='4px' key={`release-${r.title}-track-${t.title}`}
>
                    <Typography fontSize={12} color='textSecondary'>{`${ti + 1}. `}</Typography>
                    <Stack>
                    <Typography
                          sx={{
                            wordBreak: 'break-word',
                            textWrap: 'pretty',
                            flexWrap: 'wrap',
                          }}
                          // fontWeight={playing === i && r.tracklist.length === 1 ? 550 : 'inherit'}
                          >
                          {t.title}
                        </Typography>
                         <Stack direction="row" gap="4px">
                    {t?.artists?.map((a, i) => (
                            <Typography
                              fontSize={12}
                              key={`release-${r.title}-track-${t.title}-${a}`}
                            >
                              {a}
                              {i !== t?.artists?.length - 1 && ", "}
                              {i === t?.artists?.length - 2 && " & "}
                            </Typography>
                          ))}
                        </Stack>
                          </Stack>


                    </Stack>
                    // <Grid2
                    //   container
                    //   key={`release-${r.title}-track-${t.title}`}
                    //   spacing={2}
                    // >
                    //   <Grid2 size={0.25}>
                    //     <Typography>{`${ti + 1}. `}</Typography>
                    //   </Grid2>
                    //   <Grid2 display="flex" flexDirection={"column"} gap="2px">
                    //     <Typography
                    //       sx={{
                    //         wordBreak: 'break-word',
                    //         textWrap: 'pretty',
                    //         flexWrap: 'wrap',
                    //       }}
                    //     // fontWeight={playing === i && r.tracklist.length === 1 ? 550 : 'inherit'}
                    //     >
                    //       {t.title}
                    //     </Typography>
                    //     <Stack direction="row" gap="4px">
                    //       {t?.artists?.map((a, i) => (
                    //         <Typography
                    //           fontSize={12}
                    //           key={`release-${r.title}-track-${t.title}-${a}`}
                    //         >
                    //           {a}
                    //           {i !== t?.artists?.length - 1 && ", "}
                    //           {i === t?.artists?.length - 2 && " & "}
                    //         </Typography>
                    //       ))}
                    //     </Stack>
                    //   </Grid2>
                    // </Grid2>
                  ))}
                </Stack>
              </Stack>
              <Box display={"none"}>
                <iframe
                  width="560"
                  height="315"
                  src={`${r.youtubeLinkToEmbed}&autoplay=${
                    playing === i ? 1 : 0
                  }`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </Box>
            </Stack>
          </Box>
        ))}
      </Box>
    </StyledMusicPage>
  );
};

export default MusicPage;
