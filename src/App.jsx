import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<RenderHome />} />
          <Route path="/projects" element={<RenderProjects />} />
          <Route path="/contact" element={<RenderContact />} />
        </Routes>
    </Router>
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
