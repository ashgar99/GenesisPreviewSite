'use client';

import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest('a, button, .interactive-zone'));
    };

    // Lerp-based smooth follow — approximates stiff spring feel
    const tick = () => {
      const factor = 0.18;
      current.current.x += (pos.current.x - current.current.x) * factor;
      current.current.y += (pos.current.y - current.current.y) * factor;

      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate(calc(${current.current.x}px - 50%), calc(${current.current.y}px - 50%))`;
      }
      rafId.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-white flex items-center justify-center"
      style={{
        // The key: inverts perfectly against both dark + light sections
        mixBlendMode: 'difference',
        width:  isHovering ? 48 : 16,
        height: isHovering ? 48 : 16,
        transition: 'width 0.2s cubic-bezier(0.2, 0, 0, 1), height 0.2s cubic-bezier(0.2, 0, 0, 1)',
      }}
    >
      {/* Crosshair: appears on hover to signal precision/targeting */}
      {isHovering && (
        <svg
          style={{ animation: 'cursorCrosshair 0.15s ease both' }}
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
        </svg>
      )}
    </div>
  );
};
