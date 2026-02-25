'use client';

import React, { useEffect, useRef } from 'react';

/**
 * CalibrationGrid — Animated canvas background for the Hero section.
 *
 * Visual metaphor: chaotic sine waves (left) pass through an "Integrity Layer"
 * and snap into perfectly flat, ordered horizontal lines (right).
 * Noise → Signal. The product thesis rendered as animation.
 */
export const CalibrationGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // alpha:false optimises rendering over a solid background
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Handle high-DPI displays (Retina) — crisp 1px lines
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.parentElement?.offsetWidth  || window.innerWidth;
      const h = canvas.parentElement?.offsetHeight || window.innerHeight;
      canvas.width  = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width  = `${w}px`;
      canvas.style.height = `${h}px`;
    };

    window.addEventListener('resize', resize);
    resize();

    const render = () => {
      const width  = canvas.parentElement?.offsetWidth  || window.innerWidth;
      const height = canvas.parentElement?.offsetHeight || window.innerHeight;

      // Genesis Charcoal background
      ctx.fillStyle = '#1a1d21';
      ctx.fillRect(0, 0, width, height);

      ctx.lineWidth = 1;

      const lines   = 38;
      const spacing = height / lines;

      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        const baseY = i * spacing;

        for (let x = 0; x < width; x += 3) {
          // 1. Noisy input: two interfering sine waves (unstructured data)
          const noise1 = Math.sin(x * 0.003 + time) * 22;
          const noise2 = Math.sin(x * 0.009 - time * 0.6) * 12;
          const totalNoise = noise1 + noise2;

          // 2. The Integrity Layer — noise collapses to signal across 40%→60% x
          const filterStart = width * 0.42;
          const filterEnd   = width * 0.58;

          let damping = 1;
          if (x > filterEnd) {
            damping = 0;
          } else if (x > filterStart) {
            const progress = (x - filterStart) / (filterEnd - filterStart);
            // Cosine interpolation: structural "snap", not a soft ease
            damping = (1 + Math.cos(progress * Math.PI)) / 2;
          }

          // Vary opacity: noisy lines slightly more visible on left
          const opacity = 0.07 + damping * 0.05;
          ctx.strokeStyle = `rgba(248, 247, 244, ${opacity})`;

          const y = baseY + totalNoise * damping;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // 3. Integrity Layer marker — teal dashed vertical line
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(74, 124, 124, 0.35)';
      ctx.setLineDash([4, 7]);
      ctx.moveTo(width * 0.58, 0);
      ctx.lineTo(width * 0.58, height);
      ctx.stroke();
      ctx.setLineDash([]);

      // Subtle left-edge fade (slightly brighter noise band)
      const leftGrad = ctx.createLinearGradient(0, 0, width * 0.15, 0);
      leftGrad.addColorStop(0, 'rgba(26, 29, 33, 0.6)');
      leftGrad.addColorStop(1, 'rgba(26, 29, 33, 0)');
      ctx.fillStyle = leftGrad;
      ctx.fillRect(0, 0, width * 0.15, height);

      time += 0.006;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
};
