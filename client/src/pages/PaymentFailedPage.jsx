import React from 'react';
import { XCircle, ArrowRight, RefreshCcw } from 'lucide-react';

export default function PaymentFailedPage({ setActivePage }) {
  return (
    <div style={{ backgroundColor: '#FAFAFA', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 40px',
        textAlign: 'center',
        background: 'white',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid #E4E4E7',
        maxWidth: '500px',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          background: '#FEF2F2',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '24px',
          color: '#E11D48'
        }}>
          <XCircle size={40} strokeWidth={1.5} />
        </div>
        
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.8rem',
          fontWeight: '500',
          color: 'var(--color-dark)',
          marginBottom: '12px'
        }}>
          Payment Failed
        </h3>
        
        <p style={{
          fontSize: '0.95rem',
          color: '#71717A',
          marginBottom: '32px',
          lineHeight: '1.6'
        }}>
          Unfortunately, we couldn't process your payment. Your order has not been placed. Please check your payment details and try again.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
          <button
            onClick={() => setActivePage('checkout')}
            style={{
              background: '#E11D48',
              color: 'white',
              border: 'none',
              padding: '14px',
              borderRadius: '40px',
              fontSize: '1rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              width: '100%'
            }}
          >
            <RefreshCcw size={18} /> Retry Payment
          </button>
          <button
            onClick={() => setActivePage('contact')}
            style={{
              background: 'transparent',
              color: 'var(--color-dark)',
              border: '1px solid #E4E4E7',
              padding: '14px',
              borderRadius: '40px',
              fontSize: '1rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              width: '100%'
            }}
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
