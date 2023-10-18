import React from "react";
import { Box, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import image1 from "../assets/images/1.jpg";

const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          boxSizing: "border-box",
          height: "200px",
          px: ""
        }}
      >
        <Typography variant="h2" sx={{ width: "75%" }}>
          Utica is an architecture firm based in Copenhagen, Denmark.
        </Typography>
      </Box>
      <Box sx={{ width: "100vw" }}>
        <CardMedia component="img" alt="Sample Image" image={image1} />
      </Box>
    </Box>
  );
};

export default Home;
