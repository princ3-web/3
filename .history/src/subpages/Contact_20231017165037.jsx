import React from "react";
import { Box, Typography, Button, CardMedia } from "@mui/material";
import { grey } from "@mui/material/colors";
import image1 from "../assets/images/7.jpg";

const Contact = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
          paddingX: "70px",
          paddingY: "120px",
        }}
      >
        <Typography variant="h3" sx={{ width: "50%", mb: "2rem" }}>
          Our clients
        </Typography>
        <Box sx={{ width: "60%" }}>
          <Typography variant="subtitle1" sx={{ width: "50%" }}>
            Further case studies available upon request. Please provide some information on your
            project or goals and we’ll move the conversation on from there.
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
    
      </Box>
    </Box>
  );
};

export default Contact;
