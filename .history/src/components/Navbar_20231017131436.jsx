import React from "react";
import { Box, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Box>
      <Box>
        <Typography>Logo</Typography>
      </Box>
      <Box sx={{}}>
        <Typography>Work</Typography>
        <Typography>About</Typography>
        <Typography>Our Team</Typography>
        <Typography>Press</Typography>
        <Typography>Contact</Typography>
      </Box>
    </Box>
  );
};

export default Navbar;
