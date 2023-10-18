import React from "react";
import { Box, CardMedia } from "@mui/material";
import image1 from "../assets/images"

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
      </Box>
    </Box>
  );
};

export default OurTeam;
