import { useState } from "react";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./subpages/Hom"

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
