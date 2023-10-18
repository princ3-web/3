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
          Let's w
        </Typography>
        <Box sx={{ width: "60%" }}>
          <Typography variant="subtitle1" sx={{ width: "50%" }}>
            Further case studies available upon request. Please provide some information on your
            project or goals and we’ll move the conversation on from there.
          </Typography>
        </Box>
      </Box>
    
    </Box>
  );
};

export default Contact;
