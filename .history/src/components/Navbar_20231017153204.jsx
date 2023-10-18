import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Navbar = () => {
  const companyName = "Sofia Lindström";

  <Route exact path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/ourteam" element={<OurTeam />} />
  <Route path="/press" element={<Press />} />
  <Route path="/contact" element={<Contact />} />


  const items = [
    { title: "Work", link: "/" },
    { title: "About", link: "/About" },
    { title: "Our Team", link: "/ourteam" },
    { title: "Press", link: "/press" },
    { title: "Contact", link: "/contact" },
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
          <Link to={item.link} style={{color:"unset", textDecoration:"none"}}>
            <Typography sx={{ mx: "0.7rem" }}>{item.title}</Typography>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Navbar;
