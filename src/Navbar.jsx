import './styles/Navbar.css';
import gwuLogo from './assets/gwuLogo.jpg';
import { useEffect, useRef } from 'react';

export default function Navbar() {
  const navRef = useRef(null);

  // Removed scroll animation effect

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar__logo">
        <img src={gwuLogo} alt="GWU Logo" className="navbar__logo-img" />
      </div>
      <ul className="navbar__menu">
        <li>Home</li>
        <li>About</li>
        <li>Ministries</li>
        <li>Events</li>
        <li>Give</li>
      </ul>
      <button className="navbar__cta">New Here?</button>
    </nav>
  );
}
