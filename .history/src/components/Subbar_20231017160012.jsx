import React from "react";
import Bo

const Subbar = () => {
  return (
    <Box
      sx={{
        backgroundColor: grey[100],
        boxSizing: "border-box",
        height: "400px",
        px: "70px",
        py: "70px",
      }}
    >
      <Typography variant="h3" sx={{ mb: "1rem" }}>
        {companyName}
      </Typography>
      <Box sx={{ mb: "1rem" }}>
        <Typography>123 Gatan</Typography>
        <Typography>Stockholm, Sweden</Typography>
      </Box>
      <Box>
        <Typography>+46 70 123 45 67</Typography>
        <Typography>sofialindstrom@gmail.com</Typography>
      </Box>
    </Box>
  );
};

export default Subbar;
