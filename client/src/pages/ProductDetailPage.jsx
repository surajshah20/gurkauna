import React, { useState } from 'react';
import { Star, ShieldCheck, RefreshCw, Lock, Truck, ChevronDown, ShoppingBag, ArrowLeft, Heart } from 'lucide-react';
import ProductCard from '../components/ProductCard';

export default function ProductDetailPage({ product, allProducts, onAddToCart, onSelectProduct, wishlist, onToggleWishlist, setActivePage }) {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '24" (Medium)');
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || { name: 'Forest Green', hex: '#1C3F34' });
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');

  const isWishlisted = wishlist.some(w => w.id === product.id);

  // Recommendation products
  const recommendations = allProducts.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div>
      {/* Breadcrumb & Back */}
      <div style={{ maxWidth: '1280px', margin: '20px auto 0 auto', padding: '0 24px' }}>
        <button 
          onClick={() => setActivePage('shop')} 
          style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', color: 'var(--color-gray-600)', fontWeight: '600' }}
        >
          <ArrowLeft size={16} /> Back to Shop
        </button>
      </div>

      {/* Main Detail Grid */}
      <div className="detail-container">
        {/* Gallery */}
        <div className="gallery-wrapper">
          <div className="thumbnails">
            {product.colors?.map((c, idx) => (
              <div
                key={idx}
                className={`thumb-item ${selectedColor.name === c.name ? 'active' : ''}`}
                onClick={() => setSelectedColor(c)}
              >
                <img src={c.image || product.image} alt={c.name} />
              </div>
            ))}
          </div>

          <div className="main-image">
            <img src={selectedColor.image || product.image} alt={product.name} />
          </div>
        </div>

        {/* Info Column */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className="product-badge" style={{ position: 'static' }}>{product.badge || 'In Stock'}</span>
            <span style={{ fontSize: '0.85rem', color: '#10B981', fontWeight: '700' }}>● In Stock - Ready to Ship</span>
          </div>

          <h1 style={{ fontSize: '2.4rem', fontWeight: '800', color: 'var(--color-dark)', marginBottom: '4px' }}>
            {product.name}
          </h1>
          <div style={{ fontSize: '1.1rem', color: 'var(--color-gray-600)', marginBottom: '16px' }}>
            {product.subtitle}
          </div>

          {/* Rating */}
          <div className="rating-row" style={{ marginBottom: '24px' }}>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#F59E0B" stroke="#F59E0B" />
              ))}
            </div>
            <span style={{ fontWeight: '700', color: 'var(--color-dark)' }}>{product.rating}</span>
            <span>({product.reviewsCount} verified traveler reviews)</span>
          </div>

          {/* Price */}
          <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'baseline', gap: '12px' }}>
            <span style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--color-brand)' }}>
              NPR {product.price?.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="product-price-strike" style={{ fontSize: '1.2rem' }}>
                NPR {product.originalPrice?.toLocaleString()}
              </span>
            )}
            <span style={{ fontSize: '0.8rem', background: '#DCFCE7', color: '#15803D', fontWeight: '700', padding: '2px 8px', borderRadius: '4px' }}>
              Save 15%
            </span>
          </div>

          <p style={{ color: 'var(--color-gray-700)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '28px' }}>
            {product.description}
          </p>

          {/* Highlights Icons */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px',
            background: 'var(--color-gray-100)',
            padding: '16px',
            borderRadius: 'var(--radius-md)',
            marginBottom: '28px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: '600' }}>
              <ShieldCheck size={18} style={{ color: 'var(--color-brand)' }} /> {product.material} Material
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: '600' }}>
              <RefreshCw size={18} style={{ color: 'var(--color-brand)' }} /> 360° Silent Spinner Wheels
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: '600' }}>
              <Lock size={18} style={{ color: 'var(--color-brand)' }} /> Integrated TSA Lock
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: '600' }}>
              <Truck size={18} style={{ color: 'var(--color-brand)' }} /> Free Delivery in Nepal
            </div>
          </div>

          {/* Size Options */}
          <div className="option-group">
            <label className="option-label">1. Choose Size:</label>
            <div className="size-pills">
              {product.sizes?.map((sz) => (
                <button
                  key={sz}
                  className={`size-pill ${selectedSize === sz ? 'active' : ''}`}
                  onClick={() => setSelectedSize(sz)}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Color Options */}
          <div className="option-group">
            <label className="option-label">2. Choose Color: <span style={{ fontWeight: '400', color: 'var(--color-gray-600)' }}>({selectedColor.name})</span></label>
            <div className="color-picker">
              {product.colors?.map((c, idx) => (
                <button
                  key={idx}
                  className={`color-circle-btn ${selectedColor.name === c.name ? 'active' : ''}`}
                  style={{ background: c.hex }}
                  onClick={() => setSelectedColor(c)}
                  title={c.name}
                />
              ))}
            </div>
          </div>

          {/* Qty & Add to Cart */}
          <div className="qty-row">
            <div className="qty-picker">
              <button className="qty-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <input type="text" className="qty-input" value={quantity} readOnly />
              <button className="qty-btn" onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>

            <button
              className="btn-primary"
              style={{ flexGrow: 1, background: 'var(--color-brand)', color: 'white', justifyContent: 'center', padding: '14px 28px' }}
              onClick={() => onAddToCart(product, selectedSize, selectedColor.name, quantity)}
            >
              <ShoppingBag size={20} /> Add to Cart
            </button>

            <button
              className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
              style={{ position: 'static', width: '48px', height: '48px' }}
              onClick={() => onToggleWishlist(product)}
            >
              <Heart size={20} fill={isWishlisted ? '#EF4444' : 'none'} />
            </button>
          </div>

          {/* Accordion tabs */}
          <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '20px' }}>
            <div style={{ display: 'flex', borderBottom: '1px solid #E2E8F0', marginBottom: '16px' }}>
              {['details', 'shipping', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: '10px 18px',
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    color: activeTab === tab ? 'var(--color-brand)' : 'var(--color-gray-600)',
                    borderBottom: activeTab === tab ? '2px solid var(--color-brand)' : 'none',
                    textTransform: 'capitalize'
                  }}
                >
                  {tab === 'details' ? 'Product Details' : tab === 'shipping' ? 'Shipping & Returns' : 'Customer Reviews'}
                </button>
              ))}
            </div>

            {activeTab === 'details' && (
              <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: 'var(--color-gray-700)', fontSize: '0.9rem', lineHeight: '1.8' }}>
                {product.features?.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            )}

            {activeTab === 'shipping' && (
              <div style={{ fontSize: '0.9rem', color: 'var(--color-gray-700)', lineHeight: '1.6' }}>
                <p><strong>Kathmandu Valley:</strong> Same-day or next-day delivery (FREE on orders over NPR 20,000).</p>
                <p style={{ marginTop: '8px' }}><strong>Outside Kathmandu Valley:</strong> 2-4 business days via courier.</p>
                <p style={{ marginTop: '8px' }}><strong>Returns:</strong> 7-day no-questions-asked return policy on unused items.</p>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div style={{ fontSize: '0.9rem', color: 'var(--color-gray-700)' }}>
                <p style={{ fontWeight: '700', marginBottom: '8px' }}>★ 4.9 out of 5 based on 128 reviews</p>
                <div style={{ background: '#F8FAFC', padding: '12px', borderRadius: '8px', fontStyle: 'italic' }}>
                  "Best suitcase I've owned in Nepal. Traveled to Pokhara and Mustang with zero scuffs!" - Bikash K.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* You May Also Like Section */}
      <section style={{ maxWidth: '1280px', margin: '60px auto', padding: '0 24px' }}>
        <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '24px' }}>You May Also Like</h3>
        <div className="products-grid">
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
