import React from "react";
import "../css/Links.css";

function Links() {
  return (
    <div>
      <a
        data-testid="github-link"
        href="/external/https/github.com%2ficcowan/true"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        data-testid="linkedin-link"
        href="/external/https/www.linkedin.com%2fin%2fian-cowan/true"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        data-testid="email-link"
        href="/external/mailto/ian@cowanemail.com/false"
      >
        <i className="far fa-envelope"></i>
      </a>
    </div>
  );
}

export default Links;
