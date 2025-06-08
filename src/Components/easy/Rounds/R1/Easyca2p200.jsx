import React, { useState, useEffect } from "react";
 
const Easyca2p200 = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(3);
  const [timerActive, setTimerActive] = useState(false);
 
  const correctAnswer = "can";

  // Timer effect
  useEffect(() => {
    let interval;
    if (timerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timerActive && timer === 0) {
      setTimerActive(false);
      setShowResult(true);
      setSubmitted(true);
    }
    return () => clearInterval(interval);
  }, [timerActive, timer]);

  // Check answer after timer ends
  useEffect(() => {
    if (!timerActive && timer === 0) {
      const answerTrimmed = userAnswer.trim().toLowerCase();
      setIsCorrect(answerTrimmed === correctAnswer);
    }
  }, [timerActive, timer, userAnswer]);

  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimer(3);
    setTimerActive(true);
    setShowResult(false);
    setSubmitted(false);
    setIsCorrect(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50 relative px-4 transition-all duration-500">
      {/* Timer Overlay */}
      {timerActive && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-50 bg-white/80 transition-all duration-500">
          <h1 className="text-black font-extrabold" style={{ fontSize: "16vw", lineHeight: 1 }}>
            {timer}
          </h1>
          <p className="text-2xl font-semibold text-gray-700 mt-4">Checking your answer...</p>
        </div>
      )}

      {/* Result Overlay */}
      {showResult && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-50 bg-white/80 transition-all duration-500">
          <h1 className={`text-6xl md:text-7xl font-extrabold mb-4 ${isCorrect ? "text-green-600" : "text-red-500"}`}>
            {isCorrect ? `✅ ${correctAnswer}` : `❌`}
          </h1>
          <p className={`text-3xl font-bold mb-2 ${isCorrect ? "text-green-700" : "text-red-600"}`}>
            {isCorrect ? "Congratulations!" : "Better luck next time!"}
          </p>
          {!isCorrect && (
            <p className="text-xl font-semibold text-blue-700">
              Correct Answer: <span className="underline">{correctAnswer}</span>
            </p>
          )}
        </div>
      )}

      {/* Main Content */}
      <div
        className={`text-center bg-white p-10 rounded-2xl shadow-2xl w-full max-w-xl z-10 transition-all duration-500 ${
          (submitted || timerActive) ? "opacity-50 pointer-events-none select-none" : "opacity-100"
        }`}
      >
        <h1 className="text-3xl font-bold text-blue-800">
          📘 (Abilities & Permissions) Can / Can’t 
        </h1>
     <h2 className='text-red-500 text-2xl mb-6 font-bold'>(200 Points)</h2>
        <p className="text-xl font-medium mb-4">Although he's only 15, he ___ solve college-level math problems.</p>

        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
          <input
            type="text"
            value={userAnswer}
            onChange={handleInputChange}
            placeholder="Your Answer"
            className="border border-gray-300 rounded-lg px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-blue-700 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Easyca2p200;
 
