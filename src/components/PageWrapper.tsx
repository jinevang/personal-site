import React from "react";
import { Box } from "@mui/material";

const PageWrapper = ({children}: any) => {
  return <Box sx={{paddingBottom: '10ch', width: '100%'}}>{children}</Box>;
};

export default PageWrapper;