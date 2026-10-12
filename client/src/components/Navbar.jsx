import React, { useState } from 'react';
import { ShoppingBag, Search, User, Heart, Menu, X } from 'lucide-react';
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
          <span>Complimentary Shipping Across Nepal on Orders Over NPR 20,000</span>
          <span className="announcement-divider">•</span>
          <span className="announcement-highlight">Crafted for Global Expeditions</span>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          {/* Left: Primary Red Logo */}
          <div className="navbar-brand">
            <GurkaunaLogo 
              variant="red" 
              height={42} 
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
                Shop
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
                className={`nav-link ${activePage === 'about' ? 'active' : ''}`}
                onClick={() => handleNavClick('about')}
              >
                Our Story
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${activePage === 'why-gurkauna' ? 'active' : ''}`}
                onClick={() => handleNavClick('why-gurkauna')}
              >
                Why Gurkauna
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${activePage === 'contact' ? 'active' : ''}`}
                onClick={() => handleNavClick('contact')}
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Right Action Icons */}
          <div className="nav-actions">
            <button
              className="icon-btn"
              title="Search"
              aria-label="Search"
              onClick={() => handleNavClick('shop')}
            >
              <Search size={20} strokeWidth={1.75} />
            </button>
            
            <button
              className="icon-btn"
              title="Account"
              aria-label="Account"
              onClick={() => handleNavClick('account')}
            >
              <User size={20} strokeWidth={1.75} />
            </button>

            <button
              className="icon-btn cart-btn"
              title="Shopping Cart"
              aria-label="Shopping Cart"
              onClick={onOpenCart}
            >
              <ShoppingBag size={20} strokeWidth={1.75} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-toggle-btn"
              aria-label="Toggle Navigation Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        <div style={{
           position: 'fixed',
           top: 0,
           left: 0,
           bottom: 0,
           width: '100%',
           height: '100vh',
           background: 'rgba(0,0,0,0.5)',
           zIndex: 2000,
           opacity: mobileMenuOpen ? 1 : 0,
           pointerEvents: mobileMenuOpen ? 'auto' : 'none',
           transition: 'opacity 0.3s ease-in-out'
        }} onClick={() => setMobileMenuOpen(false)}>
          <div style={{
             position: 'absolute',
             top: 0,
             left: 0,
             bottom: 0,
             width: '85%',
             maxWidth: '320px',
             background: 'white',
             transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
             transition: 'transform 0.3s ease-in-out',
             display: 'flex',
             flexDirection: 'column',
             boxShadow: 'var(--shadow-lg)'
          }} onClick={e => e.stopPropagation()}>
             <div style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E4E4E7' }}>
               <GurkaunaLogo variant="red" height={36} onClick={() => handleNavClick('home')} />
               <button onClick={() => setMobileMenuOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#71717A' }}>
                 <X size={24} />
               </button>
             </div>
             
             <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <li><button onClick={() => handleNavClick('home')} style={{ fontSize: '1.2rem', fontWeight: activePage === 'home' ? '700' : '500', color: activePage === 'home' ? '#E11D48' : 'var(--color-dark)', background: 'none', border: 'none', cursor: 'pointer' }}>Home</button></li>
                  <li><button onClick={() => handleNavClick('shop')} style={{ fontSize: '1.2rem', fontWeight: activePage === 'shop' ? '700' : '500', color: activePage === 'shop' ? '#E11D48' : 'var(--color-dark)', background: 'none', border: 'none', cursor: 'pointer' }}>Shop</button></li>
                  <li><button onClick={() => handleNavClick('collections')} style={{ fontSize: '1.2rem', fontWeight: activePage === 'collections' ? '700' : '500', color: activePage === 'collections' ? '#E11D48' : 'var(--color-dark)', background: 'none', border: 'none', cursor: 'pointer' }}>Collections</button></li>
                  <li><button onClick={() => handleNavClick('about')} style={{ fontSize: '1.2rem', fontWeight: activePage === 'about' ? '700' : '500', color: activePage === 'about' ? '#E11D48' : 'var(--color-dark)', background: 'none', border: 'none', cursor: 'pointer' }}>Our Story</button></li>
                  <li><button onClick={() => handleNavClick('why-gurkauna')} style={{ fontSize: '1.2rem', fontWeight: activePage === 'why-gurkauna' ? '700' : '500', color: activePage === 'why-gurkauna' ? '#E11D48' : 'var(--color-dark)', background: 'none', border: 'none', cursor: 'pointer' }}>Why Gurkauna</button></li>
                  <li><button onClick={() => handleNavClick('contact')} style={{ fontSize: '1.2rem', fontWeight: activePage === 'contact' ? '700' : '500', color: activePage === 'contact' ? '#E11D48' : 'var(--color-dark)', background: 'none', border: 'none', cursor: 'pointer' }}>Contact</button></li>
                </ul>
             </div>
             
             <div style={{ padding: '24px', borderTop: '1px solid #E4E4E7', background: '#FAFAFA' }}>
                <button onClick={() => handleNavClick('account')} style={{ width: '100%', padding: '16px', background: 'white', border: '1px solid #E4E4E7', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', fontSize: '1rem', fontWeight: '600', color: 'var(--color-dark)', cursor: 'pointer', marginBottom: '12px' }}>
                   <User size={20} /> My Account
                </button>
             </div>
          </div>
        </div>

      </nav>
    </>
  );
}
