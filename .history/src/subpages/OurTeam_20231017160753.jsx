import React from "react";
import { Box, CardMedia } from "@mui/material";
import image1 from "../assets/images/person1.jpg";

const OurTeam = () => {
  return (
    <Box>
      <Box>
      <CardMedia
          component="img"
          alt="Sample Image"
          image={image1}
          sx={{ height: "600px", objectPosition: "50% 80%" }}
        />
        <Typo
      </Box>
    </Box>
  );
};

export default OurTeam;
