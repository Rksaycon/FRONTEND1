import React, { useState } from "react";
import myImage from "../assets/dog.jpg"; // Import image
import "./About.css"; // Custom styles for the About page

const About = () => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);

  const toggleInfo = () => setIsInfoVisible(!isInfoVisible);
  const toggleImage = () => setIsImageVisible(!isImageVisible);

  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Me</h1>
        <p>
          Hi! I'm <strong>Ken Saycon</strong>, a 2nd-year CS student passionate about exploring 
          technology and learning something new every day. Here's a bit more about me!
        </p>
      </header>

      <section className="about-content">
        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-info">
            <h2>Hello, eberywan! 👋</h2>
            <p>
              I'm a tech student i like making DIY projects including electronics and other diy stuff the biggest project i made is a faraday mini generator also a solar set-up.
            </p>
            <button onClick={toggleInfo} className="btn primary-btn">
              {isInfoVisible ? "Show Less" : "Read More"}
            </button>
          </div>

          {/* Profile Image */}
          <div className="profile-image-container">
            <img
              src={myImage}
              alt="Ken Saycon"
              className={`profile-image ${isImageVisible ? "visible" : ""}`}
            />
            <button onClick={toggleImage} className="btn secondary-btn">
              {isImageVisible ? "Hide Image" : "Show Image"}
            </button>
          </div>
        </div>

        {/* Additional Information */}
        {isInfoVisible && (
          <div className="additional-info">
            <h3>Some Fun Facts About Me:</h3>
            <ul>
              <li>📚 I’m a big fan of AI and i always rely on AI because im learning through AI</li>
              <li>💻 I love building creative projects and exploring new technologies.</li>
              <li>🎯 My goal: Keep learning, keep growing, and contribute to meaningful projects.</li>
            </ul>
          </div>
        )}
      </section>

      <footer className="about-footer">
        <p>
          Want to collaborate or chat? Feel free to reach out anytime! 
        </p> Just click the contacts!
      </footer>
    </div>
  );
};

export default About;
