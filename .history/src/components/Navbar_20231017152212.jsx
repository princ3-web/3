import React from "react";
import { Box, Typography } from "@mui/material";
import L

const Navbar = () => {

  const companyName = "Sofia Lindström"
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
        <Typography variant="h4">{companyName}</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        {items.map((item) => (
          <Typography sx={{mx: "0.7rem"}}>{item}</Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Navbar;
