import React from "react";
import { GeneratePageTitle } from "../App";

/**
 * Projects Page
 *
 * @return {React.FC} The projects HTML
 */
function Projects() {
  return (
    <div data-testid="page-projects">
      <GeneratePageTitle title="Projects" />
    </div>
  );
}

export default Projects;
