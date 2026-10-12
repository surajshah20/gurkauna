import React, { useState } from 'react';
import { ShoppingBag, Search, User, Menu, X, ArrowRight } from 'lucide-react';
import GurkaunaLogo from './GurkaunaLogo';

export default function Navbar({ activePage, setActivePage, cartCount, wishlistCount = 0, onOpenCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    setActivePage(page);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="announcement-bar">
        <div className="announcement-content">
          <span className="announcement-pill">Free Express Delivery</span>
          <span>Complimentary shipping across Nepal on orders over NPR 20,000</span>
          <span className="announcement-divider">•</span>
          <span className="announcement-highlight">10-Year Global Warranty</span>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          {/* Left: Luxury Wordmark & Emblem */}
          <div className="navbar-brand">
            <GurkaunaLogo 
              variant="dark" 
              height={38} 
              onClick={() => handleNavClick('home')} 
            />
          </div>

          {/* Center Nav Links */}
          <ul className="nav-links">
            <li>
              <button
                className={`nav-link ${activePage === 'home' ? 'active' : ''}`}
                onClick={() => handleNavClick('home')}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${activePage === 'shop' ? 'active' : ''}`}
                onClick={() => handleNavClick('shop')}
              >
                Suitcases
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${activePage === 'collections' ? 'active' : ''}`}
                onClick={() => handleNavClick('collections')}
              >
                Collections
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${activePage === 'why-gurkauna' ? 'active' : ''}`}
                onClick={() => handleNavClick('why-gurkauna')}
              >
                Technology
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${activePage === 'about' ? 'active' : ''}`}
                onClick={() => handleNavClick('about')}
              >
                Our Story
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${activePage === 'contact' ? 'active' : ''}`}
                onClick={() => handleNavClick('contact')}
              >
                Concierge
              </button>
            </li>
          </ul>

          {/* Right Action Icons */}
          <div className="nav-actions">
            <button
              className="icon-btn"
              title="Search Luggage"
              aria-label="Search Luggage"
              onClick={() => handleNavClick('search')}
            >
              <Search size={19} strokeWidth={1.8} />
            </button>
            
            <button
              className="icon-btn"
              title="My Account"
              aria-label="My Account"
              onClick={() => handleNavClick('account')}
            >
              <User size={19} strokeWidth={1.8} />
            </button>

            <button
              className="icon-btn cart-btn"
              title="Shopping Bag"
              aria-label="Shopping Bag"
              onClick={onOpenCart}
            >
              <ShoppingBag size={19} strokeWidth={1.8} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-toggle-btn"
              aria-label="Toggle Navigation Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        <div 
          className="mobile-backdrop"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.5)',
            backdropFilter: 'blur(8px)',
            zIndex: 2000,
            opacity: mobileMenuOpen ? 1 : 0,
            pointerEvents: mobileMenuOpen ? 'auto' : 'none',
            transition: 'opacity 0.25s ease'
          }} 
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: '85%',
              maxWidth: '340px',
              background: '#FFFFFF',
              transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
              transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '8px 0 32px rgba(0,0,0,0.12)'
            }} 
            onClick={e => e.stopPropagation()}
          >
            <div style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #F1F5F9' }}>
              <GurkaunaLogo variant="dark" height={34} onClick={() => handleNavClick('home')} />
              <button 
                onClick={() => setMobileMenuOpen(false)} 
                style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '50%', width: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#64748B' }}
              >
                <X size={18} />
              </button>
            </div>
            
            <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'shop', label: 'Suitcases & Luggage' },
                  { id: 'collections', label: 'Collections' },
                  { id: 'why-gurkauna', label: 'Technology & Craft' },
                  { id: 'about', label: 'Our Story' },
                  { id: 'contact', label: 'Customer Concierge' }
                ].map((item) => (
                  <li key={item.id}>
                    <button 
                      onClick={() => handleNavClick(item.id)} 
                      style={{ 
                        width: '100%',
                        textAlign: 'left',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        fontSize: '1.05rem', 
                        fontWeight: activePage === item.id ? '700' : '500', 
                        color: activePage === item.id ? '#0F172A' : '#64748B', 
                        background: activePage === item.id ? '#F1F5F9' : 'transparent', 
                        border: 'none', 
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      {item.label}
                      <ArrowRight size={16} style={{ opacity: activePage === item.id ? 1 : 0.3 }} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div style={{ padding: '24px', borderTop: '1px solid #F1F5F9', background: '#F8FAFC' }}>
              <button 
                onClick={() => handleNavClick('account')} 
                style={{ width: '100%', padding: '14px', background: '#0F172A', color: 'white', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '0.95rem', fontWeight: '600', border: 'none', cursor: 'pointer' }}
              >
                <User size={18} /> My Account
              </button>
            </div>
          </div>
        </div>

      </nav>
    </>
  );
}
