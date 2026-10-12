import React from 'react';

export default function GurkaunaLogo({ 
  variant = 'dark', // 'dark', 'light', 'white', 'brand'
  height = 36, 
  showTagline = true, 
  className = '',
  onClick 
}) {
  const isLight = variant === 'white' || variant === 'light';
  const textColor = isLight ? '#FFFFFF' : '#09090B';
  const subColor = isLight ? 'rgba(255, 255, 255, 0.65)' : '#71717A';
  const accentColor = '#991B1B'; // Rich Himalayan Garnet

  return (
    <div 
      className={`gurkauna-brand-logo ${className}`}
      onClick={onClick}
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '12px',
        cursor: onClick ? 'pointer' : 'default',
        userSelect: 'none',
        textDecoration: 'none'
      }}
      role="banner"
    >
      {/* Precision Geometric Monogram Emblem */}
      <svg 
        width={typeof height === 'number' ? height * 0.9 : 32} 
        height={typeof height === 'number' ? height : 36} 
        viewBox="0 0 36 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        {/* Telescoping Handle Silhouette */}
        <rect x="11" y="2" width="14" height="4" rx="2" stroke={isLight ? '#FFFFFF' : '#0F172A'} strokeWidth="1.8" />
        <line x1="14" y1="6" x2="14" y2="10" stroke={isLight ? '#FFFFFF' : '#0F172A'} strokeWidth="1.6" />
        <line x1="22" y1="6" x2="22" y2="10" stroke={isLight ? '#FFFFFF' : '#0F172A'} strokeWidth="1.6" />

        {/* Hard-Shell Suitcase Body with Precision Corner Armor */}
        <rect x="4" y="9" width="28" height="26" rx="5" fill={isLight ? 'rgba(255,255,255,0.08)' : '#0F172A'} stroke={isLight ? '#FFFFFF' : '#0F172A'} strokeWidth="1.8" />
        
        {/* Luxury Vertical Grooves (Himalayan Ridges) */}
        <line x1="12" y1="13" x2="12" y2="31" stroke={isLight ? 'rgba(255,255,255,0.5)' : '#334155'} strokeWidth="1.4" strokeLinecap="round" />
        <line x1="18" y1="13" x2="18" y2="31" stroke={accentColor} strokeWidth="1.8" strokeLinecap="round" />
        <line x1="24" y1="13" x2="24" y2="31" stroke={isLight ? 'rgba(255,255,255,0.5)' : '#334155'} strokeWidth="1.4" strokeLinecap="round" />

        {/* 360 Hinomoto Wheel Base */}
        <circle cx="9" cy="36.5" r="2.2" fill={isLight ? '#FFFFFF' : '#0F172A'} />
        <circle cx="27" cy="36.5" r="2.2" fill={isLight ? '#FFFFFF' : '#0F172A'} />
      </svg>

      {/* High-End Architectural Wordmark */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{ 
          fontFamily: 'var(--font-body)', 
          fontSize: typeof height === 'number' ? `${Math.round(height * 0.52)}px` : '18px', 
          fontWeight: '800', 
          letterSpacing: '0.22em', 
          color: textColor,
          textTransform: 'uppercase'
        }}>
          GURKAUNA
        </span>
        {showTagline && (
          <span style={{ 
            fontFamily: 'var(--font-accent)', 
            fontSize: typeof height === 'number' ? `${Math.round(height * 0.22)}px` : '8px', 
            fontWeight: '600', 
            letterSpacing: '0.28em', 
            color: subColor,
            textTransform: 'uppercase',
            marginTop: '3px'
          }}>
            KATHMANDU • EXPEDITION
          </span>
        )}
      </div>
    </div>
  );
}
