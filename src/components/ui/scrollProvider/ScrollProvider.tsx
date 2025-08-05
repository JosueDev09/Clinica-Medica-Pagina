/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useRef } from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scroll: any;

    const startScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;

      scroll = new LocomotiveScroll({
        el: scrollRef.current!,
        smooth: true,
        lerp: 0.05, // 👈 Lerp effect
        multiplier: 1,
        class: 'is-inview',
      });
    };

    if (typeof window !== 'undefined') {
      startScroll();
    }

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div id="main-scroll" data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};
