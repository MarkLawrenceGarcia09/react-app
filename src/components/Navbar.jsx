"use client"
import { useState, useEffect } from "react"
import { Home, User, Briefcase, FolderOpen, Mail, X, Menu } from "lucide-react"

// Helper function to conditionally join class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ")
}

// Define navigation items with icons and href
const navItems = [
  { name: "Home", icon: <Home className="w-5 h-5" />, href: "#top" }, // Changed to #top
  { name: "About", icon: <User className="w-5 h-5" />, href: "#about" },
  { name: "Services", icon: <Briefcase className="w-5 h-5" />, href: "#services" },
  { name: "Portfolio", icon: <FolderOpen className="w-5 h-5" />, href: "#portfolio" },
  { name: "Contact", icon: <Mail className="w-5 h-5" />, href: "#contact" },
]

const Navbar = () => {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [activeSection, setActiveSection] = useState("top") // Changed from "home" to "top"
  const [isScrolled, setIsScrolled] = useState(false)

  // Enable smooth scrolling for the entire page
  useEffect(() => {
    // Add smooth-scroll class to html element
    document.documentElement.classList.add("scroll-smooth")
    
    return () => {
      // Clean up when component unmounts
      document.documentElement.classList.remove("scroll-smooth")
    }
  }, [])

  // Handle scroll events to update navbar appearance and active section
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background on scroll
      setIsScrolled(window.scrollY > 50)

      // Set Home/top as active when at the top of the page
      if (window.scrollY < 50) {
        setActiveSection("top")
        return
      }

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1))

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when side panel is open
  useEffect(() => {
    if (isSidePanelOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isSidePanelOpen])

  // Handle animation timing for closing
  useEffect(() => {
    if (!isSidePanelOpen && isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false)
      }, 500) // Match this with the CSS transition duration
      return () => clearTimeout(timer)
    }
  }, [isSidePanelOpen, isAnimating])

  const handleSidePanelToggle = () => {
    if (!isSidePanelOpen) {
      setIsAnimating(true)
      setIsSidePanelOpen(true)
    } else {
      setIsSidePanelOpen(false)
      // Keep isAnimating true to allow exit animation
    }
  }

  const handleCloseSidePanel = () => {
    setIsSidePanelOpen(false)
    // Don't immediately set isAnimating to false to allow exit animation
  }

  // Handle click outside to close side panel
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseSidePanel()
    }
  }

  // Scroll handler that just closes the sidebar if needed
  const handleNavLinkClick = (sectionId) => {
    if (isSidePanelOpen) {
      handleCloseSidePanel()
    }
    // Let the native anchor behavior handle the scrolling
    setActiveSection(sectionId)
  }

  return (
    <>
      {/* Add a hidden "top" anchor at the very top of the page */}
      <div id="top" className="absolute top-0"></div>
      
      {/* Fixed Navbar */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-40 py-3 px-4 transition-all duration-300",
          isScrolled ? "bg-black/70 backdrop-blur-md shadow-lg" : "bg-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#top"
              onClick={() => handleNavLinkClick("top")}
              className="text-white font-bold text-xl transition-transform hover:scale-110 hover:text-[#8ecae6] duration-300"
            >
              Mark.
            </a>

            {/* Hamburger Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={handleSidePanelToggle}
                className="text-white hover:text-[#8ecae6] focus:outline-none transition-all duration-300 p-2 rounded-full hover:bg-white/10"
                aria-expanded={isSidePanelOpen}
                aria-label="Toggle navigation menu"
              >
                <div className="relative w-6 h-6">
                  {/* Hamburger Icon with Animation */}
                  <Menu
                    className={cn(
                      "absolute inset-0 transition-all duration-300 ease-in-out",
                      isSidePanelOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100",
                    )}
                  />
                  {/* X Icon with Animation */}
                  <X
                    className={cn(
                      "absolute inset-0 transition-all duration-300 ease-in-out",
                      isSidePanelOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-0",
                    )}
                  />
                </div>
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavLinkClick(item.href.substring(1))}
                  className={cn(
                    "flex items-center text-white hover:text-[#8ecae6] transition duration-300 relative group",
                    activeSection === item.href.substring(1) && "text-[#8ecae6]",
                  )}
                >
                  <span className="hidden lg:block mr-2">{item.icon}</span>
                  <span>{item.name}</span>
                  {/* Hover/Active Line Animation */}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 w-0 h-0.5 bg-[#8ecae6] group-hover:w-full transition-all duration-300",
                      activeSection === item.href.substring(1) && "w-full",
                    )}
                  ></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Side Panel with Overlay - Separate from navbar */}
      {(isSidePanelOpen || isAnimating) && (
        <div
          className={cn(
            "fixed inset-0 z-50 transition-opacity duration-500",
            isSidePanelOpen ? "bg-black/50 backdrop-blur-sm opacity-100" : "bg-black/0 backdrop-blur-none opacity-0",
          )}
          onClick={handleOverlayClick}
        >
          <div
            className={cn(
              "fixed top-0 left-0 w-full max-w-xs sm:max-w-sm h-full bg-[#023047]/90 backdrop-blur-md p-6 shadow-xl transform transition-all duration-500 ease-out",
              isSidePanelOpen ? "translate-x-0" : "-translate-x-full",
            )}
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside sidebar from closing it
          >
            <div className="flex justify-between items-center mb-8">
              <a href="#top" onClick={() => handleNavLinkClick("top")} className="text-[#8ecae6] font-bold text-xl">
                Mark.
              </a>
              <button
                onClick={handleCloseSidePanel}
                className="text-white hover:text-[#8ecae6] transition-all duration-300 p-2 rounded-full hover:bg-white/10 group"
                aria-label="Close menu"
              >
                <X className="h-6 w-6 transition-transform duration-300 group-hover:rotate-90" />
              </button>
            </div>

            <div className="flex flex-col space-y-4 mt-6">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavLinkClick(item.href.substring(1))}
                  className={cn(
                    "flex items-center bg-white/10 text-white border border-white/20 backdrop-blur-sm p-4 rounded-xl hover:bg-[#8ecae6]/20 hover:text-[#8ecae6] transition-all duration-300 transform",
                    activeSection === item.href.substring(1) && "bg-[#8ecae6]/20 text-[#8ecae6] border-[#8ecae6]/30",
                    isSidePanelOpen ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0",
                  )}
                  style={{
                    transitionDelay: isSidePanelOpen ? `${index * 75}ms` : `${(navItems.length - index - 1) * 50}ms`,
                  }}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.name}</span>
                </a>
              ))}
            </div>

            {/* Social Media Links */}
            <div
              className={cn(
                "mt-auto pt-8 transition-all duration-500 transform",
                isSidePanelOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
              )}
              style={{ transitionDelay: isSidePanelOpen ? "400ms" : "0ms" }}
            >
              <p className="text-white/60 mb-4 text-sm">Connect with me</p>
              <div className="flex space-x-4">
                {["github", "twitter", "linkedin", "instagram"].map((social, index) => (
                  <a
                    key={social}
                    href="#"
                    className={cn(
                      "text-white/80 hover:text-[#8ecae6] transition-all duration-300 transform",
                      isSidePanelOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                    )}
                    style={{ transitionDelay: isSidePanelOpen ? `${450 + index * 75}ms` : "0ms" }}
                    aria-label={`Visit ${social} profile`}
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 transition-transform duration-300">
                      <span className="capitalize text-xs">{social.charAt(0).toUpperCase()}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar