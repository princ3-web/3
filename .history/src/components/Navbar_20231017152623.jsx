import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Navbar = () => {

  const companyName = "Sofia Lindström"
  const items = [{title: "Work"},{title: "About"},{title: "Our Team"},{title: "Press"}, {title: "Contact"}];

  const projects = [
    { title: "Work", image: image1 },
    { title: "About", image: image2 },
    { title: "Our Team", image: image3 },
    { title: "Press", image: image4 },
  ];

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
          <Link to={}>
          <Typography sx={{mx: "0.7rem"}}>{item}</Typography>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Navbar;
