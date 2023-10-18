import React from "react";
import { Box, Typography, Button, CardMedia } from "@mui/material";
import { grey } from "@mui/material/colors";
import image1 from "../assets/images/7.jpg";


const Press = () => {
  return (
    <Box sx={{ position: "relative", height: "400px" }}>
      <Box
        sx={{ position: "absolute", zIndex: 1, boxSizing: "border-box", px: "70px", py: "70px" }}
      >
        <Typography variant="h3" sx={{ color: grey[100], my: "1.5rem" }}>
          Let’s Work Together
        </Typography>
        <Typography sx={{ color: grey[100], width: "700px" }}>
          We're constantly seeking new wedding projects and are open to traveling for your special
          day. Feel free to reach out, and our dedicated team will connect with you to initiate the
          wedding photography planning.
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
        sx={{ position: "absolute", height: "400px", objectPosition: "50% 50%", filter: "sa" }}
      />
    </Box>
  );
};

export default Press;
