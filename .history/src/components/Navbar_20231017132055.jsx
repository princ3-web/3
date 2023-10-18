import React from "react";
import { Box, Typography } from "@mui/material";

const Navbar = () => {
  const items = ["Work", "About", "Our Team", "Press", "Contact"];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxSizing: "border-box",
        paddingX: "70px",
        height: "120px",
      }}
    >
      <Box>
        <Typography variant="h4">Logo</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        {items.map((item) => (
          <Typography sx={{ml: "1.5
      </Box>
    </Box>
  );
};

export default Navbar;
