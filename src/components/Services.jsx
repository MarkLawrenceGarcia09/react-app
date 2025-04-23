import { Code, Layout, Smartphone, Globe, Palette, Gauge } from 'lucide-react'

const Services = () => {
  const serviceItems = [
    {
      icon: <Layout className="h-10 w-10 text-[#8ecae6]" />,
      title: 'Web Design',
      description: 'Creating visually appealing and user-friendly website designs that align with your brand identity and business goals.'
    },
    {
      icon: <Code className="h-10 w-10 text-[#8ecae6]" />,
      title: 'Frontend Development',
      description: 'Building responsive, interactive websites using modern technologies like React, Next.js, and Tailwind CSS.'
    },
    {
      icon: <Smartphone className="h-10 w-10 text-[#8ecae6]" />,
      title: 'Responsive Design',
      description: 'Ensuring your website looks and functions perfectly across all devices, from desktops to smartphones.'
    },
    {
      icon: <Globe className="h-10 w-10 text-[#8ecae6]" />,
      title: 'Website Optimization',
      description: 'Improving website performance, loading speed, and SEO to enhance user experience and search engine rankings.'
    },
    {
      icon: <Palette className="h-10 w-10 text-[#8ecae6]" />,
      title: 'UI/UX Design',
      description: 'Creating intuitive user interfaces and seamless user experiences that keep visitors engaged and satisfied.'
    },
    {
      icon: <Gauge className="h-10 w-10 text-[#8ecae6]" />,
      title: 'Performance Optimization',
      description: 'Enhancing website speed and efficiency through code optimization, image compression, and modern best practices.'
    }
  ]

  return (
    <section id="services" className="py-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">My Services</h2>
          <div className="w-20 h-1 bg-[#8ecae6] mx-auto mb-6"></div>
          <p className="text-white/80 max-w-2xl mx-auto">
            I offer a range of web development services to help bring your digital vision to life.
            Each service is tailored to meet your specific needs and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={index} 
              className="bg-black/30 backdrop-blur-sm p-6 rounded-xl transition-all duration-300 hover:transform hover:scale-105 hover:bg-black/40"
            >
              <div className="bg-[#8ecae6]/10 p-4 rounded-full inline-block mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-white/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
