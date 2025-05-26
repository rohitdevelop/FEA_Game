import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Roundinter3 = () => {
  const categories = ["Category 1", "Category 2", "Category 3"];
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

  // Animation variants for container and items
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { staggerChildren: 0.1 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    hover: { scale: 1.05,  }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-white to-yellow-500 flex flex-col items-center overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Heading */}
      <div className="text-center mb-5">
        <motion.h1
          className="text-5xl font-extrabold text-blue-800 drop-shadow-lg tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          intermediate Round 3
        </motion.h1>
      </div>

      {/* Game Board */}
      <div className="w-full max-w-6xl">
        {/* Categories Row */}
        <div className="flex justify-center gap-8 mb-4 flex-wrap">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={catIndex}
              className="w-48 h-16 flex items-center justify-center bg-blue-600 text-white text-2xl font-bold rounded-t-2xl shadow-lg border-b-4 border-blue-800 uppercase tracking-wide"
              variants={itemVariants}
            >
              {cat}
            </motion.div>
          ))}
        </div>

        {/* Points Grid */}
        <div className="flex justify-center items-center gap-8 mt-10 w-full px-4">
          {/* Left Button */}
          <motion.div className="flex justify-center items-center h-full" variants={itemVariants}>
            <Link
              to="/"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-800 text-white text-lg font-bold rounded-2xl shadow-lg transition duration-300"
            >
              ⬅️ Back to Home
            </Link>
          </motion.div>

          {/* Points Grid */}
          <motion.div className="flex justify-center gap-8 flex-wrap" variants={containerVariants}>
            {categories.map((cat, catIndex) => (
              <motion.div key={catIndex} className="flex flex-col gap-6" variants={containerVariants}>
                {points.map((pt, ptIndex) => {
                  const key = `${catIndex}-${pt}`;
                  const isDisabled = !!disabled[key];
                  const style = difficultyStyles[pt];

                  return (
                    <motion.div
                      key={ptIndex}
                      className="relative group"
                      variants={itemVariants}
                      whileHover={!isDisabled ? "hover" : ""}
                    >
                      {/* Toggle checkbox */}
                      <input
                        type="checkbox"
                        onChange={() => handleToggle(key)}
                        className="absolute top-2 right-2 z-10 w-5 h-5 cursor-pointer accent-blue-600"
                        checked={isDisabled}
                      />

                      {/* Question Link */}
                      <Link
                        to={
                          !isDisabled
                            ? `/Intermediate/Round3/${catIndex + 1}/${pt}`
                            : "#"
                        }
                        className={`w-48 h-24 rounded-2xl shadow-xl flex items-center justify-center font-bold text-2xl text-center transition-all duration-300 border-2 border-blue-200
                             ${
                               isDisabled
                                 ? "bg-gray-300 text-gray-500 cursor-not-allowed scale-95"
                                 : `${style.bg} ${style.hover} text-blue-900 cursor-pointer`
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
              </motion.div>
            ))}
          </motion.div>

          {/* Right Button */}
          <motion.div className="flex justify-center items-center h-full" variants={itemVariants}>
            <Link
              to="/Hard/round1"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-800 text-white text-lg font-bold rounded-2xl shadow-lg transition duration-300"
            >
              Next Level ➡️
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Roundinter3;
