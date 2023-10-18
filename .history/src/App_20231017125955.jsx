import { useState } from "react";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./subpages/Home";
import About from "./subpages/About";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box sx={{height: "100px", width:" 300px", border: ""}}>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Routes>
      </Box>
  );
}

export default App;
