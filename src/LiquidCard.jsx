import React from 'react';

const LiquidCard = ({ children, className = '' }) => {
  return (
    <div className={`liquid-glass-effect ${className}`}>
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default LiquidCard;  