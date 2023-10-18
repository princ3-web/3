import React from "react";
import { Box, CardMedia, Button } from "@mui/material";
import { Typography } from "@mui/material";
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import image4 from "../assets/images/4.jpg";
import image5 from "../assets/images/5.jpg";
import { grey } from "@mui/material/colors";

const Home = () => {
  const projects = [
    { title: "project one", image: image1 },
    { title: "project two", image: image2 },
    { title: "project three", image: image3 },
    { title: "project four", image: image4 },
  ];
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxSizing: "border-box",
          height: "300px",
          px: "70px",
        }}
      >
        <Typography sx={{ fontSize: "64px" }}>
          Utica is an architecture firm based in Copenhagen, Denmark.
        </Typography>
      </Box>
      <Box sx={{ width: "100vw", height: "600px", overflow: "hidden" }}>
        <CardMedia component="img" alt="Sample Image" image={image5} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          height: "300px",
          px: "70px",
          my: "3.5rem",
        }}
      >
        <Typography variant="h3" sx={{ mb: "2rem" }}>
          Recent Work
        </Typography>
        <Typography sx={{ width: "50%" }}>
          Our practice spans from environmental retrofits of existing buildings to the complete
          planning and design of new neighborhoods and public spaces. While our work is
          aesthetically diverse, our projects are linked by a focus on enhancing human relationships
          through architecture.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
        {projects.map((item) => (
          <Box sx={{ width: "45%", mb: "2rem" }}>
            <CardMedia
              component="img"
              alt="Sample Image"
              image={item.image}
              sx={{ height: "500px" }}
            />
            <Typography variant="h4" sx={{ my: "2rem" }}>
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          backgroundColor: grey[900],
          boxSizing: "border-box",
          height: "300px",
          px: "70px",
          py: "70px",
        }}
      >
        <Typography variant="h3" sx={{color: grey[100], my: "1.5rem"}}>Let’s Work Together</Typography>
        <Typography sx={{color: grey[100], width: "700px"}}>
          We’re always looking for new opportunities and are comfortable working internationally.
          Please get in touch and one of our project managers will contact you about beginning the
          proposal process.
        </Typography>
        <Button variant="outlined" sx={{backgroundColor: grey[]}}>Contact Us</Button>
      </Box>
    </Box>
  );
};

export default Home;
