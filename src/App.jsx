import React from "react-dom";
import "./css/App.css";
import { Routes, Route, useParams } from "react-router-dom";

import Header from "./components/Header";
import Links from "./components/Links";
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
      <div id="links" className="not-hidden-fade">
        <Links />
      </div>
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <Routes>
          <Route path="/" element={<RenderHome />} />
          <Route path="/projects" element={<RenderProjects />} />
          <Route path="/contact" element={<RenderContact />} />
          <Route
            path="/external/:proto/:path/:newTab"
            element={<RedirectToExternal />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

/** Includes the listed external scripts in the view */
function includeScripts() {
  // Add new scripts here
  const scripts = ["https://kit.fontawesome.com/d556180f35.js"];

  // Loop through each script and add them as a script element
  scripts.forEach((script) => {
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
  if (page === "") document.title = "Ian Cowan";
  else document.title = page + " | Ian Cowan";
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
  setTitle("");
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

function RedirectToExternal() {
  const { proto, path, newTab } = useParams();
  const href = proto + "://" + path;
  const isNewTab = newTab === "true";

  if (proto === "mailto") {
    window.open("mailto:" + path);
    window.history.back();
  } else if (!isNewTab) {
    // Redirect in current tab
    window.location.href = href;
  } else {
    // Redirect in a new tab and go back
    window.open(href, "_blank");
    window.history.back();
  }

  return null;
}

export default App;
