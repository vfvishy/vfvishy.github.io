import React, { useRef, useState, useCallback } from 'react';

const LiquidCard = ({ children, className = '' }) => {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});
  const [glareStyle, setGlareStyle] = useState({});

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (max 12 degrees for that liquid feel)
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    // Calculate glare position
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'none', // Remove transition for instant mouse following
    });

    setGlareStyle({
      background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.4) 0%, transparent 60%)`,
      opacity: 1,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)', // Smooth return to center
    });
    setGlareStyle({
      opacity: 0,
      transition: 'opacity 0.5s ease',
    });
  }, []);

  return (
    <div
      ref={cardRef}
      className={`liquid-glass-effect ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          pointerEvents: 'none',
          mixBlendMode: 'overlay',
          zIndex: 2,
          ...glareStyle
        }} 
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default LiquidCard;