import React from "react";
import "../css/Header.css";
import { Link, useLocation } from "react-router-dom";

/** Keeps track of whether the mouse is over the header button or not */
var mouseOverExpandHeaderButton = false;

/**
 * Header Component
 *
 * @return {React.FC} The header HTML
 */
function Header() {
  // Get the active page
  const location = useLocation();
  let url = location.pathname.split("/")[1];

  let activePage = {
    home: url === "" ? "active" : "",
    projects: url === "projects" ? "active" : "",
    contact: url === "contact" ? "active" : "",
  };

  return (
    <nav>
      <ul id="header-ul" class="first-load" data-testid="header-nav-ul">
        <button
          id="expand-ham"
          onClick={expandHamburger}
          data-testid="header-nav-expandHamburger"
        >
          <i className="fas fa-bars"></i>
        </button>
        <li
          onMouseEnter={makeIconWiggle}
          onMouseLeave={stopIconWiggle}
          data-testid="header-nav-li-ian-cowan"
        >
          <Link to="/" className={activePage.home}>
            <i className="fas fa-user"></i>
            <span
              className="hidden header-label"
              data-testid="header-nav-span-ian-cowan"
            >
              &nbsp;&nbsp;&nbsp;Ian Cowan
            </span>
          </Link>
        </li>
        <li
          onMouseEnter={makeIconWiggle}
          onMouseLeave={stopIconWiggle}
          data-testid="header-nav-li-projects"
        >
          <Link to="/projects" className={activePage.projects}>
            <i className="fas fa-file-code"></i>
            <span
              className="hidden header-label"
              data-testid="header-nav-span-projects"
            >
              &nbsp;&nbsp;&nbsp;Projects
            </span>
          </Link>
        </li>
        <li
          onMouseEnter={makeIconWiggle}
          onMouseLeave={stopIconWiggle}
          data-testid="header-nav-li-contact"
        >
          <Link to="/contact" className={activePage.contact}>
            <i className="fas fa-file-signature"></i>
            <span
              className="hidden header-label"
              data-testid="header-nav-span-contact"
            >
              &nbsp;&nbsp;&nbsp;Contact
            </span>
          </Link>
        </li>
        <li
          id="expand-header-container"
          onMouseEnter={makeArrowMove}
          onMouseLeave={stopArrowMove}
          data-testid="header-nav-li-collapseButton"
        >
          <a href="#"
            id="expand-header"
            onClick={expandHeader}
            data-testid="header-nav-collapseButton"
          >
            <i id="collapseIcon" className="fas fa-arrow-right"></i>
            <span
              className="hidden header-label"
              data-testid="header-nav-span-collapse-button"
            >
              &nbsp;&nbsp;&nbsp;Collapse
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

/** Expands the header and moves the body with it */
function expandHeader() {
  let labels = document.getElementsByClassName("header-label");
  if (labels[0].classList.contains("hidden")) {
    // Expand the navbar
    let nav = document.getElementById("header-ul");
    nav.classList.add("expanded");

    if (nav.classList.contains('first-load'))
      nav.classList.remove('first-load');

    // Shrink the body
    let body = document.getElementsByClassName("body");
    for (var bod of body) {
      bod.classList.add("header-open");
    }

    // Update the direction the arrow should be moving
    updateArrowMove();

    setTimeout(function () {
      // Unhide the labels
      for (var label of labels) {
        label.classList.remove("hidden");
        label.classList.add("not-hidden-fade");
      }

      // Change the collapse icon
      let collapseIcon = document.getElementById("collapseIcon");
      collapseIcon.classList.remove("fa-arrow-right");
      collapseIcon.classList.add("fa-arrow-left");
    }, 1000);
  } else {
    // Expand the navbar
    let nav = document.getElementById("header-ul");
    nav.classList.remove("expanded");

    // Shrink the header
    let header = document.getElementsByClassName("header");
    for (var head of header) {
      head.classList.remove("header-open");
    }

    // Widen the body
    let body = document.getElementsByClassName("body");
    for (bod of body) {
      bod.classList.remove("header-open");
    }

    // Update the direction the arrow should be moving
    updateArrowMove();

    setTimeout(function() {
      // Hide the labels
      for (var label of labels) {
        label.classList.remove("not-hidden-fade");
        label.classList.add("hidden");
      }

      // Change the collapse icon
      let collapseIcon = document.getElementById("collapseIcon");
      collapseIcon.classList.remove("fa-arrow-left");
      collapseIcon.classList.add("fa-arrow-right");
    }, 1000);
  }
}

function expandHamburger() {
  // Display the labels
  let labels = document.getElementsByClassName("header-label");
  if (labels[0].classList.contains("hidden")) {
    for (let label of labels) {
      label.classList.remove("hidden");
    }
  }

  let header = document.getElementById("header-ul");
  if (!header.classList.contains("expanded")) {
    header.classList.add("expanded");
  } else header.classList.remove("expanded");
}

/**
 * Starts icon wiggle
 *
 * @param {Element} e - The parent li element of the arrow
 */
function makeIconWiggle(e) {
  e.currentTarget.classList.add("wiggle-icon");
}

/**
 * Stops icon wiggle
 *
 * @param {Element} e - The parent li element of the arrow
 */
function stopIconWiggle(e) {
  e.currentTarget.classList.remove("wiggle-icon");
}

/**
 * Makes the arrow move for the header expansion button
 *
 * @param {Element} e - The parent li element of the arrow
 */
function makeArrowMove(e) {
  let headerUl = document.getElementById("header-ul");
  setArrowMove(headerUl, e.currentTarget);
  mouseOverExpandHeaderButton = true;
}

/**
 * Updates the direction the arrow should be moving. This is intended
 * to be used at the completion of expansion or collapsing to ensure
 * the arrow is moving in the correction direction
 */
function updateArrowMove() {
  let headerUl = document.getElementById("header-ul");
  let expandLi = document.getElementById("expand-header").parentElement;

  if (mouseOverExpandHeaderButton) setArrowMove(headerUl, expandLi);
}

/**
 * Starts moving the arrow
 *
 * @param {Element} headerUl - The containing ul element
 * @param {Element} target - The target parent li element of the arrow
 */
function setArrowMove(headerUl, target) {
  if (headerUl.classList.contains("expanded")) {
    target.classList.remove("arrow-move-right");
    target.classList.add("arrow-move-left");
  } else {
    target.classList.remove("arrow-move-left");
    target.classList.add("arrow-move-right");
  }
}

/**
 * Stops the expand button arrow from moving
 *
 * @param {Element} e - the parent li container of the arrow
 */
function stopArrowMove(e) {
  e.currentTarget.classList = [];
  mouseOverExpandHeaderButton = false;
}

export default Header;
