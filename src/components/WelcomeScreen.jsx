import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const WelcomeScreen = ({ onStart }) => {
  const handleClick = () => {
    // Fire confetti continuously
    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ffb7c5', '#c9b6e4', '#ff9eaf']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ffb7c5', '#c9b6e4', '#ff9eaf']
      });

      requestAnimationFrame(frame);
    };
    
    frame();
    onStart(); // Unlock scroll and start audio
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#110b19', // Match app background
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(10px)'
      }}
    >
      <motion.h1 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ color: 'var(--primary)', marginBottom: '2rem', textAlign: 'center', padding: '0 20px', fontSize: '3rem' }}
      >
        A Special Surprise Awaits...
      </motion.h1>
      
      <p style={{ color: 'var(--text)', marginBottom: '3rem', fontSize: '1.2rem', textAlign: 'center' }}>
        Click the button below to unlock the birthday experience!
      </p>
      
      <motion.button
        className="btn-primary"
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: ['0 0 15px rgba(255, 117, 143, 0.5)', '0 0 30px rgba(255, 117, 143, 0.8)', '0 0 15px rgba(255, 117, 143, 0.5)']
        }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ fontSize: '1.5rem', padding: '1.5rem 4rem' }}
      >
        CLICK THIS
      </motion.button>
    </motion.div>
  );
};

export default WelcomeScreen;
