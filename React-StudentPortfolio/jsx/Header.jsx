// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="logo">StudentPortfolio</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
      </ul>
    </header>
  );
}

export default Header;
