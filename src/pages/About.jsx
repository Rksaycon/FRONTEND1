// src/pages/About.jsx
import React, { useState } from "react";
import myImage from '../assets/dog.jpg'; // Import image

const About = () => {
  // State to track whether the additional information is visible
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false); // State for image visibility

  // Toggle visibility of additional information
  const toggleInfo = () => {
    setIsInfoVisible(!isInfoVisible);
  };

  // Toggle visibility of the image
  const toggleImage = () => {
    setIsImageVisible(!isImageVisible);
  };

  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p>
        WELCOME! Thanks well I'm not an expert; I usually rely on AI, but I understand how the code works, a little bit.
      </p>

      {/* Button with text based on visibility state */}
      <button onClick={toggleInfo} className="toggle-button">
        {isInfoVisible ? "Hide Info" : "Click for More Info"}
      </button>

      {/* Conditionally render additional information */}
      {isInfoVisible && (
        <div className="additional-info">
          <p>
            I am a 2nd-year CS student. And well, we all know we don't know what will happen soon,
            so just enjoying it.
          </p>
          <p>
            Feel free to reach out if you have any questions or would like to collaborate on a project!
          </p>
          <p>Also, you can ask me anything but within my knowledge range 😊</p>
          <h1>❤️</h1>
        </div>
      )}

      {/* Button to toggle image visibility */}
      <button onClick={toggleImage} className="image-button">
        {isImageVisible ? "Hide Image" : "Click for Image"}
      </button>

      {/* Conditionally render the image */}
      {isImageVisible && (
        <div className="image-container">
    
          <img src={myImage} alt="click" className="chill" />
        </div>
      )}
    </div>
  );
};

export default About;
