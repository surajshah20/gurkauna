import React from 'react';
import { Trash2, ArrowRight, ShieldCheck, ShoppingBag } from 'lucide-react';

export default function CartPage({ cartItems, onUpdateQty, onRemoveItem, onGoToCheckout, setActivePage }) {
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const freeShippingThreshold = 20000;
  const remainingForFree = Math.max(0, freeShippingThreshold - subtotal);
  const shippingFee = subtotal >= freeShippingThreshold ? 0 : 500;
  const grandTotal = subtotal + (cartItems.length > 0 ? shippingFee : 0);

  return (
    <div style={{ maxWidth: '1280px', margin: '40px auto', padding: '0 24px' }}>
      <h1 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '8px' }}>
        Your Cart ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)
      </h1>
      <p style={{ color: 'var(--color-gray-600)', marginBottom: '32px' }}>
        Review your luggage selections before proceeding to secure checkout.
      </p>

      {cartItems.length === 0 ? (
        <div style={{ background: 'white', padding: '80px', borderRadius: 'var(--radius-lg)', textAlign: 'center', border: '1px solid #E2E8F0' }}>
          <ShoppingBag size={48} style={{ color: 'var(--color-gray-400)', marginBottom: '16px' }} />
          <h2 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '8px' }}>Your shopping cart is empty</h2>
          <p style={{ color: 'var(--color-gray-500)', marginBottom: '24px' }}>
            Look like you haven't added any Gurkauna suitcases to your cart yet.
          </p>
          <button className="btn-primary" style={{ background: 'var(--color-brand)', color: 'white' }} onClick={() => setActivePage('shop')}>
            Browse Products <ArrowRight size={18} />
          </button>
        </div>
      ) : (
        <div className="cart-container" style={{ margin: 0, padding: 0 }}>
          {/* Items Table */}
          <div className="cart-table">
            {/* Free shipping alert */}
            <div style={{
              background: remainingForFree === 0 ? '#DCFCE7' : '#FEF3C7',
              color: remainingForFree === 0 ? '#15803D' : '#92400E',
              padding: '12px 18px',
              borderRadius: 'var(--radius-md)',
              fontWeight: '700',
              fontSize: '0.9rem',
              marginBottom: '20px'
            }}>
              {remainingForFree === 0 ? (
                '🎉 You qualify for FREE Delivery across Nepal!'
              ) : (
                `Add NPR ${remainingForFree.toLocaleString()} more to unlock FREE Delivery!`
              )}
            </div>

            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '10px', border: '1px solid #E2E8F0' }} />
                
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--color-dark)' }}>{item.name}</h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-gray-600)', marginTop: '2px' }}>
                    Size: <strong>{item.size}</strong> | Color: <strong>{item.color}</strong>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#10B981', fontWeight: '700', marginTop: '4px' }}>
                    In Stock • Genuine Gurkauna Warranty
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #CBD5E1', borderRadius: '8px', background: 'white' }}>
                  <button onClick={() => onUpdateQty(index, item.quantity - 1)} style={{ padding: '6px 12px', fontWeight: '800', fontSize: '1.1rem' }}>-</button>
                  <span style={{ padding: '0 12px', fontWeight: '800' }}>{item.quantity}</span>
                  <button onClick={() => onUpdateQty(index, item.quantity + 1)} style={{ padding: '6px 12px', fontWeight: '800', fontSize: '1.1rem' }}>+</button>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--color-brand)' }}>
                    NPR {(item.price * item.quantity).toLocaleString()}
                  </div>
                  <button onClick={() => onRemoveItem(index)} style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: '6px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <Trash2 size={14} /> Remove
                  </button>
                </div>
              </div>
            ))}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #F1F5F9' }}>
              <button onClick={() => setActivePage('shop')} style={{ fontSize: '0.9rem', color: 'var(--color-brand)', fontWeight: '700' }}>
                ← Continue Shopping
              </button>
            </div>
          </div>

          {/* Summary Card */}
          <div className="summary-card">
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid #E2E8F0' }}>
              Order Summary
            </h3>

            <div className="summary-row">
              <span>Subtotal ({cartItems.reduce((acc, i) => acc + i.quantity, 0)} items)</span>
              <span style={{ fontWeight: '700' }}>NPR {subtotal.toLocaleString()}</span>
            </div>

            <div className="summary-row">
              <span>Estimated Shipping</span>
              <span style={{ fontWeight: '700', color: shippingFee === 0 ? '#10B981' : 'inherit' }}>
                {shippingFee === 0 ? 'FREE' : `NPR ${shippingFee}`}
              </span>
            </div>

            {/* Promo Code Input */}
            <div style={{ margin: '16px 0' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="text"
                  placeholder="Promo Code (e.g. GURKAUNA10)"
                  style={{
                    flexGrow: 1,
                    padding: '10px 12px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid #CBD5E1',
                    fontSize: '0.85rem'
                  }}
                />
                <button className="btn-secondary" style={{ color: 'var(--color-dark)', borderColor: '#CBD5E1', padding: '10px 14px', fontSize: '0.85rem' }}>
                  Apply
                </button>
              </div>
            </div>

            <div className="summary-row total">
              <span>Total</span>
              <span style={{ color: 'var(--color-brand)' }}>NPR {grandTotal.toLocaleString()}</span>
            </div>

            <button
              className="btn-primary"
              style={{ width: '100%', background: 'var(--color-brand)', color: 'white', justifyContent: 'center', padding: '14px', marginTop: '20px' }}
              onClick={onGoToCheckout}
            >
              Proceed to Checkout <ArrowRight size={18} />
            </button>

            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8rem', color: 'var(--color-gray-600)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} style={{ color: '#10B981' }} /> 100% Encrypted & Secure Checkout
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} style={{ color: '#10B981' }} /> eSewa, Khalti & Cash on Delivery Accepted
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
