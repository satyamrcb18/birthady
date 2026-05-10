import React, { useState } from 'react';
import { motion } from 'framer-motion';

const reasons = [
  { front: 'When we first met...', back: "...I never thought we'd survive each other." },
  { front: 'I honestly thought...', back: "...you were way too quiet and normal." },
  { front: 'But then I realized...', back: "...you match my level of crazy perfectly." },
  { front: 'And now...', back: "...I can't imagine this chaotic life without you." }
];

const FlipCard = ({ reason, delay }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      style={{ width: '250px', height: '200px', perspective: '1000px', cursor: 'pointer' }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 200, damping: 20 }}
      >
        {/* Front */}
        <div 
          className="glass-card" 
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            textAlign: 'center',
            background: 'var(--glass-bg)',
            padding: '1.5rem 1rem'
          }}
        >
          <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{reason.front}</h3>
          </div>
          <button style={{ 
            background: 'var(--primary)', 
            color: '#fff', 
            border: 'none', 
            padding: '5px 15px', 
            borderRadius: '20px', 
            fontSize: '0.8rem',
            fontWeight: 'bold',
            pointerEvents: 'none' /* Card click handles the flip */
          }}>
            CLICK THIS
          </button>
        </div>

        {/* Back */}
        <div 
          className="glass-card" 
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
            color: 'white',
            border: 'none'
          }}
        >
          <p className="handwriting" style={{ fontSize: '1.4rem', color: 'white', transform: 'rotate(0)' }}>{reason.back}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ReasonsGrid = () => {
  return (
    <section className="section-container" style={{ textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ marginBottom: '3rem' }}
      >
        <h2 style={{ fontSize: '3rem', color: 'var(--accent)' }}>Our Unexpected Friendship</h2>
        <p style={{ fontSize: '1.1rem' }}>(How did we even end up here? Click to reveal)</p>
      </motion.div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', maxWidth: '900px' }}>
        {reasons.map((reason, index) => (
          <FlipCard key={index} reason={reason} delay={index * 0.1} />
        ))}
      </div>
    </section>
  );
};

export default ReasonsGrid;
