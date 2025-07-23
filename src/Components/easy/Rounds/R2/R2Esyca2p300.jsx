import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const JeopardyQuestion = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(30);
  const [timerActive, setTimerActive] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [revealAnimation, setRevealAnimation] = useState(false);

  // Question data - can be easily modified
  const questionData = {
    category: "Daily Life Situations",
    points: 300,
    question: "He is very _______ about his work; he checks every detail",
    answer: "meticulous",
    hint: "Think about Grammar & Vocabulary..."
  };

  // Timer effect
  useEffect(() => {
    let interval;
    if (timerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timerActive && timer === 0) {
      handleTimeUp();
    }
    return () => clearInterval(interval);
  }, [timerActive, timer]);

  const handleTimeUp = () => {
    setTimerActive(false);
    setSubmitted(true);
    const answerTrimmed = userAnswer.trim().toLowerCase();
    setIsCorrect(answerTrimmed === questionData.answer.toLowerCase());
    setShowResult(true);
  };

  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userAnswer.trim()) return;
    
    setSubmitted(true);
    setTimerActive(false);
    const answerTrimmed = userAnswer.trim().toLowerCase();
    setIsCorrect(answerTrimmed === questionData.answer.toLowerCase());
    
    setTimeout(() => {
      setShowResult(true);
    }, 500);
  };

  const startQuestion = () => {
    setRevealAnimation(true);
    setTimeout(() => {
      setShowQuestion(true);
      setTimerActive(true);
    }, 1500);
  };

  const resetQuestion = () => {
    setUserAnswer("");
    setSubmitted(false);
    setIsCorrect(false);
    setShowResult(false);
    setTimer(30);
    setTimerActive(false);
    setShowQuestion(false);
    setRevealAnimation(false);
  };
 

  const getTimerColor = () => {
    if (timer > 20) return "text-green-400";
    if (timer > 10) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center relative overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Category Reveal Animation */}
      {!showQuestion && !revealAnimation && (
        <div className="text-center z-10">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-sm mb-8">
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              {questionData.category}
            </h1>
            <div className="text-6xl md:text-8xl font-black text-yellow-400 mb-6">
              ${questionData.points}
            </div>
            <button
              onClick={startQuestion}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-2xl font-bold text-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105"
            >
              🎯 REVEAL QUESTION
            </button>
          </div>
        </div>
      )}

      {/* Category Flip Animation */}
      {revealAnimation && !showQuestion && (
        <div className="text-center z-10 animate-pulse">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-blue-900 p-8 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-sm transform animate-bounce">
            <h2 className="text-3xl md:text-5xl font-black">
              REVEALING QUESTION...
            </h2>
          </div>
        </div>
      )}

      {/* Question Interface */}
      {showQuestion && !showResult && (
        <div className="w-full max-w-4xl mx-auto px-4 z-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl shadow-lg inline-block mb-4">
              <h2 className="text-2xl font-bold">{questionData.category}</h2>
            </div>
            <div className="text-yellow-400 text-4xl font-black">${questionData.points}</div>
          </div>

          {/* Timer */}
          <div className="text-center mb-8">
            <div className={`text-6xl md:text-8xl font-black ${getTimerColor()} animate-pulse`}>
              {timer}
            </div>
            <div className="text-white text-xl mt-2">seconds remaining</div>
          </div>

          {/* Question Box */}
          <div className="bg-blue-900/80 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-2xl mb-8">
            <div className="text-center">
              <p className="text-white text-2xl md:text-4xl font-semibold leading-relaxed mb-4">
                {questionData.question}
              </p>
              <p className="text-yellow-200 text-lg italic">
                💡 {questionData.hint}
              </p>
            </div>
          </div>

          {/* Answer Form */}
          <div className="text-center">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  value={userAnswer}
                  onChange={handleInputChange}
                  placeholder="What is...?"
                  disabled={submitted}
                  className="w-full max-w-md mx-auto px-6 py-4 text-2xl text-center border-2 border-white/30 rounded-2xl bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/20 transition-all duration-300"
                />
              </div>
              
              <div className="flex justify-center gap-4">
                <button
                  type="submit"
                  disabled={submitted || !userAnswer.trim()}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:from-gray-500 disabled:to-gray-600 text-white px-8 py-4 rounded-2xl font-bold text-xl shadow-lg transition-all duration-300 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
                >
                  🎯 SUBMIT ANSWER
                </button>
                <Link to={'/easy/round2'}>
                <button
                  type="button"
                   className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-2xl font-bold text-xl shadow-lg transition-all duration-300 hover:scale-105"
                  >
                  🏠 BACK TO BOARD
                </button>
                  </Link>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Result Screen */}
      {showResult && (
        <div className="w-full max-w-4xl mx-auto px-4 z-10 text-center">
          <div className={`p-12 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-sm ${
            isCorrect 
              ? "bg-gradient-to-br from-green-500/20 to-green-600/20" 
              : "bg-gradient-to-br from-red-500/20 to-red-600/20"
          }`}>
            
            {/* Result Icon */}
            <div className="text-8xl md:text-9xl mb-6 animate-bounce">
              {isCorrect ? "🎉" : "😔"}
            </div>
            
            {/* Result Message */}
            <h1 className={`text-5xl md:text-7xl font-black mb-6 ${
              isCorrect ? "text-green-400" : "text-red-400"
            }`}>
              {isCorrect ? "CORRECT!" : "INCORRECT!"}
            </h1>
            
            {/* Points */}
            <div className={`text-4xl md:text-6xl font-bold mb-6 ${
              isCorrect ? "text-yellow-400" : "text-gray-400"
            }`}>
              {isCorrect ? `+$${questionData.points}` : "$0"}
            </div>
            
            {/* Answer Display */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <p className="text-white text-xl mb-2">The correct answer was:</p>
              <p className="text-yellow-400 text-3xl font-bold uppercase">
                What is "{questionData.answer.toUpperCase()}"?
              </p>
              {!isCorrect && userAnswer && (
                <p className="text-red-300 text-lg mt-4">
                  You answered: "{userAnswer}"
                </p>
              )}
            </div>
            
            {/* Action Buttons */}
            <div className="flex justify-center gap-4 flex-wrap">
              <button
                onClick={resetQuestion}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-2xl font-bold text-lg shadow-lg transition-all duration-300 hover:scale-105"
                >
                🔄 TRY AGAIN
              </button>
              
                  <Link to={'/easy/round2'}>
              <button
                 className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 py-3 rounded-2xl font-bold text-lg shadow-lg transition-all duration-300 hover:scale-105"
                >
                🏠 BACK TO BOARD
              </button>
                </Link>
            </div>
          </div>
        </div>
      )}

      {/* Debug Timer Display */}
      {timerActive && (
        <div className="absolute top-4 right-4 bg-black/50 text-white px-4 py-2 rounded-lg">
          Time: {timer}s
        </div>
      )}
    </div>
  );
};

export default JeopardyQuestion;