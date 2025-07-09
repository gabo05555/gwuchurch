import './styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">{/* Replace with your SVG or image if needed */}
        <span className="navbar__logo-circle">LH</span>
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
