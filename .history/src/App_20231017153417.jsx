import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./subpages/Home";
import About from "./subpages/About";
import OurTeam from "./subpages/OurTeam";
import Press from "./subpages/Press";
import Contact from "./subpages/Contact";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";
import "./App.css";

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/press" element={<Press />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Box>
  );
}

export default App;
