import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Navbar = () => {
  const companyName = "Sofia Lindström";


  const items = [
    { title: "Work", link: "/" },
    { title: "About", link: "About" },
    { title: "Our Team", link: image3 },
    { title: "Press", link: image4 },
    { title: "Contact", link: image4 },
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
          <Link to={{}}>
            <Typography sx={{ mx: "0.7rem" }}>{item}</Typography>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Navbar;
