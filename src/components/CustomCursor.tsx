import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], .cursor-pointer');
    
    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed w-4 h-4 bg-blue-400 rounded-full mix-blend-difference z-[9999] pointer-events-none"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isClicking ? 0.5 : isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
        }}
      />

      {/* Cursor ring */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-blue-400/50 rounded-full mix-blend-difference z-[9998] pointer-events-none"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1,
          opacity: isClicking ? 0.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
        }}
      />

      {/* Trailing particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-1 h-1 bg-purple-400/30 rounded-full z-[9997] pointer-events-none"
          animate={{
            x: mousePosition.x - 2,
            y: mousePosition.y - 2,
          }}
          transition={{
            type: "spring",
            stiffness: 50 - i * 10,
            damping: 20,
            delay: i * 0.02,
          }}
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
