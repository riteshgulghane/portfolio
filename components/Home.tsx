import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HOME, SITE, BUTTONS } from "../constants";

function Home() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = HOME.GREETING.FULL_TEXT;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prevText => prevText + fullText[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, HOME.GREETING.TYPING_SPEED);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-128px)] bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-800 dark:via-gray-900 dark:to-indigo-900 animate-gradient-xy">
      <div className="text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center animate-float shadow-lg">
            <span className="text-white text-2xl md:text-3xl font-bold animate-pulse">
              {SITE.INITIALS}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-white mb-4 animate-fade-in-up">
            {displayText}
            {currentIndex < fullText.length && (
              <span className="animate-blink">|</span>
            )}
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6 animate-fade-in-up animation-delay-300">
            {SITE.POSITION}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-500">
            {HOME.HERO.DESCRIPTION}
            <br />
            <span className="text-blue-600 dark:text-blue-400 font-medium">
              {HOME.HERO.LOCATION}
            </span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animation-delay-700 text-white">
          <Link
            href="/projects"
            className="bg-blue-600 px-8 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 hover:shadow-lg transition-all duration-300 font-medium text-lg transform hover:-translate-y-1"
          >
            {BUTTONS.VIEW_WORK}
          </Link>
          <Link
            href="/contact"
            className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300 font-medium text-lg transform hover:-translate-y-1"
          >
            {BUTTONS.GET_TOUCH}
          </Link>
        </div>

        {/* Skills Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto animate-fade-in-up animation-delay-900">
          {HOME.SKILLS.ITEMS.map((skill, index) => (
            <div 
              key={index} 
              className={`bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 animate-float animation-delay-${1000 + index * 200}`}
            >
              <div className={`text-2xl mb-2 animate-bounce ${index > 0 ? `animation-delay-${index * 200}` : ''}`}>
                {skill.ICON}
              </div>
              <div className="text-sm font-medium text-gray-800 dark:text-white">
                {skill.LABEL}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home;
