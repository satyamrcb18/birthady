import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import sunaina from '../assets/sunaina.png';

const roasts = [
  "You're the reason I have trust issues with my own sanity.",
  "I'd agree with you, but then we'd both be wrong.",
  "You are proof that God has a sense of humor.",
  "Thank you for being the unpaid therapist I desperately needed."
];

const toasts = [
  "You're my favorite notification.",
  "If you were a vegetable, you'd be a cute-cumber.",
  "You make the world better just by being in it.",
  "You're the only person I'd share my snacks with.",
  "Life is just better when we're laughing together.",
];

const RoastToast = () => {
  const [message, setMessage] = useState(null);
  const [type, setType] = useState(''); // 'roast' or 'toast'

  const getRandomMessage = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const handleRoast = () => {
    setMessage(getRandomMessage(roasts));
    setType('roast');
  };

  const handleToast = () => {
    setMessage(getRandomMessage(toasts));
    setType('toast');
  };

  return (
    <section className="section-container" style={{ textAlign: 'center', minHeight: '60vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1rem' }}>Mood of the Day</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Choose wisely...</p>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <motion.div
            className="glass-card"
            whileHover={{ scale: 1.02 }}
            style={{
              padding: '1rem',
              boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
              borderRadius: '20px',
              background: 'rgba(255,255,255,0.05)',
              display: 'inline-block'
            }}
          >
            <img
              src={sunaina}
              alt="Sunaina"
              style={{
                width: '250px',
                height: '250px',
                objectFit: 'cover',
                borderRadius: '50%',
                boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
              }}
            />
          </motion.div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <button style={{
            background: 'var(--primary)',
            color: '#fff',
            border: 'none',
            padding: '5px 15px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            pointerEvents: 'none'
          }}>
            CLICK THIS 4 Times 👇
          </button>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '3rem' }}>
            <motion.button
              className="btn-primary"
              onClick={handleToast}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', color: '#4a4055' }}
            >
              Toast Me 🥂
            </motion.button>

            <motion.button
              className="btn-primary"
              onClick={handleRoast}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)', color: '#4a4055' }}
            >
              Roast Me 🔥
            </motion.button>
          </div>
        </div>

        <div style={{ minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <AnimatePresence mode="wait">
            {message && (
              <motion.div
                key={message}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="glass-card"
                style={{
                  maxWidth: '600px',
                  border: type === 'roast' ? '2px solid rgba(255, 77, 77, 0.5)' : '2px solid rgba(168, 237, 234, 0.5)',
                  boxShadow: type === 'roast' ? '0 0 20px rgba(255, 77, 77, 0.2)' : '0 0 20px rgba(168, 237, 234, 0.2)'
                }}
              >
                <h3 className="handwriting" style={{ fontSize: '2.5rem', color: type === 'roast' ? '#ff4d4d' : 'var(--primary)', margin: 0, transform: 'rotate(0)' }}>
                  "{message}"
                </h3>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default RoastToast;
