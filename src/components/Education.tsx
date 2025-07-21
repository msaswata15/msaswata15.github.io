import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Trophy, Calendar, BookOpen, Award, Star, Briefcase } from 'lucide-react';

const Education = () => {
  const timeline = [
    {
      type: "experience",
      title: "Data Science Intern",
      institution: "Sabudh Foundation (in collaboration with STPI)",
      period: "July 2025 - Present",
      details: "Working on data science projects and machine learning applications in collaboration with Software Technology Parks of India (STPI)",
      icon: <Briefcase className="text-green-400" size={20} />
    },
    {
      type: "education",
      title: "B.Tech in Computer Science",
      institution: "Institute of Engineering & Management, Kolkata",
      period: "2022 - 2026",
      details: "SGPA: 9.11",
      icon: <GraduationCap className="text-blue-400" size={20} />
    },
    {
      type: "education", 
      title: "ISC (Class 12)",
      institution: "The Assembly of God Church School, Haldia",
      period: "2022",
      details: "94.75%",
      icon: <GraduationCap className="text-blue-400" size={20} />
    },
    {
      type: "education",
      title: "ICSE (Class 10)", 
      institution: "The Assembly of God Church School, Haldia",
      period: "2020",
      details: "92.4%",
      icon: <GraduationCap className="text-blue-400" size={20} />
    },
    {
      type: "achievement",
      title: "ISC School Topper & House Captain",
      institution: "The Assembly of God Church School",
      period: "2021-2022",
      details: "Leadership and Academic Excellence",
      icon: <Trophy className="text-yellow-400" size={20} />
    },
    {
      type: "achievement",
      title: "NPTEL Silver Certification",
      institution: "Top 5% Performer",
      period: "2023",
      details: "Multiple courses in Programming and Data Science",
      icon: <Trophy className="text-yellow-400" size={20} />
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden min-h-screen">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-yellow-900/5 to-transparent"></div>
        
        {/* Academic Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(rgba(74,144,226,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(74,144,226,0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_60%,transparent_100%)]"></div>
        </div>
        
        {/* Floating Academic Elements */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute ${
              i % 3 === 0 ? 'w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400' :
              i % 3 === 1 ? 'w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400' :
              'w-4 h-1 bg-gradient-to-r from-yellow-400 to-amber-400'
            } rounded-full opacity-30`}
            style={{
              left: `${5 + (i * 7)}%`,
              top: `${10 + (i * 6)}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.4
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <BookOpen className="text-blue-400" size={40} />
            </motion.div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
              Education & Achievements
            </h2>
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <Award className="text-yellow-400" size={36} />
            </motion.div>
          </motion.div>
          
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true }}
          />
          
          <motion.p
            className="text-gray-300 mt-8 max-w-3xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            A journey of academic excellence, leadership development, and continuous learning in computer science and technology
          </motion.p>
          
          {/* Achievement Stats */}
          <motion.div
            className="flex justify-center gap-8 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-3xl font-bold text-blue-400 mb-1">9.11</div>
              <div className="text-sm text-gray-400">SGPA</div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-3xl font-bold text-green-400 mb-1">94.75%</div>
              <div className="text-sm text-gray-400">ISC Score</div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-3xl font-bold text-yellow-400 mb-1">Top 5%</div>
              <div className="text-sm text-gray-400">NPTEL</div>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="relative">
          {/* Enhanced Timeline Line */}
          <motion.div 
            className="absolute left-4 md:left-1/2 transform md:-translate-x-px w-1 bg-gradient-to-b from-blue-500 via-cyan-500 via-green-500 to-yellow-500 rounded-full"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 2, delay: 0.5 }}
            viewport={{ once: true }}
          />
          
          {/* Glowing Effect */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-1 bg-gradient-to-b from-blue-500/50 via-cyan-500/50 via-green-500/50 to-yellow-500/50 rounded-full blur-sm"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div 
                key={index} 
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Enhanced Timeline Dot */}
                <motion.div 
                  className={`absolute left-4 md:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-20 border-4 ${
                    item.type === 'achievement' 
                      ? 'bg-gradient-to-r from-yellow-500 to-amber-500 border-yellow-400 shadow-lg shadow-yellow-500/50' 
                      : item.type === 'experience'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 border-green-400 shadow-lg shadow-green-500/50'
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500 border-blue-400 shadow-lg shadow-blue-500/50'
                  }`}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    boxShadow: item.type === 'achievement' 
                      ? "0 0 30px rgba(251, 191, 36, 0.8)" 
                      : item.type === 'experience'
                      ? "0 0 30px rgba(34, 197, 94, 0.8)"
                      : "0 0 30px rgba(59, 130, 246, 0.8)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    {item.icon}
                  </motion.div>
                </motion.div>

                {/* Enhanced Content Card */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <motion.div 
                    className={`relative bg-gradient-to-br from-gray-800/95 to-gray-900/95 rounded-2xl p-8 border backdrop-blur-md overflow-hidden shadow-2xl ${
                      item.type === 'achievement' 
                        ? 'border-yellow-500/50 hover:border-yellow-400/70 hover:shadow-yellow-500/20' 
                        : item.type === 'experience'
                        ? 'border-green-500/50 hover:border-green-400/70 hover:shadow-green-500/20'
                        : 'border-blue-500/50 hover:border-blue-400/70 hover:shadow-blue-500/20'
                    }`}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Card Background Pattern */}
                    <motion.div
                      className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10 ${
                        item.type === 'achievement' 
                          ? 'bg-gradient-to-br from-yellow-400 to-amber-500' 
                          : item.type === 'experience'
                          ? 'bg-gradient-to-br from-green-400 to-emerald-500'
                          : 'bg-gradient-to-br from-blue-400 to-cyan-500'
                      }`}
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {/* Type Indicator */}
                    <div className={`absolute top-4 left-4 w-4 h-4 rounded-full animate-pulse ${
                      item.type === 'achievement' ? 'bg-yellow-400' : item.type === 'experience' ? 'bg-green-400' : 'bg-blue-400'
                    }`}></div>
                    
                    <motion.div 
                      className="flex items-center gap-3 mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <Calendar className="text-gray-400" size={18} />
                      <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                        item.type === 'achievement' 
                          ? 'bg-yellow-500/20 text-yellow-400' 
                          : item.type === 'experience'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {item.period}
                      </span>
                    </motion.div>
                    
                    <motion.h3 
                      className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400"
                      whileHover={{ scale: 1.02 }}
                    >
                      {item.title}
                    </motion.h3>
                    
                    <motion.p 
                      className={`font-semibold mb-3 ${
                        item.type === 'achievement' ? 'text-yellow-400' : item.type === 'experience' ? 'text-green-400' : 'text-blue-400'
                      }`}
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {item.institution}
                    </motion.p>
                    
                    <motion.p 
                      className="text-gray-300 mb-4 leading-relaxed"
                      initial={{ opacity: 0.9 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {item.details}
                    </motion.p>

                    {item.type === 'achievement' && (
                      <motion.div 
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium border border-yellow-500/30"
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 0 20px rgba(251, 191, 36, 0.3)"
                        }}
                      >
                        <Trophy size={16} />
                        <span>Achievement Unlocked</span>
                        <Star size={14} className="animate-pulse" />
                      </motion.div>
                    )}
                    
                    {item.type === 'experience' && (
                      <motion.div 
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium border border-green-500/30"
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)"
                        }}
                      >
                        <Briefcase size={16} />
                        <span>Professional Experience</span>
                        <Star size={14} className="animate-pulse" />
                      </motion.div>
                    )}
                    
                    {item.type === 'education' && (
                      <motion.div 
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30"
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                        }}
                      >
                        <GraduationCap size={16} />
                        <span>Academic Milestone</span>
                        <BookOpen size={14} className="animate-bounce" />
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
