import React from "react";
import { Box, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import image1 from "../assets/images/1.jpg";

const Home = () => {
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
        <Typography sx={{ width: "75%", fontSize: "64px" }}>
          Utica is an architecture firm based in Copenhagen, Denmark.
        </Typography>
      </Box>
      <Box sx={{ width: "100vw", height: "600px", overflow: "hidden" }}>
        <CardMedia component="img" alt="Sample Image" image={image1} />
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
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: }}>
        <Box sx={{ width: "48%" }}>
          <CardMedia component="img" alt="Sample Image" image={image1} />
        </Box>
        <Box sx={{ width: "48%" }}>
          <CardMedia component="img" alt="Sample Image" image={image1} />
        </Box>
        <Box sx={{ width: "48%" }}>
          <CardMedia component="img" alt="Sample Image" image={image1} />
        </Box>
        <Box sx={{ width: "48%" }}>
          <CardMedia component="img" alt="Sample Image" image={image1} />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
