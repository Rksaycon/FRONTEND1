// src/pages/Contact.jsx
import React, { useState } from "react";
import './Contact.css'; // Import the specific CSS for the Contact page

const Contact = () => {
  const [question, setQuestion] = useState(""); // State to track the question

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (question.trim()) {
      alert(`Your question has been submitted: "${question}"`);
      setQuestion(""); // Clear the input field
    } else {
      alert("Please enter a question before submitting.");
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p>
          <strong>Phone:</strong> 09222555100
        </p>
        <p>
          <strong>Email:</strong> KEN@GMAIL.com
        </p>
      </div>

      {/* Ask a Question Section */}
      <div className="ask-question">
        <h2>Ask a Question</h2>
        <form onSubmit={handleSubmit} className="question-form">
          <input
            type="text"
            value={question}
            onChange={handleQuestionChange}
            placeholder="Type your question here..."
            className="question-input"
          />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
