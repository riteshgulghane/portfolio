import React, { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ABOUT, META } from '../constants'

// Skills data is now provided from constants

// Experience data is now provided from constants

export default function About() {
  const [expandedExperience, setExpandedExperience] = useState<{ [key: number]: boolean }>({});

  const toggleExperience = (index: number) => {
    setExpandedExperience(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <>
      <Head>
        <title>About{META.TITLE_SUFFIX}</title>
        <meta name="description" content={META.ABOUT_DESCRIPTION} />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-12">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center animate-scale-in">
                <span className="text-white text-3xl font-bold">RG</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                {ABOUT.HERO.TITLE}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                {ABOUT.HERO.SUBTITLE}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {ABOUT.HERO.DESCRIPTION}
              </p>
            </div>

            {/* Skills Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-8">
                {ABOUT.SKILLS.TITLE}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {ABOUT.SKILLS.CATEGORIES.map((skillGroup, index) => (
                  <div key={index} className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg card-hover animate-scale-in animation-delay-${300 + (index * 200)}`}>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
                      {skillGroup.CATEGORY}
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skillGroup.ITEMS.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full pill-hover"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-8">
                {ABOUT.EXPERIENCE.TITLE}
              </h2>
              <div className="max-w-4xl mx-auto">
                {ABOUT.EXPERIENCE.JOBS.map((job, index) => {
                  const isExpanded = expandedExperience[index];
                  return (
                    <div key={index} className={`relative pl-8 pb-8 border-l-2 border-blue-400 last:border-l-0 last:pb-0 animate-slide-in-left animation-delay-${400 + (index * 300)}`}>
                      <div className="absolute w-4 h-4 bg-blue-400 rounded-full -left-2 top-0"></div>
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg ml-4 card-hover">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                          {job.POSITION}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                          {job.COMPANY} • {job.DURATION}
                        </p>
                        
                        {/* Summary or Full Details */}
                        <div className="text-gray-600 dark:text-gray-300 space-y-2 overflow-hidden transition-all duration-500 ease-in-out" 
                            style={{ maxHeight: isExpanded ? '1000px' : '80px' }}
                        >
                          {isExpanded ? (
                            <ul className="space-y-2">
                              {job.DETAILS.map((detail, detailIndex) => (
                                <li key={detailIndex} className="flex items-start" 
                                    style={{ animationDelay: `${detailIndex * 100}ms` }}>
                                  <span className="text-blue-500 mr-2 mt-1 flex-shrink-0">•</span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="transition-opacity duration-300 ease-in-out">{job.SUMMARY}</p>
                          )}
                        </div>
                        
                        {/* Show More/Less Button */}
                        <button
                          onClick={() => toggleExperience(index)}
                          className="mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm transition-all duration-300 flex items-center hover:scale-105"
                        >
                          {isExpanded ? (
                            <>
                              Show Less
                              <svg className="w-4 h-4 ml-1 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </>
                          ) : (
                            <>
                              Show More
                              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Education Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-8">
                {ABOUT.EDUCATION.TITLE}
              </h2>
              <div className="space-y-6 max-w-4xl mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg card-hover animate-scale-in animation-delay-200">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    Bachelor of Engineering (Computer Science)
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  Government College of Engineering, Karad
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    2015 - 2019 • Grade: 8.2/10 CGPA
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg card-hover animate-scale-in animation-delay-400">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    JEE Preparation Super 30
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    Abhayanand Kumar's Super 30 (CSRL)
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    2014 - 2015 • Scored 140 marks in JEE Mains
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg card-hover animate-scale-in animation-delay-600">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    Higher Secondary (12th)
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  Jawahar Navodaya Vidyalaya, Wardha
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    2012 - 2014 • 83.60%
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg card-hover animate-scale-in animation-delay-700">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    Secondary (10th)
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    Jawahar Navodaya Vidyalaya, Wardha
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    2010 - 2012 • 84.00%
                  </p>
                </div>
              </div>
            </div>

            {/* Achievements Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-8">
                {ABOUT.ACHIEVEMENTS.TITLE}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center card-hover animate-scale-in animation-delay-300">
                  <div className="text-3xl mb-3">🚀</div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Biased Towards Action Award</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">PubMatic - For proactive solutions improving delivery speed</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center card-hover animate-scale-in animation-delay-500">
                  <div className="text-3xl mb-3">💡</div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Innovation Award</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">For building a navigation system reducing costs and enhancing UX</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center card-hover animate-scale-in animation-delay-700">
                  <div className="text-3xl mb-3">🏆</div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">AIR 44 - ABU Robocon 2017</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Secured 47th position in a global robotics competition</p>
                </div>
              </div>
            </div>

            {/* Personal Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg card-hover animate-scale-in">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-6">
                Interests
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full font-medium pill-hover">
                  🧩 Puzzle Solving
                </span>
                <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full font-medium pill-hover">
                  ♟️ Chess
                </span>
                <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full font-medium pill-hover">
                  🧠 Logic Building
                </span>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
