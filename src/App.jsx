import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import backgroundVideo from './videos/background-vid.mp4';
import profilePicture from './pics/2x2x2.jpg';
import './App.css';
import SplitText from "./SplitText/SplitText";
import DecryptedText from './DecryptedText/DecryptedText';
import Orb from './Orb/Orb';

const App = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isNameAnimationDone, setIsNameAnimationDone] = useState(false); // <-- added state for animation complete

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
    setIsNameAnimationDone(true); // <-- trigger showing DecryptedText
  };

  return (
    <div className="">
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      <Navbar />

      {/* Welcome Section */}
      <div className="min-h-screen flex items-center z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Text Content */}
            <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Hello, I'm 
                <SplitText
                  text=" Mark Lawrence Garcia"
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#8ecae6]"
                  delay={150}
                  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                  easing="easeOutCubic"
                  threshold={0.2}
                  rootMargin="-50px"
                  onLetterAnimationComplete={handleAnimationComplete}
                />
              </h1>

              {/* Show DecryptedText only after animation complete */}
              {isNameAnimationDone && (
                <div className="fade-in-animation">
                  <DecryptedText
                    text="I am a Front-End Web Developer passionate about creating stunning, user-friendly websites."
                    speed={100}
                    maxIterations={15}
                    characters="ABCD1234!?"
                    className="text-xl sm:text-2xl text-white/80 revealed"
                    parentClassName="all-letters"
                    encryptedClassName="encrypted text-xl sm:text-2xl text-white/80"
                  />
                </div>
              )}
            </div>

            {/* Photo with Orb */}
            <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 mb-8 md:mb-0">
              <div 
                className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-112 xl:h-112"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div 
                  className="absolute inset-0 z-0 transition-opacity duration-300 ease-in-out rounded-full overflow-hidden"
                  style={{ opacity: isHovering ? 1 : 0 }}
                >
                  <Orb 
                    hoverIntensity={0.6} 
                    rotateOnHover={true} 
                    hue={220} 
                    forceHoverState={true}
                  />
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-3/4 h-3/4 rounded-full overflow-hidden border-4 border-[#8ecae6]/40 shadow-lg">
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
