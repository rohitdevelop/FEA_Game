import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Round3 = () => {
  const categories = [
    "Internet & Netwok",
    "Banking",
    "Tanses",
  ];
  const points = ["100", "200", "300", "400"];

  const [disabled, setDisabled] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);

  const difficultyStyles = {
    100: {
      bg: "bg-gradient-to-br from-emerald-400 to-emerald-600",
      hover: "hover:from-emerald-500 hover:to-emerald-700",
      emoji: "🌟",
      shadow: "shadow-emerald-500/25",
      glow: "emerald-400",
    },
    200: {
      bg: "bg-gradient-to-br from-amber-400 to-amber-600",
      hover: "hover:from-amber-500 hover:to-amber-700",
      emoji: "⭐",
      shadow: "shadow-amber-500/25",
      glow: "amber-400",
    },
    300: {
      bg: "bg-gradient-to-br from-orange-400 to-orange-600",
      hover: "hover:from-orange-500 hover:to-orange-700",
      emoji: "🔥",
      shadow: "shadow-orange-500/25",
      glow: "orange-400",
    },
    400: {
      bg: "bg-gradient-to-br from-red-400 to-red-600",
      hover: "hover:from-red-500 hover:to-red-700",
      emoji: "💎",
      shadow: "shadow-red-500/25",
      glow: "red-400",
    },
  };

useEffect(() => {
  const savedState = localStorage.getItem("round3-disabled");
  if (savedState) {
    setDisabled(JSON.parse(savedState));
  }
}, []);

const handleToggle = (key) => {
  setDisabled((prev) => {
    const updated = { ...prev, [key]: !prev[key] };
    localStorage.setItem("round3-disabled", JSON.stringify(updated));
    return updated;
  });
};


  const handleNavigation = () => {
    // Simulate navigation
    alert(`you completed all levels`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 flex flex-col items-center overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-36 h-36 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Header Section */}
      <div className="w-full max-w-7xl mx-auto px-4 py-6 relative z-10">
        {/* Navigation Bar */}
        <div className="flex justify-between items-center mb-8">
         <Link to={"/"}>
          <button
            className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
            >
            <span className="text-xl group-hover:animate-bounce">🏠</span>
            <span>Home</span>
          </button>
            </Link>

          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 animate-pulse">
              🎯 Hard
            </h1>
            <p className="text-gray-300 text-lg">Level Up Your Skills</p>
          </div>

          <button
            onClick={handleNavigation}
            className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105"
          >
            <span>task complete</span>
            <span className="text-xl group-hover:animate-bounce">🚀</span>
          </button>
        </div>

        {/* Categories Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {categories.map((cat, catIndex) => (
            <div key={catIndex} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative h-20 flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-bold rounded-2xl shadow-xl border border-white/10 backdrop-blur-sm">
                <div className="text-center px-4">
                  <div className="text-2xl mb-1">
                    {catIndex === 0 ? "📚" : catIndex === 1 ? "🌍" : "🕐"}
                  </div>
                  <div className="text-sm leading-tight">{cat}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Game Board */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, catIndex) => (
            <div key={catIndex} className="space-y-4">
              {points.map((pt, ptIndex) => {
                const key = `${catIndex}-${pt}`;
                const isDisabled = !!disabled[key];
                const style = difficultyStyles[pt];
                const isHovered = hoveredCard === key;

                return (
                  <div
                    key={ptIndex}
                    className="relative group"
                    onMouseEnter={() => setHoveredCard(key)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Glowing effect on hover */}
                    {isHovered && !isDisabled && (
                      <div
                        className={`absolute inset-0 bg-${style.glow} rounded-3xl blur-xl opacity-30 transition-opacity duration-300`}
                      ></div>
                    )}

                    {/* Checkbox */}
                    <div className="absolute top-3 right-3 z-20">
                      <input
                        type="checkbox"
                        onChange={() => handleToggle(key)}
                        className="w-6 h-6 rounded-full cursor-pointer accent-purple-500 hover:scale-110 transition-transform duration-200"
                        checked={isDisabled}
                      />
                    </div>

                    {/* Card */}
                    <Link to={`/easy/Round3/${catIndex + 1}/${pt}`}>
                    <button
                       
                      disabled={isDisabled}
                      className={`relative w-full h-24 rounded-3xl shadow-xl flex items-center justify-center font-bold text-2xl transition-all duration-300 border border-white/10 backdrop-blur-sm overflow-hidden
                        ${
                          isDisabled
                            ? "bg-gradient-to-br from-gray-600 to-gray-800 text-gray-400 cursor-not-allowed scale-95 opacity-50"
                            : `${style.bg} ${style.hover} text-white cursor-pointer hover:scale-105 hover:shadow-2xl ${style.shadow}`
                          }`}
                          >
                      {/* Animated background shimmer */}
                      {!isDisabled && (
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      )}

                      {/* Content */}
                      <div className="relative z-10 flex flex-col items-center gap-2">
                        <div className="text-3xl">
                          {isDisabled ? "❌" : style.emoji}
                        </div>
                        <div className="text-xl font-black">
                          {isDisabled ? "USED" : `${pt} PTS`}
                        </div>
                      </div>

                      {/* Floating particles effect */}
                      {!isDisabled && isHovered && (
                        <>
                          <div className="absolute top-2 left-2 w-2 h-2 bg-white/60 rounded-full animate-ping"></div>
                          <div
                            className="absolute bottom-2 right-2 w-2 h-2 bg-white/60 rounded-full animate-ping"
                            style={{ animationDelay: "0.5s" }}
                          ></div>
                          <div
                            className="absolute top-1/2 left-1/4 w-1 h-1 bg-white/60 rounded-full animate-ping"
                            style={{ animationDelay: "1s" }}
                          ></div>
                        </>
                      )}
                    </button>
                      </Link>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
            <div className="text-2xl">🎮</div>
            <div className="text-white">
              <div className="font-semibold">
                Choose a category and point value
              </div>
              <div className="text-sm text-gray-300">
                Click the checkbox to mark questions as used
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Round3;
