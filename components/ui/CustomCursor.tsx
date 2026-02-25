'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);

  // useMotionValue bypasses React state → smooth 60fps tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Stiff spring: "heavy, calibrated" feel — not floaty
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, .interactive-zone')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-white flex items-center justify-center"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        // The key: inverts perfectly against both dark + light sections
        mixBlendMode: 'difference',
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        width:  isHovering ? 48 : 16,
        height: isHovering ? 48 : 16,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Crosshair: appears on hover to signal precision/targeting */}
      {isHovering && (
        <motion.svg
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </motion.svg>
      )}
    </motion.div>
  );
};
