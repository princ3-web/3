import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./subpages/Home";
import About from "./subpages/About";
import { Box } from "@mui/material";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box sx={{height: "100px", width:" 300px", border: "2px solid red"}}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Router>
      </Box>
  );
}

export default App;
