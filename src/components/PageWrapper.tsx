import React from "react";
import { Box } from "@mui/material";

const PageWrapper = ({children}: any) => {
  return <Box sx={{paddingBottom: '10ch'}}>{children}</Box>;
};

export default PageWrapper;