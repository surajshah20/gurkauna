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
                onClick={() => handleNavClick('shop')}
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
                onClick={() => handleNavClick('home')}
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

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <ul className="mobile-nav-links">
              <li>
                <button onClick={() => handleNavClick('home')} className={activePage === 'home' ? 'active' : ''}>
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('shop')} className={activePage === 'shop' ? 'active' : ''}>
                  Shop
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('shop')}>
                  Collections
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className={activePage === 'about' ? 'active' : ''}>
                  Our Story
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('home')}>
                  Why Gurkauna
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className={activePage === 'contact' ? 'active' : ''}>
                  Contact
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
