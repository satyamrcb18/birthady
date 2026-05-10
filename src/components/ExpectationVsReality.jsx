import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ExpectationVsReality = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="section-container" style={{ textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={{ fontSize: '3rem', marginBottom: '2rem', color: 'var(--primary)' }}>Expectation vs. Reality</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '3rem' }}>Hover over the cards to see the truth...</p>
      </motion.div>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* Expectation Card */}
        <motion.div 
          className="glass-card hover-glow"
          style={{ width: '300px', height: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <div style={{ flex: 1, width: '100%', background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)', borderRadius: '12px', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <span style={{ fontSize: '4rem' }}>✨👯‍♀️✨</span>
          </div>
          <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Public Us</h3>
          <p className="handwriting" style={{ fontSize: '1.2rem', opacity: isHovered ? 0 : 1, transition: 'opacity 0.3s' }}>(Aesthetic & Cute)</p>
        </motion.div>

        {/* Reality Card */}
        <motion.div 
          className="glass-card hover-glow"
          style={{ width: '300px', height: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <div style={{ flex: 1, width: '100%', background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)', borderRadius: '12px', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
             <motion.span 
               animate={{ rotate: isHovered ? [0, -10, 10, -10, 0] : 0 }}
               transition={{ duration: 0.5 }}
               style={{ fontSize: '4rem' }}
             >
               👹🤡👹
             </motion.span>
          </div>
          <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Private Us</h3>
          <p className="handwriting" style={{ fontSize: '1.2rem', opacity: isHovered ? 1 : 0, transition: 'opacity 0.3s', color: '#ff4d4d' }}>(Absolute Chaos)</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpectationVsReality;
