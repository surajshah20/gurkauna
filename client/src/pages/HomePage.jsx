import React, { useState, useCallback } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './HomePage.css';

export default function HomePage({ 
  products = [], 
  onSelectProduct, 
  onAddToCart, 
  wishlist = [], 
  onToggleWishlist, 
  setActivePage 
}) {
  const [activeHeroColor, setActiveHeroColor] = useState('green');
  const [imgFading, setImgFading] = useState(false);

  const productsRef = useScrollReveal();
  const storyRef = useScrollReveal();
  const reviewsRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  const handleColorSwitch = useCallback((color) => {
    if (color === activeHeroColor) return;
    setImgFading(true);
    setTimeout(() => {
      setActiveHeroColor(color);
      setImgFading(false);
    }, 250);
  }, [activeHeroColor]);

  const heroColors = {
    green: { name: 'Forest Green', image: '/images/luggage-green.png', hex: '#1C3F34' },
    black: { name: 'Midnight Black', image: '/images/luggage-black.png', hex: '#18181B' },
    blue: { name: 'Deep Navy', image: '/images/luggage-blue.png', hex: '#1B2A4A' },
  };

  const currentHero = heroColors[activeHeroColor];

  const topProducts = products.length > 0 ? products.slice(0, 4) : [
    {
      id: 'gurkauna-pro',
      name: 'Gurkauna Pro',
      subtitle: 'PC + ABS Hard Shell',
      material: 'PC + ABS Shell',
      price: 9999,
      colors: [
        { name: 'Forest Green', hex: '#1C3F34', image: '/images/luggage-green.png' },
        { name: 'Midnight Black', hex: '#1C1C1E', image: '/images/luggage-black.png' }
      ],
      sizes: ['24" (Medium)'],
      image: '/images/luggage-green.png'
    },
    {
      id: 'gurkauna-classic',
      name: 'Gurkauna Classic',
      subtitle: 'ABS Lightweight',
      material: 'ABS Hard Shell',
      price: 7999,
      colors: [
        { name: 'Midnight Black', hex: '#1C1C1E', image: '/images/luggage-black.png' },
        { name: 'Navy Blue', hex: '#1B2A4A', image: '/images/luggage-blue.png' }
      ],
      sizes: ['20" (Cabin)'],
      image: '/images/luggage-black.png'
    },
    {
      id: 'gurkauna-elite',
      name: 'Gurkauna Elite',
      subtitle: '100% German Polycarbonate',
      material: 'Makrolon Polycarbonate',
      price: 12999,
      colors: [
        { name: 'Navy Blue', hex: '#1B2A4A', image: '/images/luggage-blue.png' },
        { name: 'Forest Green', hex: '#1C3F34', image: '/images/luggage-green.png' }
      ],
      sizes: ['28" (Large)'],
      image: '/images/luggage-blue.png'
    },
    {
      id: 'gurkauna-travel-set',
      name: 'Gurkauna Travel Set',
      subtitle: '3-Piece Bundle',
      material: 'PC + ABS Nesting Set',
      price: 24999,
      colors: [
        { name: 'Forest Green', hex: '#1C3F34', image: '/images/luggage-green.png' }
      ],
      sizes: ['Set of 3'],
      image: '/images/luggage-green.png'
    }
  ];

  return (
    <div className="home-root">

      {/* ── HERO ── Full viewport, product-first */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <span className="hero-eyebrow">Engineered in Nepal</span>
            <h1 className="hero-heading">
              Pack Your World.
            </h1>
            <p className="hero-sub">
              Precision hard-shell luggage. Built for cobblestone alleys and five-star lobbies.
            </p>
            <div className="hero-actions">
              <button 
                className="btn-primary"
                onClick={() => setActivePage('shop')}
              >
                Shop Now <ArrowRight size={16} />
              </button>
              <button 
                className="btn-ghost"
                onClick={() => setActivePage('about')}
              >
                Our Story
              </button>
            </div>
          </div>

          <div className="hero-product">
            <div className="hero-product-stage">
              <img 
                src={currentHero.image}
                alt={`Gurkauna in ${currentHero.name}`}
                className={`hero-product-img ${imgFading ? 'fading' : ''}`}
              />
            </div>
            
            {/* Color selector with name label */}
            <div className="hero-color-wrapper">
              <span className="hero-color-label">{currentHero.name}</span>
              <div className="hero-color-selector">
                {Object.entries(heroColors).map(([key, val]) => (
                  <button
                    key={key}
                    className={`hero-color-dot ${activeHeroColor === key ? 'active' : ''}`}
                    style={{ backgroundColor: val.hex }}
                    onClick={() => handleColorSwitch(key)}
                    title={val.name}
                    aria-label={val.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT LINEUP ── */}
      <section className="products-section" ref={productsRef}>
        <div className="products-inner">
          <div className="products-header reveal">
            <div>
              <h2 className="products-heading">The Collection</h2>
              <p className="products-sub">Built for every journey.</p>
            </div>
            <button 
              className="btn-text"
              onClick={() => setActivePage('shop')}
            >
              View All <ArrowRight size={14} />
            </button>
          </div>

          <div className="products-grid-home">
            {topProducts.map((prod, idx) => (
              <div key={prod.id} className={`reveal reveal-delay-${idx + 1}`}>
                <ProductCard
                  product={prod}
                  onSelectProduct={onSelectProduct}
                  onAddToCart={onAddToCart}
                  isWishlisted={wishlist.some(w => w.id === prod.id)}
                  onToggleWishlist={onToggleWishlist}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRAND STATEMENT ── Dark, cinematic */}
      <section className="statement-section" ref={storyRef}>
        <div className="statement-inner reveal">
          <blockquote className="statement-text">
            "Designed to thrive on five-star marble lobbies
            and rugged mountain transit alike."
          </blockquote>
          <p className="statement-credit">
            Crafted in Kathmandu — 10-year global warranty
          </p>
          <button
            className="btn-outline-white"
            onClick={() => setActivePage('why-gurkauna')}
          >
            Learn More
          </button>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="reviews-section-home" ref={reviewsRef}>
        <div className="reviews-inner">
          <div className="reviews-header reveal">
            <h2 className="reviews-heading">What Travelers Say</h2>
            <div className="reviews-rating">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#1D1D1F" color="#1D1D1F" />
              ))}
              <span className="rating-label">4.9 from 300+ reviews</span>
            </div>
          </div>

          <div className="reviews-grid-home">
            {[
              {
                name: 'Aavash S.',
                location: 'Kathmandu',
                text: 'The wheel glide is astonishing. You barely need to push it. Held up without a scratch through three domestic flights.',
              },
              {
                name: 'Dr. Pratima R.',
                location: 'Lalitpur',
                text: 'Finally, a luxury Nepali brand that stands shoulder-to-shoulder with Rimowa and Tumi. Exceptional quality.',
              },
              {
                name: 'Samir T.',
                location: 'Pokhara',
                text: 'The TSA lock clicked cleanly and the compression dividers saved me from checking a second bag. My definitive travel companion.',
              }
            ].map((review, idx) => (
              <div key={idx} className={`review-card reveal reveal-delay-${idx + 1}`}>
                <p className="review-text">"{review.text}"</p>
                <div className="review-author">
                  <span className="review-name">{review.name}</span>
                  <span className="review-location">{review.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="cta-section" ref={ctaRef}>
        <div className="cta-inner reveal">
          <h2 className="cta-heading">Ready to Travel Better?</h2>
          <p className="cta-sub">
            Free shipping across Nepal. 10-year warranty on every suitcase.
          </p>
          <button
            className="btn-primary-light"
            onClick={() => setActivePage('shop')}
          >
            Shop the Collection <ArrowRight size={16} />
          </button>
        </div>
      </section>

    </div>
  );
}
