import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./subpages/Home"
import { Box } from "@mui/material";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box sx={{ height: "100px", width: "100vw", border: "2px solid red" }}>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Routes>
    </Box>
  );
}

export default App;
