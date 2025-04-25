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
                I'm a recent graduate and aspiring Front-End Web Developer with a strong passion for creating clean, responsive, and user-friendly websites. During my thesis, I designed and developed functional websites that showcased my ability to turn ideas into practical digital solutions.
              </p>
              <p className="text-white/80 mb-6">
                While I may not have formal work experience yet, I've built real-world web applications as part of my academic journey, focusing on usability, design, and performance. I'm constantly learning and adapting to modern web technologies like HTML, CSS, JavaScript, and frameworks to keep my skills sharp and relevant.
              </p>
              <p className="text-white/80">
                Outside of coding, I enjoy exploring new UI/UX trends, improving my design eye, and taking on small side projects that challenge me to grow as a developer.
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
                  HTML5, CSS3, JavaScript, React, PHP, MySQL, Tailwind CSS, Bootsrap CSS, and Responsive Design
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
                  GitHub, VS Code, Figma, Adobe Photoshop, Adobe Premiere Pro, Adobe After Effects, npm, Vercel
                </p>
              </div>
              
              
             
              
              {/* Skill Progress Bars */}
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-white mb-4">Proficiency</h4>
                
                {/* HTML */}
                <div className="mb-3">
                  <div className="flex justify-between mb-1">
                    <span className="text-white">HTML/CSS</span>
                    <span className="text-[#8ecae6]">80%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-[#8ecae6] h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                
                {/* JavaScript */}
                <div className="mb-3">
                  <div className="flex justify-between mb-1">
                    <span className="text-white">PHP</span>
                    <span className="text-[#8ecae6]">50%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-[#8ecae6] h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                
                {/* React */}
                <div className="mb-3">
                  <div className="flex justify-between mb-1">
                    <span className="text-white">React</span>
                    <span className="text-[#8ecae6]">50%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-[#8ecae6] h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
                
                {/* UI/UX */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">Javascript</span>
                    <span className="text-[#8ecae6]">50%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-[#8ecae6] h-2 rounded-full" style={{ width: '50%' }}></div>
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
