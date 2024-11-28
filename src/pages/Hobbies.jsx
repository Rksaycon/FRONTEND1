import React, { useState } from "react";
import "./Hobbies.css";

function Hobbies() {
  const [showMore, setShowMore] = useState(false);

  const toggleMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="hobbies-page">
      {/* Hero Section */}
      <div className="hobbies-hero">
        <h1>My Hobbies</h1>
        <p>
          Life is more than just work! Here are some things I love doing in my
          free time.
        </p>
      </div>

      {/* Hobbies Section */}
      <div className="hobbies-grid">
        <div className="hobby-card">
          <h3>📺 Watching TV</h3>
          <p>
            Whether it’s a thrilling series or a classic movie, I love spending
            time unwinding with my favorite shows.
          </p>
        </div>
        <div className="hobby-card">
          <h3>🚴‍♂️ Cycling</h3>
          <p>
            Riding through nature helps me clear my mind and stay energized.
          </p>
        </div>
        <div className="hobby-card">
          <h3>💻 Coding</h3>
          <p>
            Building fun projects and learning new technologies fuel my
            creativity.
          </p>
        </div>
        <div className="hobby-card">
          <h3>⚙️ Exploring Tech</h3>
          <p>
            I’m always curious about the latest gadgets and software trends.
          </p>
        </div>
      </div>

      {/* Toggle More Button */}
      <button onClick={toggleMore} className="toggle-button">
        {showMore ? "Show Less" : "Discover More"}
      </button>

      {/* Additional Hobbies Section */}
      {showMore && (
        <div className="additional-hobbies">
          <div className="hobbies-grid">
            <div className="hobby-card">
              <h3>🌍 Learning Languages</h3>
              <p>
                Exploring new languages expands my ability to connect with the
                world.
              </p>
            </div>
            <div className="hobby-card">
              <h3>🔧 DIY Projects</h3>
              <p>
                Tinkering with small projects helps me stay creative and
                resourceful.
              </p>
            </div>
            <div className="hobby-card">
              <h3>🎥 Binge-watching TikTok</h3>
              <p>
                A little guilty pleasure to stay updated on trends and have a
                good laugh!
              </p>
            </div>
            <div className="hobby-card">
              <h3>😄 Staying Positive</h3>
              <p>
                No matter what, I always find joy in the small things in life.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hobbies;
