import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Easyhun = () => {
  const [showCountdown, setShowCountdown] = useState(false);
  const [count, setCount] = useState(3);
  const [showAnswer, setShowAnswer] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (showCountdown && count > 0) {
      timer = setTimeout(() => setCount((prev) => prev - 1), 1000);
    } else if (showCountdown && count === 0) {
      setTimeout(() => {
        setShowCountdown(false);
        setShowAnswer(true);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [showCountdown, count]);

  const handleAnswerClick = () => {
    setShowCountdown(true);
    setCount(3);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50 relative px-4">
      {/* Countdown Overlay */}
      {showCountdown && (
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <h1 className="text-white text-8xl font-extrabold animate-pulse">{count}</h1>
        </div>
      )}

      {/* Final Answer */}
      {showAnswer ? (
        <h1 className="text-6xl font-extrabold text-green-600 z-10">✅ am</h1>
      ) : (
        <div className="text-center bg-white p-8 rounded-xl shadow-xl w-full max-w-xl z-10">
          <h1 className="text-2xl font-bold text-blue-800 mb-2">📘 Category: Grammar</h1>
          <h2 className="text-lg text-gray-700 mb-6">For 100 Points</h2>

          <p className="text-xl font-medium text-gray-700 mb-8">
            I <span className="underline decoration-dotted decoration-blue-500">_____</span> a student.
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg font-semibold transition"
              disabled={showCountdown}
            >
              ⬅️ Back
            </button>
            <button
              onClick={handleAnswerClick}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
              disabled={showCountdown}
            >
              ✅ Answer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Easyhun;
