import React from 'react';

export default function GurkaunaLogo({ 
  variant = 'red', 
  height = 44, 
  showTagline = true, 
  className = '',
  onClick 
}) {
  const isWhite = variant === 'white';
  const logoSrc = isWhite ? '/logo-white.svg' : '/logo-red.svg';
  
  return (
    <div 
      className={`gurkauna-brand-logo ${className}`}
      onClick={onClick}
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        cursor: onClick ? 'pointer' : 'default',
        userSelect: 'none'
      }}
    >
      <img 
        src={logoSrc} 
        alt="Gurkauna - Pack Your World" 
        style={{ 
          height: typeof height === 'number' ? `${height}px` : height, 
          width: 'auto',
          objectFit: 'contain'
        }} 
      />
    </div>
  );
}
