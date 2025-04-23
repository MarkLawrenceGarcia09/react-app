"use client"
import { useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  
  const filters = ['all', 'web', 'design', 'app']
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      category: 'web',
      image: '/placeholder.svg?height=600&width=800',
      description: 'A fully responsive e-commerce platform built with React and Next.js',
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 2,
      title: 'Portfolio Design',
      category: 'design',
      image: '/placeholder.svg?height=600&width=800',
      description: 'Modern portfolio design with smooth animations and intuitive navigation',
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 3,
      title: 'Task Management App',
      category: 'app',
      image: '/placeholder.svg?height=600&width=800',
      description: 'A productivity app for managing tasks and projects efficiently',
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 4,
      title: 'Restaurant Website',
      category: 'web',
      image: '/placeholder.svg?height=600&width=800',
      description: 'A responsive website for a local restaurant with online ordering',
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 5,
      title: 'Travel Blog',
      category: 'web',
      image: '/placeholder.svg?height=600&width=800',
      description: 'A travel blog with dynamic content and interactive maps',
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 6,
      title: 'Mobile App UI',
      category: 'design',
      image: '/placeholder.svg?height=600&width=800',
      description: 'UI/UX design for a fitness tracking mobile application',
      demoLink: '#',
      codeLink: '#',
    },
  ]
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">My Portfolio</h2>
          <div className="w-20 h-1 bg-[#8ecae6] mx-auto mb-6"></div>
          <p className="text-white/80 max-w-2xl mx-auto">
            Check out some of my recent projects. Each project represents my dedication to quality and attention to detail.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[#8ecae6] text-black'
                  : 'bg-black/30 text-white hover:bg-[#8ecae6]/20'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 sm:h-56">
                <img 
                  src={project.image || "/placeholder.svg"} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay with Links */}
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.demoLink} 
                    className="bg-[#8ecae6] text-black p-3 rounded-full hover:bg-white transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                  <a 
                    href={project.codeLink} 
                    className="bg-[#8ecae6] text-black p-3 rounded-full hover:bg-white transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase tracking-wider bg-[#8ecae6]/20 text-[#8ecae6] px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
