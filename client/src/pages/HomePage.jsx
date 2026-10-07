import React from 'react';
import { ArrowRight, ShieldCheck, RefreshCw, Lock, Feather, CheckCircle2 } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import GurkaunaLogo from '../components/GurkaunaLogo';

export default function HomePage({ products = [], onSelectProduct, onAddToCart, wishlist = [], onToggleWishlist, setActivePage }) {
  // Select top 4 best sellers or default fallback array
  const bestSellers = products.length > 0 ? products.slice(0, 4) : [
    {
      id: 'gurkauna-pro',
      name: 'Gurkauna Pro',
      subtitle: 'PC + ABS Hard Shell Suitcase',
      material: 'PC + ABS Shell',
      price: 9999,
      originalPrice: 11999,
      badge: 'Bestseller',
      colors: [
        { name: 'Forest Green', hex: '#1C3F34', image: 'https://images.unsplash.com/photo-1581553680321-4fffae59febd?auto=format&fit=crop&w=800&q=80' },
        { name: 'Midnight Black', hex: '#1C1C1E', image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80' }
      ],
      sizes: ['24" (Medium)'],
      image: 'https://images.unsplash.com/photo-1581553680321-4fffae59febd?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'gurkauna-classic',
      name: 'Gurkauna Classic',
      subtitle: 'ABS Lightweight Carry-On',
      material: 'ABS Hard Shell',
      price: 7999,
      originalPrice: 9500,
      badge: 'Popular',
      colors: [
        { name: 'Midnight Black', hex: '#1C1C1E', image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80' },
        { name: 'Navy Blue', hex: '#1B2A4A', image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80' }
      ],
      sizes: ['20" (Cabin)'],
      image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'gurkauna-elite',
      name: 'Gurkauna Elite',
      subtitle: '100% German Polycarbonate',
      material: 'Makrolon Polycarbonate',
      price: 12999,
      originalPrice: 14999,
      badge: 'Premium',
      colors: [
        { name: 'Titanium Silver', hex: '#A8A9AD', image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80' },
        { name: 'Forest Green', hex: '#1C3F34', image: 'https://images.unsplash.com/photo-1581553680321-4fffae59febd?auto=format&fit=crop&w=800&q=80' }
      ],
      sizes: ['28" (Large)'],
      image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'gurkauna-travel-set',
      name: 'Gurkauna Travel Set',
      subtitle: 'Complete 3-Piece Bundle',
      material: 'PC + ABS Nesting Set',
      price: 24999,
      originalPrice: 29999,
      badge: 'Value Set',
      colors: [
        { name: 'Rose Gold', hex: '#B87333', image: 'https://images.unsplash.com/photo-1581553680321-4fffae59febd?auto=format&fit=crop&w=800&q=80' },
        { name: 'Forest Green', hex: '#1C3F34', image: 'https://images.unsplash.com/photo-1581553680321-4fffae59febd?auto=format&fit=crop&w=800&q=80' }
      ],
      sizes: ['Set of 3'],
      image: 'https://images.unsplash.com/photo-1581553680321-4fffae59febd?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const collections = [
    {
      title: 'Gurkauna Classic',
      desc: 'Everyday travel.',
      image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Gurkauna Pro',
      desc: 'Built for frequent travellers.',
      image: 'https://images.unsplash.com/photo-1581553680321-4fffae59febd?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Gurkauna Elite',
      desc: 'Premium materials. Refined design.',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Travel Sets',
      desc: 'Complete travel solutions.',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const testimonials = [
    {
      name: 'Aavash Shrestha',
      location: 'Kathmandu',
      quote: 'The craftsmanship and wheel smoothness are incredible. Took it on a trip through Pokhara and it effortlessly handled every terrain.'
    },
    {
      name: 'Pratima Rai',
      location: 'Lalitpur',
      quote: 'Finally, a premium luggage brand from Nepal that rivals international luxury brands. Extremely lightweight yet rock solid.'
    },
    {
      name: 'Sujan Adhikari',
      location: 'Pokhara',
      quote: 'TSA locks work seamlessly and the interior dividers keep everything organized. Gurkauna is my go-to travel companion.'
    }
  ];

  return (
    <div className="landing-page">
      {/* ---------------------------------------------------- */}
      {/* 2. HERO SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-eyebrow">NEPALESE HERITAGE • GLOBAL STANDARD</span>
            <h1 className="hero-headline">Pack Your World.</h1>
            <p className="hero-subtext">
              Gurkauna creates reliable, stylish luggage for every journey — engineered with impact-resistant shells, smooth spinner wheels, and timeless aesthetics.
            </p>
            <div className="hero-cta-group">
              <button 
                className="btn-brand-primary"
                onClick={() => setActivePage('shop')}
              >
                Shop Collection
              </button>
              <button 
                className="btn-brand-secondary"
                onClick={() => setActivePage('about')}
              >
                Explore Gurkauna
              </button>
            </div>
          </div>

          <div className="hero-media">
            <div className="hero-img-frame">
              <img 
                src="https://images.unsplash.com/photo-1581553680321-4fffae59febd?auto=format&fit=crop&w=1200&q=80" 
                alt="Gurkauna Premium Suitcase" 
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. TRUST / PRODUCT BENEFITS */}
      {/* ---------------------------------------------------- */}
      <section className="benefits-strip">
        <div className="benefits-container">
          <div className="benefit-item">
            <div className="benefit-icon-wrapper">
              <ShieldCheck size={22} strokeWidth={1.5} />
            </div>
            <div className="benefit-text">
              <h4 className="benefit-title">Durable Materials</h4>
              <p className="benefit-desc">Built for the journey.</p>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon-wrapper">
              <RefreshCw size={22} strokeWidth={1.5} />
            </div>
            <div className="benefit-text">
              <h4 className="benefit-title">360° Spinner Wheels</h4>
              <p className="benefit-desc">Smooth movement.</p>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon-wrapper">
              <Lock size={22} strokeWidth={1.5} />
            </div>
            <div className="benefit-text">
              <h4 className="benefit-title">TSA-Ready Lock</h4>
              <p className="benefit-desc">Travel with confidence.</p>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon-wrapper">
              <Feather size={22} strokeWidth={1.5} />
            </div>
            <div className="benefit-text">
              <h4 className="benefit-title">Lightweight Design</h4>
              <p className="benefit-desc">More space. Less weight.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. FEATURED COLLECTION */}
      {/* ---------------------------------------------------- */}
      <section className="section-padding collection-section">
        <div className="section-header">
          <h2 className="section-title">Find Your Perfect Travel Companion</h2>
          <p className="section-subtitle">
            Tailored dimensions and materials designed for weekend escapes, business travel, and mountain expeditions.
          </p>
        </div>

        <div className="collections-grid">
          {collections.map((item, idx) => (
            <div 
              key={idx} 
              className="collection-card"
              onClick={() => setActivePage('shop')}
            >
              <div className="collection-img-wrapper">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="collection-content">
                <h3 className="collection-name">{item.title}</h3>
                <p className="collection-desc">{item.desc}</p>
                <span className="collection-link">
                  Explore Collection →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 5. FEATURED PRODUCT / EDITORIAL SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="editorial-section">
        <div className="editorial-container">
          <div className="editorial-media">
            <img 
              src="https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=1000&q=80" 
              alt="The Gurkauna Difference" 
              className="editorial-img"
            />
          </div>

          <div className="editorial-content">
            <span className="editorial-eyebrow">THE GURKAUNA DIFFERENCE</span>
            <h2 className="editorial-title">Built for wherever you go.</h2>
            <p className="editorial-paragraph">
              Every piece of Gurkauna luggage is crafted with meticulous attention to detail — combining impact-absorbing materials, silent gliding wheels, and ergonomic hardware to withstand the rigors of modern travel.
            </p>

            <div className="editorial-features-list">
              <div className="editorial-feature-item">
                <CheckCircle2 size={18} className="feature-check-icon" />
                <div>
                  <strong>Premium Materials</strong> — High-grade PC & ABS shells that flex under pressure and resist heavy impact.
                </div>
              </div>
              <div className="editorial-feature-item">
                <CheckCircle2 size={18} className="feature-check-icon" />
                <div>
                  <strong>Smooth Spinner Wheels</strong> — Japanese Hinomoto 360° dual wheels for silent, effortless motion.
                </div>
              </div>
              <div className="editorial-feature-item">
                <CheckCircle2 size={18} className="feature-check-icon" />
                <div>
                  <strong>Secure TSA Lock</strong> — Flush-mounted combination lock approved for global airport security.
                </div>
              </div>
              <div className="editorial-feature-item">
                <CheckCircle2 size={18} className="feature-check-icon" />
                <div>
                  <strong>Thoughtful Interior</strong> — Dual zipper mesh compartments and compression straps for smart packing.
                </div>
              </div>
            </div>

            <button 
              className="btn-brand-primary editorial-btn"
              onClick={() => setActivePage('about')}
            >
              Discover the Details →
            </button>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 6. TRAVEL / BRAND STORY SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="immersive-story-section">
        <div className="immersive-overlay" />
        <div className="immersive-content">
          <h2 className="immersive-title">From City Streets to Mountain Roads.</h2>
          <p className="immersive-subtext">
            Wherever the journey takes you, Gurkauna is made to move with you.
          </p>
          <button 
            className="btn-brand-outline-white"
            onClick={() => setActivePage('about')}
          >
            Explore Our Story →
          </button>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 7. BESTSELLERS */}
      {/* ---------------------------------------------------- */}
      <section className="section-padding bestsellers-section">
        <div className="section-header">
          <h2 className="section-title">Travelers' Favorites</h2>
          <p className="section-subtitle">Our most popular luggage trusted by adventurers and frequent flyers.</p>
        </div>

        <div className="products-grid">
          {bestSellers.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onSelectProduct={onSelectProduct}
              onAddToCart={onAddToCart}
              isWishlisted={wishlist.some(w => w.id === prod.id)}
              onToggleWishlist={onToggleWishlist}
            />
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 8. BRAND STATEMENT */}
      {/* ---------------------------------------------------- */}
      <section className="brand-statement-section">
        <div className="statement-container">
          <blockquote className="statement-quote">
            "Made for the journeys worth remembering."
          </blockquote>
          <p className="statement-subtext">
            Gurkauna embodies the spirit of exploration — creating quiet luxury luggage built for a lifetime of movement across Nepal and beyond.
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 9. CUSTOMER REVIEWS */}
      {/* ---------------------------------------------------- */}
      <section className="section-padding reviews-section">
        <div className="section-header">
          <h2 className="section-title">Real Journeys. Real Stories.</h2>
          <p className="section-subtitle">Read how Gurkauna elevates travel for explorers across Nepal.</p>
        </div>

        <div className="reviews-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="testimonial-author">
                <span className="author-name">{t.name}</span>
                <span className="author-location">{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 10. FINAL CTA */}
      {/* ---------------------------------------------------- */}
      <section className="final-cta-section">
        <div className="final-cta-container">
          <GurkaunaLogo variant="white" height={54} />
          <h2 className="final-cta-title">Ready to Pack Your World?</h2>
          <p className="final-cta-subtitle">Discover our full collection of cabin, medium, and large suitcases.</p>
          <button 
            className="btn-brand-primary final-btn"
            onClick={() => setActivePage('shop')}
          >
            Shop Gurkauna →
          </button>
        </div>
      </section>
    </div>
  );
}
