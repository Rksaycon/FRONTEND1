// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
            <li><a href="/">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Education">Education</a></li>
            <li><a href="/Hobbies">Hobbies</a></li>
            <li><a href="/Contact">Contact</a></li> {/* Link to the Contact page */}
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
