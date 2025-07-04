import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Globe, PenTool as Tool, Brain, Award, CheckCircle } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="text-blue-400" size={24} />,
      title: "Programming Languages",
      skills: ["Java", "Python", "JavaScript", "C", "SQL", "TypeScript"],
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: <Server className="text-green-400" size={24} />,
      title: "Backend Technologies",
      skills: ["Spring Boot", "Spring MVC", "Spring Security", "JPA/Hibernate", "RESTful APIs", "Node.js", "Express.js", "FastAPI"],
      color: "from-green-500/20 to-green-600/20"
    },
    {
      icon: <Database className="text-purple-400" size={24} />,
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Query Optimization", "JDBC", "Mongoose", "Database Design"],
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      icon: <Globe className="text-orange-400" size={24} />,
      title: "Frontend Technologies",
      skills: ["React.js", "Next.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Material-UI"],
      color: "from-orange-500/20 to-orange-600/20"
    },
    {
      icon: <Brain className="text-pink-400" size={24} />,
      title: "AI/ML & Data Science",
      skills: ["LangGraph", "Google Gemini AI", "NLP", "AI Agents", "Multi-Agent Systems"],
      color: "from-pink-500/20 to-rose-500/20"
    },
    {
      icon: <Tool className="text-red-400" size={24} />,
      title: "DevOps & Cloud",
      skills: ["Git", "Docker", "Linux", "Shell Scripting", "System Monitoring", "CI/CD", "Vercel", "Netlify", "Firebase", "Google Cloud", "AWS"],
      color: "from-red-500/20 to-red-600/20"
    },
    {
      icon: <Globe className="text-teal-400" size={24} />,
      title: "APIs & Services",
      skills: ["REST APIs", "WebSockets", "OAuth", "JWT", "Google Calendar API", "PayPal", "Razorpay"],
      color: "from-teal-500/20 to-cyan-500/20"
    }
  ];

  const certifications = [
    "NPTEL - Programming in Java",
    "NPTEL - Database Management Systems", 
    "NPTEL - Introduction to Programming in C",
    "NPTEL - Python for Data Science",
    "IBM Java Developer Professional Certificate",
    "React Basics - Coursera",
    "Google Cloud Fundamentals - Coursera",
    "Full Stack Web Development - Udemy",
  ];

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
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-900 to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl font-bold text-white mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Skills & Expertise
          </motion.h2>
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
            A comprehensive toolkit for building robust, scalable applications from backend to frontend
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className={`bg-gradient-to-br ${category.color} absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 backdrop-blur-sm">
                <motion.div 
                  className="flex items-center gap-3 mb-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </motion.div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-600 transition-colors duration-200 cursor-pointer"
                      whileHover={{ scale: 1.1, backgroundColor: "#4B5563" }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="relative group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          <div className="relative bg-gray-900 rounded-2xl p-8 border border-gray-700 backdrop-blur-sm">
            <motion.div
              className="flex items-center justify-center gap-3 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Award className="text-yellow-400" size={28} />
              <h3 className="text-3xl font-semibold text-white">Certifications</h3>
            </motion.div>
            
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 rounded-lg p-4 border border-gray-600 hover:border-blue-500 transition-all duration-300 group/cert"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <CheckCircle className="text-green-400 group-hover/cert:text-blue-400 transition-colors duration-300" size={16} />
                    </motion.div>
                    <span className="text-gray-300 text-sm group-hover/cert:text-white transition-colors duration-300">{cert}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;