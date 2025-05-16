import React, { useState } from "react";
import { Link } from "react-router-dom";

const Round1 = () => {
  const categories = ["Category 1", "Category 2", "Category 3"];
  const points = ["100", "200", "300", "400"];

  const [disabled, setDisabled] = useState({});

  const difficultyStyles = {
    "100": { bg: "bg-green-200", hover: "hover:bg-green-300", emoji: "🟢" },
    "200": { bg: "bg-yellow-200", hover: "hover:bg-yellow-300", emoji: "🟡" },
    "300": { bg: "bg-orange-200", hover: "hover:bg-orange-300", emoji: "🟠" },
    "400": { bg: "bg-red-200", hover: "hover:bg-red-300", emoji: "🔴" },
  };

  const handleDisable = (key) => {
    setDisabled((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <div className="min-h-screen  bg-gradient-to-b from-white to-blue-100 flex flex-col items-center overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="text-5xl font-extrabold text-blue-800  drop-shadow-lg tracking-wide">
           Round 1
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-700 font-semibold">Choose a Category & Points</h2>
      </div>

      {/* Game Board */}
      <div className="w-full max-w-6xl">
        {/* Categories Row */}
        <div className="flex justify-center gap-8 mb-4 flex-wrap">
          {categories.map((cat, catIndex) => (
            <div
              key={catIndex}
              className="w-48 h-16 flex items-center justify-center bg-blue-600 text-white text-2xl font-bold rounded-t-2xl shadow-lg border-b-4 border-blue-800 uppercase tracking-wide"
            >
              {cat}
            </div>
          ))}
        </div>
        {/* Points Grid */}
        <div className="flex justify-center gap-8 flex-wrap">
          {categories.map((cat, catIndex) => (
            <div key={catIndex} className="flex flex-col gap-6">
              {points.map((pt, ptIndex) => {
                const key = `${catIndex}-${pt}`;
                const isDisabled = disabled[key];
                const style = difficultyStyles[pt];

                return (
                  <div key={ptIndex} className="relative group">
                    <input
                      type="checkbox"
                      onChange={() => handleDisable(key)}
                      className="absolute top-2 right-2 z-10 w-5 h-5 cursor-pointer accent-blue-600"
                      disabled={isDisabled}
                      checked={isDisabled}
                    />
                    <Link
                      to={!isDisabled ? `/question/${catIndex + 1}/${pt}` : "#"}
                      className={`w-48 h-24 rounded-2xl shadow-xl flex items-center justify-center font-bold text-2xl text-center transition-all duration-300 border-2 border-blue-200
                        ${
                          isDisabled
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed scale-95"
                            : `${style.bg} ${style.hover} text-blue-900 cursor-pointer hover:scale-105 hover:shadow-2xl`
                        }`}
                      onClick={(e) => {
                        if (isDisabled) e.preventDefault();
                      }}
                    >
                      {isDisabled ? "❌" : `${style.emoji} ${pt}`}
                    </Link>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-16 text-center">
        <Link
          to="/"
          className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-800 text-white text-xl font-bold rounded-2xl shadow-lg transition duration-300"
        >
          ⬅️ Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Round1;
