import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Database, Brain, ShoppingCart, Users, BookOpen, MessageSquare, Calendar, Sparkles, Lightbulb } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "LeetCode Hint Genie",
      description: "A sleek, AI-powered Chrome extension that provides instant hints and solutions for LeetCode problems. Features smart problem detection, AI-powered assistance with hints and solutions, and a beautiful glassmorphism UI design.",
      icon: <Lightbulb className="text-yellow-400" size={24} />,
      tech: ["Chrome Extension", "FastAPI", "Google Gemini AI", "JavaScript", "HTML/CSS", "Python"],
      features: ["Smart problem detection", "AI-powered hints & solutions", "Modern glassmorphism UI", "Dark theme"],
      type: "Browser Extension",
      gradient: "from-yellow-500/20 to-amber-500/20",
      liveUrl: "https://github.com/msaswata15/leet-hint-extension",
      githubUrl: "https://github.com/msaswata15/leet-hint-extension"
    },
    {
      title: "Medica - Hospital Management System",
      description: "A full-stack hospital management and appointment booking platform built with the MERN stack. Provides a seamless experience for patients, doctors, and administrators with appointment scheduling, test booking, medical records, and authentication.",
      icon: <Users className="text-blue-400" size={24} />,
      tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "MUI", "Chart.js"],
      features: ["Appointment scheduling", "Test booking", "Medical records", "Multi-role authentication"],
      type: "Full Stack",
      gradient: "from-blue-500/20 to-cyan-500/20",
      liveUrl: "https://medicahospitals.netlify.app/",
      githubUrl: "https://github.com/msaswata15/Full-Stack-Hospital-Management"
    },
    {
      title: "AI-powered Virtual Development Pod",
      description: "An end-to-end, multi-agent software development automation platform that simulates real-world project lifecycle with specialized AI agents for Business Analysis, Design, Development, Testing, Security, and Performance Optimization.",
      icon: <Brain className="text-purple-400" size={24} />,
      tech: ["Python", "Streamlit", "AI Agents", "Multi-Agent Systems"],
      features: ["Multi-agent orchestration", "Automated code generation", "Security analysis", "Performance optimization"],
      type: "AI/ML",
      gradient: "from-purple-500/20 to-pink-500/20",
      liveUrl: "https://aivirtualdevelopmentpod.streamlit.app/",
      githubUrl: "https://github.com/msaswata15/AI_VIRTUAL_DEVELOPMENT_POD"
    },
    {
      title: "AI Career Companion with Proctored Mock Interview",
      description: "A comprehensive Streamlit application for job seekers featuring automated job hunting, resume generation, and voice-based mock interviews with proctoring capabilities.",
      icon: <Users className="text-blue-400" size={24} />,
      tech: ["Python", "Streamlit", "AI", "Voice Processing"],
      features: ["Job matching", "Resume generation", "Voice interviews", "Proctoring system"],
      liveUrl: "https://ai-companio.streamlit.app/",
      githubUrl: "https://github.com/msaswata15/AI-Career-Companion-Proctor-Mock",
      type: "AI/ML",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "MERN E-commerce Platform 2024",
      description: "A full-stack e-commerce application with comprehensive features including user authentication, payment integration, admin dashboard, and responsive design.",
      icon: <ShoppingCart className="text-green-400" size={24} />,
      tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "PayPal", "Razorpay"],
      features: ["Payment integration", "Admin dashboard", "Product reviews", "Order management"],
      type: "Full Stack",
      gradient: "from-green-500/20 to-emerald-500/20",
      liveUrl: "https://mernecom-gules.vercel.app/",
      githubUrl: "https://github.com/msaswata15/E-Com-using-Mern"
    },
    {
      title: "Smart Clinic Management System",
      description: "A comprehensive backend system for managing clinics with JWT authentication, multiple user roles, and hybrid database architecture using both MySQL and MongoDB.",
      icon: <Database className="text-red-400" size={24} />,
      tech: ["Spring Boot", "Java 17", "MySQL", "MongoDB", "JWT", "Docker", "Thymeleaf"],
      features: ["Multi-role authentication", "REST APIs", "Hybrid database", "Docker support"],
      type: "Backend",
      gradient: "from-red-500/20 to-orange-500/20",
      githubUrl: "https://github.com/msaswata15/Smart-Clinic-Management-System"
    },
    {
      title: "MERN Job Portal",
      description: "A modern job portal with Firebase authentication, advanced filtering, and separate interfaces for job seekers and employers with real-time job posting and management.",
      icon: <Code className="text-orange-400" size={24} />,
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Firebase", "Tailwind CSS"],
      features: ["Firebase auth", "Advanced filtering", "Job posting", "Responsive design"],
      type: "Full Stack",
      gradient: "from-orange-500/20 to-yellow-500/20",
      githubUrl: "https://github.com/msaswata15/Internship-Portal",
      liveUrl: "https://sweproject.vercel.app/"
    },
    {
      title: "Vendor Management App",
      description: "A modern multi-user vendor management system with Google authentication, glassmorphic UI, and comprehensive vendor operations with shared database architecture.",
      icon: <Users className="text-teal-400" size={24} />,
      tech: ["Next.js", "MongoDB", "NextAuth.js", "Tailwind CSS", "Google Auth"],
      features: ["Google login", "Shared database", "CRUD operations", "Glassmorphic UI"],
      type: "Full Stack",
      gradient: "from-teal-500/20 to-cyan-500/20",
      liveUrl: "https://vendor-app-pi.vercel.app/",
      githubUrl: "https://github.com/msaswata15/vendor-app"
    },
    {
      title: "AI Booking Assistant",
      description: "Conversational agent for booking appointments on Google Calendar using natural language processing with FastAPI backend and Streamlit frontend.",
      icon: <Calendar className="text-indigo-400" size={24} />,
      tech: ["FastAPI", "LangGraph", "Streamlit", "Google Calendar API", "NLP"],
      features: ["Natural language booking", "Calendar integration", "Availability checking", "Slot confirmation"],
      type: "AI/ML",
      gradient: "from-indigo-500/20 to-purple-500/20",
      githubUrl: "https://github.com/msaswata15/AI-Booking-Assistant"
    },
    {
      title: "SMS Spam Detection ML",
      description: "Machine learning project for detecting spam SMS messages using NLP techniques, featuring comprehensive data analysis and model evaluation with visualization.",
      icon: <MessageSquare className="text-yellow-400" size={24} />,
      tech: ["Python", "Scikit-learn", "NLTK", "Pandas", "Matplotlib", "Jupyter"],
      features: ["NLP preprocessing", "Logistic regression", "Model evaluation", "Data visualization"],
      type: "AI/ML",
      gradient: "from-yellow-500/20 to-orange-500/20",
      githubUrl: "https://github.com/msaswata15/SpamDetectionSMS"
    },
    {
      title: "Library Management System",
      description: "A Spring Boot application for comprehensive library management with book tracking, member management, and borrowing system with RESTful API endpoints.",
      icon: <BookOpen className="text-pink-400" size={24} />,
      tech: ["Spring Boot", "Java", "REST API", "Database Management"],
      features: ["Book management", "Member system", "Borrowing tracking", "RESTful APIs"],
      type: "Backend",
      gradient: "from-pink-500/20 to-rose-500/20",
      githubUrl: "https://github.com/msaswata15/LibraryManagementSystem"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "AI/ML": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "Full Stack": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Backend": return "bg-green-500/20 text-green-400 border-green-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Sparkles className="text-yellow-400" size={32} />
            <h2 className="text-5xl font-bold text-white">Featured Projects</h2>
          </motion.div>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            A showcase of my technical expertise across full-stack development, AI/ML, and backend systems
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated Background Gradient */}
              <motion.div
                className={`bg-gradient-to-br ${project.gradient} absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 backdrop-blur-sm overflow-hidden">
                {/* Animated Corner Accent */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-bl-full"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                <div className="flex items-start justify-between mb-4 relative z-10">
                  <motion.div
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                      {project.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </motion.div>
                  <motion.span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(project.type)}`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.type}
                  </motion.span>
                </div>

                <motion.p
                  className="text-gray-300 mb-4 leading-relaxed"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.description}
                </motion.p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="w-1.5 h-1.5 bg-blue-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.2 }}
                        />
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs hover:bg-gray-600 transition-colors duration-200 cursor-pointer"
                        whileHover={{ scale: 1.1, backgroundColor: "#4B5563" }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-gray-600 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm"
                      whileHover={{ scale: 1.05, borderColor: "#9CA3AF" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;