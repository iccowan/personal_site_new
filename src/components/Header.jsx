import React from 'react';
import '../css/Header.css';
import {Link, useLocation} from 'react-router-dom';

var mouseOverExpandHeaderButton = false;

function Header() {
  const location = useLocation();
  let url = location.pathname.split('/')[1];

  let activePage = {
    home: url === '' ? 'active' : '',
    projects: url === 'projects' ? 'active' : '',
    contact: url === 'contact' ? 'active' : ''
  };

  return (
    <nav>
      <ul id="header-ul" data-testid="header-nav-ul">
        <li onMouseEnter={makeIconWiggle} onMouseLeave={stopIconWiggle} data-testid="header-nav-li-ian-cowan">
          <Link to="/" className={activePage.home}><i className="fas fa-home"></i><span className="hidden header-label" data-testid="header-nav-span-ian-cowan">&nbsp;&nbsp;&nbsp;Ian Cowan</span></Link>
        </li>
        <li onMouseEnter={makeIconWiggle} onMouseLeave={stopIconWiggle} data-testid="header-nav-li-projects">
          <Link to="/projects" className={activePage.projects}><i className="fas fa-file-code"></i><span className="hidden header-label" data-testid="header-nav-span-projects">&nbsp;&nbsp;&nbsp;Projects</span></Link>
        </li>
        <li onMouseEnter={makeIconWiggle} onMouseLeave={stopIconWiggle} data-testid="header-nav-li-contact">
          <Link to="/contact" className={activePage.contact}><i className="fas fa-file-signature"></i><span className="hidden header-label" data-testid="header-nav-span-contact">&nbsp;&nbsp;&nbsp;Contact</span></Link>
        </li>
        <li onMouseEnter={makeArrowMove} onMouseLeave={stopArrowMove} data-testid="header-nav-li-collapseButton">
          <button id="expand-header" onClick={expandHeader} data-testid="header-nav-collapseButton"><i id="collapseIcon" className="fas fa-arrow-right"></i><span className="hidden header-label" data-testid="header-nav-span-collapse-button">&nbsp;&nbsp;&nbsp;Collapse</span></button>
        </li>
      </ul>
    </nav>
  );
}

function expandHeader() {
  let labels = document.getElementsByClassName('header-label');
  if (labels[0].classList.contains('hidden')) {
    // Expand the navbar
    let nav = document.getElementById('header-ul');
    nav.classList.add('expanded');

    // Shrink the body
    let body = document.getElementsByClassName('body');
    for (var bod of body) {
      bod.classList.add('header-open');
    };

    updateArrowMove();

    setTimeout(function() {
      // Unhide the labels
      for (var label of labels) {
        label.classList.remove('hidden');
        label.classList.add('not-hidden-fade');
      };

      // Change the collapse icon
      let collapseIcon = document.getElementById('collapseIcon');
      collapseIcon.classList.remove('fa-arrow-right');
      collapseIcon.classList.add('fa-arrow-left');
    }, 250);
  } else {
    // Expand the navbar
    let nav = document.getElementById('header-ul');
    nav.classList.remove('expanded');

    // Shrink the header
    let header = document.getElementsByClassName('header');
    for (var head of header) {
      head.classList.remove('header-open');
    };

    // Widen the body
    let body = document.getElementsByClassName('body');
    for (bod of body) {
      bod.classList.remove('header-open');
    };

    updateArrowMove();

    // Hide the labels
    for (var label of labels) {
      label.classList.remove('not-hidden-fade');
      label.classList.add('hidden');
    };

    // Change the collapse icon
    let collapseIcon = document.getElementById('collapseIcon');
    collapseIcon.classList.remove('fa-arrow-left');
    collapseIcon.classList.add('fa-arrow-right');
  }
}

function makeIconWiggle(e) {
  e.currentTarget.classList.add('wiggle-icon');
}

function stopIconWiggle(e) {
  e.currentTarget.classList.remove('wiggle-icon');
}

function makeArrowMove(e) {
  let headerUl = document.getElementById('header-ul');
  setArrowMove(headerUl, e.currentTarget);
  mouseOverExpandHeaderButton = true;
}

function updateArrowMove() {
  let headerUl = document.getElementById('header-ul');
  let expandLi = document.getElementById('expand-header').parentElement;

  if (mouseOverExpandHeaderButton)
    setArrowMove(headerUl, expandLi);
}

function setArrowMove(headerUl, target) {
  if (headerUl.classList.contains('expanded')) {
    target.classList.remove('arrow-move-right');
    target.classList.add('arrow-move-left'); 
  } else {
    target.classList.remove('arrow-move-left');
    target.classList.add('arrow-move-right');
  }
}

function stopArrowMove(e) {
  e.currentTarget.classList = [];
  mouseOverExpandHeaderButton = false;
}

export default Header;
