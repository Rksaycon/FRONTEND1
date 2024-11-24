import React, { useState } from "react";

function Hobbies() {
  // State to track if additional hobbies are visible
  const [showMore, setShowMore] = useState(false);

  // Toggle visibility of additional hobbies
  const toggleMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="hobbies-page">
      <h1>My Hobbies</h1>
      <p>THIS IS WHAT I USUALLY DO EVERYDAY including:</p>
      <ul>
        <li>WATCHING TV AND WATCHING TELIVISION</li>
        <li>Cycling in nature</li>
        <li>Building small coding projects</li>
        <li>Exploring new technologies</li>
      </ul>

      {/* Button to toggle more hobbies */}
      <button onClick={toggleMore} className="toggle-button">
        {showMore ? "Hide More" : "Click for More"}
      </button>

      {/* Additional hobbies are conditionally rendered */}
      {showMore && (
        <div className="additional-hobbies">
          <ul>
            <li>Learning new languages </li>
            <li>DIY PROJECTS</li>
            <li>BINGED WATCH ON TIKTOK</li>
            <li>😁</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Hobbies;
