import React, { useEffect, useRef } from "react";

// Components
import { Box, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Masonry } from "@mui/lab";

// Icons, Themes, Colors
import styled from "@emotion/styled";
import { theme } from "styles/BasicTheme";
import { colors } from "constants/colors";
import { IoMail } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { generalSlice } from '../reducers/index';
import { useAppSelector } from "hooks/app";

const StyledIndexPage = styled(Box)({
  width: "60vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyItems: "center",
  alignContent: "center",
  height: "100vh",
  overflowX: 'hidden',

  [theme.breakpoints.down("lg")]: {
    width: "95%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

const Me = styled(Box)({
  [theme.breakpoints.down("md")]: {
    "& img": {
      display: "none",
    },
  },
  [theme.breakpoints.between("md", "lg")]: {
    "& img": {
      position: "fixed",
      bottom: "-10%",
      right: "80%",
      width: "30%",
    },
  },
  [theme.breakpoints.up("lg")]: {
    "& img": {
      position: "absolute",
      bottom: "0",
      right: "89%",
      width: "30%",
    },
  },
});

const Mailto = ({ email, subject, body, children }: any) => {
  return (
    <Box width={"100%"}>
      <Link
        sx={{ textDecoration: "none" }}
        href={`mailto:${email}?subject=${
          encodeURIComponent(subject) || ""
        }&body=${encodeURIComponent(body) || ""}`}
      >
        {children}
      </Link>
    </Box>
  );
};

const CustomBox = styled(Box)<{
  bgcolor?: string;
  image?: string;
  clickable?: boolean;
}>(({ bgcolor, image = false, clickable = false }) => ({
  [theme.breakpoints.up("lg")]: {
    width: (!image && "30ch") || "32ch",
  },
  borderRadius: "5px",
  padding: (image && "0ch") || "1ch",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignContent: "center",
  gap: "0.5ch",
  alignItems: "center",
  justifyItems: "center",
  overflow: "hidden",

  backgroundColor: bgcolor || "transparent",

  backgroundSize: "cover",
  "& video": {
    borderRadius: "5px",
    width: "100%",
  },
  "& a": {
    color: colors.basicBlue.darkest,
    textDecoration: "none",
  },
  p: {
    fontFamily: "inherit",
    padding: "1ch",
  },

  "& img": {
    width: "100%",
    borderRadius: "5px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "50%",
  },

  [theme.breakpoints.between("sm", "md")]: {
    width: "50%",
  },
}));

const IndexPage = () => {

  const { language } = useAppSelector((app) => app.general);

  console.log(language);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const themeUser = useTheme();
  const videoRef = useRef(null);

  const handleClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const textColor = themeUser.palette.primary.contrastText;
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <StyledIndexPage id="styledIndexPage">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          alignContent: "center",
          width: "100%",
          [theme.breakpoints.down("lg")]: {
            alignItems: "center",
          },
        }}
      >
        <Typography
          sx={{
            color: textColor,
            fontSize: 110,
            fontWeight: 500,
            fontFamily: "inherit",
            [theme.breakpoints.down("md")]: {
              display: "none",
            },
          }}
        >
          {language === 'EN' ? 'Hello!' : '你好！'}
        </Typography>
        <Masonry
          columns={{ lg: 3, sm: 2, xs: 2 }}
          sequential={!isMobile}
          spacing={2}
          sx={{ maxHeight: "fit-content" }}
        >
          <CustomBox bgcolor={colors.basicBlue.light} height="15vh">
            <Typography color="#111110" fontSize={14}>
              {language === 'EN' ? 'Hi, I\'m Evan! I am a Software Engineer based in Seattle, WA.' : '哈囉，我是Evan！ 我是位軟體工程師。'}
            </Typography>
          </CustomBox>

          <CustomBox bgcolor="" height="fit-content" image="true" key={3}>
            <img src={require("../assets/rock_climbing.jpg")} />
            <Typography fontSize={14} color={textColor}>
              {language === 'EN' ? 'Rock climbing' : '攀岩'}
            </Typography>
          </CustomBox>
          <CustomBox bgcolor={colors.basicBlue.light} height="15vh">
            <Typography
              color="#111110"
              fontSize={14}
              // sx={{
              //   ":hover": {
              //     cursor: "pointer",
              //   },
              // }}
            >
              {language === 'EN' ? 'Welcome to my site - here are a few things I\'m interested in!' : '歡迎來到我的網站！ 讓這些照片介紹一下我喜歡什麼。'}
            </Typography>
          </CustomBox>
          <CustomBox bgcolor="" image="true">
            <img src={require("../assets/hiking.webp")} />
            <Typography fontSize={14} color={textColor}>
              {language === 'EN' ? ' Hiking around the PNW' : '在PNW附近爬山'}
            </Typography>
          </CustomBox>

          <CustomBox bgcolor={colors.basicBlue.light} height="9vh">
            <Mailto email="evan@jinevang.com" subject="Hi!" body="">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IoMail />{" "}
                <Typography color={colors.basicBlue.darkest} fontSize={16}>
                  {language === 'EN' ? 'Send me an email!' : '傳 E-mail 給我'}
                </Typography>
              </Box>
            </Mailto>
          </CustomBox>
          <CustomBox bgcolor="" height="fit-content" image="true">
            <img src={require("../assets/shadow.webp")} />
            <Typography color={textColor} fontSize={14} textAlign={"center"}>
              {language === 'EN' ? 'Interior design for a cat\'s home' : '跟貓咪玩'}
            </Typography>
          </CustomBox>
        </Masonry>
        <Me>
          <img src={require("../assets/looking_back.png")}></img>
        </Me>
      </Box>
    </StyledIndexPage>
  );
};

export default IndexPage;
