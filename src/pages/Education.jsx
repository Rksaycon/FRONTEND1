// src/pages/Education.jsx
import React, { useState, useEffect } from "react";
import "./Education.css"; // Import the CSS file for the Education page

const Education = () => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBlinking(false);
    }, 3000); // Stop blinking after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const toggleInfo = () => {
    setIsInfoVisible(!isInfoVisible);
  };

  return (
    <div className="education-container">
      <div className="education-content">
        <div className="text-section">
          <h1>Education</h1>
          <p>
            Currently, I am pursuing a Bachelor’s degree in Computer Science at NCF.
            Coding is my passion, and I enjoy learning new technologies and experimenting
            with innovative ideas.
          </p>
          <button
            onClick={toggleInfo}
            className={`toggle-button ${isBlinking ? "blink" : ""}`}
          >
            {isInfoVisible ? "Hide Details" : "Click for More Details"}
          </button>
          {isInfoVisible && (
            <div className="additional-info">
              <h3>My Journey So Far:</h3>
              <ul>
                <li>BS in Computer Science - NCF (2023 - Future)</li>
                <li>Key Courses: Data Structures, Programming Fundamentals</li>
                <li>Languages: HTML, CSS, JavaScript, and more!</li>
                <li>Skills: Problem-solving, teamwork, and adaptability</li>
              </ul>
              <p>Fun fact: GPT NAMBAWAN! 🍦</p>
            </div>
          )}
        </div>
        <div className="image-section">
          <img
            src="./src/assets/dog3.jpg" // Replace with your image path
            alt="Learning in progress"
            className="education-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
