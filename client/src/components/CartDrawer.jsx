import React from 'react';
import { X, Trash2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQty, onRemoveItem, onGoToCart, onGoToCheckout }) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const freeShippingThreshold = 20000;
  const remainingForFree = Math.max(0, freeShippingThreshold - subtotal);
  const shippingFee = subtotal >= freeShippingThreshold ? 0 : 500;
  const grandTotal = subtotal + (cartItems.length > 0 ? shippingFee : 0);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.5)',
      backdropFilter: 'blur(4px)',
      zIndex: 2000,
      display: 'flex',
      justifyContent: 'flex-end'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '440px',
        background: 'white',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'var(--shadow-xl)',
        animation: 'slideIn 0.3s ease'
      }}>
        {/* Drawer Header */}
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid #E2E8F0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: '#FAFAFB'
        }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--color-brand)' }}>
            Your Cart ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
          </h3>
          <button className="icon-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Free shipping banner */}
        <div style={{
          background: remainingForFree === 0 ? '#DCFCE7' : '#FEF3C7',
          color: remainingForFree === 0 ? '#15803D' : '#92400E',
          padding: '10px 20px',
          fontSize: '0.85rem',
          fontWeight: '600',
          textAlign: 'center'
        }}>
          {remainingForFree === 0 ? (
            '🎉 Congratulations! You unlocked FREE Delivery across Nepal!'
          ) : (
            `Add NPR ${remainingForFree.toLocaleString()} more to get FREE Delivery!`
          )}
        </div>

        {/* Items List */}
        <div style={{ flexGrow: 1, overflowY: 'auto', padding: '20px' }}>
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--color-gray-500)' }}>
              <p style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '12px' }}>Your cart is empty</p>
              <p style={{ fontSize: '0.9rem' }}>Discover our premium luggage collection and start your journey.</p>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} style={{
                display: 'grid',
                gridTemplateColumns: '70px 1fr auto',
                gap: '14px',
                alignItems: 'center',
                marginBottom: '16px',
                paddingBottom: '16px',
                borderBottom: '1px solid #F1F5F9'
              }}>
                <img src={item.image} alt={item.name} style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #E2E8F0' }} />
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--color-dark)' }}>{item.name}</h4>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-500)' }}>
                    {item.size} • {item.color}
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--color-brand)', marginTop: '4px' }}>
                    NPR {item.price.toLocaleString()}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                  <button onClick={() => onRemoveItem(index)} style={{ color: '#EF4444' }}>
                    <Trash2 size={16} />
                  </button>
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #CBD5E1', borderRadius: '6px' }}>
                    <button onClick={() => onUpdateQty(index, item.quantity - 1)} style={{ padding: '2px 8px', fontWeight: '700' }}>-</button>
                    <span style={{ padding: '0 8px', fontSize: '0.85rem', fontWeight: '700' }}>{item.quantity}</span>
                    <button onClick={() => onUpdateQty(index, item.quantity + 1)} style={{ padding: '2px 8px', fontWeight: '700' }}>+</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary */}
        {cartItems.length > 0 && (
          <div style={{ padding: '20px 24px', borderTop: '1px solid #E2E8F0', background: '#FAFAFB' }}>
            <div className="summary-row">
              <span>Subtotal</span>
              <span style={{ fontWeight: '700' }}>NPR {subtotal.toLocaleString()}</span>
            </div>
            <div className="summary-row">
              <span>Estimated Shipping</span>
              <span style={{ fontWeight: '700', color: shippingFee === 0 ? '#10B981' : 'inherit' }}>
                {shippingFee === 0 ? 'FREE' : `NPR ${shippingFee}`}
              </span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span style={{ color: 'var(--color-brand)' }}>NPR {grandTotal.toLocaleString()}</span>
            </div>

            <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
              <button className="btn-secondary" style={{ flex: 1, color: 'var(--color-dark)', borderColor: '#CBD5E1', textAlign: 'center' }} onClick={onGoToCart}>
                View Cart
              </button>
              <button className="btn-primary" style={{ flex: 1.4, background: 'var(--color-brand)', color: 'white', justifyContent: 'center' }} onClick={onGoToCheckout}>
                Checkout <ArrowRight size={16} />
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--color-gray-500)', marginTop: '14px' }}>
              <ShieldCheck size={14} style={{ color: '#10B981' }} /> 100% Genuine Gurkauna Warranty & Returns
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
