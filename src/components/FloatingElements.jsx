import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const elements = ['✨', '🎈', '💖', '🎂', '🎉', '🤡', '🌟'];

const FloatingElements = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Initial size
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (windowSize.width === 0) return null;

  const floaters = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    emoji: elements[Math.floor(Math.random() * elements.length)],
    x: Math.random() * windowSize.width,
    size: Math.random() * 20 + 15, // 15px to 35px
    duration: Math.random() * 20 + 15, // 15s to 35s
    delay: Math.random() * 10,
  }));

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: -1, overflow: 'hidden' }}>
      {floaters.map((floater) => (
        <motion.div
          key={floater.id}
          initial={{ opacity: 0, y: windowSize.height + 50, x: floater.x }}
          animate={{
            opacity: [0, 0.8, 0],
            y: -50,
            x: floater.x + (Math.random() * 100 - 50),
            rotate: [0, 360],
          }}
          transition={{
            duration: floater.duration,
            repeat: Infinity,
            delay: floater.delay,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            fontSize: floater.size,
            filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))',
          }}
        >
          {floater.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
