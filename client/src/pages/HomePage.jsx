import React, { useState } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  RefreshCw, 
  Lock, 
  CheckCircle2, 
  Star, 
  Compass,
  Check,
  Truck
} from 'lucide-react';
import ProductCard from '../components/ProductCard';
import './HomePage.css';

export default function HomePage({ 
  products = [], 
  onSelectProduct, 
  onAddToCart, 
  wishlist = [], 
  onToggleWishlist, 
  setActivePage 
}) {
  // Interactive Hero Finish Switcher
  const [activeHeroColor, setActiveHeroColor] = useState('green');
  
  // Interactive Technology Anatomy Tab
  const [techTab, setTechTab] = useState('shell');

  const heroVariants = {
    green: {
      name: 'Alpine Forest Green',
      subtitle: 'Bayer Makrolon® PC + ABS Composite',
      image: '/images/luggage-green.png',
      badge: 'Best Seller • Pro Series',
      price: 'NPR 9,999',
      hex: '#1C3F34'
    },
    black: {
      name: 'Midnight Obsidian',
      subtitle: 'Impact-Resistant Matte Finish Shell',
      image: '/images/luggage-black.png',
      badge: 'Timeless Classic',
      price: 'NPR 7,999',
      hex: '#18181B'
    },
    blue: {
      name: 'Himalayan Deep Navy',
      subtitle: '100% Virgin German Polycarbonate',
      image: '/images/luggage-blue.png',
      badge: 'Elite Flagship Edition',
      price: 'NPR 12,999',
      hex: '#1B2A4A'
    }
  };

  const currentHero = heroVariants[activeHeroColor];

  // Top products for bestsellers
  const bestSellers = products.length > 0 ? products.slice(0, 4) : [
    {
      id: 'gurkauna-pro',
      name: 'Gurkauna Pro',
      subtitle: 'PC + ABS Hard Shell Suitcase',
      material: 'PC + ABS Shell',
      price: 9999,
      originalPrice: 11999,
      badge: 'Best Seller',
      rating: 4.9,
      reviewsCount: 128,
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
      subtitle: 'ABS Lightweight Carry-On',
      material: 'ABS Hard Shell',
      price: 7999,
      originalPrice: 9500,
      badge: 'Popular',
      rating: 4.8,
      reviewsCount: 94,
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
      originalPrice: 14999,
      badge: 'Flagship',
      rating: 5.0,
      reviewsCount: 86,
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
      subtitle: 'Complete 3-Piece Bundle',
      material: 'PC + ABS Nesting Set',
      price: 24999,
      originalPrice: 29999,
      badge: 'Best Value',
      rating: 5.0,
      reviewsCount: 39,
      colors: [
        { name: 'Rose Gold', hex: '#B87333', image: '/images/luggage-green.png' },
        { name: 'Forest Green', hex: '#1C3F34', image: '/images/luggage-green.png' }
      ],
      sizes: ['Set of 3 (20" + 24" + 28")'],
      image: '/images/luggage-green.png'
    }
  ];

  // Tech Specs data
  const techSpecs = {
    shell: {
      title: 'Bayer Makrolon® Polycarbonate Shell',
      subtitle: 'High-Impact Flex Resistance',
      description: 'Unlike brittle plastic suitcases that crack under airport baggage handling pressure, Gurkauna shells are engineered to absorb heavy impact by flexing and snapping back into their pristine shape.',
      points: [
        'Multi-layer Bayer Polycarbonate matrix absorbs 200 kg drop impacts',
        'Scratch-resistant matte diamond texture resists scuffs & scrapes',
        'Tested down to -25°C in high-altitude Himalayan freezing climates'
      ],
      metric: '200 KG',
      metricLabel: 'Impact Absorption Test'
    },
    wheels: {
      title: 'Japanese Hinomoto 360° Silent Spinners',
      subtitle: 'Whisper-Quiet Multi-Surface Bearings',
      description: 'Equipped with authentic Hinomoto dual wheels from Japan. Designed with self-lubricating steel bearings and shock-damping rubber treads that glide smoothly over broken tarmac, airport tiles, and cobblestone.',
      points: [
        'Independent 360-degree dual spherical axis',
        'Noise-dampening rubber layer reduces travel rumble by 45%',
        '50 km continuous pavement endurance tested'
      ],
      metric: '0 dB',
      metricLabel: 'Whisper Glide Tested'
    },
    security: {
      title: 'Recessed Flush-Mounted TSA Lock',
      subtitle: 'Global Airport Standard Security',
      description: 'Integrated directly into the suitcase contour to prevent latch breakage on luggage carousels. TSA-compliant master key lock enables international airport inspections without damaging your luggage.',
      points: [
        'Flush-mount chassis eliminates snag points',
        'Redesigned 3-digit combination wheel with smooth tactile click',
        'Accepted across 650+ international aviation hubs'
      ],
      metric: '100%',
      metricLabel: 'TSA Master Security Approved'
    },
    interior: {
      title: 'Architectural Compression Divider System',
      subtitle: 'Maximum Packing Space & Organization',
      description: 'Maximize capacity by 25% with dual full-zip mesh compartments, waterproof laundry divider, and high-tension compression straps that keep shirts, coats, and boots perfectly secured.',
      points: [
        'Water-resistant lining with concealed zippered pockets',
        'Integrated laundry/wet bag for extended expeditions',
        'Deep cavity layout with nesting capability for seamless home storage'
      ],
      metric: '+25%',
      metricLabel: 'Usable Volume Optimization'
    }
  };

  return (
    <div className="landing-page-root">
      {/* ------------------------------------------------------------------ */}
      {/* 1. CINEMATIC LUXURY HERO SECTION */}
      {/* ------------------------------------------------------------------ */}
      <section className="hero-luxury-stage">
        <div className="hero-luxury-container">
          
          {/* Left Column: Brand Statement & Interaction */}
          <div className="hero-luxury-copy">
            <div className="hero-provenance-tag">
              <span className="provenance-pulse" />
              <span>KATHMANDU CRAFTED • GLOBAL ENGINEERING</span>
            </div>

            <h1 className="hero-luxury-headline">
              The Architecture <br />
              <span className="headline-italic">of Movement.</span>
            </h1>

            <p className="hero-luxury-lead">
              Born at the crossroads of rugged Himalayan transit and international travel. 
              Gurkauna crafts quiet luxury hard-shell luggage with whisper-quiet Japanese Hinomoto wheels 
              and aviation-grade composite shells.
            </p>

            {/* Live Hero Color Swatch Selector */}
            <div className="hero-finish-selector">
              <span className="finish-label">Select Colorway:</span>
              <div className="finish-swatches-group">
                <button
                  type="button"
                  className={`finish-swatch-btn ${activeHeroColor === 'green' ? 'active' : ''}`}
                  onClick={() => setActiveHeroColor('green')}
                  title="Alpine Forest Green"
                >
                  <span className="swatch-indicator" style={{ backgroundColor: '#1C3F34' }} />
                  <span>Alpine Green</span>
                </button>

                <button
                  type="button"
                  className={`finish-swatch-btn ${activeHeroColor === 'black' ? 'active' : ''}`}
                  onClick={() => setActiveHeroColor('black')}
                  title="Midnight Obsidian"
                >
                  <span className="swatch-indicator" style={{ backgroundColor: '#18181B' }} />
                  <span>Midnight Black</span>
                </button>

                <button
                  type="button"
                  className={`finish-swatch-btn ${activeHeroColor === 'blue' ? 'active' : ''}`}
                  onClick={() => setActiveHeroColor('blue')}
                  title="Himalayan Deep Navy"
                >
                  <span className="swatch-indicator" style={{ backgroundColor: '#1B2A4A' }} />
                  <span>Himalayan Navy</span>
                </button>
              </div>
            </div>

            {/* CTAs */}
            <div className="hero-luxury-actions">
              <button 
                type="button"
                className="btn-luxury-primary"
                onClick={() => setActivePage('shop')}
              >
                Explore The Collection <ArrowRight size={17} />
              </button>

              <button 
                type="button"
                className="btn-luxury-secondary"
                onClick={() => {
                  const techSection = document.getElementById('technology-section');
                  if (techSection) techSection.scrollIntoView({ behavior: 'smooth' });
                  else setActivePage('why-gurkauna');
                }}
              >
                <Compass size={17} /> Engineering Details
              </button>
            </div>

            {/* Micro Specs Strip */}
            <div className="hero-specs-strip">
              <div className="spec-item">
                <span className="spec-val">10-Year</span>
                <span className="spec-lbl">Global Warranty</span>
              </div>
              <div className="spec-divider" />
              <div className="spec-item">
                <span className="spec-val">3.2 kg</span>
                <span className="spec-lbl">Ultralight Cabin</span>
              </div>
              <div className="spec-divider" />
              <div className="spec-item">
                <span className="spec-val">Hinomoto 360°</span>
                <span className="spec-lbl">Silent Japanese Wheels</span>
              </div>
              <div className="spec-divider" />
              <div className="spec-item">
                <span className="spec-val">Free Dispatch</span>
                <span className="spec-lbl">Across Nepal</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Luggage Studio Pedestal */}
          <div className="hero-luggage-showcase">
            {/* Ambient Lighting Aura */}
            <div className="hero-lighting-aura" />

            {/* Suitcase Stage Visual */}
            <div className="hero-suitcases-stage">
              <img 
                src={currentHero.image} 
                alt={`Gurkauna Suitcase in ${currentHero.name}`}
                className="hero-main-luggage-img"
                loading="eager"
              />
              <div className="hero-pedestal-shadow" />
            </div>

            {/* Floating Architectural Callout Badges */}
            <div className="hero-floating-badge badge-top-right">
              <div className="badge-icon-box">
                <Lock size={15} />
              </div>
              <div className="badge-text-box">
                <span className="badge-heading">Recessed TSA Lock</span>
                <span className="badge-detail">Flush Security Chassis</span>
              </div>
            </div>

            <div className="hero-floating-badge badge-bottom-left">
              <div className="badge-icon-box">
                <RefreshCw size={15} />
              </div>
              <div className="badge-text-box">
                <span className="badge-heading">Hinomoto 360°</span>
                <span className="badge-detail">Silent Japanese Wheels</span>
              </div>
            </div>

            <div className="hero-floating-badge badge-bottom-right">
              <div className="badge-icon-box">
                <ShieldCheck size={15} />
              </div>
              <div className="badge-text-box">
                <span className="badge-heading">Bayer Makrolon®</span>
                <span className="badge-detail">Impact Flex Composite</span>
              </div>
            </div>

            {/* Active Model Pill */}
            <div className="hero-model-pill">
              <span className="model-dot" style={{ backgroundColor: currentHero.hex }} />
              <span className="model-name">{currentHero.name}</span>
              <span className="model-price">{currentHero.price}</span>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 2. THE ENGINEERING PROOF BAR */}
      {/* ------------------------------------------------------------------ */}
      <section className="proof-strip-section">
        <div className="proof-strip-container">
          <div className="proof-item">
            <div className="proof-icon-wrap">
              <ShieldCheck size={22} strokeWidth={1.75} />
            </div>
            <div>
              <h4 className="proof-title">Indestructible Shell</h4>
              <p className="proof-desc">Bayer PC composite flexes under extreme pressure & never cracks.</p>
            </div>
          </div>

          <div className="proof-item">
            <div className="proof-icon-wrap">
              <RefreshCw size={22} strokeWidth={1.75} />
            </div>
            <div>
              <h4 className="proof-title">Silent Japanese Wheels</h4>
              <p className="proof-desc">Dual Hinomoto 360° spinners glide whisper-quiet over gravel and asphalt.</p>
            </div>
          </div>

          <div className="proof-item">
            <div className="proof-icon-wrap">
              <Lock size={22} strokeWidth={1.75} />
            </div>
            <div>
              <h4 className="proof-title">Flush-Mounted TSA Locks</h4>
              <p className="proof-desc">Streamlined international security lock approved by global aviation hubs.</p>
            </div>
          </div>

          <div className="proof-item">
            <div className="proof-icon-wrap">
              <Truck size={22} strokeWidth={1.75} />
            </div>
            <div>
              <h4 className="proof-title">Nepal Express Delivery</h4>
              <p className="proof-desc">Same-day delivery in Kathmandu Valley; door-to-door courier nationwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 3. INTERACTIVE SUITCASE ANATOMY & TECHNOLOGY */}
      {/* ------------------------------------------------------------------ */}
      <section id="technology-section" className="tech-anatomy-section">
        <div className="tech-container">
          <div className="section-eyebrow-center">
            <span className="section-pill-tag">INDUSTRIAL ARCHITECTURE</span>
            <h2 className="section-headline-dark">Engineering The Standard.</h2>
            <p className="section-subtext-dark">
              Every detail of Gurkauna luggage is crafted with meticulous tolerances — designed to endure 
              the high altitudes of the Himalayas and the unforgiving transit of modern global terminals.
            </p>
          </div>

          {/* Interactive Technology Tabs */}
          <div className="tech-tabs-nav">
            {[
              { id: 'shell', label: '01. Polycarbonate Shell' },
              { id: 'wheels', label: '02. Hinomoto 360° Wheels' },
              { id: 'security', label: '03. Recessed TSA Lock' },
              { id: 'interior', label: '04. Modular Interior' }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`tech-tab-btn ${techTab === tab.id ? 'active' : ''}`}
                onClick={() => setTechTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Tab Content Card */}
          <div className="tech-card-display">
            <div className="tech-card-content">
              <span className="tech-subtitle">{techSpecs[techTab].subtitle}</span>
              <h3 className="tech-title">{techSpecs[techTab].title}</h3>
              <p className="tech-paragraph">{techSpecs[techTab].description}</p>
              
              <ul className="tech-points-list">
                {techSpecs[techTab].points.map((pt, idx) => (
                  <li key={idx} className="tech-point-item">
                    <CheckCircle2 size={18} className="tech-check-icon" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="tech-stat-callout">
                <span className="stat-number">{techSpecs[techTab].metric}</span>
                <span className="stat-desc">{techSpecs[techTab].metricLabel}</span>
              </div>
            </div>

            <div className="tech-card-visual">
              <div className="visual-pedestal">
                <img 
                  src={techTab === 'wheels' ? '/images/luggage-blue.png' : (techTab === 'security' ? '/images/luggage-black.png' : '/images/luggage-green.png')}
                  alt="Gurkauna Technology Detail"
                  className="tech-display-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 4. CURATED COLLECTIONS (THE SIGNATURE LINES) */}
      {/* ------------------------------------------------------------------ */}
      <section className="collections-curated-section">
        <div className="collections-container">
          <div className="section-eyebrow-split">
            <div>
              <span className="section-pill-tag">THE GURKAUNA FLEET</span>
              <h2 className="section-headline-dark">Crafted for Every Horizon.</h2>
            </div>
            <button 
              type="button"
              className="btn-text-link"
              onClick={() => setActivePage('collections')}
            >
              Compare All Lines <ArrowRight size={16} />
            </button>
          </div>

          <div className="collections-quad-grid">
            {/* 1. Classic Series */}
            <div className="collection-card-elevated" onClick={() => setActivePage('shop')}>
              <div className="card-media-wrap">
                <span className="collection-type-tag">Everyday Explorer</span>
                <img src="/images/luggage-black.png" alt="Gurkauna Classic" />
              </div>
              <div className="card-text-body">
                <div className="card-meta-line">
                  <span className="card-material">ABS Impact Shell</span>
                  <span className="card-starting">From NPR 7,999</span>
                </div>
                <h3 className="card-title">Gurkauna Classic</h3>
                <p className="card-desc">Lightweight carry-on for city breaks, weekend flights, and essential business.</p>
                <div className="card-action-row">
                  <span className="card-link-arrow">Discover Classic <ArrowRight size={15} /></span>
                </div>
              </div>
            </div>

            {/* 2. Pro Series */}
            <div className="collection-card-elevated featured-card" onClick={() => setActivePage('shop')}>
              <div className="card-badge-top">Most Popular</div>
              <div className="card-media-wrap">
                <span className="collection-type-tag">Frequent Flyer</span>
                <img src="/images/luggage-green.png" alt="Gurkauna Pro" />
              </div>
              <div className="card-text-body">
                <div className="card-meta-line">
                  <span className="card-material">Bayer PC + ABS Shell</span>
                  <span className="card-starting">From NPR 9,999</span>
                </div>
                <h3 className="card-title">Gurkauna Pro</h3>
                <p className="card-desc">Maximum durability with corner armor guards and Japanese Hinomoto wheels.</p>
                <div className="card-action-row">
                  <span className="card-link-arrow">Discover Pro <ArrowRight size={15} /></span>
                </div>
              </div>
            </div>

            {/* 3. Elite Series */}
            <div className="collection-card-elevated" onClick={() => setActivePage('shop')}>
              <div className="card-media-wrap">
                <span className="collection-type-tag">Flagship Luxury</span>
                <img src="/images/luggage-blue.png" alt="Gurkauna Elite" />
              </div>
              <div className="card-text-body">
                <div className="card-meta-line">
                  <span className="card-material">100% German Polycarbonate</span>
                  <span className="card-starting">From NPR 12,999</span>
                </div>
                <h3 className="card-title">Gurkauna Elite</h3>
                <p className="card-desc">Pure German Makrolon® polycarbonate with digital scale handle & lifetime guarantee.</p>
                <div className="card-action-row">
                  <span className="card-link-arrow">Discover Elite <ArrowRight size={15} /></span>
                </div>
              </div>
            </div>

            {/* 4. Full Travel Sets */}
            <div className="collection-card-elevated" onClick={() => setActivePage('shop')}>
              <div className="card-media-wrap">
                <span className="collection-type-tag">Expedition Bundle</span>
                <img src="/images/luggage-green.png" alt="Gurkauna Travel Sets" />
              </div>
              <div className="card-text-body">
                <div className="card-meta-line">
                  <span className="card-material">3-Piece Nested Bundle</span>
                  <span className="card-starting">NPR 24,999</span>
                </div>
                <h3 className="card-title">The Explorer Set</h3>
                <p className="card-desc">Full 3-piece bundle (Cabin 20", Medium 24", Large 28") that nest seamlessly together.</p>
                <div className="card-action-row">
                  <span className="card-link-arrow">Discover Sets <ArrowRight size={15} /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 5. TRAVELERS' BESTSELLERS */}
      {/* ------------------------------------------------------------------ */}
      <section className="bestsellers-luxury-section">
        <div className="bestsellers-luxury-container">
          <div className="section-eyebrow-split">
            <div>
              <span className="section-pill-tag">EXPLORER FAVORITES</span>
              <h2 className="section-headline-dark">Top Rated Suitcases.</h2>
              <p className="section-subtext-inline">Trusted across 40+ countries and verified by Himalayan expeditions.</p>
            </div>
            <button 
              type="button" 
              className="btn-luxury-secondary-dark"
              onClick={() => setActivePage('shop')}
            >
              View Full Catalog <ArrowRight size={16} />
            </button>
          </div>

          <div className="bestsellers-products-grid">
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
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 6. HIMALAYAN PROOF / EDITORIAL STORY */}
      {/* ------------------------------------------------------------------ */}
      <section className="editorial-statement-section">
        <div className="editorial-statement-container">
          <div className="editorial-quote-block">
            <span className="editorial-tagline">THE GURKAUNA PHILOSOPHY</span>
            <blockquote className="editorial-main-quote">
              "Most international luggage is designed for flat European concourses. Gurkauna is engineered to thrive on both five-star marble lobbies and rugged mountain transit."
            </blockquote>
            <p className="editorial-quote-author">
              Crafted in Kathmandu • Engineered for the Modern Traveler
            </p>
          </div>

          {/* Test Metric Cards */}
          <div className="durability-test-metrics">
            <div className="metric-box">
              <span className="metric-title">50 KM</span>
              <span className="metric-subtitle">Cobblestone Wheel Test</span>
              <p className="metric-text">Hinomoto wheels rolled continuously over rough cobblestone with zero bearing wear.</p>
            </div>
            <div className="metric-box">
              <span className="metric-title">-25°C</span>
              <span className="metric-subtitle">Sub-Zero Thermal Test</span>
              <p className="metric-text">Polycarbonate shell survives extreme altitude freezing without material embrittlement.</p>
            </div>
            <div className="metric-box">
              <span className="metric-title">2 METERS</span>
              <span className="metric-subtitle">Drop Corner Integrity</span>
              <p className="metric-text">Full baggage drops onto concrete corners with zero structural breakage or latch failure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 7. VERIFIED REVIEWS */}
      {/* ------------------------------------------------------------------ */}
      <section className="reviews-luxury-section">
        <div className="reviews-luxury-container">
          <div className="section-eyebrow-center">
            <span className="section-pill-tag">VERIFIED EXPEDITIONS</span>
            <h2 className="section-headline-dark">Stories from the Road.</h2>
            <div className="star-rating-summary">
              <div className="stars-row">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />)}
              </div>
              <span className="rating-text">4.9 / 5.0 Average Rating across 300+ Verified Buyers</span>
            </div>
          </div>

          <div className="reviews-cards-grid">
            {[
              {
                name: 'Aavash Shrestha',
                origin: 'Kathmandu, Nepal',
                trip: 'Trip to Annapurna & Bangkok',
                text: 'The wheel glide is astonishing. You barely need to push it; it almost moves on its own. Held up without a scratch through three domestic flights.'
              },
              {
                name: 'Dr. Pratima Rai',
                origin: 'Lalitpur, Nepal',
                trip: 'Conference in Zurich',
                text: 'Finally, a luxury Nepali brand that genuinely stands shoulder-to-shoulder with Rimowa and Tumi. The matte finish and aluminium handle feel exceptionally high-end.'
              },
              {
                name: 'Samir Thapa',
                origin: 'Pokhara, Nepal',
                trip: 'Flight to Dubai & London',
                text: 'The TSA lock clicked cleanly and the interior compression dividers saved me from checking a second bag. Gurkauna is my definitive travel companion.'
              }
            ].map((rev, idx) => (
              <div key={idx} className="luxury-review-card">
                <div className="card-stars-row">
                  {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="#F59E0B" color="#F59E0B" />)}
                  <span className="verified-badge"><Check size={12} /> Verified Traveler</span>
                </div>
                <p className="review-quote-text">"{rev.text}"</p>
                <div className="review-author-meta">
                  <div className="author-avatar">{rev.name.charAt(0)}</div>
                  <div>
                    <h5 className="author-name">{rev.name}</h5>
                    <span className="author-trip">{rev.origin} • {rev.trip}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 8. VIP EXPEDITION NEWSLETTER & PROMISE */}
      {/* ------------------------------------------------------------------ */}
      <section className="vip-promise-section">
        <div className="vip-promise-container">
          <div className="vip-content-box">
            <span className="vip-tag">GURKAUNA EXPEDITION SOCIETY</span>
            <h2 className="vip-title">Pack Your World with Confidence.</h2>
            <p className="vip-desc">
              Every suitcase is backed by our 10-Year Global Warranty and dedicated Kathmandu customer concierge. 
              Receive complimentary custom leather luggage tag personalization with your initial order.
            </p>
            <div className="vip-cta-row">
              <button 
                type="button" 
                className="btn-luxury-primary"
                onClick={() => setActivePage('shop')}
              >
                Shop All Luggage <ArrowRight size={17} />
              </button>
              <button 
                type="button" 
                className="btn-luxury-secondary-dark"
                onClick={() => setActivePage('warranty')}
              >
                View 10-Year Warranty
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
