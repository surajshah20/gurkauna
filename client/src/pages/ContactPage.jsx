import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Contact submit error:', err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Contact Hero */}
      <div style={{
        background: '#122B24',
        color: 'white',
        padding: '60px 24px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '12px' }}>Get in Touch</h1>
        <p style={{ color: '#A7F3D0', fontSize: '1.05rem' }}>We'd love to hear from you. Reach out with any questions or visit our showroom.</p>
      </div>

      <div style={{ maxWidth: '1280px', margin: '60px auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '48px' }}>
        {/* Contact Info Cards */}
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '24px' }}>Contact Information</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', background: 'white', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid #E2E8F0' }}>
              <div style={{ width: '48px', height: '48px', background: 'var(--color-brand-light)', color: 'var(--color-brand)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Mail size={22} style={{ margin: 'auto' }} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-gray-500)', fontWeight: '600' }}>Email Us</div>
                <div style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--color-dark)' }}>hello@gurkauna.com</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', background: 'white', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid #E2E8F0' }}>
              <div style={{ width: '48px', height: '48px', background: 'var(--color-brand-light)', color: 'var(--color-brand)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Phone size={22} style={{ margin: 'auto' }} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-gray-500)', fontWeight: '600' }}>Call / WhatsApp</div>
                <div style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--color-dark)' }}>+977 9800 123 456</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', background: 'white', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid #E2E8F0' }}>
              <div style={{ width: '48px', height: '48px', background: 'var(--color-brand-light)', color: 'var(--color-brand)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MapPin size={22} style={{ margin: 'auto' }} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-gray-500)', fontWeight: '600' }}>Showroom Location</div>
                <div style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--color-dark)' }}>Thamel, Kathmandu, Nepal</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', background: 'white', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid #E2E8F0' }}>
              <div style={{ width: '48px', height: '48px', background: 'var(--color-brand-light)', color: 'var(--color-brand)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Clock size={22} style={{ margin: 'auto' }} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-gray-500)', fontWeight: '600' }}>Business Hours</div>
                <div style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--color-dark)' }}>Mon - Sat: 9:00 AM - 6:00 PM</div>
              </div>
            </div>
          </div>

          {/* Location Map Mockup */}
          <div style={{ background: '#E2E8F0', height: '200px', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ textAlign: 'center', zIndex: 2 }}>
              <MapPin size={32} style={{ color: 'var(--color-brand)', marginBottom: '8px' }} />
              <div style={{ fontWeight: '800', fontSize: '1.1rem' }}>Kathmandu Showroom</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-gray-600)' }}>Thamel Marg, Kathmandu</div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div style={{ background: 'white', padding: '36px', borderRadius: 'var(--radius-lg)', border: '1px solid #E2E8F0', boxShadow: 'var(--shadow-md)' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '8px' }}>Send Us a Message</h2>
          <p style={{ color: 'var(--color-gray-600)', marginBottom: '24px' }}>Fill out the form below and our team will get back to you within 24 hours.</p>

          {submitted ? (
            <div style={{ background: '#DCFCE7', color: '#15803D', padding: '24px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <CheckCircle2 size={40} style={{ margin: '0 auto 12px auto' }} />
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '6px' }}>Message Received!</h3>
              <p style={{ fontSize: '0.9rem' }}>Thank you for contacting Gurkauna. We will reply to your email shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="form-group">
                <label className="form-label">Your Name *</label>
                <input
                  type="text"
                  className="form-input"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Suraj Kumar Sah"
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
                  placeholder="e.g. suraj@gmail.com"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number (+977)</label>
                <input
                  type="tel"
                  className="form-input"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+977 9800 123 456"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message *</label>
                <textarea
                  className="form-input"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we help you with your luggage or order query?"
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                disabled={loading}
                style={{ background: 'var(--color-brand)', color: 'white', justifyContent: 'center', padding: '14px', marginTop: '8px' }}
              >
                {loading ? 'Sending...' : 'Send Message'} <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
