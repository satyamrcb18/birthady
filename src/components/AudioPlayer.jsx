import React, { useState, useEffect } from 'react';
import { Music, Pause } from 'lucide-react';
import { motion } from 'framer-motion';

const AudioPlayer = ({ forcePlay }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (forcePlay) {
      setIsPlaying(true);
    }
  }, [forcePlay]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* Stream Happy Birthday song directly from YouTube in the background! */}
      {isPlaying && (
        <iframe 
          width="0" 
          height="0" 
          src="https://www.youtube.com/embed/YRBP94BoTSQ?autoplay=1&loop=1&playlist=YRBP94BoTSQ&start=10" 
          title="Happy Birthday Audio" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          style={{ display: 'none' }}
        ></iframe>
      )}
      
      <motion.button
        className="hover-glow"
        onClick={togglePlay}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={isPlaying ? {
          boxShadow: ['0 0 15px rgba(255, 117, 143, 0.5)', '0 0 30px rgba(255, 117, 143, 0.8)', '0 0 15px rgba(255, 117, 143, 0.5)']
        } : {}}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'fixed',
          top: '30px',
          right: '30px',
          zIndex: 1000,
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          cursor: 'pointer',
          border: '1px solid rgba(255,255,255,0.1)',
          background: 'linear-gradient(135deg, #1a1622 0%, #2d2438 100%)',
          color: isPlaying ? 'var(--primary)' : '#e2dce8',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(10px)',
        }}
        title="Play Background Music"
      >
        {isPlaying ? <Pause size={28} color="var(--primary)" /> : <Music size={28} />}
        
        {isPlaying && (
          <motion.div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: '2px solid var(--primary)',
              opacity: 0.5,
            }}
            animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
          />
        )}
      </motion.button>
    </>
  );
};

export default AudioPlayer;
