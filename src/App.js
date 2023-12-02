import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const quizData = [
    {
      question: "Which one is correct word for أَنَا?",
      options: ["شَرِبَ", "شَرِبْتُ", "شَرِبْنَا"],
      correctAnswer: "شَرِبْتُ",
    },
    // Add more quiz questions as needed
  ];

  return (
    <div className="App">
      {/* Task Bar */}
      <nav className="Task-bar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Quiz Content */}
      <main className="App-content">
        <h2>Quiz Time!</h2>

        {quizData.map((question, index) => (
          <div key={index}>
            <h2>{question.question}</h2>
            <ul>
              {question.options.map((option, optionIndex) => (
                <li
                  key={optionIndex}
                  className={selectedOption === option ? "selected" : ""}
                  onClick={() => handleOptionChange(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <h3>
          Your selected answer: {selectedOption ? selectedOption : "None"}
        </h3>
      </main>
    </div>
  );
}

export default App;
