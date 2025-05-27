import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt, FaTimes, FaDiscord, FaGlobe, FaFileDownload } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

function App() {
  // Contact info - replace with your actual details
  const email = "kushagra147@gmail.com"
  const linkedinUrl = "https://linkedin.com/in/kush1499"
  const githubUrl = "https://github.com/kux109"
  const leetcodeUrl = "https://leetcode.com/kush1499"
  const discordUrl = "https://discord.gg/p8Ars9xF"
  const homeUrl = "home"
  const resumeUrl = "https://drive.google.com/file/d/1zW3y7dErg8JIbvj2bG1Wxh70xNwCloqO/view?usp=sharing" // Replace with your Google Drive link

  // Projects state
  const [visibleProjects, setVisibleProjects] = useState(4)
  
  // Typewriter effect states
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  // Dynamic titles that will rotate after "Software Engineer &"
  const titles = [
    "Full Stack Developer",
    "Backend",
    "Frontend", 
    "DevOps",
    "Machine Learning",
    "Cloud",
    "Data Engineering",
    "System Design",
    "Security"
  ]

  // Typewriter effect
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentTitle.length) {
          setCurrentText(currentTitle.slice(0, currentText.length + 1))
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1))
        } else {
          // Finished deleting, move to next title
          setIsDeleting(false)
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
        }
      }
    }, isDeleting ? 20 : 50) // Faster deleting, slower typing

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentTitleIndex, titles])

  // All projects data
  const allProjects = [
    {
      name: "Adversarial Neural Network Testing on CIFAR-10",
      description: "Trained a neural network on the CIFAR-10 dataset and introduced adversarial inputs to evaluate its robustness. Demonstrated how slight perturbations in the dataset could drastically reduce model accuracy.",
      tech: "Python, TensorFlow/PyTorch, NumPy, Matplotlib, Jupyter"
    },
    {
      name: "ETL Pipeline with Kafka and Multithreading", 
      description: "Engineered an ETL system in Spring Boot to scrape and process large datasets, using Kafka streams for pipeline flow. Applied multithreading and optimization techniques to improve ingestion speed and loaded data into MySQL.",
      tech: "Java, Spring Boot, Kafka, MySQL"
    },
    {
      name: "Context-Aware WAF for XSS Mitigation",
      description: "Designed a Web Application Firewall in Python to detect and block cross-site scripting (XSS) attacks based on context-aware rules. Integrated it into Django and Flask applications to improve security posture without affecting app performance.",
      tech: "Python, Django, Flask, SQLite"
    },
    {
      name: "Serverless Data Pipeline on AWS",
      description: "Designed a scalable serverless data pipeline using AWS Lambda, S3, and DynamoDB to process terabytes of incoming data. Integrated monitoring and alerting with CloudWatch, resulting in reduced infrastructure management overhead.",
      tech: "AWS Lambda, S3, DynamoDB, API Gateway, CloudWatch"
    },
    {
      name: "GAN for Handwritten Digit Generation",
      description: "Built a Generative Adversarial Network (GAN) with custom generator and discriminator models on the MNIST dataset. Achieved 90%+ discriminator accuracy and realistic digit outputs within 50 epochs.",
      tech: "Python, TensorFlow/Keras, MNIST dataset"
    },
    {
      name: "Wikipedia Knowledge Graph with GNN",
      description: "Used the WikiCS dataset to construct a knowledge graph and trained a Graph Neural Network (GNN) to compute centrality, PageRank, and detect communities without relying on traditional algorithms. Improved insights into graph structures via machine learning techniques.",
      tech: "Python, PyTorch Geometric, NetworkX, WikiCS"
    },
    {
      name: "Random Forest for Cyberattack Classification",
      description: "Applied Random Forest classification on the UNSW-NB15 dataset to categorize different network traffic types. Focused on improving detection accuracy and model reliability for intrusion detection systems.",
      tech: "Python, scikit-learn, pandas"
    },
    {
      name: "WebRTC-based Video KYC Platform",
      description: "Developed a WebRTC-based video calling system at Paytm for smooth customer KYC verification. Ensured low-latency performance and seamless user experience under variable network conditions.",
      tech: "JavaScript, Node.js, WebRTC"
    },
    {
      name: "Social Media Analytics Tool",
      description: "Sentiment analysis and trend prediction platform processing millions of social media posts daily.",
      tech: "Python, Apache Spark, Elasticsearch, React, D3.js"
    },
    {
      name: "Memory Management Module in C",
      description: "Created a memory management tool in C with functionalities for allocate, deallocate, reset, and usage stats. Used GDB to debug and optimize the system, achieving a 30% performance boost.",
      tech: " C, GDB"
    },
    {
      name: "Secure File System with User and File Management",
      description: "Built a secure file system in Java that supports user creation and file operations including read, write, and delete. The goal was to enforce access control and ensure secure handling of data within a simulated environment.",
      tech: "Java"
    }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const showMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + 4, allProjects.length))
  }

  const hideAllProjects = () => {
    setVisibleProjects(4)
  }

  const displayedProjects = allProjects.slice(0, visibleProjects)
  const hasMoreProjects = visibleProjects < allProjects.length

  // Popup state for email copy
  const [showCopied, setShowCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setShowCopied(true)
    setTimeout(() => setShowCopied(false), 1500)
  }

  return (
    <div className="min-h-screen bg-warm-beige-50">
      
      {/* Top Navigation - No Header */}
      <div className="pt-8 px-2 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <nav className="flex flex-wrap justify-center gap-2 sm:space-x-6">
              {['about', 'work', 'education', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-sm text-warm-beige-700 hover:text-warm-beige-900 transition-colors"
                >
                  {section}
                </button>
              ))}
            </nav>
            <a 
              href={resumeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3 py-2 border border-warm-beige-300 text-warm-beige-800 hover:bg-warm-beige-100 transition-colors text-xs sm:text-sm mt-2 sm:mt-0"
            >
              <FaFileAlt className="text-xs" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-10 px-2 sm:py-20 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-0">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-light text-warm-beige-900 mb-4 tracking-tight">
                Kushagra Srivastva
              </h1>
              
              {/* Fixed + Typewriter Effect */}
              <div className="mb-6 h-16 flex items-center">
                <p className="text-xl text-warm-beige-700 font-light">
                  Software Engineer - 
                  <span className="ml-2">
                    {currentText}
                  </span>
                  <span className="ml-1 text-warm-beige-500 animate-blink">|</span>
                </p>
              </div>
              
              <p className="text-warm-beige-600 max-w-lg leading-relaxed">
                Building thoughtful digital experiences with clean code and user-centered design. 
                Currently exploring modern web technologies and scalable architectures.
              </p>
            </div>
            <div className="w-40 h-40 xs:w-48 xs:h-48 sm:w-64 sm:h-64 bg-warm-beige-200 border border-warm-beige-300 flex items-center justify-center mx-auto md:mx-0 mt-8 md:mt-0">
              <img 
                src="/Profile-website/photo.webp"
                alt="Me!"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-10 px-2 sm:py-20 sm:px-6 border-t border-warm-beige-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-light text-warm-beige-900 mb-8 sm:mb-12">About</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="md:col-span-2">
              <p className="text-warm-beige-700 leading-relaxed mb-6">
                Hi, I’m a curious engineer who loves building things that make life easier — whether that’s a clean backend service, a responsive front-end UI, or a security dashboard that just works. I started out in Electrical Engineering, but soon found my stride in software development, working on real-world products that taught me to think in systems and ship with care.
              </p>
              <p className="text-warm-beige-700 leading-relaxed mb-6">
                Since beginning my Master’s in Computer Science, I’ve also stepped into the world of machine learning and AI — exploring how data, models, and code come together to solve real problems. Lately, I’ve been grinding on LeetCode, constantly challenging myself to improve my problem-solving skills and deepen my grasp of algorithms. Outside of code, you’ll find me diving into side projects, sliding tackles on FIFA, or just thinking deeply about how and why things work. This site is a small window into my journey so far — and what’s coming next.
              </p>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-warm-beige-800 font-medium mb-3">Languages</h3>
                <p className="text-warm-beige-600 text-sm leading-relaxed">
                  C/C++, Java, JavaScript, Python, TypeScript, SQL, Bash, Golang
                </p>
              </div>
              <div>
                <h3 className="text-warm-beige-800 font-medium mb-3">Technologies</h3>
                <p className="text-warm-beige-600 text-sm leading-relaxed">
                  Spring Boot, React, Angular, Next.js, Node.js, Express, MySQL, PostgreSQL, MongoDB, AWS, Docker 
                </p>
              </div>
              <div>
                <h3 className="text-warm-beige-800 font-medium mb-3">Frameworks</h3>
                <p className="text-warm-beige-600 text-sm leading-relaxed">
                  TensorFlow, PyTorch, CUDA, OpenMP, OpenCL, TensorRT, NCCL
                </p>
              </div>
              <div>
                <h3 className="text-warm-beige-800 font-medium mb-3">Tools</h3>
                <p className="text-warm-beige-600 text-sm leading-relaxed">
                  Git, Jenkins, Kubernetes, Linux, VS Code
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-10 px-2 sm:py-20 sm:px-6 border-t border-warm-beige-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-light text-warm-beige-900 mb-8 sm:mb-12">Work</h2>
          <div className="space-y-8 sm:space-y-12">
            {[
              {
                title: "Graduate Assistant",
                company: "Pennsylvania State University, CSE Department",
                period: "Aug 2024 - Present",
                description: "Teaching Assistant CMPSC-132 for Programming and Computation II - Led recitations, held oﬃce hours, guided exam preparation, and graded assignments to support student learning "
              },
              {
                title: "Software Engineer", 
                company: "Paytm",
                period: "Apr 2022 - Jul 2024",
                description: [
                  "At Paytm, I engineered high-performance microservices supporting over 75 RESTful and SOAP APIs, streamlining critical workflows in payments, audits, and purchases. I built real-time benchmarking tools to profile and optimize high-traffic APIs, cutting response times by 20%. On the front-end, I developed a fast, SEO-friendly Single-Page Application using Next.js and React, improving load times through smart state management and efficient data fetching.",
                  "I also led the development of a WebRTC-based video calling app with real-time chat via WebSockets, optimized for low-latency and adaptive streaming. On the backend, I focused on deep system profiling and debugging to reduce latency and enhance reliability. I implemented strong API security using AES, RSA, two-factor authentication, and OTP verification, while integrating Kafka to securely manage workflows across departments. Alongside technical work, I mentored three interns—two of whom received full-time offers."
                ]
              }
            ].map((job, index) => (
              <div key={index} className="pb-8 border-b border-warm-beige-200 last:border-b-0">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg text-warm-beige-900 font-medium">{job.title}</h3>
                  <span className="text-sm text-warm-beige-600">{job.period}</span>
                </div>
                <p className="text-warm-beige-800 mb-3 font-semibold">{job.company}</p>
                <p className="text-warm-beige-600 leading-relaxed">
                  {Array.isArray(job.description)
                    ? job.description.map((para, i) => (
                        <span key={i} className={i > 0 ? "block mt-3" : ""}>{para}</span>
                      ))
                    : job.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-10 px-2 sm:py-20 sm:px-6 border-t border-warm-beige-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-light text-warm-beige-900 mb-8 sm:mb-12">Education</h2>
          <div className="space-y-6 sm:space-y-8">
            <div className="pb-8 border-b border-warm-beige-200">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg text-warm-beige-900 font-medium">Master of Science in Computer Science Engineering</h3>
                <span className="text-sm text-warm-beige-600">2022 - 2024</span>
              </div>
              <p className="text-warm-beige-700 mb-2"><span className="font-semibold">Pennsylvania State University</span> • GPA: 3.4/4.0</p>
              <p className="text-warm-beige-600"><span className="border-b border-warm-beige-200 pb-0.5">Relevant Coursework:</span> Machine Learning, Distributed Systems, Algorithmic Design, Graph Algorithms, Computer Security </p>
            </div>
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg text-warm-beige-900 font-medium">Bachelor of Technology in Electrical and Electronics Engineering</h3>
                <span className="text-sm text-warm-beige-600">2018 - 2022</span>
              </div>
              <p className="text-warm-beige-700 mb-2">Guru Gobind Singh Indraprastha University • GPA: 3.89/4.0</p>
              <p className="text-warm-beige-600"><span className="border-b border-warm-beige-200 pb-0.5">Relevant Coursework:</span> Data Structures, Algorithms, Database Systems, Software Engineering, Web Development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-10 px-2 sm:py-20 sm:px-6 border-t border-warm-beige-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12 gap-4 sm:gap-0">
            <div>
              <h2 className="text-2xl sm:text-3xl font-light text-warm-beige-900">Projects</h2>
              <p className="text-sm text-warm-beige-500 mt-1">
                All projects available on my{' '}
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm-beige-700 underline hover:text-warm-beige-900"
                >
                  GitHub
                </a>
              </p>
            </div>
            {/* Hidden Cross Button - only visible when more than 4 projects are shown */}
            {visibleProjects > 4 && (
              <button
                onClick={hideAllProjects}
                className="text-warm-beige-400 hover:text-warm-beige-600 transition-colors opacity-30 hover:opacity-100"
                title="Show fewer projects"
              >
                <FaTimes className="text-lg" />
              </button>
            )}
          </div>
          
          <div className="space-y-6 sm:space-y-8">
            {displayedProjects.map((project, index) => (
              <div key={index} className="pb-8 border-b border-warm-beige-200 last:border-b-0">
                <h3 className="text-lg text-warm-beige-900 font-medium mb-2">{project.name}</h3>
                <p className="text-warm-beige-600 leading-relaxed mb-3">{project.description}</p>
                <p className="text-sm text-warm-beige-500">{project.tech}</p>
              </div>
            ))}
          </div>

          {/* See More Button */}
          {hasMoreProjects && (
            <div className="mt-12 text-center">
              <button
                onClick={showMoreProjects}
                className="px-6 py-3 border border-warm-beige-300 text-warm-beige-800 hover:bg-warm-beige-100 transition-colors text-sm"
              >
                See More Projects ({allProjects.length - visibleProjects} remaining)
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10 px-2 sm:py-20 sm:px-6 border-t border-warm-beige-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-light text-warm-beige-900 mb-6 sm:mb-8">Contact</h2>
          <p className="text-warm-beige-600 mb-8 sm:mb-12 max-w-2xl">
            I'm always open to discussing new opportunities/roles, interesting projects, or just having a conversation about technology.
          </p>
          <div className="flex flex-wrap gap-4 sm:space-x-8">
            <div className="relative flex items-center">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center space-x-2 text-warm-beige-700 hover:text-warm-beige-900 transition-colors focus:outline-none"
                aria-label="Copy email to clipboard"
              >
                <FaEnvelope className="text-sm" />
                <span>Email</span>
              </button>
              {showCopied && (
                <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-0.5 rounded text-xs sm:text-xs text-warm-beige-600 bg-warm-beige-100 border border-warm-beige-200 shadow-sm z-10 whitespace-nowrap">
                  Copied to clipboard
                </span>
              )}
            </div>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-warm-beige-700 hover:text-warm-beige-900 transition-colors">
              <FaLinkedin className="text-sm" />
              <span>LinkedIn</span>
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-warm-beige-700 hover:text-warm-beige-900 transition-colors">
              <FaGithub className="text-sm" />
              <span>GitHub</span>
            </a>
            <a href={leetcodeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-warm-beige-700 hover:text-warm-beige-900 transition-colors">
              <SiLeetcode className="text-sm" />
              <span>LeetCode</span>
            </a>
            <a href={discordUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-warm-beige-700 hover:text-warm-beige-900 transition-colors">
              <FaDiscord className="text-sm" />
              <span>Discord</span>
            </a>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-warm-beige-700 hover:text-warm-beige-900 transition-colors">
              <FaFileDownload className="text-sm" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-warm-beige-50 border-t border-warm-beige-200 py-6 sm:py-8 px-2 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs sm:text-sm text-warm-beige-500">
            © 2025 Kushagra Srivastva
          </p>
        </div>
      </footer>

    </div>
  )
}

export default App
