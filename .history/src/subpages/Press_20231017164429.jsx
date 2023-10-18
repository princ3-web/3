import React from "react";
import { Box, Typography, Button, CardMedia } from "@mui/material";
import { grey } from "@mui/material/colors";
import image1 from "../assets/images/7.jpg";

const Press = () => {
  return (
    <Box>
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
          Our clients
        </Typography>
        <Box sx={{ width: "60%" }}>
          <Typography sx={{ mb: "1rem" }}>
            “Their buildings often establish expectations and then flip them, creating a sense of
            weightlessness and wonder.”
          </Typography>
          <Typography sx={{ mb: "1rem" }}>
           
“Their buildings often establish expectations and then flip them, creating a sense of weightlessness and wonder.”
          </Typography>
          <Typography sx={{ mb: "1rem" }}>
            Over the years, we have been fortunate to collaborate with amazing couples on their
            special day, but we believe it is still too early to judge the success of our work.
            Wedding photographs exist in time and their value is directly related to how well they
            continue to evoke cherished memories.
          </Typography>
          <Typography sx={{ mb: "1rem" }}>
            We are proud of our artistic style and background, but do not consider ourselves
            proponents of a particular photography school. Photography has no fixed style, as each
            wedding is unique and demands a tailored approach that complements the couple's story
            and preferences.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ position: "relative", height: "400px" }}>
        <Box
          sx={{ position: "absolute", zIndex: 1, boxSizing: "border-box", px: "70px", py: "70px" }}
        >
          <Typography variant="h3" sx={{ color: grey[100], my: "1.5rem" }}>
            Let’s Work Together
          </Typography>
          <Typography sx={{ color: grey[100], width: "700px" }}>
            We're constantly seeking new wedding projects and are open to traveling for your special
            day. Feel free to reach out, and our dedicated team will connect with you to initiate
            the wedding photography planning.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: grey[100],
              color: grey[900],
              border: "none",
              px: "65px",
              py: "15px",
              my: "35px",
              borderRadius: "0px",
              textTransform: "none",
              fontSize: "16px",
              "&:hover": {
                backgroundColor: grey[400],
                border: "none",
              },
            }}
          >
            Contact Us
          </Button>
        </Box>
        <CardMedia
          component="img"
          alt="Sample Image"
          image={image1}
          sx={{
            position: "absolute",
            height: "400px",
            objectPosition: "50% 50%",
            filter: "saturate(0) brightness(0.8)",
          }}
        />
      </Box>
    </Box>
  );
};

export default Press;
