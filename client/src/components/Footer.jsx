import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
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

  const footerNav = (page) => setActivePage && setActivePage(page);

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        
        {/* Top section — 4 columns */}
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand-col">
            <GurkaunaLogo 
              variant="white" 
              height={14} 
              onClick={() => footerNav('home')}
            />
            <p className="footer-brand-text">
              Premium luggage engineered in Nepal for the modern traveler.
            </p>
          </div>

          {/* Shop */}
          <div className="footer-link-col">
            <h4 className="footer-col-heading">Shop</h4>
            <ul className="footer-links">
              <li><button onClick={() => footerNav('shop')}>All Luggage</button></li>
              <li><button onClick={() => footerNav('collections')}>Collections</button></li>
              <li><button onClick={() => footerNav('shop')}>Travel Sets</button></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-link-col">
            <h4 className="footer-col-heading">Company</h4>
            <ul className="footer-links">
              <li><button onClick={() => footerNav('about')}>About</button></li>
              <li><button onClick={() => footerNav('why-gurkauna')}>Technology</button></li>
              <li><button onClick={() => footerNav('contact')}>Contact</button></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-link-col">
            <h4 className="footer-col-heading">Support</h4>
            <ul className="footer-links">
              <li><button onClick={() => footerNav('faq')}>FAQ</button></li>
              <li><button onClick={() => footerNav('shipping-returns')}>Shipping & Returns</button></li>
              <li><button onClick={() => footerNav('warranty')}>Warranty</button></li>
              <li><button onClick={() => footerNav('order-tracking')}>Track Order</button></li>
            </ul>
          </div>
        </div>

        {/* Newsletter row */}
        <div className="footer-newsletter-row">
          <span className="newsletter-label">Stay in the loop</span>
          {subscribed ? (
            <span className="newsletter-success-msg">Thank you for subscribing.</span>
          ) : (
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input 
                type="email" 
                placeholder="Email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input-field"
              />
              <button type="submit" className="newsletter-submit" aria-label="Subscribe">
                <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom-bar">
          <span>© {new Date().getFullYear()} Gurkauna. All rights reserved.</span>
          <div className="footer-legal">
            <button onClick={() => footerNav('privacy')}>Privacy</button>
            <button onClick={() => footerNav('terms')}>Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
