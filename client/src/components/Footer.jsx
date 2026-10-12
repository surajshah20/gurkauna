import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';
import GurkaunaLogo from './GurkaunaLogo';

export default function Footer({ setActivePage }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="footer" style={{ background: 'var(--color-dark)', color: 'white', padding: '60px 24px 20px' }}>
      <style dangerouslySetInnerHTML={{__html: `
        .footer-grid-custom {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        .footer-mobile-accordion {
          border-bottom: 1px solid #3F3F46;
          padding-bottom: 16px;
        }
        .footer-links-container {
          display: ${openSection ? 'flex' : 'none'};
          flex-direction: column;
          gap: 12px;
          margin-top: 16px;
        }
        .footer-col-title-btn {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          background: none;
          border: none;
          color: white;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          padding: 0;
        }
        .footer-link-btn {
          background: none;
          border: none;
          color: #A1A1AA;
          font-size: 0.95rem;
          cursor: pointer;
          text-align: left;
          padding: 0;
        }
        .footer-link-btn:hover {
          color: white;
        }
        @media (min-width: 768px) {
          .footer-grid-custom { grid-template-columns: repeat(2, 1fr); gap: 40px; }
          .footer-mobile-accordion { border-bottom: none; padding-bottom: 0; }
          .footer-links-container { display: flex !important; margin-top: 24px; }
          .footer-col-title-btn { pointer-events: none; }
          .footer-col-title-btn svg { display: none; }
        }
        @media (min-width: 1024px) {
          .footer-grid-custom { grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr; gap: 32px; }
        }
      `}} />
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        <div className="footer-grid-custom">
          {/* Brand Column with WHITE Gurkauna Logo */}
          <div style={{ marginBottom: '24px', '@media (minWidth: 768px)': { marginBottom: 0 } }}>
            <div style={{ marginBottom: '24px' }}>
              <GurkaunaLogo 
                variant="white" 
                height={46} 
                onClick={() => setActivePage && setActivePage('home')}
              />
            </div>
            <p style={{ color: '#A1A1AA', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '24px', maxWidth: '300px' }}>
              Crafting premium, durable, and refined travel luggage engineered in Nepal for modern adventurers worldwide.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: 'white' }} aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ color: 'white' }} aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ color: 'white' }} aria-label="X (Twitter)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
              </a>
            </div>
          </div>

          {/* Column 1: Shop */}
          <div className="footer-mobile-accordion">
            <button className="footer-col-title-btn" onClick={() => toggleSection('shop')}>
              Shop {openSection === 'shop' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            <div className="footer-links-container" style={{ display: openSection === 'shop' ? 'flex' : '' }}>
              <button className="footer-link-btn" onClick={() => setActivePage && setActivePage('shop')}>All Suitcases</button>
              <button className="footer-link-btn" onClick={() => setActivePage && setActivePage('shop')}>Cabin</button>
              <button className="footer-link-btn" onClick={() => setActivePage && setActivePage('shop')}>Medium</button>
              <button className="footer-link-btn" onClick={() => setActivePage && setActivePage('shop')}>Large</button>
              <button className="footer-link-btn" onClick={() => setActivePage && setActivePage('shop')}>Travel Sets</button>
            </div>
          </div>

          {/* Column 2: Gurkauna */}
          <div className="footer-mobile-accordion">
            <button className="footer-col-title-btn" onClick={() => toggleSection('gurkauna')}>
              Gurkauna {openSection === 'gurkauna' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            <div className="footer-links-container" style={{ display: openSection === 'gurkauna' ? 'flex' : '' }}>
              <button className="footer-link-btn" onClick={() => setActivePage && setActivePage('about')}>Our Story</button>
              <button className="footer-link-btn" onClick={() => setActivePage && setActivePage('why-gurkauna')}>Why Gurkauna</button>
              <button className="footer-link-btn" onClick={() => setActivePage && setActivePage('collections')}>Collections</button>
              <button className="footer-link-btn" onClick={() => setActivePage && setActivePage('contact')}>Contact</button>
            </div>
          </div>

          {/* Column 3: Customer Care */}
          <div className="footer-mobile-accordion">
            <button className="footer-col-title-btn" onClick={() => toggleSection('care')}>
              Customer Care {openSection === 'care' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            <div className="footer-links-container" style={{ display: openSection === 'care' ? 'flex' : '' }}>
              <button className="footer-link-btn" onClick={() => setActivePage && setActivePage('shipping-returns')}>Shipping</button>
              <button className="footer-link-btn" onClick={() => setActivePage && setActivePage('shipping-returns')}>Returns</button>
              <button className="footer-link-btn" onClick={() => setActivePage && setActivePage('warranty')}>Warranty</button>
              <button className="footer-link-btn" onClick={() => setActivePage && setActivePage('faq')}>FAQs</button>
              <button className="footer-link-btn" onClick={() => setActivePage && setActivePage('order-tracking')}>Track Order</button>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '16px' }}>Newsletter</h4>
            <p style={{ color: '#A1A1AA', fontSize: '0.9rem', marginBottom: '24px', lineHeight: '1.6' }}>
              Travel inspiration, new collections, and updates delivered to your inbox.
            </p>
            {subscribed ? (
              <div style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#34D399', padding: '12px 16px', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 600 }}>
                <ShieldCheck size={18} /> Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', borderBottom: '1px solid #52525B' }}>
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{ flexGrow: 1, background: 'none', border: 'none', color: 'white', padding: '12px 0', fontSize: '1rem', outline: 'none' }}
                />
                <button type="submit" style={{ background: 'none', border: 'none', color: 'white', padding: '0 12px', cursor: 'pointer' }} aria-label="Subscribe">
                  <ArrowRight size={20} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div style={{ marginTop: '60px', paddingTop: '24px', borderTop: '1px solid #3F3F46', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', '@media (minWidth: 768px)': { flexDirection: 'row', justifyContent: 'space-between' } }} className="footer-bottom-flex">
          <style dangerouslySetInnerHTML={{__html: `
            .footer-bottom-flex { flex-direction: column; text-align: center; }
            @media (min-width: 768px) { .footer-bottom-flex { flex-direction: row !important; justify-content: space-between; text-align: left; } }
          `}} />
          <div style={{ color: '#A1A1AA', fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} Gurkauna. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '16px', color: '#A1A1AA', fontSize: '0.85rem' }}>
            <button onClick={() => setActivePage && setActivePage('privacy')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}>Privacy Policy</button>
            <span>•</span>
            <button onClick={() => setActivePage && setActivePage('terms')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}>Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
