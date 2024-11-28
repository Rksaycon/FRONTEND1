import { Link } from "react-router-dom";  // Import the Link component
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section (Text) */}
      <div className="hero">
        <h1>Welcome, I am Ken, a Comscie student of NCF</h1>
        <p>
          A chill guy learning how to code, AI is my best friend and also my great teacher..
        </p>
        <div className="hero-buttons">
          {/* Learn More button navigating to About page */}
          <Link to="/About" className="btn primary-btn">Learn More</Link>

          {/* Contact Me button navigating to Contact page */}
          <Link to="/Contact" className="btn secondary-btn">Contact Me</Link>
        </div>
      </div>

      {/* About Section (Image) */}
      <div className="about-me">
        <img
          src="/assets/dog1.jpg"  // Adjusted the path to the public folder
          alt="Ken Saycon's Profile"
          className="profile-pic"
        />
      </div>
    </div>
  );
}

export default Home;
