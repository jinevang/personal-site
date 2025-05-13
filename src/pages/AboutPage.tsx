import React, { useEffect } from "react";

// Components
import { Box, Button, List, ListItem, Typography, useTheme } from "@mui/material";

// Styles & Colors
import styled from "@emotion/styled";
import { theme } from "styles/BasicTheme";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useAppSelector } from "hooks/app";

const playlists = [
  "5xiUSBjTZa8DZzOLJFMYg8", // jazz & 老歌
  "6dwmmB5DzfJeyMUEyFkKPV", // 時間打轉
  "3br0Q3fIrEGVtrAp8ksB5Z", // mandopop
  "1gZEFUIYFqoAh7cJvp0JD7", // late fall early morning big band vocals
  "0DmIIaWaVw5GAnA2OJScf2", // coding radio
  "1S94aeTnzwZa0NL3tRKvI9", // early year; cold winter
  "1Tkn4QCl3oPy08451x6rlA", // notion
  "1wWVkGgPVEGQIWsWBTY8Hg", // jazz for work
  "4UcLmMTsM9l2M5RIAlGywF", // city pop
  "4pyHrMd1wzUHeC9igtWEP1", // we'll cross that bridge when we get there
  "6sxMwyfCmjmTUh8GnFljVD", // savory sausage at the narita airport
  "0hkvFlUONP2FMBuoXOLyZW", // night vibe (chill)
  "7wBJhQp4PmhAjCh7SbQYVQ", // if only coffee tasted the way it smelled
  "5OeHhfV2E5COeoAmmNbHcI", // favorites
];

const StyledAbout = styled(Box)<{ linkcolor: string }>(({ linkcolor }) => ({
  [theme.breakpoints.down("lg")]: {
    paddingTop: 0,
    paddingBottom: "3rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "90vw",
  },

  "& a": {
    color: linkcolor,
    ":visited": {
      color: linkcolor,
    },
    ":active": {
      color: linkcolor,
    },
    ":hover": {
      color: linkcolor,
    },
  },

  [theme.breakpoints.up("lg")]: {
    paddingTop: "12vh",
  },
}));

const AboutPage = () => {

  const {language} = useAppSelector((state) => state.general);

  function seedBasedOnDay(arrLength: number): number {
    const today = new Date().toISOString().split("T")[0];

    const seed = Array.from(today).reduce(
      (acc, char) => acc + char.charCodeAt(0),
      0
    );

    const seededRandom = (seed: number): number => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };

    const randomIndex = Math.floor(seededRandom(seed) * arrLength);

    return randomIndex;
  }

  const theme = useTheme();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <StyledAbout linkcolor={theme.palette.primary.contrastText}>
      <h1>{language === 'EN' ? 'About' : '自我介紹'}</h1>
      <p>{language === 'EN' ? 'Hi, I\'m Evan! I\'m a software engineer based in Seattle.' : '哈囉！我是Evan，我是位軟體工程師。'}</p>
      <List>
        <ListItem disablePadding>
          🦦 {language === 'EN' ? 'recently graduated CSSE student from UWB' : '最近從UWB畢業'}
        </ListItem>
        <ListItem disablePadding>🧑🏻‍💻 full-stack {language === 'EN' ? 'software developer' : '軟體工程師'}</ListItem>
        <ListItem disablePadding>
          🎵 {language === 'EN' ? 'I love playing, making, and listening to music' : '喜歡做音樂'}
        </ListItem>
        <ListItem disablePadding>🧗🏻 {language === 'EN' ? 'I love rock climbing and tennis' : '我超喜歡攀岩跟打網球'}</ListItem>
        <ListItem disablePadding>
          <span>
            🎹 {language === 'EN' ? 'take a look at my' : '看看我的'}{" "}
            <a
              href="https://bit.ly/albumratings"
              target="_blank"
              rel="noopener noreferrer"
            >
              album rating list
            </a>
          </span>
        </ListItem>
        <ListItem disablePadding>
          <span>
            🧋 {language === 'EN' ? 'take a look at my' : '看看我的'}{" "}
            <a
              href="https://bit.ly/drinkratings"
              target="_blank"
              rel="noopener noreferrer"
            >
              drink ratings (rated out of 7)
            </a>
          </span>
        </ListItem>
        <ListItem disablePadding>
          <span>
            🎶 {language === 'EN' ? 'follow me on' : '追蹤我的'}{" "}
            <a
              href="https://open.spotify.com/user/jinsilky?si=758524874766450b"
              target="_blank"
              rel="noopener noreferrer"
            >
              spotify!
            </a>
          </span>
        </ListItem>
        <br />
        {language === 'EN' ? 'In my recent rotation:' : '最近在聽的歌和播放清單：'}
        <ListItem disablePadding>
          <iframe
            style={{ borderRadius: "12px", borderColor: "transparent" }}
            src={`https://open.spotify.com/embed/playlist/${
              playlists[seedBasedOnDay(playlists.length)]
            }`}
            width="100%"
            height="100ch"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </ListItem>
      </List>
      <Typography sx={{ fontFamily: "inherit", fontSize: 20, fontWeight: 600 }}>
        {language === 'EN' ? 'Links' : '連結'}
      </Typography>
      <List
        sx={{
          [theme.breakpoints.down("lg")]: {
            display: "flex",
            gap: "3ch",
          },
        }}
      >
        <ListItem
          disablePadding
          alignItems="center"
          sx={{ display: "flex", gap: "0.5ch" }}
        >
          <FaGithub />{" "}
          <a
            href="https://github.com/jinevang"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </ListItem>
        <ListItem
          disablePadding
          alignItems="center"
          sx={{ display: "flex", gap: "0.5ch" }}
        >
          <FaLinkedin />
          <a
            href="https://www.linkedin.com/in/evanjin/"
            target="_blank"
            rel="nooperner noreferrer"
          >
            LinkedIn
          </a>
        </ListItem>
      </List>
    </StyledAbout>
  );
};

export default AboutPage;
