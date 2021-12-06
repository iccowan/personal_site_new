import React from 'react';
import '../css/Header.css';
import {Link, useLocation} from 'react-router-dom';

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
      <ul id="header-ul">
        <li onMouseEnter={makeIconWiggle} onMouseLeave={stopIconWiggle}>
          <Link to="/" className={activePage.home}><i className="fas fa-home"></i><span className="hidden header-label">&nbsp;&nbsp;&nbsp;Home</span></Link>
        </li>
        <li onMouseEnter={makeIconWiggle} onMouseLeave={stopIconWiggle}>
          <Link to="/projects" className={activePage.projects}><i className="fas fa-file-code"></i><span className="hidden header-label">&nbsp;&nbsp;&nbsp;Projects</span></Link>
        </li>
        <li onMouseEnter={makeIconWiggle} onMouseLeave={stopIconWiggle}>
          <Link to="/contact" className={activePage.contact}><i className="fas fa-file-signature"></i><span className="hidden header-label">&nbsp;&nbsp;&nbsp;Contact</span></Link>
        </li>
        <li onMouseEnter={makeArrowMove} onMouseLeave={stopArrowMove}>
          <button id="expand-header" onClick={expandHeader}><i id="collapseIcon" className="fas fa-arrow-right"></i><span className="hidden header-label">&nbsp;&nbsp;&nbsp;Collapse</span></button>
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
  let arrowClassList = e.target.childNodes[0].classList;

  if (arrowClassList.contains('fa-arrow-right'))
    e.currentTarget.classList.add('arrow-move-right'); 
  else
    e.currentTarget.classList.add('arrow-move-left');
}

function stopArrowMove(e) {
  e.currentTarget.classList = [];
}

export default Header;
