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
      key: "game start",
      label: "🟢 levels",
      color: "bg-gradient-to-br from-cyan-400 to-cyan-600 hover:from-cyan-500 hover:to-cyan-700",
      path: "/easy/round",
      icon: "🎯",
      description: "Perfect for beginners"
    },
  ];

  const rounds = [
    { name: "Easy", difficulty: "Beginner", color: "from-emerald-400 to-emerald-600", icon: "🌱" },
    { name: "Intermediate", difficulty: "Moderate", color: "from-amber-400 to-amber-600", icon: "⚡" },
    { name: "Hard", difficulty: "Expert", color: "from-red-400 to-red-600", icon: "🔥" }
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-l from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Enhanced Particles Background */}
      <div className="absolute inset-0 -z-0">
        <Particles
          particleColors={["#8b5cf6", "#06b6d4", "#10b981"]}
          particleCount={150}
          particleSpread={15}
          speed={0.3}
          particleBaseSize={400}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-500/10 rounded-full blur-xl"></div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {/* Enhanced Heading */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="text-center mb-12"
        >
          <motion.h1
            animate={{ 
              textShadow: [
                "0 0 20px #8b5cf6",
                "0 0 30px #06b6d4", 
                "0 0 20px #8b5cf6"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-5xl md:text-7xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4"
          >
            🎯 JEOPARDY
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 font-medium"
          >
            Test Your Knowledge • Challenge Your Mind
          </motion.p>
        </motion.div>

        {/* Level Selection */}
        <div className="flex justify-center mb-8">
          {levelData.map(({ key, label, color, path, icon, description }, index) => (
            <motion.div
              key={key}
              initial={{ y: -50, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.2, type: "spring", stiffness: 120 }}
              className="relative group"
            >
              <button
                onClick={() => handleClick(key)}
                className={`relative px-8 py-6 text-xl md:text-2xl font-bold ${color} text-white rounded-2xl shadow-2xl hover:shadow-green-500/25 hover:scale-105 active:scale-95 transition-all duration-300 ease-out border border-white/10 backdrop-blur-sm overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="relative flex items-center gap-3">
                  <span className="text-2xl">{icon}</span>
                  <div className="text-left">
                    <div>{label}</div>
                    <div className="text-sm opacity-80">{description}</div>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Rounds Display */}
        {level && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-4xl mx-auto"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-bold text-center mb-8 text-white"
            >
              Choose Your Challenge
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
              {rounds.map((round, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.3 + idx * 0.1, type: "spring", stiffness: 100 }}
                  className="group"
                >
                  <Link to={`${levelData[0].path}${idx + 1}`}>
                    <div className={`relative p-6 bg-gradient-to-br ${round.color} rounded-3xl shadow-2xl hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 border border-white/10 backdrop-blur-sm overflow-hidden`}>
                      {/* Animated background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      
                      {/* Content */}
                      <div className="relative z-10 text-center text-white">
                        <div className="text-4xl mb-3">{round.icon}</div>
                        <h3 className="text-xl md:text-2xl font-bold mb-2">{round.name}</h3>
                        <p className="text-sm opacity-90 mb-4">{round.difficulty}</p>
                        
                        {/* Animated play button */}
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm border border-white/30"
                        >
                          <span>Play Now</span>
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          >
                            ▶
                          </motion.span>
                        </motion.div>
                      </div>

                      {/* Floating elements */}
                      <div className="absolute top-2 right-2 w-8 h-8 bg-white/10 rounded-full blur-sm"></div>
                      <div className="absolute bottom-2 left-2 w-6 h-6 bg-white/10 rounded-full blur-sm"></div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-12 text-gray-400"
        >
          <p className="text-sm">Ready to test your knowledge? Choose a level and start playing!</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;