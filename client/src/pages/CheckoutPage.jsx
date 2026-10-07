import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Wallet, CreditCard, Banknote, Building2 } from 'lucide-react';

export default function CheckoutPage({ cartItems, onClearCart, setActivePage }) {
  const [formData, setFormData] = useState({
    fullName: 'Suraj Kumar Sah',
    email: 'suraj@gmail.com',
    phone: '+977 9800 123 456',
    address: 'Kathmandu 44600',
    city: 'Kathmandu',
    district: 'Kathmandu',
    notes: 'Please call before delivery'
  });

  const [paymentMethod, setPaymentMethod] = useState('eSewa');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shippingFee = subtotal >= 20000 ? 0 : 500;
  const grandTotal = subtotal + shippingFee;

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cartItems,
          total: grandTotal,
          shippingInfo: formData,
          paymentMethod
        })
      });

      const data = await response.json();
      if (data.success) {
        setCompletedOrder(data.order);
        onClearCart();
      }
    } catch (err) {
      console.error('Order creation error:', err);
      // Fallback local order creation
      setCompletedOrder({
        id: `GB${Math.floor(10000 + Math.random() * 90000)}`,
        total: grandTotal,
        items: cartItems,
        paymentMethod
      });
      onClearCart();
    } finally {
      setIsSubmitting(false);
    }
  };

  if (completedOrder) {
    return (
      <div style={{ maxWidth: '640px', margin: '60px auto', padding: '0 24px', textAlign: 'center' }}>
        <div style={{ background: 'white', padding: '48px 32px', borderRadius: 'var(--radius-lg)', border: '1px solid #E2E8F0', boxShadow: 'var(--shadow-lg)' }}>
          <div style={{ width: '64px', height: '64px', background: '#DCFCE7', color: '#15803D', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
            <CheckCircle2 size={36} />
          </div>

          <h1 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--color-brand)', marginBottom: '8px' }}>
            Order Placed Successfully!
          </h1>
          <p style={{ color: 'var(--color-gray-600)', marginBottom: '24px' }}>
            Thank you for choosing Gurkauna! Your order number is <strong style={{ color: 'var(--color-dark)' }}>#{completedOrder.id}</strong>.
          </p>

          <div style={{ background: '#FAFAFB', padding: '20px', borderRadius: 'var(--radius-md)', textAlign: 'left', marginBottom: '28px', border: '1px solid #E2E8F0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>Payment Method:</span>
              <strong>{completedOrder.paymentMethod}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>Total Amount:</span>
              <strong style={{ color: 'var(--color-brand)', fontSize: '1.1rem' }}>NPR {completedOrder.total?.toLocaleString()}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Estimated Delivery:</span>
              <strong>2 - 3 Business Days</strong>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="btn-secondary" style={{ flex: 1, color: 'var(--color-dark)', borderColor: '#CBD5E1' }} onClick={() => setActivePage('account')}>
              View My Orders
            </button>
            <button className="btn-primary" style={{ flex: 1, background: 'var(--color-brand)', color: 'white' }} onClick={() => setActivePage('home')}>
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1280px', margin: '40px auto', padding: '0 24px' }}>
      {/* Step Header */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', color: 'var(--color-brand)' }}>
          <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--color-brand)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem' }}>1</span>
          Shipping
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', color: 'var(--color-brand)' }}>
          <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--color-brand)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem' }}>2</span>
          Payment
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', color: 'var(--color-gray-400)' }}>
          <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--color-gray-200)', color: 'var(--color-gray-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem' }}>3</span>
          Review
        </div>
      </div>

      <div className="checkout-container" style={{ margin: 0, padding: 0 }}>
        {/* Left Form Column */}
        <form onSubmit={handleSubmitOrder}>
          {/* Shipping Info */}
          <div className="form-section">
            <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '20px' }}>1. Shipping Information</h3>
            <div className="form-grid">
              <div className="form-group full">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  className="form-input"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number * (+977)</label>
                <input
                  type="tel"
                  className="form-input"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  className="form-input"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group full">
                <label className="form-label">Street Address / Landmark *</label>
                <input
                  type="text"
                  className="form-input"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">City / Location *</label>
                <input
                  type="text"
                  className="form-input"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">District *</label>
                <input
                  type="text"
                  className="form-input"
                  required
                  value={formData.district}
                  onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                />
              </div>
            </div>
          </div>

          {/* Payment Method Section */}
          <div className="form-section">
            <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '20px' }}>2. Payment Method</h3>
            <div className="payment-grid">
              {[
                { id: 'eSewa', name: 'eSewa Digital Wallet', icon: Wallet, badge: 'Popular in Nepal' },
                { id: 'Khalti', name: 'Khalti Wallet', icon: CreditCard, badge: 'Instant Pay' },
                { id: 'Cash on Delivery', name: 'Cash on Delivery', icon: Banknote, badge: 'Pay at Doorstep' },
                { id: 'Bank Transfer', name: 'Bank Transfer / ConnectIPS', icon: Building2, badge: 'Direct Bank' }
              ].map((pm) => {
                const IconComp = pm.icon;
                return (
                  <div
                    key={pm.id}
                    className={`payment-card ${paymentMethod === pm.id ? 'selected' : ''}`}
                    onClick={() => setPaymentMethod(pm.id)}
                  >
                    <IconComp size={24} style={{ color: 'var(--color-brand)' }} />
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>{pm.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-gray-500)' }}>{pm.badge}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            type="submit"
            className="btn-primary"
            disabled={isSubmitting || cartItems.length === 0}
            style={{ width: '100%', background: 'var(--color-brand)', color: 'white', justifyContent: 'center', padding: '16px', fontSize: '1.1rem' }}
          >
            {isSubmitting ? 'Processing Order...' : `Place Order (NPR ${grandTotal.toLocaleString()}) →`}
          </button>
        </form>

        {/* Order Items Preview Sidebar */}
        <div>
          <div className="summary-card">
            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '16px', paddingBottom: '10px', borderBottom: '1px solid #E2E8F0' }}>
              Items in Order ({cartItems.length})
            </h3>

            <div style={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '16px' }}>
              {cartItems.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
                  <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '6px' }} />
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ fontWeight: '700', fontSize: '0.85rem' }}>{item.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-gray-500)' }}>{item.size} • Qty {item.quantity}</div>
                  </div>
                  <div style={{ fontWeight: '800', fontSize: '0.9rem', color: 'var(--color-brand)' }}>
                    NPR {(item.price * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            <div className="summary-row">
              <span>Subtotal</span>
              <span style={{ fontWeight: '700' }}>NPR {subtotal.toLocaleString()}</span>
            </div>
            <div className="summary-row">
              <span>Delivery Fee</span>
              <span style={{ fontWeight: '700', color: shippingFee === 0 ? '#10B981' : 'inherit' }}>
                {shippingFee === 0 ? 'FREE' : `NPR ${shippingFee}`}
              </span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span style={{ color: 'var(--color-brand)' }}>NPR {grandTotal.toLocaleString()}</span>
            </div>

            <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-500)', marginTop: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={16} style={{ color: '#10B981' }} /> 100% Satisfaction Guarantee
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
