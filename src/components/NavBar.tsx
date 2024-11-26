import React from "react";
import { useNavigate } from "react-router-dom";

// Components
import { Box, Toolbar, useMediaQuery, useTheme } from "@mui/material";

// Styles, Icons, & Colors
import styled from "@emotion/styled";
import { colors } from "constants/colors";
import { theme } from "styles/BasicTheme";
import { VscHome } from "react-icons/vsc";
import { RiComputerLine } from "react-icons/ri";
import { MdOutlinePhoto } from "react-icons/md";
import { MdOutlinePerson } from "react-icons/md";
import { IoMusicalNotes } from "react-icons/io5";

const StyledNavBar = styled(Toolbar)<{ textcolor?: string; bgcolor?: string }>(
  ({ textcolor, bgcolor }) => ({
    userSelect: "none",
    backgroundColor: "transparent",
    ":active": {
      backgroundColor: "transparent",
    },

    [theme.breakpoints.up("lg")]: {
      display: "flex",
      flexDirection: "column",
      gap: "2ch",
      position: "fixed",
      alignItems: "center",

      left: "10ch",
      top: "40vh",
      bottom: "50vh",
      width: "fit-content",
      backgroundColor: "transparent",
    },

    zIndex: 1,

    [theme.breakpoints.down("lg")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "3ch",
      position: "fixed",
      width: "100vw",
      backgroundColor: bgcolor ?? colors.basicBlue.default,
      transition: "0.5s normal",
      fontSize: "18px",
      height: "8vh",
      "& a": {
        ":visited": {
          color: "white",
        },
        ":not:visited": {
          color: "white",
        },
      },
    },

    boxShadow: "none",

    "& a": {
      color: textcolor ?? colors.basicBlue.darkest,
      textDecoration: "none",
      backgroundColor: "transparent",
      textAlign: "left",
      ":focus": {
        backgroundColor: "transparent",
      },
      ":hover": {
        textDecoration: "underline",
        cursor: "pointer",
      },
      ":active": {
        textDecoration: "underline",
      },
      ":visited": {
        color: colors.basicBlue.darker,
      },
      ":not:visited": {
        color: colors.basicBlue.darker,
      },
    },
  })
);

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: <VscHome />,
  },
  {
    label: "Resume",
    href: "/resume",
    icon: <RiComputerLine />,
  },
  {
    label: "Photos",
    href: "/photos",
    icon: <MdOutlinePhoto />,
  },
  {
    label: "Music",
    href: "/music",
    icon: <IoMusicalNotes />,
  },
  {
    label: "About",
    href: "/about",
    icon: <MdOutlinePerson />,
  },
];

const NavBar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const navToRoute = (route: string) => {
    navigate(route);
  };

  return (
    <StyledNavBar
      textcolor={theme.palette.secondary.contrastText}
      bgcolor={theme.palette.background.default}
    >
      {navItems.map((item) => (
        <a
          key={item.href}
          onClick={() => {
            navToRoute(item.href);
          }}
        >
          <Box
            key={item.href}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: isMobile ? 12 : 18,
              "& svg": {
                width: "25px",
                height: "25px",
              },
            }}
          >
            {isMobile && item.icon}
            {item.label}
          </Box>
        </a>
      ))}
    </StyledNavBar>
  );
};

export default NavBar;
