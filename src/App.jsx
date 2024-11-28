import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Use Link for routing
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Hobbies from './pages/Hobbies';
import Contact from './pages/Contact'; // Import Contact component
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <div className="brand">KEN SAYCON 🎲</div> {/* Brand Name */}
          <ul>
            {/* Use Link for SPA routing */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Education">Education</Link></li>
            <li><Link to="/Hobbies">Hobbies</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} /> {/* Set Home page to root */}
          <Route path="/About" element={<About />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Hobbies" element={<Hobbies />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
