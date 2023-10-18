import React from "react";
import { Box, Typography } from "@mui/material";

const Navbar = () => {

  con
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems:"center",
        boxSizing: "border-box",
        paddingX: "60px",
        height: "120px"
      }}
    >
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
