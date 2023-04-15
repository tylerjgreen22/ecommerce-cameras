import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import About from "../routes/About";
import Products from "../routes/Products";
import data from "../../data";

function App() {
  const [cameras, setCameras] = useState(data);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home cameras={cameras} />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products cameras={cameras} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
