 import React from "react";
import { Box } from "@mui/material";

const PageWrapper = ({children}: any) => {
  return <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    {children}
    </Box>;
};

export default PageWrapper;