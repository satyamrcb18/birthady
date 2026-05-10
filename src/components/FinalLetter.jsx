import React from 'react';
import { motion } from 'framer-motion';

const FinalLetter = () => {
  return (
    <section className="section-container" style={{ textAlign: 'center', justifyContent: 'center' }}>
      <motion.div
        className="glass-card"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left', padding: '3rem' }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--primary)', textAlign: 'center' }}>To My Favorite Problem</h2>
        
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Jokes aside, I want to wish you the absolute best birthday. You are the person who brings so much light, laughter, and complete chaos into my life.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Through all the crazy phases, terrible life decisions, and moments of absolute brilliance, there's no one else I'd rather have by my side. Here's to more memories, more uncontrollable laughing fits, and surviving whatever comes next together.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
          I truly hope you achieve all the success you deserve in life. May all your dreams come true, and may you reach the heights you've always aimed for. Just remember, no matter how big or successful you become, you'll still be my crazy best friend!
        </p>
      </motion.div>
    </section>
  );
};

export default FinalLetter;
