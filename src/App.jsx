import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import backgroundVideo from './videos/background-vid.mp4';
import profilePicture from './pics/2x2x2.jpg'; // ✅ Correct path usage
import './App.css';

const App = () => {
  return (
    <div className="relative w-full h-full">
      {/* Background Video */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Navbar */}
      <Navbar />

      {/* Welcome Section */}
      <div className="min-h-screen flex items-center z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Text Content */}
            <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Hello, I'm <span className="text-[#8ecae6]">Mark Lawrence Garcia</span>
              </h1>
              <p className="text-xl sm:text-2xl text-white/80">
                I am a Front-End Web Developer passionate about creating stunning, user-friendly websites.
              </p>
            </div>

            {/* Photo */}
            <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 mb-8 md:mb-0">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 overflow-hidden rounded-full shadow-lg border-4 border-[#8ecae6]/20">
                <img
                  src={profilePicture}
                  alt="Mark Lawrence Garcia"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sections */}
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;
