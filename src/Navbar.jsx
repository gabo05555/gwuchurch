import './styles/Navbar.css';
import gwuLogo from './assets/gwuLogo.jpg';

export default function Navbar() {
  return (
    <nav className="navbar">
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
