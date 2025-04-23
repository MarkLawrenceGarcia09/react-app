import { Code, Lightbulb, Zap } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-[#8ecae6] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
            <p className="text-white/80 mb-6">
              I'm a passionate Front-End Web Developer with a keen eye for design and a commitment to creating 
              responsive, user-friendly websites. With expertise in modern web technologies, I transform ideas 
              into engaging digital experiences.
            </p>
            <p className="text-white/80 mb-6">
              My journey in web development began 5 years ago, and since then, I've worked on numerous projects 
              ranging from personal portfolios to complex e-commerce platforms. I believe in clean code, 
              intuitive interfaces, and staying current with the latest industry trends.
            </p>
            <p className="text-white/80">
              When I'm not coding, you can find me exploring new design trends, contributing to open-source 
              projects, or enjoying outdoor activities to recharge my creative energy.
            </p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center lg:text-left">My Skills</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Skill Card 1 */}
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="bg-[#8ecae6]/20 p-3 rounded-lg mr-4">
                    <Code className="h-6 w-6 text-[#8ecae6]" />
                  </div>
                  <h4 className="text-xl font-semibold text-white">Frontend Development</h4>
                </div>
                <p className="text-white/80">
                  HTML5, CSS3, JavaScript, React, Next.js, Tailwind CSS, Responsive Design
                </p>
              </div>
              
              {/* Skill Card 2 */}
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="bg-[#8ecae6]/20 p-3 rounded-lg mr-4">
                    <Zap className="h-6 w-6 text-[#8ecae6]" />
                  </div>
                  <h4 className="text-xl font-semibold text-white">Tools & Workflow</h4>
                </div>
                <p className="text-white/80">
                  Git, GitHub, VS Code, Figma, Adobe XD, Webpack, npm, Vercel
                </p>
              </div>
              
              {/* Skill Card 3 */}
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="bg-[#8ecae6]/20 p-3 rounded-lg mr-4">
                    <Lightbulb className="h-6 w-6 text-[#8ecae6]" />
                  </div>
                  <h4 className="text-xl font-semibold text-white">UI/UX Design</h4>
                </div>
                <p className="text-white/80">
                  Wireframing, Prototyping, User Research, Accessibility, Color Theory
                </p>
              </div>
              
              {/* Skill Progress Bars */}
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-white mb-4">Proficiency</h4>
                
                {/* HTML */}
                <div className="mb-3">
                  <div className="flex justify-between mb-1">
                    <span className="text-white">HTML/CSS</span>
                    <span className="text-[#8ecae6]">95%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-[#8ecae6] h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                {/* JavaScript */}
                <div className="mb-3">
                  <div className="flex justify-between mb-1">
                    <span className="text-white">JavaScript</span>
                    <span className="text-[#8ecae6]">90%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-[#8ecae6] h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                {/* React */}
                <div className="mb-3">
                  <div className="flex justify-between mb-1">
                    <span className="text-white">React</span>
                    <span className="text-[#8ecae6]">85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-[#8ecae6] h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                {/* UI/UX */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">UI/UX Design</span>
                    <span className="text-[#8ecae6]">80%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-[#8ecae6] h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
