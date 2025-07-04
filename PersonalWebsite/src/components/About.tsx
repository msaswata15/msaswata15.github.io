import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Award, User, Code2, Target } from 'lucide-react';

const About = () => {
  const achievements = [
    "ISC School Topper & House Captain 2021–2022",
    "Top 5% performer & Silver Certification in NPTEL",
    "Organized a college-level Table Tennis Tournament",
    "B.Tech SGPA: 9.17"
  ];

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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
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
            About Me
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <motion.div
              className="flex items-center gap-3 mb-6"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <User className="text-blue-400" size={28} />
              <h3 className="text-3xl font-semibold text-white">
                Full Stack Developer & Problem Solver
              </h3>
            </motion.div>
            
            <motion.p 
              className="text-gray-300 mb-6 leading-relaxed text-lg"
              variants={itemVariants}
            >
              I'm a highly motivated Computer Science undergraduate specializing in Java backend development. 
              My passion lies in designing, developing, and deploying robust web applications using modern technologies 
              like Spring Boot, React, and various databases.
            </motion.p>
            
            <motion.p 
              className="text-gray-300 mb-8 leading-relaxed text-lg"
              variants={itemVariants}
            >
              With demonstrated expertise in building scalable backend systems, optimizing database performance, 
              and integrating secure services, I bring strong problem-solving skills and a collaborative mindset 
              to every project. I'm always eager to learn new technologies and tackle challenging development environments.
            </motion.p>

            <motion.div 
              className="grid sm:grid-cols-2 gap-4 mb-8"
              variants={containerVariants}
            >
              {[
                { icon: MapPin, text: "Kolkata, India", color: "text-blue-400" },
                { icon: Mail, text: "msaswata15@gmail.com", color: "text-green-400" },
                { icon: Phone, text: "+91 7718511341", color: "text-purple-400" },
                { icon: Award, text: "Graduating 2026", color: "text-orange-400" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 text-gray-300 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <item.icon className={item.color} size={20} />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            variants={cardVariants}
          >
            <motion.div 
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 backdrop-blur-sm relative overflow-hidden"
              whileHover={{ scale: 1.02, borderColor: "#4B5563" }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated Background Gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))",
                    "linear-gradient(225deg, rgba(147, 51, 234, 0.05), rgba(59, 130, 246, 0.05))",
                    "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />

              <div className="relative z-10">
                <motion.div
                  className="flex items-center gap-3 mb-6"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Target className="text-yellow-400" size={24} />
                  <h4 className="text-2xl font-semibold text-white">Key Achievements</h4>
                </motion.div>
                
                <div className="space-y-4 mb-8">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-700/50 transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5, backgroundColor: "rgba(55, 65, 81, 0.5)" }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      />
                      <p className="text-gray-300">{achievement}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  className="pt-6 border-t border-gray-700"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="flex items-center gap-3 mb-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Code2 className="text-green-400" size={20} />
                    <h5 className="text-xl font-semibold text-white">Education</h5>
                  </motion.div>
                  
                  <div className="space-y-4">
                    {[
                      {
                        title: "B.Tech in Computer Science",
                        institution: "Institute of Engineering & Management, Kolkata",
                        details: "2022-2026 • SGPA: 9.17"
                      },
                      {
                        title: "ISC (Class 12)",
                        institution: "The Assembly of God Church School, Haldia",
                        details: "2022 • 94.75%"
                      }
                    ].map((edu, index) => (
                      <motion.div
                        key={index}
                        className="p-3 rounded-lg hover:bg-gray-700/30 transition-all duration-300"
                        whileHover={{ x: 5, backgroundColor: "rgba(55, 65, 81, 0.3)" }}
                      >
                        <h6 className="text-blue-400 font-medium">{edu.title}</h6>
                        <p className="text-gray-400 text-sm">{edu.institution}</p>
                        <p className="text-gray-500 text-sm">{edu.details}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;