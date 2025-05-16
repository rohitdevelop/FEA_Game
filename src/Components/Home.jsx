import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [level, setLevel] = useState(null); // 'easy' | 'intermediate' | 'hard' | null

  const handleClick = (selectedLevel) => {
    setLevel(level === selectedLevel ? null : selectedLevel);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-b from-white to-blue-50">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-blue-700 drop-shadow-lg tracking-wide text-center">
        🎯 Jeopardy Game
      </h1>

      <div className="w-full max-w-sm flex flex-col gap-6">
        {/* Easy Level */}
        <button
          onClick={() => handleClick("easy")}
          className="transition-all duration-300 ease-in-out bg-white border-2 rounded-xl shadow-md hover:shadow-blue-200 hover:scale-105 p-5 text-center text-lg font-semibold text-blue-600 border-blue-200"
        >
          🟢 Easy Level
        </button>
        {level === "easy" && (
          <div className="flex justify-center gap-4 mt-5 flex-wrap transition-all duration-300">
            {["Round 1", "Round 2", "Round 3"].map((round, idx) => (
              <Link key={idx} to={`/easy/round${idx + 1}`}>
                <div className="w-24 h-24 bg-blue-200 text-black font-bold rounded-xl shadow-lg flex items-center justify-center hover:bg-blue-300 transition-all duration-300 cursor-pointer">
                  {round}
                </div>
              </Link>
            ))}
          </div>
        )}
        {/* Intermediate Level */}
        <button
          onClick={() => handleClick("intermediate")}
          className="transition-all duration-300 ease-in-out bg-white border-2 rounded-xl shadow-md hover:shadow-blue-200 hover:scale-105 p-5 text-center text-lg font-semibold text-blue-600 border-blue-200"
        >
          🟡 Intermediate Level
        </button>
        {level === "intermediate" && (
          <div className="flex justify-center gap-4 mt-5 flex-wrap transition-all duration-300">
            {["Round 1", "Round 2", "Round 3"].map((round, idx) => (
              <div
                key={idx}
                className="w-24 h-24 bg-blue-300 text-white font-bold rounded-xl shadow-lg flex items-center justify-center hover:bg-blue-400 transition-all duration-300 cursor-pointer"
              >
                {round}
              </div>
            ))}
          </div>
        )}
        {/* Hard Level */}
        <button
          onClick={() => handleClick("hard")}
          className="transition-all duration-300 ease-in-out bg-white border-2 rounded-xl shadow-md hover:shadow-blue-200 hover:scale-105 p-5 text-center text-lg font-semibold text-blue-600 border-blue-200"
        >
          🔴 Hard Level
        </button>
        {level === "hard" && (
          <div className="flex justify-center gap-4 mt-5 flex-wrap transition-all duration-300">
            {["Round 1", "Round 2", "Round 3"].map((round, idx) => (
              <div
                key={idx}
                className="w-24 h-24 bg-blue-400 text-white font-bold rounded-xl shadow-lg flex items-center justify-center hover:bg-blue-500 transition-all duration-300 cursor-pointer"
              >
                {round}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;