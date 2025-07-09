import './styles/Navbar.css';
import gwuLogo from './assets/gwuLogo.jpg';
import { useEffect, useRef } from 'react';

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        navRef.current?.classList.add('scrolled');
      } else {
        navRef.current?.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar__logo">
        <img src={gwuLogo} alt="GWU Logo" className="navbar__logo-img" />
      </div>
      <ul className="navbar__menu">
        <li>Home</li>
        <li>About</li>
        <li>Ministries</li>
        <li>Connect</li>
        <li>Events</li>
        <li>Give</li>
      </ul>
      <button className="navbar__cta">New Here?</button>
    </nav>
  );
}
