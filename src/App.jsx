import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDiscord } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

function App() {
  const email = "kush147.tech@gmail.com";
  const linkedinUrl = "https://linkedin.com/in/kush1499";
  const githubUrl = "https://github.com/kux109";
  const leetcodeUrl = "https://leetcode.com/kush1499";
  const discordUrl = "https://discord.gg/p8Ars9xF";

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-gradient-to-br from-sky-200 via-teal-100 to-yellow-100 text-slate-800 font-sans hide-scrollbar smooth-scroll selection:bg-pink-300 selection:text-white">
      
      {/* 1. Home Section */}
      <section className="min-h-screen flex flex-col items-center justify-center snap-start relative px-6 md:px-12">
        <div className="z-10 flex flex-col items-center text-center max-w-2xl animate-fade-in-up">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl mb-6 transform hover:scale-[1.03] transition-all duration-300 hover:rotate-3">
            <img 
              src="/photo.webp"
              alt="Kushagra Srivastava"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-800 drop-shadow-sm">
            Hi, I'm Kushagra 🌊
          </h1>
          <p className="text-lg md:text-xl font-medium text-slate-700 leading-relaxed md:leading-relaxed bg-white/40 p-6 md:p-8 rounded-3xl backdrop-blur-sm border border-white/50 shadow-sm mx-2 md:mx-0 text-left md:text-center">
            I'm a software engineer who loves building scalable backend systems, gluing together robust infrastructure, and occasionally shipping a slick frontend. Whether I'm wrangling servers or automating the boring stuff, I'm always looking for the next fun project to dive into. Let's build something awesome together! 🚀
          </p>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 animate-bounce text-slate-600 flex flex-col items-center gap-1">
          <span className="text-xs tracking-widest font-bold uppercase opacity-70">Scroll</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2.5" className="opacity-80">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" />
          </svg>
        </div>
      </section>

      {/* 2. Skills Section */}
      <section className="min-h-screen flex flex-col items-center justify-center snap-start px-8 md:px-0 relative">
        <div className="max-w-3xl w-full z-10 flex flex-col items-center justify-center h-full text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-10 drop-shadow-sm">What I Do 🛠️</h2>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {["Backend", "Frontend", "Full-Stack", "CI/CD", "Infrastructure", "Automation", "System Design", "Cloud Systems"].map((skill) => (
              <div key={skill} className="px-6 py-3 bg-white/60 backdrop-blur-md rounded-full shadow-sm hover:shadow-md hover:-translate-y-1 hover:bg-white/90 transition-all duration-300 text-slate-800 font-semibold text-lg md:text-xl border border-white/50 cursor-default hover:rotate-2">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Education Section */}
      <section className="min-h-screen flex flex-col items-center justify-center snap-start px-8 md:px-0 relative">
        <div className="max-w-2xl w-full z-10 flex flex-col justify-center items-center h-full text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-10 drop-shadow-sm">Education 🎓</h2>
          
          <div className="space-y-10 w-full">
            <div className="bg-white/40 backdrop-blur-md p-8 rounded-[2rem] shadow-sm hover:shadow-lg transition-all duration-300 border border-white/50 hover:bg-white/60 hover:-translate-y-1 relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-white/60 px-4 py-1 text-xs font-bold text-slate-700 rounded-bl-xl border-b border-l border-white/50">Thesis Track</div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2 mt-2">Master of Science</h3>
              <p className="text-lg text-slate-700 font-medium">Computer Science Engineering</p>
              <p className="text-slate-600 mt-2 font-medium">Pennsylvania State University</p>
            </div>
            
            <div className="bg-white/40 backdrop-blur-md p-8 rounded-[2rem] shadow-sm hover:shadow-lg transition-all duration-300 border border-white/50 hover:bg-white/60 hover:-translate-y-1">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">Bachelor of Technology</h3>
              <p className="text-lg text-slate-700 font-medium">Electrical & Electronics Engineering</p>
              <p className="text-slate-600 mt-2 font-medium">Guru Gobind Singh Indraprastha University</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Socials Section */}
      <section className="min-h-screen flex flex-col items-center justify-center snap-start px-6 relative">
        <div className="text-center z-10 w-full max-w-lg flex flex-col h-full justify-center">
          <div className="flex-grow flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 drop-shadow-sm">Let's Connect 🌴</h2>
            
            <div className="flex justify-center flex-wrap gap-6 md:gap-10 w-full mx-auto">
              <a href={`mailto:${email}`} className="text-slate-600 bg-white/50 p-4 rounded-full shadow-sm hover:bg-white hover:text-rose-400 hover:-translate-y-2 hover:rotate-6 transform transition-all duration-300" title="Email">
                <FaEnvelope className="text-3xl md:text-4xl" />
              </a>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-slate-600 bg-white/50 p-4 rounded-full shadow-sm hover:bg-white hover:text-blue-500 hover:-translate-y-2 hover:-rotate-6 transform transition-all duration-300" title="LinkedIn">
                <FaLinkedin className="text-3xl md:text-4xl" />
              </a>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-600 bg-white/50 p-4 rounded-full shadow-sm hover:bg-white hover:text-slate-900 hover:-translate-y-2 hover:rotate-6 transform transition-all duration-300" title="GitHub">
                <FaGithub className="text-3xl md:text-4xl" />
              </a>
              <a href={leetcodeUrl} target="_blank" rel="noopener noreferrer" className="text-slate-600 bg-white/50 p-4 rounded-full shadow-sm hover:bg-white hover:text-orange-500 hover:-translate-y-2 hover:-rotate-6 transform transition-all duration-300" title="LeetCode">
                <SiLeetcode className="text-3xl md:text-4xl" />
              </a>
              <a href={discordUrl} target="_blank" rel="noopener noreferrer" className="text-slate-600 bg-white/50 p-4 rounded-full shadow-sm hover:bg-white hover:text-indigo-500 hover:-translate-y-2 hover:rotate-6 transform transition-all duration-300" title="Discord">
                <FaDiscord className="text-3xl md:text-4xl" />
              </a>
            </div>
          </div>
          
          <div className="mb-12">
            <p className="text-sm text-slate-600 font-medium tracking-wide">
              © {new Date().getFullYear()} KUSHAGRA SRIVASTVA 🍹
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
