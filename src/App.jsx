import './css/App.css';
import {
  Routes,
  Route
} from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import PageNotFound from "./pages/PageNotFound";

function App() {
  includeScripts();

  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <Routes>
          <Route path="/" element={<RenderHome />} />
          <Route path="/projects" element={<RenderProjects />} />
          <Route path="/contact" element={<RenderContact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

function includeScripts() {
  const scripts = [
    'https://kit.fontawesome.com/d556180f35.js'
  ];

  scripts.forEach(script => {
    const scriptElem = document.createElement("script");
    scriptElem.src = script;
    scriptElem.async = true;
    document.body.appendChild(scriptElem);
  });
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

