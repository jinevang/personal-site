 import React from "react";
import { Box, useTheme } from "@mui/material";

const PageWrapper = ({children}: any) => {

  const theme = useTheme();

  return <Box sx={{backgroundColor: theme.palette.background.default, minHeight: '100vh', height: '100vh', transition: 'background-color 1s'}}>
    {children}
    </Box>;
};

export default PageWrapper;