'use client';

import { useCallback, useRef, useState } from 'react';

export function useInView(rootMargin = '-100px') {
  const [visible, setVisible] = useState(false);
  const obsRef = useRef<IntersectionObserver | null>(null);

  const ref = useCallback(
    (el: Element | null) => {
      if (obsRef.current) {
        obsRef.current.disconnect();
        obsRef.current = null;
      }
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        },
        { rootMargin }
      );
      obs.observe(el);
      obsRef.current = obs;
    },
    [rootMargin]
  );

  return [ref, visible] as const;
}
