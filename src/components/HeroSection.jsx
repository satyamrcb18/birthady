import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="section-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 300 }}>To the person who knows too much...</h2>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8, type: 'spring' }}
      >
        <h1 className="glow-text" style={{ fontSize: '5rem', color: 'var(--primary)', marginBottom: '1rem' }}>Happy Birthday Bestie! 🎂</h1>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        style={{ position: 'absolute', bottom: '40px', color: 'var(--secondary)' }}
      >
        <ChevronDown size={40} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
