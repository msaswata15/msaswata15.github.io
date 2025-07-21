import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Clock, Users, Eye, TrendingUp, Zap } from 'lucide-react';

interface Metric {
  id: string;
  label: string;
  value: number;
  suffix: string;
  icon: React.ReactNode;
  color: string;
}

const PerformanceMetrics: React.FC = () => {
  const [metrics, setMetrics] = useState<Metric[]>([
    { id: '1', label: 'Projects Completed', value: 0, suffix: '+', icon: <Activity size={20} />, color: 'from-blue-500 to-cyan-500' },
    { id: '2', label: 'Years Experience', value: 0, suffix: '+', icon: <Clock size={20} />, color: 'from-green-500 to-emerald-500' },
    { id: '3', label: 'GitHub Repositories', value: 0, suffix: '+', icon: <Zap size={20} />, color: 'from-purple-500 to-pink-500' },
    { id: '4', label: 'Code Commits', value: 0, suffix: 'K+', icon: <TrendingUp size={20} />, color: 'from-orange-500 to-red-500' },
  ]);

  const finalValues = [25, 3, 27, 1]; // Updated based on GitHub analysis

  useEffect(() => {
    const animateMetrics = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easedProgress = easeOutCubic(progress);

        setMetrics(prevMetrics =>
          prevMetrics.map((metric, index) => ({
            ...metric,
            value: Math.round(finalValues[index] * easedProgress)
          }))
        );

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    };

    const timer = setTimeout(animateMetrics, 500);
    return () => clearTimeout(timer);
  }, []);

  const easeOutCubic = (t: number): number => {
    return 1 - Math.pow(1 - t, 3);
  };

  return (
    <section className="py-16 bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r ${metric.color} text-white shadow-lg`}
                whileHover={{ 
                  boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                  scale: 1.1
                }}
                transition={{ duration: 0.3 }}
              >
                {metric.icon}
              </motion.div>
              
              <motion.div
                className="text-3xl md:text-4xl font-bold text-white mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                {metric.value}{metric.suffix}
              </motion.div>
              
              <div className="text-gray-400 text-sm md:text-base font-medium">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PerformanceMetrics;
