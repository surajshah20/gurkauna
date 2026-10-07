import React, { useState } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import GurkaunaLogo from './GurkaunaLogo';

export default function Footer({ setActivePage }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Column with WHITE Gurkauna Logo */}
        <div className="footer-brand-col">
          <GurkaunaLogo 
            variant="white" 
            height={46} 
            onClick={() => setActivePage && setActivePage('home')}
          />
          <p className="footer-brand-desc">
            Crafting premium, durable, and refined travel luggage engineered in Nepal for modern adventurers worldwide.
          </p>
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="X (Twitter)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 1: Shop */}
        <div className="footer-col">
          <h4 className="footer-col-title">Shop</h4>
          <ul className="footer-col-links">
            <li><button onClick={() => setActivePage && setActivePage('shop')}>All Suitcases</button></li>
            <li><button onClick={() => setActivePage && setActivePage('shop')}>Cabin</button></li>
            <li><button onClick={() => setActivePage && setActivePage('shop')}>Medium</button></li>
            <li><button onClick={() => setActivePage && setActivePage('shop')}>Large</button></li>
            <li><button onClick={() => setActivePage && setActivePage('shop')}>Travel Sets</button></li>
          </ul>
        </div>

        {/* Column 2: Gurkauna */}
        <div className="footer-col">
          <h4 className="footer-col-title">Gurkauna</h4>
          <ul className="footer-col-links">
            <li><button onClick={() => setActivePage && setActivePage('about')}>Our Story</button></li>
            <li><button onClick={() => setActivePage && setActivePage('home')}>Why Gurkauna</button></li>
            <li><button onClick={() => setActivePage && setActivePage('shop')}>Collections</button></li>
            <li><button onClick={() => setActivePage && setActivePage('contact')}>Contact</button></li>
          </ul>
        </div>

        {/* Column 3: Customer Care */}
        <div className="footer-col">
          <h4 className="footer-col-title">Customer Care</h4>
          <ul className="footer-col-links">
            <li><button onClick={() => setActivePage && setActivePage('contact')}>Shipping</button></li>
            <li><button onClick={() => setActivePage && setActivePage('contact')}>Returns</button></li>
            <li><button onClick={() => setActivePage && setActivePage('about')}>Warranty</button></li>
            <li><button onClick={() => setActivePage && setActivePage('contact')}>FAQs</button></li>
            <li><button onClick={() => setActivePage && setActivePage('account')}>Track Order</button></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="footer-col footer-newsletter-col">
          <h4 className="footer-col-title">Newsletter</h4>
          <p className="footer-newsletter-sub">
            Travel inspiration, new collections, and updates delivered to your inbox.
          </p>
          {subscribed ? (
            <div className="newsletter-success">
              <ShieldCheck size={18} /> Thank you for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="footer-newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-submit-btn" aria-label="Subscribe">
                <ArrowRight size={18} />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="footer-copyright">
            © {new Date().getFullYear()} Gurkauna. All rights reserved.
          </div>
          <div className="footer-legal-links">
            <button onClick={() => setActivePage && setActivePage('contact')}>Privacy Policy</button>
            <span className="dot-sep">•</span>
            <button onClick={() => setActivePage && setActivePage('contact')}>Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
