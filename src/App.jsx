import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RenderHome />} />
      <Route path="/projects" element={<RenderProjects />} />
      <Route path="/contact" element={<RenderContact />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

function setTitle(page) {
  document.title = "Ian Cowan | " + page;
}

function RenderHome() {
  setTitle("Home");
  return Home();
}

function RenderProjects() {
  setTitle("Projects");
  return Projects();
}

function RenderContact() {
  setTitle("Contact");
  return Contact();
}

export default App;
