import React from 'react';
import { ShoppingBag, Heart, AlertCircle, ArrowRight } from 'lucide-react';

export default function EmptyState({ 
  type = 'default', // 'cart', 'wishlist', 'orders', '404', 'search'
  title, 
  message, 
  actionText = 'Continue Shopping',
  onAction
}) {
  
  let Icon = AlertCircle;
  if (type === 'cart') Icon = ShoppingBag;
  if (type === 'wishlist') Icon = Heart;
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 24px',
      textAlign: 'center',
      background: 'white',
      borderRadius: 'var(--radius-lg)',
      border: '1px dashed #E4E4E7',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <div style={{
        width: '80px',
        height: '80px',
        background: '#F4F4F5',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '24px',
        color: '#A1A1AA'
      }}>
        <Icon size={40} strokeWidth={1.5} />
      </div>
      
      <h3 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: '1.8rem',
        fontWeight: '500',
        color: 'var(--color-dark)',
        marginBottom: '12px'
      }}>
        {title}
      </h3>
      
      <p style={{
        fontSize: '1rem',
        color: '#71717A',
        marginBottom: '32px',
        lineHeight: '1.6',
        maxWidth: '400px'
      }}>
        {message}
      </p>
      
      {onAction && (
        <button
          onClick={onAction}
          style={{
            background: '#0F172A',
            color: 'white',
            border: 'none',
            padding: '14px 32px',
            borderRadius: '10px',
            fontSize: '0.95rem',
            fontFamily: 'var(--font-body)',
            fontWeight: '600',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(15, 23, 42, 0.18)',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#1E293B';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(15, 23, 42, 0.25)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#0F172A';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 14px rgba(15, 23, 42, 0.18)';
          }}
        >
          {actionText} <ArrowRight size={17} />
        </button>
      )}
    </div>
  );
}
