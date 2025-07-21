import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Sparkles, Zap } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    "Initializing Portfolio...",
    "Loading Projects...",
    "Preparing Experience...",
    "Almost Ready...",
    "Welcome!"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        const newProgress = prev + Math.random() * 15 + 5;
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 800);
          return 100;
        }
        
        // Update text based on progress
        const textIndex = Math.floor((newProgress / 100) * loadingTexts.length);
        setCurrentText(Math.min(textIndex, loadingTexts.length - 1));
        
        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  const iconVariants = {
    initial: { scale: 0, rotate: 0 },
    animate: { 
      scale: 1, 
      rotate: 360,
      transition: { 
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const particleVariants = {
    animate: (i: number) => ({
      y: [0, -100, 0],
      x: [0, Math.sin(i) * 50, 0],
      opacity: [0, 1, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        delay: i * 0.2,
        ease: "easeInOut"
      }
    })
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-purple-900/20 to-black flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated background particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
            custom={i}
            variants={particleVariants}
            animate="animate"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        <div className="text-center space-y-8">
          {/* Logo/Icon */}
          <motion.div
            className="flex justify-center mb-8"
            variants={iconVariants}
            initial="initial"
            animate="animate"
          >
            <div className="relative">
              <Code2 className="text-blue-400" size={64} />
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="text-purple-400" size={20} />
              </motion.div>
            </div>
          </motion.div>

          {/* Loading text */}
          <motion.h2
            key={currentText}
            className="text-2xl md:text-3xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {loadingTexts[currentText]}
          </motion.h2>

          {/* Progress bar */}
          <div className="w-80 mx-auto">
            <div className="bg-gray-700 rounded-full h-2 overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
            <motion.p
              className="text-gray-300 text-sm mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {Math.round(loadingProgress)}%
            </motion.p>
          </div>

          {/* Floating elements */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 2) * 40}%`,
                }}
              >
                <Zap className="text-yellow-400/30" size={16 + i * 2} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
