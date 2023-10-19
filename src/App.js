import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

import './App.css';
import Press from "./pages/Press";
import Jobs from "./pages/Jobs";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/press" element={<Press />} />
      <Route path="/jobs" element={<Jobs />} />
    </Routes>
  );
}