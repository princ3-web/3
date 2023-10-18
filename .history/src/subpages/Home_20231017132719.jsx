import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxSizing: "border-box",
        paddingX: "70px",
        height: "300px",
      }}
    >
      <Typography variant="h2" sx={{width: "75%"}}>Utica is an architecture firm based in Copenhagen, Denmark.</Typography>
      <Media
    </Box>
  );
};

export default Home;
