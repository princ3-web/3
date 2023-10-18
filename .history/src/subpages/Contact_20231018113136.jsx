import React from "react";
import { Box, Typography, Button, CardMedia, TextField } from "@mui/material";

const Contact = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
          paddingX: "70px",
          paddingY: "120px",
          width: "50%",
        }}
      >
        <Typography variant="h3" sx={{ width: "50%", mb: "2rem" }}>
          Let's work together
        </Typography>
        <Box sx={{ width: "60%" }}>
          <Typography variant="subtitle1" sx={{ width: "50%" }}>
            Further case studies available upon request. Please provide some information on your
            project or goals and we’ll move the conversation on from there.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          paddingX: "70px",
          paddingY: "120px",
          width: "50%",
        }}
      >
        <Box sx={{display:"flex"}}> 
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            sx={{ mr: "0.5rem", width: "50%" }}
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            sx={{ width: "50%" }}
          />
        </Box>
        <Box sx={{mt:"1rem"}}>
        <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            sx={{ my: "0.25rem", width: "100%" }}
          />
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            sx={{ my: "0.25rem", width: "100%" }}
          />
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            sx={{ my: "0.25rem", width: "100%", height: }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
