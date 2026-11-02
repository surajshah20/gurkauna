import React from 'react';

export default function GurkaunaLogo({ 
  variant = 'dark',
  height = 20, 
  showTagline = false, 
  className = '',
  onClick 
}) {
  const isLight = variant === 'white' || variant === 'light';
  const textColor = isLight ? '#FFFFFF' : '#1D1D1F';

  return (
    <div 
      className={`gurkauna-brand-logo ${className}`}
      onClick={onClick}
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '0',
        cursor: onClick ? 'pointer' : 'default',
        userSelect: 'none',
        textDecoration: 'none'
      }}
      role="banner"
    >
      <span style={{ 
        fontFamily: 'var(--font-primary)',
        fontSize: typeof height === 'number' ? `${height}px` : '20px', 
        fontWeight: '600', 
        letterSpacing: '0.12em', 
        color: textColor,
        textTransform: 'uppercase',
        lineHeight: 1
      }}>
        Gurkauna
      </span>
    </div>
  );
}
