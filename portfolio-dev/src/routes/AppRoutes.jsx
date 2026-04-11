import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import About from "../pages/About";
import Contact from "../pages/Contact";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Contact />} />
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Projects />} />
      <Route path="/" element={<Skills />} />
      <Route path="/" element={<About />} />
    </Routes>
  );
}

export default AppRoutes;
