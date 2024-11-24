// src/pages/Education.jsx
import React, { useState, useEffect } from "react";
import './Education.css';  // Import the CSS file for the Education page

const Education = () => {
  // State to track whether the additional education info is visible
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  // State to track button animation visibility
  const [isBlinking, setIsBlinking] = useState(true);

  // Toggle visibility of additional information
  const toggleInfo = () => {
    setIsInfoVisible(!isInfoVisible);
  };

  useEffect(() => {
    // Automatically stop the blinking after 3 seconds
    const timer = setTimeout(() => {
      setIsBlinking(false);
    }, 3000); // Adjust the time to stop the blinking

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  return (
    <div className="education-container">
      <h1>Education</h1>

      {/* Main Education Information */}
      <p>
        I am currently pursuing a degree in Computer Science at NCF, Where im learning how to add rgb on button lols
      </p>

      {/* Button with blinking effect */}
      <button
        onClick={toggleInfo}
        className={`toggle-button ${isBlinking ? "blink" : ""}`}
      >
        {isInfoVisible ? "Hide Details" : "Click for More Details"}
      </button>

      {/* Conditionally render additional education information */}
      {isInfoVisible && (
        <div className="additional-info">
          <h3>Degrees & Courses:</h3>
          <ul>
            <li>BS in Computer Science - NCF 2023 - FUTURE</li>
            <li>Intro to Programming (C++) SATIRE ONLY</li>
            <li>Data Structures and Algorithms 😎</li>
            <li>Language i know (HTML, CSS, JavaScript, tagcolish (tagalog,eng,bicol) )</li>
            <li>also i like ice cream yummy ice cream gooods</li>
          </ul>
          <p>
            In addition to my degree, I use CHATGPT 😎😎
          </p>
        </div>
      )}
    </div>
  );
};

export default Education;
