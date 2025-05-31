import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Round1 = () => { 
  const categories = ["Alphabet & Spellings", " (Abilities & Permissions) Can / Can’t ", "Greetings & Good Manners"];
  const points = ["100", "200", "300", "400"];

  const [disabled, setDisabled] = useState({});

  const difficultyStyles = {
    100: { bg: "bg-green-200", hover: "hover:bg-green-300", emoji: "🟢" },
    200: { bg: "bg-yellow-200", hover: "hover:bg-yellow-300", emoji: "🟡" },
    300: { bg: "bg-orange-200", hover: "hover:bg-orange-300", emoji: "🟠" },
    400: { bg: "bg-red-200", hover: "hover:bg-red-300", emoji: "🔴" },
  };

  useEffect(() => {
    const savedState = localStorage.getItem("round1-disabled");
    if (savedState) {
      setDisabled(JSON.parse(savedState));
    }
  }, []);

  const handleToggle = (key) => {
    setDisabled((prev) => {
      const updated = { ...prev, [key]: !prev[key] };
      localStorage.setItem("round1-disabled", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-500 flex flex-col items-center overflow-hidden">
      
      {/* 🏁 Animated Heading */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        className="text-center mb-5"
      >
        <h1 className="text-5xl font-extrabold text-blue-800 drop-shadow-lg tracking-wide">
          Easy Round 1
        </h1>
      </motion.div>

      {/* Game Board */}
      <div className="w-full max-w-6xl">
        {/* Categories Row */}
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="flex justify-center gap-8 mb-4 flex-wrap"
        >
          {categories.map((cat, catIndex) => (
            <div
              key={catIndex}
              className="w-48 h-20 px-2 flex items-center justify-center bg-blue-600 text-white text-lg font-bold rounded-t-2xl shadow-lg border-b-4 border-blue-800 uppercase tracking-wide text-center leading-tight break-words"
            >
              {cat}
            </div>
          ))}
        </motion.div>

        {/* Game Area with Buttons & Grid */}
        <div className="flex justify-center items-center gap-8 mt-10 w-full px-4">

          {/* ⬅️ Left Button */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center items-center h-full"
          >
            <Link
              to="/"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-800 text-white text-lg font-bold rounded-2xl shadow-lg transition duration-300"
            >
              ⬅️ Back to Home
            </Link>
          </motion.div>

          {/* 🔢 Points Grid */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex justify-center gap-8 flex-wrap"
          >
            {categories.map((cat, catIndex) => (
              <div key={catIndex} className="flex flex-col gap-6">
                {points.map((pt, ptIndex) => {
                  const key = `${catIndex}-${pt}`;
                  const isDisabled = !!disabled[key];
                  const style = difficultyStyles[pt];

                  return (
                    <motion.div
                      key={ptIndex}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.7 + ptIndex * 0.1 }}
                      className="relative group"
                    >
                      <input
                        type="checkbox"
                        onChange={() => handleToggle(key)}
                        className="absolute top-2 right-2 z-10 w-5 h-5 cursor-pointer accent-blue-600"
                        checked={isDisabled}
                      />

                      <Link
                        to={
                          !isDisabled ? `/easy/Round1/${catIndex + 1}/${pt}` : "#"
                        }
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
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </motion.div>

          {/* ➡️ Right Button */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center items-center h-full"
          >
            <Link
              to="/easy/round2"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-800 text-white text-lg font-bold rounded-2xl shadow-lg transition duration-300"
            >
              Next Round ➡️
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Round1;
