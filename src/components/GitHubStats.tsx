import React from 'react';
import { motion } from 'framer-motion';
import { Star, Eye, Trophy } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';

const GitHubStats: React.FC = () => {
  // Custom component for animated stat cards
  const StatCard: React.FC<{ stat: typeof stats[0]; delay: number }> = ({ stat, delay }) => {
    const formatValue = (value: number) => {
      if (value >= 1000) {
        return { displayValue: Math.floor(value / 1000), suffix: `K${stat.suffix}` };
      }
      return { displayValue: value, suffix: stat.suffix };
    };

    const { displayValue, suffix } = formatValue(stat.value);
    const { displayValue: animatedValue, elementRef } = useCountUp({
      end: displayValue,
      duration: 2000,
      delay: delay,
      suffix: suffix
    });

    return (
      <motion.div
        ref={elementRef}
        className="text-center p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 group"
        whileHover={{ 
          scale: 1.05, 
          borderColor: "#8b5cf6",
          boxShadow: "0 10px 40px rgba(139, 92, 246, 0.3)"
        }}
        transition={{ duration: 0.3 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className={`text-4xl font-bold ${stat.color} mb-2 font-mono tracking-wide`}
          animate={{ 
            textShadow: ["0 0 0px currentColor", "0 0 20px currentColor", "0 0 0px currentColor"]
          }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
        >
          {animatedValue}
        </motion.div>
        <div className="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors">
          {stat.label}
        </div>
        
        {/* Animated background pulse */}
        <motion.div
          className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20`}
          style={{
            background: `linear-gradient(45deg, ${
              stat.color.includes('blue') ? '#3b82f6' :
              stat.color.includes('green') ? '#10b981' :
              stat.color.includes('purple') ? '#8b5cf6' :
              '#f97316'
            }, transparent)`
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0, 0.1, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
      </motion.div>
    );
  };
  const achievements = [
    {
      icon: <Trophy className="text-yellow-400" size={24} />,
      title: "GitHub Achievements",
      items: ["YOLO Badge 🟡", "Pull Shark 🦈", "Open Source Contributor"]
    },
    {
      icon: <Star className="text-blue-400" size={24} />,
      title: "Featured Projects",
      items: ["AI Career Companion", "AI Virtual Development Pod", "MERN E-Commerce", "Hospital Management"]
    }
  ];

  const stats = [
    { label: "Repositories", value: 27, suffix: "+", color: "text-blue-400" },
    { label: "Languages", value: 8, suffix: "+", color: "text-green-400" },
    { label: "Contributions", value: 500, suffix: "+", color: "text-purple-400" },
    { label: "Profile Views", value: 1000, suffix: "+", color: "text-orange-400" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 via-purple-900/10 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            GitHub <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building impactful open source projects and contributing to the developer community
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <StatCard 
              key={stat.label}
              stat={stat} 
              delay={index * 200} 
            />
          ))}
        </motion.div>

        {/* Achievements & Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="bg-gray-800/30 rounded-xl p-8 backdrop-blur-sm border border-gray-700/30"
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-6">
                {achievement.icon}
                <h3 className="text-2xl font-bold text-white">
                  {achievement.title}
                </h3>
              </div>
              <div className="space-y-3">
                {achievement.items.map((item, itemIndex) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-3 text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + itemIndex * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.a
            href="https://github.com/msaswata15"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-xl font-semibold hover:from-gray-700 hover:to-gray-600 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Eye size={20} />
            View GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;
