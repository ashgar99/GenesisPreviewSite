'use client';

import { useRef, useState, useEffect } from 'react';
import { clsx } from 'clsx';

interface HoverTiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltIntensity?: number; // degrees of tilt, default 4
  scaleOnHover?: number; // scale factor, default 1.02
}

export function HoverTiltCard({
  children,
  className,
  tiltIntensity = 4,
  scaleOnHover = 1.02,
}: HoverTiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -tiltIntensity;
    const rotateY = ((x - centerX) / centerX) * tiltIntensity;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scaleOnHover})`
    );
  };

  const handleMouseLeave = () => {
    setTransform('');
  };

  // For reduced motion, just show a subtle border highlight on hover
  if (prefersReducedMotion) {
    return (
      <div
        className={clsx(
          'transition-colors duration-normal',
          'hover:ring-2 hover:ring-brand-500/30',
          className
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        'transition-transform duration-normal ease-out',
        className
      )}
      style={{
        transform: transform || 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </div>
  );
}
