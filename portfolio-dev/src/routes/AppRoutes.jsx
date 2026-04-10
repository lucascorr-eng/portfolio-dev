import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import About from "../pages/About";
import Contact from "../pages/Contact";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Skills />} />
      <Route path="/" element={<Projects />} />
      <Route path="/" element={<Home />} />
      <Route path="/" element={<About />} />
      <Route path="/" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;
