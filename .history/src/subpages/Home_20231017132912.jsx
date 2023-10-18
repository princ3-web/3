import React from "react";
import { Box, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import image1 from "../assets/images/1.jpg"

const Home = () => {
  return (
    <Box
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        boxSizing: "border-box",
        paddingX: "70px",
        height: "300px",
      }}
    >
      <Typography variant="h2" sx={{width: "75%"}}>Utica is an architecture firm based in Copenhagen, Denmark.</Typography>
      <Box sx={{width: }}>
      <CardMedia
        component="img"  
        alt="Sample Image"
        image={image1}
      />
      </Box>
    </Box>
  );
};

export default Home;
