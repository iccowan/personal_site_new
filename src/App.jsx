import React from 'react-dom';
import './css/App.css';
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  Move,
  Sticky
} from 'react-scroll-motion';
import {
  Routes,
  Route
} from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import PageNotFound from "./pages/PageNotFound";

/**
  * Main App
  *
  * @return {React.FC} The main app HTML
  */
function App() {
  // Include all of the external scripts
  includeScripts();

  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <ScrollContainer>
          <Routes>
            <Route path="/" element={<RenderHome />} />
            <Route path="/projects" element={<RenderProjects />} />
            <Route path="/contact" element={<RenderContact />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </ScrollContainer>
      </div>
    </div>
  );
}

/** Includes the listed external scripts in the view */
function includeScripts() {
  // Add new scripts here
  const scripts = [
    'https://kit.fontawesome.com/d556180f35.js'
  ];

  // Loop through each script and add them as a script element
  scripts.forEach(script => {
    const scriptElem = document.createElement("script");
    scriptElem.src = script;
    scriptElem.async = true;
    document.body.appendChild(scriptElem);
  });
}

/**
 * Set the title of the page in the following format:
 * '[Page Name] | Ian Cowan'
 *
 * @param {string} page - The name of the current page
 */
function setTitle(page) {
  document.title = page + ' | Ian Cowan';
}

/**
 * Generate the title for a page
 *
 * @param {Object} params - The params: {title: The page title}
 */
export function GeneratePageTitle(params) {
  return (
    <div data-testid="page-title">
      <h1 className="page-title">{params.title}</h1>
    </div>
  );
}

/**
 * Renders the home page
 *
 * @return {React.FC} = The home HTML
 */
function RenderHome() {
  setTitle("Home");
  return Home();
}

/**
 * Renders the projects page
 *
 * @return {React.FC} - The projects HTML
 */
function RenderProjects() {
  setTitle("Projects");
  return Projects();
}

/**
 * Renders the contact page
 *
 * @return {React.FC} - The contact HTML
 */
function RenderContact() {
  setTitle("Contact");
  return Contact();
}

export default App;

