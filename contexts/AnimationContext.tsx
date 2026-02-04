'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AnimationContextType {
  animationsEnabled: boolean;
  toggleAnimations: () => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export function AnimationProvider({ children }: { children: ReactNode }) {
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  useEffect(() => {
    // Check localStorage for user preference
    const stored = localStorage.getItem('genesis-animations');
    if (stored !== null) {
      setAnimationsEnabled(stored === 'true');
    }
  }, []);

  useEffect(() => {
    // Apply/remove class to document root
    if (animationsEnabled) {
      document.documentElement.classList.remove('animations-paused');
    } else {
      document.documentElement.classList.add('animations-paused');
    }
    // Store preference
    localStorage.setItem('genesis-animations', String(animationsEnabled));
  }, [animationsEnabled]);

  const toggleAnimations = () => {
    setAnimationsEnabled(prev => !prev);
  };

  return (
    <AnimationContext.Provider value={{ animationsEnabled, toggleAnimations }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimations() {
  const context = useContext(AnimationContext);
  // Return default values if context is not available (e.g., during SSR)
  if (context === undefined) {
    return {
      animationsEnabled: true,
      toggleAnimations: () => {},
    };
  }
  return context;
}
