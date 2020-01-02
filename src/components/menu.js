import React, { useRef, useState } from 'react';
import useLockBodyScroll from './use-lock-body-scroll';
import { Link } from "gatsby"
import styled from '@emotion/styled'

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 25 25"
    >
      <path d="M2 2L22 2" className="top"></path>
      <path d="M2 10L18 10" className="middle"></path>
      <path d="M2 18L14 18" className="bottom"></path>
    </svg>
  );
}

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="menuButton">
        <button onClick={() => setMenuOpen(true)}><Icon/></button>
      </div>

      {menuOpen && (
        <NavLinks
          onClose={() => setMenuOpen(false)}
        />
      )}
    </div>
  );
}

function NavLinks({ onClose }) {
  useLockBodyScroll();
  return (
    <ul className="menu-overlay" onClick={onClose}>
      <li><Link to="/" onClick={onClose}>Home</Link></li>
      <li><Link to="/work" onClick={onClose}>Work</Link></li>
      <li><Link to="/about" onClick={onClose}>About</Link></li>
      <li><Link to="/contact" onClick={onClose}>Contact</Link></li>
    </ul>
  );
}


export default Menu