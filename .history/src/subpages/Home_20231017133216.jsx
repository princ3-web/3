import React from "react";
import { Box, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import image1 from "../assets/images/1.jpg";

const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          display:"flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxSizing: "border-box",
          height: "300px",
          px: "70px"
        }}
      >
        <Typography sx={{ width: "75%", fontSize:"40px" }}>
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
