import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import image1 from "../assets/images/person1.jpg";

const OurTeam = () => {
  return (
    <Box sx={{width:"100vw", display:"flex", justifyContent:"space-evenly"}}>
      <Box>
        <CardMedia
          component="img"
          alt="Sample Image"
          image={image1}
          sx={{ height: "600px", objectPosition: "50% 80%" }}
        />
        <Typography>First Name Last Name</Typography>
        <Typography>
          It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a
          hobby into something more. Or maybe you have a creative project to share with the world.
          Whatever it is, the way you tell your story online can make all the difference.
        </Typography>
      </Box>
      <Box>
        <CardMedia
          component="img"
          alt="Sample Image"
          image={image1}
          sx={{ height: "600px", objectPosition: "50% 80%" }}
        />
        <Typography>First Name Last Name</Typography>
        <Typography>
          It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a
          hobby into something more. Or maybe you have a creative project to share with the world.
          Whatever it is, the way you tell your story online can make all the difference.
        </Typography>
      </Box>
    </Box>
  );
};

export default OurTeam;
