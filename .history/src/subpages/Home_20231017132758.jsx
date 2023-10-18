import React from "react";
import { Box, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxSizing: "border-box",
        paddingX: "70px",
        height: "300px",
      }}
    >
      <Typography variant="h2" sx={{width: "75%"}}>Utica is an architecture firm based in Copenhagen, Denmark.</Typography>
      <CardMedia
        component="img"  
        alt="Sample Image"
        height="140"      // Set the height of the image
        image="path_to_your_image.jpg"  // Replace with the path to your image
      />
    </Box>
  );
};

export default Home;
