import { useState } from "react";
import Box from '@mui/material/Box';

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return <Box sx={{backgroundColor:"red", width: "100vw", height:"100px"}}></Box>;
}

export default App;
