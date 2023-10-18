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
      <Typography variant="h3" sx={{ width: "50%" }}>
        About
      </Typography>
      <Box>
      <Typography sx={{ width: "50%" }}>
        We think of wedding photography not as a single practice, but as several interlocking ones.
        Moments are inseparable from emotions, lighting is inseparable from capturing the essence of
        the event, and enhancing the couple's bond is the ultimate goal of our work. Trends in
        photography may come and go, but we have found these principles to be timeless.
      </Typography>
      <Typography sx={{ width: "50%" }}>
      As a wedding photographer, Sofia Lindström and I strive for honesty and clarity. Our primary focus is to comprehend the couple's vision and desires, not to impose our own style. We value timeliness, open communication, and providing glimpses of the captured moments over elaborate presentations. Moreover, we appreciate the personal touch of face-to-face meetings, perhaps over a cup of coffee or a meal.
      </Typography>
      <Typography sx={{ width: "50%" }}>
        We think of wedding photography not as a single practice, but as several interlocking ones.
        Moments are inseparable from emotions, lighting is inseparable from capturing the essence of
        the event, and enhancing the couple's bond is the ultimate goal of our work. Trends in
        photography may come and go, but we have found these principles to be timeless.
      </Typography>
      <Typography sx={{ width: "50%" }}>
        We think of wedding photography not as a single practice, but as several interlocking ones.
        Moments are inseparable from emotions, lighting is inseparable from capturing the essence of
        the event, and enhancing the couple's bond is the ultimate goal of our work. Trends in
        photography may come and go, but we have found these principles to be timeless.
      </Typography>
      </Box>
    </Box>
  );
};

export default About;