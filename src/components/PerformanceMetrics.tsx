import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Activity, Clock, TrendingUp, Zap } from 'lucide-react';

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
    { id: '4', label: 'Code Commits', value: 0, suffix: '', icon: <TrendingUp size={20} />, color: 'from-orange-500 to-red-500' },
  ]);

  const [hasAnimated, setHasAnimated] = useState(false);
  const [showKFormat, setShowKFormat] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const finalValues = [25, 3, 27, 1000]; // Code commits actual value is 1000+

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateMetrics();
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateMetrics = () => {
    const duration = 3500; // Longer duration for slower animation
    const steps = 200; // More steps for ultra-smooth animation
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      // Enhanced easing function with slower start
      const easedProgress = easeOutExpoSlow(progress);

      setMetrics(prevMetrics =>
        prevMetrics.map((metric, index) => {
          const targetValue = finalValues[index];
          let currentValue;
          let newSuffix = metric.suffix;
          
          // Special handling for Code Commits (index 3) - 0 to 999 then 1K+
          if (index === 3) {
            const rawValue = targetValue * easedProgress;
            if (rawValue < 999) {
              currentValue = Math.floor(rawValue);
              newSuffix = '';
            } else {
              // After reaching 999, show 1K+
              currentValue = 1;
              newSuffix = 'K+';
              // Trigger format change
              if (currentStep > steps * 0.95) {
                setShowKFormat(true);
              }
            }
          }
          // Special handling for smaller numbers to show more granular steps
          else if (targetValue <= 5) {
            // For very small numbers (like Years Experience = 3), use decimal precision
            const rawValue = targetValue * easedProgress;
            if (rawValue < 0.5) {
              currentValue = 0;
            } else if (rawValue < 1.5) {
              currentValue = 1;
            } else if (rawValue < 2.5) {
              currentValue = 2;
            } else {
              currentValue = Math.round(rawValue);
            }
          } else if (targetValue <= 30) {
            // For medium numbers (like Projects = 25), count by ones slowly
            currentValue = Math.floor(targetValue * easedProgress);
          } else {
            // For larger numbers, use faster increments
            currentValue = Math.round(targetValue * easedProgress);
          }
          
          return {
            ...metric,
            value: currentValue,
            suffix: newSuffix
          };
        })
      );

      if (currentStep >= steps) {
        clearInterval(interval);
        // Set final values to ensure accuracy
        setMetrics(prevMetrics =>
          prevMetrics.map((metric, index) => ({
            ...metric,
            value: index === 3 ? 1 : finalValues[index], // Code Commits shows as 1K+
            suffix: index === 3 ? 'K+' : (index === 0 || index === 1 || index === 2 ? '+' : '')
          }))
        );
        setShowKFormat(true);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  };

  // Slower easing function for more dramatic buildup
  const easeOutExpoSlow = (t: number): number => {
    // Custom easing: slow start, then accelerate, then slow end
    if (t < 0.5) {
      return 2 * t * t; // Quadratic ease in for first half
    } else {
      const adjusted = 2 * t - 1;
      return 1 - Math.pow(2, -12 * adjusted); // Exponential ease out for second half
    }
  };

  return (
    <section ref={sectionRef} className="py-16 bg-gray-900/50 backdrop-blur-sm">
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
              className="text-center relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Enhanced animated background glow with milestone effects */}
              <motion.div
                className={`absolute inset-0 rounded-xl bg-gradient-to-r ${metric.color} opacity-0 blur-xl group-hover:opacity-20`}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: hasAnimated ? [0, 0.15, 0] : 0
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: index * 0.5,
                  repeatType: "loop"
                }}
              />

              {/* Milestone celebration effect */}
              {hasAnimated && (
                (index === 3 && metric.value === 1 && metric.suffix === 'K+') ||
                (index !== 3 && metric.value === finalValues[index])
              ) && (
                <motion.div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r ${metric.color}`}
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{ 
                    scale: [1, 1.3, 1], 
                    opacity: [0, 0.3, 0] 
                  }}
                  transition={{ 
                    duration: 1, 
                    delay: 3.5 + index * 0.2,
                    repeat: 1 
                  }}
                />
              )}

              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r ${metric.color} text-white shadow-lg relative z-10`}
                whileHover={{ 
                  boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                  scale: 1.1,
                  rotate: [0, -10, 10, 0]
                }}
                transition={{ duration: 0.3 }}
                animate={hasAnimated ? {
                  boxShadow: [
                    "0 4px 15px rgba(0,0,0,0.1)",
                    "0 8px 30px rgba(59, 130, 246, 0.3)",
                    "0 4px 15px rgba(0,0,0,0.1)"
                  ]
                } : {}}
              >
                <motion.div
                  animate={hasAnimated ? {
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  } : {}}
                  transition={{ 
                    duration: 2, 
                    delay: index * 0.2,
                    ease: "easeInOut" 
                  }}
                >
                  {metric.icon}
                </motion.div>
              </motion.div>
              
              <motion.div
                className="text-3xl md:text-4xl font-bold text-white mb-2 font-mono tracking-wide"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                animate={hasAnimated ? {
                  textShadow: [
                    "0 0 0px currentColor",
                    "0 0 25px currentColor",
                    "0 0 0px currentColor"
                  ]
                } : {}}
              >
                <motion.span 
                  className="inline-block"
                  animate={hasAnimated && metric.value > 0 ? {
                    scale: [1, 1.1, 1],
                    color: ["#ffffff", "#60a5fa", "#ffffff"]
                  } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                    repeat: (
                      (index === 3 && metric.value === 1 && metric.suffix === 'K+') ||
                      (index !== 3 && metric.value === finalValues[index])
                    ) ? 0 : Infinity,
                    repeatType: "loop"
                  }}
                >
                  {metric.value}{metric.suffix}
                </motion.span>
              </motion.div>
              
              <div className="text-gray-400 text-sm md:text-base font-medium group-hover:text-gray-300 transition-colors">
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
