import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        boxSizing: "border-box",
        paddingX: "70px",
        paddingY: "120px",
      }}
    >
      <Typography variant="h3" sx={{ width: "50%" }}>About</Typography>
      <Typography sx={{ width: "50%" }}>
      We think of wedding photography not as a single practice, but as several interlocking ones. Moments are inseparable from emotions, lighting is inseparable from capturing the essence of the event, and enhancing the couple's bond is the ultimate goal of our work. Trends in photography may come and go, but we have found these principles to be timeless.
      </Typography>
    </Box>
  );
};

export default About;
