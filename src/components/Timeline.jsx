import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Coffee, AlertCircle } from 'lucide-react';

const events = [
  {
    year: 'Day 1',
    title: 'The "Hi" that started it all',
    description: 'We met and instantly realized we were the same kind of weird.',
    icon: <Star size={24} color="#fff" />,
    color: 'var(--primary)'
  },
  {
    year: 'That one time...',
    title: 'The Great Embarrassment',
    description: 'We don\'t talk about this in public, but I still laugh at 3 AM thinking about it.',
    icon: <AlertCircle size={24} color="#fff" />,
    color: '#ff7eb3'
  },
  {
    year: 'Countless nights',
    title: 'Late Night Therapy',
    description: 'Surviving on 2 hours of sleep and pure gossip.',
    icon: <Coffee size={24} color="#fff" />,
    color: 'var(--secondary)'
  },
  {
    year: 'Now',
    title: 'Still Stuck With Me',
    description: 'And honestly, you wouldn\'t have it any other way.',
    icon: <Heart size={24} color="#fff" />,
    color: 'var(--accent)'
  }
];

const Timeline = () => {
  return (
    <section className="section-container" style={{ alignItems: 'flex-start' }}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        style={{ width: '100%', textAlign: 'center', marginBottom: '4rem' }}
      >
        <h2 style={{ fontSize: '3rem', color: 'var(--secondary)' }}>A Brief History of Us</h2>
      </motion.div>

      <div style={{ position: 'relative', width: '100%', maxWidth: '800px', margin: '0 auto' }}>
        {/* Vertical Line */}
        <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', width: '4px', height: '100%', background: 'var(--glass-border)', borderRadius: '2px' }}></div>

        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            style={{ 
              display: 'flex', 
              justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end', 
              width: '100%', 
              marginBottom: '3rem',
              position: 'relative'
            }}
          >
            {/* Timeline Dot */}
            <div style={{ 
              position: 'absolute', 
              left: '50%', 
              top: '20px',
              transform: 'translate(-50%, -50%)', 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              background: event.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px ' + event.color,
              zIndex: 2
            }}>
              {event.icon}
            </div>

            <div className="glass-card" style={{ width: '45%', position: 'relative' }}>
              <span style={{ color: event.color, fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {event.year}
              </span>
              <h3 style={{ fontSize: '1.5rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}>{event.title}</h3>
              <p style={{ opacity: 0.8 }}>{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
