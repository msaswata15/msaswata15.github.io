import React, { useEffect, useState } from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

const Toaster: React.FC<ToastProps> = ({ 
  message, 
  type, 
  isVisible, 
  onClose, 
  duration = 5000 
}) => {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShow(true);
      setTimeout(() => setAnimate(true), 50);
      
      // Optional: Add a subtle sound effect
      // You can uncomment this if you want audio feedback
      // const audio = new Audio('/notification-sound.mp3');
      // audio.volume = 0.1;
      // audio.play().catch(() => {}); // Fail silently if audio doesn't load
      
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    } else {
      setAnimate(false);
      setTimeout(() => setShow(false), 300);
    }
  }, [isVisible, duration]);

  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => {
      setShow(false);
      onClose();
    }, 300);
  };

  if (!show) return null;

  const getIcon = () => {
    return type === 'success' ? (
      <CheckCircle className="text-green-400" size={24} />
    ) : (
      <AlertCircle className="text-red-400" size={24} />
    );
  };

  const getStyles = () => {
    return type === 'success' 
      ? 'from-green-500/20 to-emerald-500/20 border-green-500/30' 
      : 'from-red-500/20 to-rose-500/20 border-red-500/30';
  };

  const getTextColor = () => {
    return type === 'success' ? 'text-green-100' : 'text-red-100';
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ease-out max-w-sm sm:max-w-md ${
      animate ? 'translate-x-0 opacity-100 toaster-enter' : 'translate-x-full opacity-0 toaster-exit'
    }`}>
      <div className={`
        bg-gradient-to-r ${getStyles()} 
        backdrop-blur-md border rounded-xl shadow-2xl 
        p-4 min-w-[280px] sm:min-w-[320px] max-w-md
        ${type === 'success' ? 'shadow-green-500/25' : 'shadow-red-500/25'}
        transform hover:scale-105 transition-transform duration-200
      `}>
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-1">
            <div className={`p-1 rounded-full ${type === 'success' ? 'bg-green-400/20' : 'bg-red-400/20'}`}>
              {getIcon()}
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div>
                <p className={`font-semibold ${type === 'success' ? 'text-green-400' : 'text-red-400'} mb-1`}>
                  {type === 'success' ? '✅ Success!' : '⚠️ Error!'}
                </p>
                <p className={`text-sm ${getTextColor()} leading-relaxed`}>
                  {message}
                </p>
              </div>
              
              <button
                onClick={handleClose}
                className={`ml-3 p-1.5 rounded-full hover:bg-white/20 transition-all duration-200 group ${
                  type === 'success' ? 'text-green-300 hover:text-green-200' : 'text-red-300 hover:text-red-200'
                } hover:scale-110`}
                title="Close"
              >
                <X size={14} className="group-hover:rotate-90 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Animated progress bar */}
        <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
          <div 
            className={`h-full ${type === 'success' ? 'bg-gradient-to-r from-green-400 to-emerald-400' : 'bg-gradient-to-r from-red-400 to-rose-400'} rounded-full toaster-progress`}
            style={{
              animationDuration: `${duration}ms`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Toaster;
