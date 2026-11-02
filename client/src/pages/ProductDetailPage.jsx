import React, { useState } from 'react';
import { Star, ShieldCheck, RefreshCw, Lock, Truck, ShoppingBag, ArrowLeft, Heart, ChevronRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';

export default function ProductDetailPage({ 
  product, 
  allProducts = [], 
  onAddToCart, 
  onSelectProduct, 
  wishlist = [], 
  onToggleWishlist, 
  setActivePage 
}) {
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '24" (Medium)');
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || { name: 'Forest Green', hex: '#1C3F34' });
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');

  if (!product) return null;

  const isWishlisted = wishlist.some(w => w.id === product.id);
  const recommendations = allProducts.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div style={{ paddingBottom: '100px', backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
      <style dangerouslySetInnerHTML={{__html: `
        .pdp-wrapper {
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 0 var(--space-lg);
        }
        .product-grid-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
        }
        .gallery-main {
          background: #FFFFFF;
          border-radius: var(--radius-2xl);
          border: 1px solid var(--color-border);
          overflow: hidden;
          height: 540px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          transition: all var(--duration-normal) var(--ease-out);
        }
        .gallery-main img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          mix-blend-mode: multiply;
        }
        .gallery-thumbnails {
          display: flex;
          gap: 12px;
          margin-top: 16px;
        }
        .gallery-thumb-btn {
          width: 72px;
          height: 72px;
          border-radius: var(--radius-md);
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          padding: 6px;
          cursor: pointer;
          transition: all var(--duration-fast) ease;
        }
        .gallery-thumb-btn.active {
          border-color: var(--color-text-primary);
          box-shadow: 0 0 0 1px var(--color-text-primary);
        }
        .gallery-thumb-btn img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          mix-blend-mode: multiply;
        }
        .pdp-tag {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-brand);
          margin-bottom: 8px;
        }
        .pdp-title {
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 600;
          letter-spacing: -0.03em;
          color: var(--color-text-primary);
          line-height: 1.1;
          margin-bottom: 8px;
        }
        .pdp-subtitle {
          font-size: 1rem;
          color: var(--color-text-secondary);
          margin-bottom: 24px;
        }
        .pdp-price {
          font-size: 1.8rem;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: var(--color-text-primary);
        }
        .pdp-pill-btn {
          padding: 10px 20px;
          border-radius: var(--radius-full);
          font-size: 0.88rem;
          font-weight: 500;
          cursor: pointer;
          transition: all var(--duration-fast) ease;
          border: 1px solid var(--color-border-strong);
          background: transparent;
          color: var(--color-text-primary);
        }
        .pdp-pill-btn.active {
          background: var(--color-text-primary);
          color: var(--color-white);
          border-color: var(--color-text-primary);
        }
        .pdp-color-swatch {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: none;
          outline: 2px solid transparent;
          outline-offset: 3px;
          cursor: pointer;
          transition: all var(--duration-fast) ease;
        }
        .pdp-color-swatch.active {
          outline-color: var(--color-text-primary);
          transform: scale(1.06);
        }
        .pdp-add-btn {
          flex: 1;
          background: var(--color-text-primary);
          color: var(--color-white);
          font-size: 0.95rem;
          font-weight: 500;
          padding: 16px 32px;
          border-radius: var(--radius-full);
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: opacity var(--duration-fast) ease;
        }
        .pdp-add-btn:hover {
          opacity: 0.85;
        }
        .pdp-wish-btn {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-full);
          background: #FFFFFF;
          border: 1px solid var(--color-border-strong);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--duration-fast) ease;
        }
        .pdp-wish-btn:hover {
          border-color: var(--color-text-primary);
        }
        .pdp-features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 20px;
          margin-bottom: 32px;
        }
        .pdp-feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--color-text-primary);
        }
        .pdp-feature-icon {
          color: var(--color-text-secondary);
        }
        @media (min-width: 1024px) {
          .product-grid-layout {
            grid-template-columns: 1.15fr 1fr;
            align-items: start;
            gap: 64px;
          }
        }
      `}} />

      {/* Breadcrumb & Back */}
      <div className="pdp-wrapper" style={{ margin: '24px auto 32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button 
          onClick={() => setActivePage('shop')} 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '6px', 
            fontSize: '0.85rem', 
            color: 'var(--color-text-secondary)', 
            fontWeight: '500', 
            background: 'none', 
            border: 'none', 
            cursor: 'pointer', 
            padding: 0 
          }}
        >
          <ArrowLeft size={15} /> All Luggage
        </button>
        <span style={{ color: 'var(--color-border-strong)' }}>/</span>
        <span style={{ fontSize: '0.85rem', color: 'var(--color-text-primary)', fontWeight: '500' }}>{product.name}</span>
      </div>

      {/* Main Detail Grid */}
      <div className="pdp-wrapper">
        <div className="product-grid-layout">
          
          {/* Left: Gallery */}
          <div>
            <div className="gallery-main">
              <img 
                src={selectedColor.image || product.image} 
                alt={product.name} 
              />
            </div>
            
            <div className="gallery-thumbnails">
              {product.colors?.map((c, idx) => (
                <button
                  key={idx}
                  className={`gallery-thumb-btn ${selectedColor.name === c.name ? 'active' : ''}`}
                  onClick={() => setSelectedColor(c)}
                  title={c.name}
                >
                  <img src={c.image || product.image} alt={c.name} />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Info Column */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span className="pdp-tag">Gurkauna Precision Series</span>

            <h1 className="pdp-title">
              {product.name}
            </h1>
            <div className="pdp-subtitle">
              {product.subtitle || 'Polycarbonate Hard-Shell Luggage'}
            </div>

            {/* Price & Rating */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '24px' }}>
              <span className="pdp-price">
                NPR {product.price?.toLocaleString()}
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Star size={14} fill="#1D1D1F" color="#1D1D1F" />
                <span style={{ fontWeight: '600', fontSize: '0.88rem', color: 'var(--color-text-primary)' }}>4.9</span>
                <span style={{ fontSize: '0.82rem', color: 'var(--color-text-tertiary)' }}>(300+ reviews)</span>
              </div>
            </div>

            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '32px' }}>
              {product.description || 'Engineered with high-impact aerospace polycarbonate, whisper-quiet Hinomoto spinner wheels, and an integrated TSA security lock. Designed to withstand extreme transit while maintaining timeless elegance.'}
            </p>

            {/* Features summary */}
            <div className="pdp-features-grid">
              <div className="pdp-feature-item">
                <ShieldCheck size={18} className="pdp-feature-icon" /> {product.material || 'Aerospace Polycarbonate'}
              </div>
              <div className="pdp-feature-item">
                <RefreshCw size={18} className="pdp-feature-icon" /> 360° Silent Spinner Wheels
              </div>
              <div className="pdp-feature-item">
                <Lock size={18} className="pdp-feature-icon" /> TSA-Approved Lock
              </div>
              <div className="pdp-feature-item">
                <Truck size={18} className="pdp-feature-icon" /> Free Express Delivery in Nepal
              </div>
            </div>

            {/* Size Options */}
            <div style={{ marginBottom: '28px' }}>
              <label style={{ fontSize: '0.78rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-secondary)', display: 'block', marginBottom: '12px' }}>
                Select Size: <span style={{ color: 'var(--color-text-primary)', textTransform: 'none' }}>{selectedSize}</span>
              </label>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {product.sizes?.map((sz) => (
                  <button
                    key={sz}
                    className={`pdp-pill-btn ${selectedSize === sz ? 'active' : ''}`}
                    onClick={() => setSelectedSize(sz)}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Options */}
            <div style={{ marginBottom: '36px' }}>
              <label style={{ fontSize: '0.78rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-secondary)', display: 'block', marginBottom: '12px' }}>
                Color: <span style={{ color: 'var(--color-text-primary)', textTransform: 'none' }}>{selectedColor.name}</span>
              </label>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                {product.colors?.map((c, idx) => (
                  <button
                    key={idx}
                    className={`pdp-color-swatch ${selectedColor.name === c.name ? 'active' : ''}`}
                    style={{ backgroundColor: c.hex }}
                    onClick={() => setSelectedColor(c)}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            {/* Qty & Actions */}
            <div style={{ display: 'flex', gap: '14px', marginBottom: '40px' }}>
              {/* Quantity */}
              <div style={{ display: 'flex', alignItems: 'center', background: '#FFFFFF', border: '1px solid var(--color-border-strong)', borderRadius: 'var(--radius-full)', padding: '2px 8px' }}>
                <button 
                  style={{ width: '32px', height: '36px', background: 'transparent', border: 'none', fontSize: '1.1rem', cursor: 'pointer', color: 'var(--color-text-primary)' }}
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >-</button>
                <input 
                  type="text" 
                  value={quantity} 
                  readOnly 
                  style={{ width: '30px', textAlign: 'center', border: 'none', background: 'transparent', fontSize: '0.92rem', fontWeight: '600', color: 'var(--color-text-primary)' }} 
                />
                <button 
                  style={{ width: '32px', height: '36px', background: 'transparent', border: 'none', fontSize: '1.1rem', cursor: 'pointer', color: 'var(--color-text-primary)' }}
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >+</button>
              </div>

              {/* Add to Cart */}
              <button
                className="pdp-add-btn"
                onClick={() => onAddToCart(product, selectedSize, selectedColor.name, quantity)}
              >
                <ShoppingBag size={18} /> Add to Bag
              </button>

              {/* Wishlist */}
              <button
                className="pdp-wish-btn"
                onClick={() => onToggleWishlist(product)}
                aria-label="Toggle Wishlist"
              >
                <Heart size={20} fill={isWishlisted ? 'var(--color-brand)' : 'none'} color={isWishlisted ? 'var(--color-brand)' : 'var(--color-text-primary)'} />
              </button>
            </div>

            {/* Accordion tabs */}
            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '24px' }}>
              <div style={{ display: 'flex', gap: '28px', borderBottom: '1px solid var(--color-border)', marginBottom: '24px' }}>
                {['details', 'shipping', 'reviews'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      padding: '0 0 12px 0',
                      fontWeight: activeTab === tab ? '600' : '400',
                      fontSize: '0.9rem',
                      color: activeTab === tab ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                      border: 'none',
                      borderBottom: activeTab === tab ? '2px solid var(--color-text-primary)' : '2px solid transparent',
                      background: 'transparent',
                      cursor: 'pointer',
                      marginBottom: '-1px',
                      transition: 'color var(--duration-fast) ease'
                    }}
                  >
                    {tab === 'details' ? 'Specifications' : tab === 'shipping' ? 'Shipping & Returns' : 'Reviews'}
                  </button>
                ))}
              </div>

              {activeTab === 'details' && (
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: '1.8' }}>
                  {product.features?.map((f, i) => (
                    <li key={i} style={{ position: 'relative', paddingLeft: '16px', marginBottom: '8px' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--color-text-primary)' }}>·</span> {f}
                    </li>
                  ))}
                  {!product.features && (
                    <>
                      <li style={{ position: 'relative', paddingLeft: '16px', marginBottom: '8px' }}><span style={{ position: 'absolute', left: 0, color: 'var(--color-text-primary)' }}>·</span> Aerospace-grade impact polycarbonate shell</li>
                      <li style={{ position: 'relative', paddingLeft: '16px', marginBottom: '8px' }}><span style={{ position: 'absolute', left: 0, color: 'var(--color-text-primary)' }}>·</span> Integrated TSA combination security lock</li>
                      <li style={{ position: 'relative', paddingLeft: '16px', marginBottom: '8px' }}><span style={{ position: 'absolute', left: 0, color: 'var(--color-text-primary)' }}>·</span> 360° silent Hinomoto Japanese spinner wheels</li>
                      <li style={{ position: 'relative', paddingLeft: '16px', marginBottom: '8px' }}><span style={{ position: 'absolute', left: 0, color: 'var(--color-text-primary)' }}>·</span> Dual interior compression dividers with zip pockets</li>
                    </>
                  )}
                </ul>
              )}

              {activeTab === 'shipping' && (
                <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  <p style={{ marginBottom: '12px' }}><strong style={{ color: 'var(--color-text-primary)' }}>Kathmandu Valley:</strong> Complimentary next-day hand delivery.</p>
                  <p style={{ marginBottom: '12px' }}><strong style={{ color: 'var(--color-text-primary)' }}>All Nepal Districts:</strong> 2-4 business days via insured transit partners.</p>
                  <p><strong style={{ color: 'var(--color-text-primary)' }}>Warranty & Returns:</strong> 10-year warranty with hassle-free 7-day returns.</p>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', color: 'var(--color-text-primary)' }}>
                       {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="#1D1D1F" />)}
                    </div>
                    <span style={{ fontWeight: '600', color: 'var(--color-text-primary)' }}>4.9 / 5</span>
                    <span>based on 300+ reviews</span>
                  </div>
                  <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                       <strong style={{ color: 'var(--color-text-primary)' }}>Bikash K.</strong>
                       <span style={{ color: 'var(--color-text-tertiary)', fontSize: '0.8rem' }}>Verified Traveler</span>
                    </div>
                    <p style={{ lineHeight: '1.6', margin: 0 }}>"Best suitcase I have owned in Nepal. Traveled to Pokhara and Mustang with zero scuffs. The wheel glide handles rough paving astonishingly well."</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="pdp-wrapper" style={{ marginTop: '96px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
           <h3 style={{ fontSize: '1.8rem', fontWeight: '600', letterSpacing: '-0.03em', color: 'var(--color-text-primary)' }}>You May Also Like</h3>
           <button 
             onClick={() => setActivePage('shop')} 
             style={{ 
               background: 'none', 
               border: 'none', 
               color: 'var(--color-text-primary)', 
               fontWeight: '500', 
               display: 'flex', 
               alignItems: 'center', 
               gap: '6px', 
               cursor: 'pointer', 
               fontSize: '0.9rem' 
             }}
           >
              View All <ChevronRight size={16} />
           </button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
          {recommendations.map((rec) => (
            <ProductCard
              key={rec.id}
              product={rec}
              onSelectProduct={onSelectProduct}
              onAddToCart={onAddToCart}
              isWishlisted={wishlist.some(w => w.id === rec.id)}
              onToggleWishlist={onToggleWishlist}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
