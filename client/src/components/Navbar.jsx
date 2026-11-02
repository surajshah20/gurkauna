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
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left: Wordmark */}
        <div className="navbar-brand">
          <GurkaunaLogo 
            variant="dark" 
            height={16} 
            onClick={() => handleNavClick('home')} 
          />
        </div>

        {/* Center Nav Links */}
        <ul className="nav-links">
          {[
            { id: 'shop', label: 'Shop' },
            { id: 'collections', label: 'Collections' },
            { id: 'about', label: 'About' },
            { id: 'why-gurkauna', label: 'Technology' },
            { id: 'contact', label: 'Contact' },
          ].map((item) => (
            <li key={item.id}>
              <button
                className={`nav-link ${activePage === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right Action Icons */}
        <div className="nav-actions">
          <button
            className="icon-btn"
            title="Search"
            aria-label="Search"
            onClick={() => handleNavClick('search')}
          >
            <Search size={18} strokeWidth={1.5} />
          </button>
          
          <button
            className="icon-btn"
            title="Account"
            aria-label="Account"
            onClick={() => handleNavClick('account')}
          >
            <User size={18} strokeWidth={1.5} />
          </button>

          <button
            className="icon-btn cart-btn"
            title="Bag"
            aria-label="Shopping Bag"
            onClick={onOpenCart}
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>

          {/* Mobile Hamburger */}
          <button
            className="mobile-toggle-btn"
            aria-label="Toggle Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className="mobile-backdrop"
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(4px)',
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
            maxWidth: '320px',
            background: '#FFFFFF',
            transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            display: 'flex',
            flexDirection: 'column',
          }} 
          onClick={e => e.stopPropagation()}
        >
          <div style={{ padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-divider)' }}>
            <GurkaunaLogo variant="dark" height={14} onClick={() => handleNavClick('home')} />
            <button 
              onClick={() => setMobileMenuOpen(false)} 
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-secondary)', padding: '4px' }}
            >
              <X size={18} />
            </button>
          </div>
          
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px 24px' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {[
                { id: 'home', label: 'Home' },
                { id: 'shop', label: 'Shop' },
                { id: 'collections', label: 'Collections' },
                { id: 'about', label: 'About' },
                { id: 'why-gurkauna', label: 'Technology' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => handleNavClick(item.id)} 
                    style={{ 
                      width: '100%',
                      textAlign: 'left',
                      padding: '14px 0',
                      fontSize: '0.95rem', 
                      fontWeight: activePage === item.id ? '600' : '400', 
                      color: activePage === item.id ? 'var(--color-text-primary)' : 'var(--color-text-secondary)', 
                      background: 'transparent', 
                      border: 'none', 
                      borderBottom: '1px solid var(--color-border)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {item.label}
                    <ArrowRight size={14} style={{ opacity: 0.3 }} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
