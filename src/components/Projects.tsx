import { ExternalLink, Github, Code, Database, Brain, ShoppingCart, Users, BookOpen, MessageSquare, Calendar, Sparkles, Lightbulb, Server } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "SyntaxHut – LeetCode Solutions Platform",
      description: "A backend-focused platform hosting 1400+ curated LeetCode solutions across multiple languages with automated ingestion, SEO optimization, and global deployment.",
      icon: <Code className="text-blue-400" size={24} />,
      tech: ["Java", "Spring Boot", "PostgreSQL", "GitHub Actions", "Cloudflare", "Vercel"],
      features: [
        "Automated content ingestion via GitHub Actions + Gemini AI",
        "Secure backend APIs for solutions and contact handling",
        "SEO, monetization, and analytics integrations",
        "Deployment on Vercel with Cloudflare CDN",
        "Environment-based credential management"
      ],
      type: "Backend",
      gradient: "from-blue-500/20 to-indigo-500/20",
      liveUrl: "https://syntaxhut.tech/",
      githubUrl: "https://github.com/msaswata15/syntaxhut"
    },
    {
      title: "Library Management System",
      description: "A secure backend system for managing library operations with JWT authentication, role-based access, and automated workflows for books and members.",
      icon: <BookOpen className="text-yellow-400" size={24} />,
      tech: ["Spring Boot", "Spring Security (JWT)", "PostgreSQL", "JPA/Hibernate", "JUnit", "Mockito"],
      features: [
        "Role-based access control (Librarian/User)",
        "Secure JWT-authenticated REST APIs",
        "Book management: add, update, delete, search, availability tracking",
        "Member management and borrowing/return workflows with overdue fines",
        "Extra features: book recommendations, request system, audit trail, notifications",
        "Robust error handling, validation, and unit/integration testing"
      ],
      type: "Backend",
      gradient: "from-yellow-500/20 to-amber-500/20",
      githubUrl: "https://github.com/msaswata15/LibraryManagementSystem"
    }, {
      title: "LeetSolution – Problem Management Platform",
      description: "A scalable, automated platform for managing 1500+ coding problems and solutions, with AI-driven enrichment, multi-language support, and CI/CD pipelines for synchronization across backend and frontend.",
      icon: <Server className="text-purple-400" size={24} />,
      tech: ["Node.js", "Python", "Spring Boot (planned)", "MySQL (planned)", "GitHub Actions", "JSON", "CI/CD", "AI APIs (Gemini)"],
      features: [
        "Automated data pipeline with scheduled GitHub Actions",
        "Problem metadata management (title, difficulty, topics, etc.)",
        "AI-based content enrichment using Gemini API",
        "Multi-language solution support: Python, Java, C++, C",
        "Frontend synchronization via secure SSH + GitHub Actions",
        "Designed scalable REST API endpoints for search/retrieval",
        "Efficient large dataset handling with caching & batch processing",
        "Secret management for API keys and deploy credentials"
      ],
      type: "Backend + DevOps",
      gradient: "from-purple-500/20 to-violet-500/20",
      liveUrl: "https://syntaxhut.tech/",
      githubUrl: "https://github.com/leetsolution/solutions"
    },

    {
      title: "Digital Detox",
      description: "A productivity and wellness app that helps users track and reduce their digital device usage. Features daily/weekly analytics, goal setting, and motivational insights to encourage healthy screen habits.",
      icon: <Sparkles className="text-pink-400" size={24} />,
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Chart.js"],
      features: ["Screen time tracking", "Goal setting", "Usage analytics", "Motivational insights", "Responsive design"],
      type: "Full Stack",
      gradient: "from-pink-500/20 to-fuchsia-500/20",
      githubUrl: "https://github.com/msaswata15/Digital-Detox"
    },
    {
      title: "Personal Finance Visualizer",
      description: "A modern web app to visualize and analyze your personal finances. Import transactions, categorize spending, and get beautiful interactive charts for budgeting and financial planning.",
      icon: <Database className="text-green-400" size={24} />,
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Chart.js"],
      features: ["Import transactions", "Spending categorization", "Interactive charts", "Budget analysis", "Responsive design"],
      type: "Full Stack",
      gradient: "from-green-500/20 to-emerald-500/20",
      liveUrl: "https://financetracker-steel.vercel.app/",
      githubUrl: "https://github.com/msaswata15/personal-finance-visualizer"
    },
    {
      title: "LeetCode Hint Genie",
      description: "A sleek, AI-powered Chrome extension that provides instant hints and solutions for LeetCode problems. Features smart problem detection, AI-powered assistance with hints and solutions, and a beautiful glassmorphism UI design.",
      icon: <Lightbulb className="text-yellow-400" size={24} />,
      tech: ["Chrome Extension", "FastAPI", "Google Gemini AI", "JavaScript", "HTML/CSS", "Python"],
      features: ["Smart problem detection", "AI-powered hints & solutions", "Modern glassmorphism UI", "Dark theme"],
      type: "Browser Extension",
      gradient: "from-yellow-500/20 to-amber-500/20",
      liveUrl: "https://microsoftedge.microsoft.com/addons/detail/nnoapnnphghopjaghhlikgackebjiaek",
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

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden min-h-screen">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-cyan-900/5 to-transparent"></div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>

        {/* Optimized Floating Elements - Reduced for performance */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-30"
            style={{
              left: `${15 + (i * 20)}%`,
              top: `${25 + (i * 15)}%`,
              animation: `float ${4 + i}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="text-yellow-400" size={32} />
            <h2 className="text-5xl font-bold text-white">Featured Projects</h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            A showcase of my technical expertise across full-stack development, AI/ML, and backend systems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 project-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative group project-card project-hover-scale animation-delay-${index * 100}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Simplified Background */}
              <div className={`bg-gradient-to-br ${project.gradient} absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl p-6 border border-gray-700/50 card-border-transition hover:border-cyan-500/50 backdrop-blur-md overflow-hidden group-hover:shadow-2xl group-hover:shadow-cyan-500/20">
                {/* Simplified Corner Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Tech Type Indicator */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>

                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-sm scale-150"></div>
                      <div className="relative bg-gradient-to-r from-gray-700 to-gray-800 p-2 rounded-full border border-gray-600">
                        {project.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white text-gradient-transition group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-xs text-green-400 font-medium">Active Project</span>
                      </div>
                    </div>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-bold border backdrop-blur-sm btn-scale ${getTypeColor(project.type)}`}>
                    {project.type}
                  </span>
                </div>

                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent rounded-lg"></div>
                  <p className="text-gray-300 leading-relaxed relative z-10 p-1">
                    {project.description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                    <h4 className="text-sm font-bold text-cyan-400">Key Features</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3 p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-200"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                        <span className="text-gray-300 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full"></div>
                    <h4 className="text-sm font-bold text-purple-400">Tech Stack</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300 px-3 py-2 rounded-full text-xs font-medium border border-gray-600 card-border-transition hover:border-purple-500/50 cursor-pointer group"
                      >
                        <span className="relative z-10">{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-700/50">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-xl btn-hover btn-scale hover:from-cyan-500 hover:to-blue-500 text-sm font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 border-2 border-gray-600 text-gray-300 px-6 py-3 rounded-xl btn-hover btn-scale hover:border-gray-500 hover:bg-gray-800/50 text-sm font-semibold"
                    >
                      <Github size={18} />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
