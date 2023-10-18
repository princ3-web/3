import React from "react";
import { Box, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Box sx={{ display: "flex", justif }}>
      <Box>
        <Typography>Logo</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
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