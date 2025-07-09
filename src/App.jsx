
import './styles/App.css';
import Navbar from './Navbar';
import './styles/LandingHero.css';
import bibleImg from './assets/bible.jpg';

function App() {
  return (
    <div className="landing-page" style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      <Navbar />
      <section className="landing-hero">
        <img
          className="landing-hero__bg"
          src={bibleImg}
          alt="Bible background"
        />
        <div className="landing-hero__overlay" />
        <div className="landing-hero__content">
          <h1 className="landing-hero__title">Let's Worship Together.</h1>
          <p className="landing-hero__subtitle">Welcome to God With Us Church</p>
          <div className="landing-hero__actions">
            <button className="landing-hero__btn">Plan A Visit</button>
            <button className="landing-hero__btn secondary">Get Connected →</button>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="service-details-section" style={{ background: '#fff', padding: '5rem 0 6rem 0' }}>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 px-6">
          <div className="max-w-lg">
            <h4 className="text-sm tracking-widest text-gray-500 mb-2 font-semibold">SERVICE DETAILS</h4>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#222c4a] mb-2 leading-tight">Attend a Sunday<br/>Service</h2>
            <div className="w-10 h-1 bg-gray-200 rounded mb-4" />
            <p className="text-gray-700 mb-4">Whether you’re single or married, older or younger, this is a place where you can grow in your faith and build a strong community with others. Every Sunday, we offer Spirit-filled worship and live teaching that is biblically-centered.</p>
            <p className="italic text-gray-500 mb-6">Children's ministry is available from birth – 12 years old.</p>
            <div className="flex gap-4">
              <button className="px-6 py-2 rounded shadow text-white font-semibold bg-[#6b7340] hover:bg-[#535b2a] transition">About Us</button>
              <button className="px-6 py-2 rounded shadow font-semibold text-[#6b7340] hover:text-[#535b2a] bg-transparent border-0">Get Directions <span aria-hidden>→</span></button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 mt-8 md:mt-0">
            <div className="bg-white rounded-lg shadow-lg px-10 py-8 flex flex-col items-center min-w-[170px]">
              <span className="text-3xl mb-2 text-[#222c4a]">🕙</span>
              <div className="text-xl font-bold text-[#222c4a]">10am</div>
              <div className="text-gray-500 text-sm">Every Sunday</div>
              <div className="w-10 h-1 bg-[#b6c47a] mt-4 rounded" />
            </div>
            <div className="bg-white rounded-lg shadow-lg px-10 py-8 flex flex-col items-center min-w-[170px]">
              <span className="text-3xl mb-2 text-[#222c4a]">🏛️</span>
              <div className="text-xl font-bold text-[#222c4a]">Legacy Campus</div>
              <div className="text-gray-500 text-sm text-center">10035 S Peoria St Lone<br/>Tree CO 80134</div>
              <div className="w-10 h-1 bg-[#b6c47a] mt-4 rounded" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App
