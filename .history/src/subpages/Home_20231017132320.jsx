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
      <Typography variant="h2">Utica is an architecture firm based in Copenhagen, Denmark.</Typography>
    </Box>
  );
};

export default Home;
