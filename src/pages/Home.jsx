import { Link } from "react-router-dom";  // Import the Link component
import './Home.css';
import DogProfile from "../assets/dog1.jpg";  // Import the image properly from the 'assets' folder

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
          src={DogProfile}  // Use the imported image here
          alt="Ken Saycon's Profile"
          className="profile-pic"
        />
      </div>
    </div>
  );
}

export default Home;
