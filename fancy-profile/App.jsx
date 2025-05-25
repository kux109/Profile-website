import { useState, useEffect } from 'react'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [currentTitle, setCurrentTitle] = useState(0)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [showCopyMessage, setShowCopyMessage] = useState(false)

  // Your email - replace with your actual email
  const email = "your.email@example.com"
  const linkedinUrl = "https://linkedin.com/in/yourprofile"

  // Dynamic titles that will rotate
  const titles = [
    "Full Stack Developer",
    "Backend Engineer", 
    "DevOps Enthusiast",
    "Problem Solver",
    "Code Architect",
    "Tech Innovator"
  ]

  // Effect to cycle through titles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [titles.length])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(sectionId)
  }

  // Copy email to clipboard
  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setShowCopyMessage(true)
      setTimeout(() => setShowCopyMessage(false), 2000) // Hide message after 2 seconds
    } catch (err) {
      console.error('Failed to copy email: ', err)
    }
  }

  // Open LinkedIn in new tab
  const openLinkedIn = () => {
    window.open(linkedinUrl, '_blank')
  }

  return (
    <div className="relative">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-portfolio-blue-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-portfolio-blue-900">Your Name</h1>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium transition-colors ${
                    activeSection === section 
                      ? 'text-portfolio-blue-600' 
                      : 'text-gray-600 hover:text-portfolio-blue-500'
                  }`}
                >
                  {section === 'experience' ? 'Work' : section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Contact Options Popup */}
        {isContactOpen && (
          <div className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-xl border border-portfolio-blue-200 p-4 min-w-[200px] animate-in slide-in-from-bottom-2 duration-200">
            <div className="space-y-3">
              {/* Email Option */}
              <button
                onClick={copyEmailToClipboard}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-portfolio-blue-50 transition-colors text-left"
              >
                <div className="w-8 h-8 bg-portfolio-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-sm">📧</span>
                </div>
                <div>
                  <div className="font-medium text-gray-800">Email</div>
                  <div className="text-xs text-gray-500">Copy to clipboard</div>
                </div>
              </button>

              {/* LinkedIn Option */}
              <button
                onClick={openLinkedIn}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-portfolio-blue-50 transition-colors text-left"
              >
                <div className="w-8 h-8 bg-portfolio-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-sm">💼</span>
                </div>
                <div>
                  <div className="font-medium text-gray-800">LinkedIn</div>
                  <div className="text-xs text-gray-500">Open profile</div>
                </div>
              </button>
            </div>

            {/* Copy Success Message */}
            {showCopyMessage && (
              <div className="absolute -top-12 right-0 bg-green-500 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap animate-in fade-in duration-200">
                Email ID copied! ✓
              </div>
            )}
          </div>
        )}

        {/* Main Contact Button */}
        <button
          onClick={() => setIsContactOpen(!isContactOpen)}
          className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
            isContactOpen 
              ? 'bg-portfolio-blue-700 rotate-45' 
              : 'bg-portfolio-blue-600 hover:bg-portfolio-blue-700 hover:scale-110'
          }`}
        >
          <span className="text-white text-xl">
            {isContactOpen ? '✕' : '💬'}
          </span>
        </button>
      </div>

      {/* Main Content with Snap Scrolling */}
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll hide-scrollbar">
        
        {/* 1. Home Section */}
        <section id="home" className="snap-start h-screen bg-gradient-to-br from-portfolio-blue-50 to-portfolio-blue-100 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            
            {/* Profile Photo */}
            <div className="mb-8 flex justify-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl bg-portfolio-blue-200 flex items-center justify-center">
                <img 
                  src="https://via.placeholder.com/160x160/0ea5e9/ffffff?text=YN" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-portfolio-blue-900 mb-6">
              Hello, I'm <span className="text-portfolio-blue-600">Your Name</span>
            </h1>

            {/* Dynamic Subtitle */}
            <div className="mb-8 h-16 flex items-center justify-center">
              <p className="text-xl md:text-2xl text-portfolio-blue-700 font-medium">
                <span className="inline-block transition-all duration-500 ease-in-out transform">
                  {titles[currentTitle]}
                </span>
                <span className="animate-pulse text-portfolio-blue-500 ml-1">|</span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('about')}
                className="px-8 py-3 bg-portfolio-blue-600 text-white rounded-full hover:bg-portfolio-blue-700 transition-all duration-300 font-medium hover:scale-105 transform"
              >
                Learn More About Me
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 border-2 border-portfolio-blue-600 text-portfolio-blue-600 rounded-full hover:bg-portfolio-blue-600 hover:text-white transition-all duration-300 font-medium hover:scale-105 transform"
              >
                View My Work
              </button>
            </div>
          </div>
        </section>

        {/* 2. About Me Section */}
        <section id="about" className="snap-start h-screen bg-white flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold text-portfolio-blue-900 mb-12">About Me</h2>
            <div className="bg-portfolio-blue-50 rounded-2xl p-8 md:p-12 shadow-lg">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                I'm a passionate developer with <span className="font-semibold text-portfolio-blue-700">X years of experience</span> building 
                scalable web applications and solving complex technical challenges. I specialize in full-stack development 
                with a strong focus on modern JavaScript frameworks and cloud technologies.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community. I believe in writing clean, maintainable code 
                and creating user experiences that make a difference.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-portfolio-blue-200 text-portfolio-blue-800 rounded-full font-medium">
                  🎯 Problem Solver
                </span>
                <span className="px-4 py-2 bg-portfolio-blue-200 text-portfolio-blue-800 rounded-full font-medium">
                  🚀 Innovation Driven
                </span>
                <span className="px-4 py-2 bg-portfolio-blue-200 text-portfolio-blue-800 rounded-full font-medium">
                  🤝 Team Player
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Skills Section */}
        <section id="skills" className="snap-start h-screen bg-portfolio-blue-50 flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold text-portfolio-blue-900 mb-12">Skills</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-portfolio-blue-800 mb-6">Languages</h3>
                <div className="flex flex-wrap gap-3">
                  {['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'SQL'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-portfolio-blue-100 text-portfolio-blue-800 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-portfolio-blue-800 mb-6">Frameworks & Tech</h3>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Node.js', 'Express', 'Spring Boot', 'Docker', 'MongoDB'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-portfolio-blue-100 text-portfolio-blue-800 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-portfolio-blue-800 mb-6">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-3">
                  {['AWS', 'Git', 'Kubernetes', 'Jenkins', 'Linux', 'PostgreSQL'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-portfolio-blue-100 text-portfolio-blue-800 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Work Experience Section */}
        <section id="experience" className="snap-start h-screen bg-white flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold text-portfolio-blue-900 mb-12">Work Experience</h2>
            <div className="space-y-6">
              <div className="bg-portfolio-blue-50 rounded-2xl p-8 shadow-lg text-left">
                <h3 className="text-2xl font-bold text-portfolio-blue-800 mb-2">Senior Software Engineer</h3>
                <p className="text-portfolio-blue-600 text-lg mb-4">Company Name • 2023 - Present</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Led development of microservices architecture serving 1M+ users</li>
                  <li>• Improved application performance by 40% through optimization</li>
                  <li>• Mentored junior developers and conducted code reviews</li>
                </ul>
              </div>
              <div className="bg-portfolio-blue-50 rounded-2xl p-8 shadow-lg text-left">
                <h3 className="text-2xl font-bold text-portfolio-blue-800 mb-2">Full Stack Developer</h3>
                <p className="text-portfolio-blue-600 text-lg mb-4">Previous Company • 2021 - 2023</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Built responsive web applications using React and Node.js</li>
                  <li>• Collaborated with cross-functional teams in Agile environment</li>
                  <li>• Implemented CI/CD pipelines reducing deployment time by 60%</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Projects Section */}
        <section id="projects" className="snap-start h-screen bg-portfolio-blue-50 flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold text-portfolio-blue-900 mb-12">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "E-Commerce Platform", tech: ["React", "Node.js", "MongoDB"], desc: "Full-stack e-commerce solution with payment integration" },
                { name: "Task Management App", tech: ["Vue.js", "Express", "PostgreSQL"], desc: "Collaborative project management tool with real-time updates" },
                { name: "Weather Dashboard", tech: ["React", "API Integration", "Charts"], desc: "Interactive weather visualization with forecasting" }
              ].map((project, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="h-40 bg-portfolio-blue-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-portfolio-blue-700 font-semibold">Project Screenshot</span>
                  </div>
                  <h3 className="text-xl font-bold text-portfolio-blue-800 mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-4">{project.desc}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-portfolio-blue-200 text-portfolio-blue-800 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Education Section */}
        <section id="education" className="snap-start h-screen bg-white flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold text-portfolio-blue-900 mb-12">Education</h2>
            <div className="bg-portfolio-blue-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-portfolio-blue-800 mb-4">Bachelor of Science in Computer Science</h3>
              <p className="text-portfolio-blue-600 text-lg mb-2">University Name</p>
              <p className="text-gray-600 mb-4">2018 - 2022 • GPA: 3.8/4.0</p>
              <div className="text-left">
                <h4 className="font-semibold text-portfolio-blue-700 mb-2">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {['Data Structures', 'Algorithms', 'Database Systems', 'Software Engineering', 'Web Development', 'Machine Learning'].map((course) => (
                    <span key={course} className="px-3 py-1 bg-white text-portfolio-blue-700 rounded-full text-sm border border-portfolio-blue-200">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Contact Section */}
        <section id="contact" className="snap-start h-screen bg-portfolio-blue-50 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold text-portfolio-blue-900 mb-8">Let's Work Together</h2>
            <p className="text-xl text-gray-700 mb-12">
              Ready to bring your ideas to life? I'd love to hear about your project.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl mb-4">📧</div>
                <h3 className="font-bold text-portfolio-blue-800 mb-2">Email</h3>
                <p className="text-gray-600">{email}</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl mb-4">💼</div>
                <h3 className="font-bold text-portfolio-blue-800 mb-2">LinkedIn</h3>
                <p className="text-gray-600">linkedin.com/in/yourname</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🐙</div>
                <h3 className="font-bold text-portfolio-blue-800 mb-2">GitHub</h3>
                <p className="text-gray-600">github.com/yourusername</p>
              </div>
            </div>

            <button className="px-8 py-3 bg-portfolio-blue-600 text-white rounded-full hover:bg-portfolio-blue-700 transition-all duration-300 font-medium hover:scale-105 transform">
              Get In Touch
            </button>
          </div>
        </section>

      </div>

      {/* 8. Footer */}
      <footer className="bg-portfolio-blue-900 text-white py-6 text-center">
        <p className="text-sm">
          © 2025 Your Name. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default App
