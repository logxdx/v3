'use client';

import React, { useEffect, useRef } from 'react';

const GlowEffect = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const container = containerRef.current;

      let glowElement = container.querySelector('.mouse-glow');
      if (!glowElement) {
        glowElement = document.createElement('div');
        glowElement.classList.add('mouse-glow');
        container.appendChild(glowElement);
      }

      // Position and style the glow element
      glowElement.style.left = `${e.clientX}px`;
      glowElement.style.top = `${e.clientY}px`;
    };

    // Add event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={containerRef} className="invisible md:visible"/>
      <style jsx global>{`
        .mouse-glow {
          position: fixed;
          transform: translate(-50%, -50%);
          width: 800px;
          aspect-ratio: 1;
          background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 60%);
          border-radius: 50%;
          pointer-events: none;
          z-index: -10;
        }
      `}</style>
    </>
  );
};

export default GlowEffect;