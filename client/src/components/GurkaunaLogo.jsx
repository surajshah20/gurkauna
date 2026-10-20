import React from 'react';

export default function GurkaunaLogo({ 
  variant = 'dark', // 'dark', 'light', 'white', 'brand'
  height = 36, 
  showTagline = true, 
  className = '',
  onClick 
}) {
  const isLight = variant === 'white' || variant === 'light';
  const textColor = isLight ? '#FFFFFF' : '#0F172A';
  const subColor = isLight ? 'rgba(255, 255, 255, 0.65)' : '#64748B';
  const iconStroke = isLight ? '#FFFFFF' : '#0F172A';
  const accentColor = '#991B1B'; // Rich Himalayan Garnet

  const iconSize = typeof height === 'number' ? Math.round(height * 0.85) : 32;

  return (
    <div 
      className={`gurkauna-brand-logo ${className}`}
      onClick={onClick}
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '10px',
        cursor: onClick ? 'pointer' : 'default',
        userSelect: 'none',
        textDecoration: 'none'
      }}
      role="banner"
    >
      {/* Professional Minimalist Emblem */}
      <svg 
        width={iconSize} 
        height={iconSize} 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        {/* Outer Squircle Container */}
        <rect 
          x="2.5" 
          y="2.5" 
          width="27" 
          height="27" 
          rx="7" 
          stroke={iconStroke} 
          strokeWidth="2" 
          fill={isLight ? 'rgba(255,255,255,0.06)' : 'rgba(15,23,42,0.03)'} 
        />
        {/* Minimalist Geometric 'G' Monogram */}
        <path 
          d="M20.5 11.5C19.3 9.9 17.4 9 15.5 9C11.9 9 9 11.9 9 15.5C9 19.1 11.9 22 15.5 22C18.6 22 21.2 19.8 21.8 16.8H15.5" 
          stroke={iconStroke} 
          strokeWidth="2.2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        {/* Red Accent Pivot Point */}
        <circle cx="21.5" cy="11.5" r="1.5" fill={accentColor} />
      </svg>

      {/* Clean Modern Typography */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{ 
          fontFamily: 'var(--font-accent, "Outfit", sans-serif)', 
          fontSize: typeof height === 'number' ? `${Math.round(height * 0.48)}px` : '18px', 
          fontWeight: '700', 
          letterSpacing: '0.18em', 
          color: textColor,
          textTransform: 'uppercase'
        }}>
          GURKAUNA
        </span>
        {showTagline && (
          <span style={{ 
            fontFamily: 'var(--font-body, sans-serif)', 
            fontSize: typeof height === 'number' ? `${Math.max(8, Math.round(height * 0.2))}px` : '8px', 
            fontWeight: '600', 
            letterSpacing: '0.24em', 
            color: subColor,
            textTransform: 'uppercase',
            marginTop: '3px'
          }}>
            KATHMANDU
          </span>
        )}
      </div>
    </div>
  );
}
