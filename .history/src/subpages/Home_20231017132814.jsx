import React from "react";
import { Box, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import image

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
      <Box>
      <CardMedia
        component="img"  
        alt="Sample Image"
        height="140"    
        image="path_to_your_image.jpg"  
      />
      </Box>
    </Box>
  );
};

export default Home;
