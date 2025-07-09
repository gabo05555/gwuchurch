import './styles/App.css';
import Navbar from './Navbar';
import './styles/LandingHero.css';

function App() {
  return (
    <div className="landing-page" style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      <Navbar />
      <section className="landing-hero">
        <img
          className="landing-hero__bg"
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80"
          alt="Church landing background"
        />
        <div className="landing-hero__overlay" />
        <div className="landing-hero__content">
          <h1 className="landing-hero__title">Building Legacies of Faith.</h1>
          <p className="landing-hero__subtitle">Welcome to Legacy Hills Church</p>
          <div className="landing-hero__actions">
            <button className="landing-hero__btn">Plan A Visit</button>
            <button className="landing-hero__btn secondary">Get Connected →</button>
          </div>
        </div>
      </section>
      {/* Additional landing page content can go here */}
    </div>
  );
}

export default App
