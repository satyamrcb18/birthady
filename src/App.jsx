import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import ExpectationVsReality from './components/ExpectationVsReality';
import Timeline from './components/Timeline';
import ReasonsGrid from './components/ReasonsGrid';
import RoastToast from './components/RoastToast';
import FinalLetter from './components/FinalLetter';
import FloatingElements from './components/FloatingElements';
import AudioPlayer from './components/AudioPlayer';
import WelcomeScreen from './components/WelcomeScreen';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (!isStarted) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isStarted]);

  return (
    <>
      <AnimatePresence>
        {!isStarted && <WelcomeScreen onStart={() => setIsStarted(true)} />}
      </AnimatePresence>
      <FloatingElements />
      <AudioPlayer forcePlay={isStarted} />
      <HeroSection />
      <ExpectationVsReality />
      <Timeline />
      <ReasonsGrid />
      <RoastToast />
      <FinalLetter />
    </>
  );
}

export default App;
