import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Use Link from react-router-dom
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Hobbies from './pages/Hobbies';
import Contact from './pages/Contact';  // Import Contact component
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {/* Use Link instead of <a> for routing */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Education">Education</Link></li>
            <li><Link to="/Hobbies">Hobbies</Link></li>
            <li><Link to="/Contact">Contact</Link></li> {/* Link to the Contact page */}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Hobbies" element={<Hobbies />} />
          <Route path="/Contact" element={<Contact />} /> {/* Add Contact route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
