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
                "mt-6 md:mt-10 pt-8 transition-all duration-500 transform",
                isSidePanelOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
              )}
              style={{ transitionDelay: isSidePanelOpen ? "400ms" : "0ms" }}
            >
              <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Connect With Me</h4>
              <div className="flex flex-wrap gap-2 md:gap-4">
                {[
                  { name: "facebook", href: "https://www.facebook.com/mark.lawrence.garcia.895407", icon: (
                    <svg className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) },
                  { name: "twitter", href: "https://x.com/garciamarkk?t=ugMeg_dFJKclxZDvDhZ_zA&s=07", icon: (
                    <svg className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  ) },
                  { name: "instagram", href: "https://www.instagram.com/garciamarkk9/", icon: (
                    <svg className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) },
                  { name: "github", href: "https://github.com/MarkLawrenceGarcia09", icon: (
                    <svg className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) },
                  { name: "linkedin", href: "https://www.linkedin.com/in/mark-lawrence-garcia-6a2151322/", icon: (
                    <svg className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22.225 0H1.775A1.775 1.775 0 000 1.775v20.45A1.775 1.775 0 001.775 24h20.45A1.775 1.775 0 0024 22.225V1.775A1.775 1.775 0 0022.225 0zM7.293 19.54H4.596V9.876h2.697v9.664zM5.945 8.033a1.553 1.553 0 11-.002-3.106 1.553 1.553 0 01.002 3.106zM20.407 19.54h-2.695v-5.557c0-1.327-.027-3.038-1.848-3.038-1.848 0-2.136 1.445-2.136 2.934v5.661h-2.694V9.876h2.586v1.31h.038c.361-.684 1.242-1.406 2.556-1.406 2.735 0 3.244 1.798 3.244 4.137v5.623z"
                      clipRule="evenodd"
                    />
                  </svg>
                  ) },
                  
                ].map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="bg-[#8ecae6]/20 p-2 md:p-3 rounded-full hover:bg-[#8ecae6] text-white hover:text-black transition-all duration-300"
                    style={{
                      transitionDelay: isSidePanelOpen ? `${450 + index * 75}ms` : "0ms",
                    }}
                    aria-label={`Visit ${social.name} profile`}
                  >
                    {social.icon}
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