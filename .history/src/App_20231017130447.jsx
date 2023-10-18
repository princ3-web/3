import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./subpages/Home.jsx";
import About from "./subpages/About";
import { Box } from "@mui/material";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box sx={{ height: "100px", width: "100vw", border: "2px solid red" }}>
      <Router>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
