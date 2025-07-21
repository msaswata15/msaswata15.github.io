import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = React.useState(0);
  const roles = [
    "AI & Full Stack Developer",
    "MERN Stack Specialist", 
    "Open Source Contributor",
    "CSE Student at IEM Kolkata",
    "AI/ML Enthusiast"
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole(prev => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-black/50 to-gray-900/50 pt-20">
      {/* Enhanced Background Elements that complement Three.js */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-cyan-900/5 to-transparent"></div>
        
        {/* Hero Grid Pattern - subtle overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>
        
        {/* Simplified floating elements - reduce complexity */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute ${
              i % 4 === 0 ? 'w-2 h-2 bg-blue-400/30 rounded-full' :
              i % 4 === 1 ? 'w-1 h-1 bg-green-400/30 rounded-full' :
              i % 4 === 2 ? 'w-3 h-1 bg-purple-400/30 rounded-full' :
              'w-1 h-2 bg-cyan-400/30 rounded-full'
            }`}
            style={{
              left: `${10 + (i * 10)}%`,
              top: `${15 + (i * 8)}%`,
              animation: `float ${3 + i}s ease-in-out infinite`,
            }}
          />
        ))}
        
        {/* Simplified gradient orbs with CSS animations */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl bg-gradient-to-r from-green-500/10 to-cyan-500/10 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-white drop-shadow-lg">Hi, I'm </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
              Saswata
            </span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-8 font-light min-h-[4rem] flex items-center justify-center text-gray-200">
            <motion.span
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold drop-shadow-lg"
            >
              {roles[currentRole]}
            </motion.span>
          </h2>
          
          <div className="text-xl mb-8 text-gray-300">
            specializing in{' '}
            <motion.span 
              className="text-cyan-400 font-semibold drop-shadow-lg"
              whileHover={{ scale: 1.05, color: "#22D3EE" }}
              transition={{ duration: 0.2 }}
            >
              Java & JavaScript
            </motion.span>
            {', '}
            <motion.span 
              className="text-green-400 font-semibold drop-shadow-lg"
              whileHover={{ scale: 1.05, color: "#34D399" }}
              transition={{ duration: 0.2 }}
            >
              Python & AI/ML
            </motion.span>
            {' & '}
            <motion.span 
              className="text-purple-400 font-semibold drop-shadow-lg"
              whileHover={{ scale: 1.05, color: "#A78BFA" }}
              transition={{ duration: 0.2 }}
            >
              MERN Stack
            </motion.span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-300">
            Final Year CSE Student at IEM Kolkata. Passionate about building impactful AI-powered 
            applications, full-stack web solutions with MERN stack, and contributing to open source. 
            Currently exploring AI/ML, Cloud technologies, and Modern Frontend frameworks.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          variants={itemVariants}
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
          >
            <span className="drop-shadow-lg">View My Work</span>
          </button>
          
          <a 
            href="/resume/Saswata_Mondal_Resume.pdf"
            download="Saswata_Mondal_Resume.pdf"
            className="px-8 py-4 border-2 border-gray-400 text-gray-200 rounded-xl font-semibold text-lg hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 flex items-center gap-3 cursor-pointer shadow-lg hover:scale-105"
          >
            <Download size={20} />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 animate-bounce"
          >
            <ArrowDown size={32} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;