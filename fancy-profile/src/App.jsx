import { useState, useEffect, useRef } from 'react'
// React Icons imports
import { 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub, 
  FaCode,
  FaComments,
  FaTimes,
  FaExternalLinkAlt,
  FaBuilding,
  FaGraduationCap 
} from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { HiClipboardCopy } from 'react-icons/hi'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [currentTitle, setCurrentTitle] = useState(0)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [showCopyMessage, setShowCopyMessage] = useState(false)
  const contactRef = useRef(null)

  // Your contact info - replace with your actual details
  const email = "your.email@example.com"
  const linkedinUrl = "https://linkedin.com/in/yourprofile"
  const githubUrl = "https://github.com/yourusername"
  const leetcodeUrl = "https://leetcode.com/yourusername"

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

  // Close contact popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contactRef.current && !contactRef.current.contains(event.target)) {
        setIsContactOpen(false)
      }
    }

    if (isContactOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isContactOpen])

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
      setTimeout(() => setShowCopyMessage(false), 2000)
    } catch (err) {
      console.error('Failed to copy email: ', err)
    }
  }

  // Open external links
  const openLinkedIn = () => window.open(linkedinUrl, '_blank')
  const openGitHub = () => window.open(githubUrl, '_blank')
  const openLeetCode = () => window.open(leetcodeUrl, '_blank')
  const openEmail = () => window.open(`mailto:${email}`, '_blank')

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
      <div className="fixed bottom-6 right-6 z-50" ref={contactRef}>
        {/* Contact Options Popup */}
        {isContactOpen && (
          <div className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-xl border border-portfolio-blue-200 p-4 min-w-[220px] animate-in slide-in-from-bottom-2 duration-200">
            <div className="space-y-3">
              {/* Email Option */}
              <button
                onClick={copyEmailToClipboard}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-portfolio-blue-50 transition-colors text-left"
              >
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-red-600 text-sm" />
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
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaLinkedin className="text-blue-600 text-sm" />
                </div>
                <div>
                  <div className="font-medium text-gray-800">LinkedIn</div>
                  <div className="text-xs text-gray-500">Open profile</div>
                </div>
              </button>

              {/* GitHub Option */}
              <button
                onClick={openGitHub}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-portfolio-blue-50 transition-colors text-left"
              >
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <FaGithub className="text-gray-700 text-sm" />
                </div>
                <div>
                  <div className="font-medium text-gray-800">GitHub</div>
                  <div className="text-xs text-gray-500">View repositories</div>
                </div>
              </button>

              {/* LeetCode Option */}
              <button
                onClick={openLeetCode}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-portfolio-blue-50 transition-colors text-left"
              >
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <SiLeetcode className="text-orange-600 text-sm" />
                </div>
                <div>
                  <div className="font-medium text-gray-800">LeetCode</div>
                  <div className="text-xs text-gray-500">Coding profile</div>
                </div>
              </button>
            </div>

            {/* Copy Success Message */}
            {showCopyMessage && (
              <div className="absolute -top-12 right-0 bg-green-500 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap animate-in fade-in duration-200 flex items-center gap-2">
                <HiClipboardCopy className="text-sm" />
                Email ID copied!
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
          {isContactOpen ? (
            <FaTimes className="text-white text-xl" />
          ) : (
            <FaComments className="text-white text-xl" />
          )}
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

        {/* 4. Work Experience Section - Enhanced with logos */}
        <section id="experience" className="snap-start h-screen bg-white flex items-center justify-center">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold text-portfolio-blue-900 mb-12">Work Experience</h2>
            <div className="space-y-8">
              <div className="bg-portfolio-blue-50 rounded-3xl p-10 shadow-lg">
                <div className="flex items-start gap-6">
                  {/* Company Logo */}
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md flex-shrink-0">
                    <FaBuilding className="text-portfolio-blue-600 text-2xl" />
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="text-3xl font-bold text-portfolio-blue-800 mb-2">Senior Software Engineer</h3>
                    <p className="text-portfolio-blue-600 text-xl mb-4">Company Name • 2023 - Present</p>
                    <ul className="text-gray-700 space-y-3 text-lg">
                      <li>• Led development of microservices architecture serving 1M+ users</li>
                      <li>• Improved application performance by 40% through optimization</li>
                      <li>• Mentored junior developers and conducted code reviews</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-portfolio-blue-50 rounded-3xl p-10 shadow-lg">
                <div className="flex items-start gap-6">
                  {/* Company Logo */}
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md flex-shrink-0">
                    <FaBuilding className="text-green-600 text-2xl" />
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="text-3xl font-bold text-portfolio-blue-800 mb-2">Full Stack Developer</h3>
                    <p className="text-portfolio-blue-600 text-xl mb-4">Previous Company • 2021 - 2023</p>
                    <ul className="text-gray-700 space-y-3 text-lg">
                      <li>• Built responsive web applications using React and Node.js</li>
                      <li>• Collaborated with cross-functional teams in Agile environment</li>
                      <li>• Implemented CI/CD pipelines reducing deployment time by 60%</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Projects Section - New Layout */}
        <section id="projects" className="snap-start h-screen bg-portfolio-blue-50 flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold text-portfolio-blue-900 mb-12">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { 
                  name: "E-Commerce Microservices Platform", 
                  tech: ["Spring Boot", "React", "MongoDB", "Docker", "AWS"], 
                  desc: "Scalable microservices architecture for e-commerce platform handling 10K+ concurrent users. Implemented event-driven architecture with message queues and distributed caching for optimal performance.",
                  type: "Backend",
                  icon: <FaCode className="text-blue-600" />
                },
                { 
                  name: "ML-Powered Recommendation Engine", 
                  tech: ["Python", "TensorFlow", "FastAPI", "Redis", "PostgreSQL"], 
                  desc: "Machine learning recommendation system using collaborative filtering and content-based algorithms. Achieved 85% accuracy in user preference prediction with real-time inference capabilities.",
                  type: "ML/AI",
                  icon: <FaCode className="text-purple-600" />
                },
                { 
                  name: "Real-time Chat Application", 
                  tech: ["Node.js", "Socket.io", "React", "MongoDB", "JWT"], 
                  desc: "Full-stack real-time messaging application with user authentication, group chats, file sharing, and message encryption. Supports 1000+ concurrent connections with WebSocket technology.",
                  type: "Full Stack",
                  icon: <FaCode className="text-green-600" />
                },
                { 
                  name: "DevOps CI/CD Pipeline", 
                  tech: ["Jenkins", "Docker", "Kubernetes", "AWS", "Terraform"], 
                  desc: "Automated deployment pipeline reducing deployment time by 70%. Implemented infrastructure as code, automated testing, and monitoring with rollback capabilities for zero-downtime deployments.",
                  type: "DevOps",
                  icon: <FaCode className="text-orange-600" />
                }
              ].map((project, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-left">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      {project.icon}
                    </div>
                    <div className="px-3 py-1 bg-portfolio-blue-100 text-portfolio-blue-700 rounded-full text-sm font-medium">
                      {project.type}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-portfolio-blue-800 mb-4">{project.name}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{project.desc}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-portfolio-blue-200 text-portfolio-blue-800 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Education Section - Two Degrees */}
        <section id="education" className="snap-start h-screen bg-white flex items-center justify-center">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold text-portfolio-blue-900 mb-12">Education</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-portfolio-blue-50 rounded-3xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-portfolio-blue-200 rounded-full flex items-center justify-center">
                    <FaGraduationCap className="text-portfolio-blue-700 text-xl" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-portfolio-blue-800">Master of Science</h3>
                    <p className="text-portfolio-blue-600">Computer Science</p>
                  </div>
                </div>
                <p className="text-portfolio-blue-600 text-lg mb-2">University Name</p>
                <p className="text-gray-600 mb-4">2022 - 2024 • GPA: 3.9/4.0</p>
                <div className="text-left">
                  <h4 className="font-semibold text-portfolio-blue-700 mb-2">Specialization:</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Machine Learning', 'Distributed Systems', 'Advanced Algorithms'].map((course) => (
                      <span key={course} className="px-3 py-1 bg-white text-portfolio-blue-700 rounded-full text-sm border border-portfolio-blue-200">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-portfolio-blue-50 rounded-3xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-portfolio-blue-200 rounded-full flex items-center justify-center">
                    <FaGraduationCap className="text-portfolio-blue-700 text-xl" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-portfolio-blue-800">Bachelor of Science</h3>
                    <p className="text-portfolio-blue-600">Computer Science</p>
                  </div>
                </div>
                <p className="text-portfolio-blue-600 text-lg mb-2">University Name</p>
                <p className="text-gray-600 mb-4">2018 - 2022 • GPA: 3.8/4.0</p>
                <div className="text-left">
                  <h4 className="font-semibold text-portfolio-blue-700 mb-2">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Data Structures', 'Algorithms', 'Database Systems', 'Software Engineering', 'Web Development'].map((course) => (
                      <span key={course} className="px-3 py-1 bg-white text-portfolio-blue-700 rounded-full text-sm border border-portfolio-blue-200">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Contact Section - Enhanced with clickable links */}
        <section id="contact" className="snap-start h-screen bg-portfolio-blue-50 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold text-portfolio-blue-900 mb-8">Let's Work Together</h2>
            <p className="text-xl text-gray-700 mb-12">
              Ready to bring your ideas to life? I'd love to hear about your project.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <button 
                onClick={openEmail}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                  <FaEnvelope className="text-red-500 mx-auto" />
                </div>
                <h3 className="font-bold text-portfolio-blue-800 mb-2">Email</h3>
                <p className="text-gray-600 text-sm">{email}</p>
              </button>
              
              <button 
                onClick={openLinkedIn}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                  <FaLinkedin className="text-blue-600 mx-auto" />
                </div>
                <h3 className="font-bold text-portfolio-blue-800 mb-2">LinkedIn</h3>
                <p className="text-gray-600 text-sm">Professional Profile</p>
              </button>
              
              <button 
                onClick={openGitHub}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                  <FaGithub className="text-gray-700 mx-auto" />
                </div>
                <h3 className="font-bold text-portfolio-blue-800 mb-2">GitHub</h3>
                <p className="text-gray-600 text-sm">Code Repositories</p>
              </button>
              
              <button 
                onClick={openLeetCode}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                  <SiLeetcode className="text-orange-500 mx-auto" />
                </div>
                <h3 className="font-bold text-portfolio-blue-800 mb-2">LeetCode</h3>
                <p className="text-gray-600 text-sm">Coding Practice</p>
              </button>
            </div>

            <button 
              onClick={() => setIsContactOpen(true)}
              className="px-8 py-3 bg-portfolio-blue-600 text-white rounded-full hover:bg-portfolio-blue-700 transition-all duration-300 font-medium hover:scale-105 transform flex items-center gap-2 mx-auto"
            >
              <FaComments />
              Get In Touch
            </button>
            
            {/* Simple Footer Text */}
            <div className="mt-16 pt-8 border-t border-portfolio-blue-200">
              <p className="text-sm text-gray-500">
                © 2025 Your Name. Built with React & Tailwind CSS.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default App
