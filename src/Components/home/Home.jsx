import React, { useState } from "react";
import { Link } from "react-router-dom";
import Particles from "./Particles";
import { motion } from "framer-motion";

const Home = () => {
  const [level, setLevel] = useState(null);

  const handleClick = (selectedLevel) => {
    setLevel(level === selectedLevel ? null : selectedLevel);
  };

  const levelData = [
    {
      key: "easy",
      label: "🟢 Easy Level",
      color: "bg-green-300 hover:bg-green-400",
      path: "/easy/round",
    },
    {
      key: "intermediate",
      label: "🟡 Intermediate Level",
      color: "bg-yellow-300 hover:bg-yellow-400",
      path: "/intermediate/round",
    },
    {
      key: "hard",
      label: "🔴 Hard Level",
      color: "bg-red-300 hover:bg-red-400",
      path: "/hard/round",
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[92vh] px-4 bg-black overflow-hidden">
      {/* 🌟 Particles Background */}
      <div className="absolute inset-0 -z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={300}
          particleSpread={10}
          speed={0.5}
          particleBaseSize={200}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* 🎯 Heading with Motion */}
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        className="relative z-10 text-4xl md:text-5xl font-extrabold text-pink-700 text-center animate-bounce mb-6"
      >
        🎯 Jeopardy Game for Kids
      </motion.h1>

      {/* 📦 Level Buttons */}
      <div className="w-full max-w-md flex flex-col gap-8 items-center z-10">
        {levelData.map(({ key, label, color, path }, index) => (
          <motion.div
            key={key}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 + index * 0.3, type: "spring" }}
            className="w-full flex flex-col items-center"
          >
            <button
              onClick={() => handleClick(key)}
              className="w-full max-w-[300px] h-16 text-xl md:text-2xl font-bold bg-white border-4 border-pink-300 text-pink-600 rounded-full shadow-md hover:shadow-pink-300 hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out flex items-center justify-center"
            >
              {label}
            </button>

            {/* 🔄 Rounds with Animation */}
            {level === key && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center gap-4 mt-6 flex-wrap transition-all duration-300"
              >
                {["Round 1", "Round 2", "Round 3"].map((round, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 * idx }}
                  >
                    <Link to={`${path}${idx + 1}`}>
                      <div
                        className={`w-24 h-24 md:w-28 md:h-28 ${color} text-black text-md md:text-lg font-bold rounded-2xl shadow-lg flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105`}
                      >
                        {round}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
