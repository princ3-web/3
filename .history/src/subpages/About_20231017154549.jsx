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
      <Box sx={{ width: "60%" }}>
        <Typography sx={{mb:"1rem"}}>
          We think of wedding photography not as a single practice, but as several interlocking
          ones. Moments are inseparable from emotions, lighting is inseparable from capturing the
          essence of the event, and enhancing the couple's bond is the ultimate goal of our work.
          Trends in photography may come and go, but we have found these principles to be timeless.
        </Typography>
        <Typography sx={{mb:"1rem"}}>
          As a wedding photographer, Sofia Lindström and I strive for honesty and clarity. Our
          primary focus is to comprehend the couple's vision and desires, not to impose our own
          style. We value timeliness, open communication, and providing glimpses of the captured
          moments over elaborate presentations. Moreover, we appreciate the personal touch of
          face-to-face meetings, perhaps over a cup of coffee or a meal.
        </Typography>
        <Typography sx={{mb:"1rem"}}>
          Over the years, we have been fortunate to collaborate with amazing couples on their
          special day, but we believe it is still too early to judge the success of our work.
          Wedding photographs exist in time and their value is directly related to how well they
          continue to evoke cherished memories.
        </Typography>
        <Typography>
          We are proud of our artistic style and background, but do not consider ourselves
          proponents of a particular photography school. Photography has no fixed style, as each
          wedding is unique and demands a tailored approach that complements the couple's story and
          preferences.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
