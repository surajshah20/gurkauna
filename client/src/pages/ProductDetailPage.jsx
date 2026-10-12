import React, { useState } from 'react';
import { Star, ShieldCheck, RefreshCw, Lock, Truck, ShoppingBag, ArrowLeft, Heart, ChevronRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';

export default function ProductDetailPage({ product, allProducts = [], onAddToCart, onSelectProduct, wishlist = [], onToggleWishlist, setActivePage }) {
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '24" (Medium)');
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || { name: 'Forest Green', hex: '#1C3F34' });
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');

  if (!product) return null;

  const isWishlisted = wishlist.some(w => w.id === product.id);
  const recommendations = allProducts.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div style={{ paddingBottom: '80px', backgroundColor: '#FAFAFA' }}>
      <style dangerouslySetInnerHTML={{__html: `
        .product-grid-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
        }
        .gallery-thumbnails {
          display: flex;
          gap: 12px;
          margin-top: 16px;
          overflow-x: auto;
          padding-bottom: 8px;
        }
        .gallery-thumbnails::-webkit-scrollbar {
          height: 4px;
        }
        .gallery-thumbnails::-webkit-scrollbar-thumb {
          background: #D4D4D8;
          border-radius: 4px;
        }
        @media (min-width: 1024px) {
          .product-grid-layout {
            grid-template-columns: 1.2fr 1fr;
            align-items: start;
          }
          .gallery-thumbnails {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            overflow-x: visible;
          }
        }
      `}} />

      {/* Breadcrumb & Back */}
      <div style={{ maxWidth: '1280px', margin: '20px auto 32px', padding: '0 24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button 
          onClick={() => setActivePage('shop')} 
          style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', color: '#71717A', fontWeight: '600', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <ArrowLeft size={16} /> Back to Shop
        </button>
        <span style={{ color: '#D4D4D8' }}>/</span>
        <span style={{ fontSize: '0.9rem', color: 'var(--color-dark)', fontWeight: '500' }}>{product.name}</span>
      </div>

      {/* Main Detail Grid */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div className="product-grid-layout">
          
          {/* Left: Gallery */}
          <div>
            <div style={{ background: '#F4F4F5', borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src={selectedColor.image || product.image} 
                alt={product.name} 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
              />
            </div>
            
            <div className="gallery-thumbnails">
              {product.colors?.map((c, idx) => (
                <button
                  key={idx}
                  style={{ 
                    border: selectedColor.name === c.name ? '2px solid var(--color-brand)' : '1px solid #E4E4E7', 
                    borderRadius: 'var(--radius-md)', 
                    overflow: 'hidden', 
                    background: '#F4F4F5',
                    cursor: 'pointer',
                    padding: 0,
                    aspectRatio: '1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onClick={() => setSelectedColor(c)}
                >
                  <img src={c.image || product.image} alt={c.name} style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Info Column */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              {product.badge && (
                <span style={{ background: '#E11D48', color: 'white', padding: '4px 10px', borderRadius: '40px', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase' }}>
                  {product.badge}
                </span>
              )}
              <span style={{ fontSize: '0.85rem', color: '#10B981', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '6px', height: '6px', background: '#10B981', borderRadius: '50%' }}></span> In Stock - Ready to Ship
              </span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.8rem', fontWeight: '500', color: 'var(--color-dark)', marginBottom: '8px' }}>
              {product.name}
            </h1>
            <div style={{ fontSize: '1rem', color: '#71717A', marginBottom: '20px' }}>
              {product.subtitle || 'ABS Hard Shell Suitcase'}
            </div>

            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', color: '#F59E0B' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#F59E0B" />)}
              </div>
              <span style={{ fontWeight: '700', color: 'var(--color-dark)', fontSize: '0.9rem' }}>{product.rating || '4.8'}</span>
              <span style={{ fontSize: '0.9rem', color: '#71717A' }}>({product.reviewsCount || '94'} verified traveler reviews)</span>
            </div>

            {/* Price */}
            <div style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '2.2rem', fontWeight: '700', color: '#E11D48' }}>
                NPR {product.price?.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span style={{ fontSize: '1.2rem', color: '#A1A1AA', textDecoration: 'line-through' }}>
                  NPR {product.originalPrice?.toLocaleString()}
                </span>
              )}
              {product.originalPrice && (
                <span style={{ fontSize: '0.8rem', background: '#DCFCE7', color: '#15803D', fontWeight: '700', padding: '4px 8px', borderRadius: '4px' }}>
                  Save {Math.round((1 - product.price/product.originalPrice)*100)}%
                </span>
              )}
            </div>

            <p style={{ color: '#52525B', fontSize: '1rem', lineHeight: '1.6', marginBottom: '32px' }}>
              {product.description || 'The Gurkauna Classic is engineered for everyday explorers. Crafted from lightweight yet impact-resistant ABS shell, it features whisper-quiet 360° spinner wheels and a secure TSA combination lock.'}
            </p>

            {/* Highlights Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', background: 'white', border: '1px solid #E4E4E7', padding: '24px', borderRadius: 'var(--radius-lg)', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-dark)' }}>
                <ShieldCheck size={18} style={{ color: '#E11D48' }} /> {product.material || 'ABS'} Material
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-dark)' }}>
                <RefreshCw size={18} style={{ color: '#E11D48' }} /> 360° Silent Spinner Wheels
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-dark)' }}>
                <Lock size={18} style={{ color: '#E11D48' }} /> Integrated TSA Lock
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-dark)' }}>
                <Truck size={18} style={{ color: '#E11D48' }} /> Free Delivery in Nepal
              </div>
            </div>

            {/* Size Options */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', color: '#71717A', display: 'block', marginBottom: '12px' }}>
                Select Size
              </label>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {product.sizes?.map((sz) => (
                  <button
                    key={sz}
                    style={{
                      padding: '12px 20px',
                      background: selectedSize === sz ? 'var(--color-dark)' : 'white',
                      color: selectedSize === sz ? 'white' : 'var(--color-dark)',
                      border: selectedSize === sz ? '1px solid var(--color-dark)' : '1px solid #E4E4E7',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                    onClick={() => setSelectedSize(sz)}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Options */}
            <div style={{ marginBottom: '32px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', color: '#71717A', display: 'block', marginBottom: '12px' }}>
                Select Color: <span style={{ color: 'var(--color-dark)', textTransform: 'none' }}>{selectedColor.name}</span>
              </label>
              <div style={{ display: 'flex', gap: '12px' }}>
                {product.colors?.map((c, idx) => (
                  <button
                    key={idx}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: c.hex,
                      border: selectedColor.name === c.name ? '2px solid var(--color-dark)' : '1px solid #D4D4D8',
                      outline: selectedColor.name === c.name ? '2px solid white' : 'none',
                      outlineOffset: '-4px',
                      cursor: 'pointer',
                      boxShadow: 'var(--shadow-sm)'
                    }}
                    onClick={() => setSelectedColor(c)}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            {/* Qty & Actions */}
            <div style={{ display: 'flex', gap: '16px', marginBottom: '40px' }}>
              {/* Quantity */}
              <div style={{ display: 'flex', alignItems: 'center', background: 'white', border: '1px solid #E4E4E7', borderRadius: 'var(--radius-md)', padding: '4px' }}>
                <button 
                  style={{ width: '40px', height: '40px', background: 'transparent', border: 'none', fontSize: '1.2rem', cursor: 'pointer', color: '#52525B' }}
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >-</button>
                <input 
                  type="text" 
                  value={quantity} 
                  readOnly 
                  style={{ width: '40px', height: '40px', textAlign: 'center', border: 'none', background: 'transparent', fontSize: '1rem', fontWeight: '600' }} 
                />
                <button 
                  style={{ width: '40px', height: '40px', background: 'transparent', border: 'none', fontSize: '1.2rem', cursor: 'pointer', color: '#52525B' }}
                  onClick={() => setQuantity(quantity + 1)}
                >+</button>
              </div>

              {/* Add to Cart */}
              <button
                style={{ flexGrow: 1, background: '#E11D48', color: 'white', padding: '0 24px', borderRadius: 'var(--radius-md)', fontSize: '1rem', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', border: 'none', cursor: 'pointer' }}
                onClick={() => onAddToCart(product, selectedSize, selectedColor.name, quantity)}
              >
                <ShoppingBag size={20} /> Add to Cart
              </button>

              {/* Wishlist */}
              <button
                style={{ width: '56px', height: '56px', background: 'white', border: '1px solid #E4E4E7', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                onClick={() => onToggleWishlist(product)}
              >
                <Heart size={24} fill={isWishlisted ? '#E11D48' : 'none'} color={isWishlisted ? '#E11D48' : '#71717A'} />
              </button>
            </div>

            {/* Accordion tabs */}
            <div style={{ borderTop: '1px solid #E4E4E7', paddingTop: '24px' }}>
              <div style={{ display: 'flex', gap: '24px', borderBottom: '1px solid #E4E4E7', marginBottom: '24px' }}>
                {['details', 'shipping', 'reviews'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      padding: '0 0 12px 0',
                      fontWeight: '700',
                      fontSize: '0.95rem',
                      color: activeTab === tab ? '#E11D48' : '#71717A',
                      border: 'none',
                      borderBottom: activeTab === tab ? '2px solid #E11D48' : '2px solid transparent',
                      background: 'transparent',
                      textTransform: 'capitalize',
                      cursor: 'pointer',
                      marginBottom: '-1px'
                    }}
                  >
                    {tab === 'details' ? 'Product Details' : tab === 'shipping' ? 'Shipping & Returns' : 'Customer Reviews'}
                  </button>
                ))}
              </div>

              {activeTab === 'details' && (
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#52525B', fontSize: '0.95rem', lineHeight: '1.8' }}>
                  {product.features?.map((f, i) => (
                    <li key={i} style={{ position: 'relative', paddingLeft: '16px', marginBottom: '8px' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#E11D48' }}>•</span> {f}
                    </li>
                  ))}
                  {!product.features && (
                    <>
                      <li style={{ position: 'relative', paddingLeft: '16px', marginBottom: '8px' }}><span style={{ position: 'absolute', left: 0, color: '#E11D48' }}>•</span> Scratch-resistant ABS outer shell</li>
                      <li style={{ position: 'relative', paddingLeft: '16px', marginBottom: '8px' }}><span style={{ position: 'absolute', left: 0, color: '#E11D48' }}>•</span> TSA-approved combination lock</li>
                      <li style={{ position: 'relative', paddingLeft: '16px', marginBottom: '8px' }}><span style={{ position: 'absolute', left: 0, color: '#E11D48' }}>•</span> 360-degree silent spinner wheels</li>
                      <li style={{ position: 'relative', paddingLeft: '16px', marginBottom: '8px' }}><span style={{ position: 'absolute', left: 0, color: '#E11D48' }}>•</span> Spacious interior with mesh dividers</li>
                    </>
                  )}
                </ul>
              )}

              {activeTab === 'shipping' && (
                <div style={{ fontSize: '0.95rem', color: '#52525B', lineHeight: '1.6' }}>
                  <p style={{ marginBottom: '12px' }}><strong style={{ color: 'var(--color-dark)' }}>Kathmandu Valley:</strong> Same-day or next-day delivery (FREE on orders over NPR 20,000).</p>
                  <p style={{ marginBottom: '12px' }}><strong style={{ color: 'var(--color-dark)' }}>Outside Kathmandu Valley:</strong> 2-4 business days via reliable courier partners.</p>
                  <p><strong style={{ color: 'var(--color-dark)' }}>Returns:</strong> 7-day no-questions-asked return policy on unused items in original packaging.</p>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div style={{ fontSize: '0.95rem', color: '#52525B' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', color: '#F59E0B' }}>
                       {[...Array(5)].map((_, i) => <Star key={i} size={18} fill={i === 4 ? "none" : "#F59E0B"} />)}
                    </div>
                    <span style={{ fontWeight: '700', color: 'var(--color-dark)' }}>4.8 out of 5</span> based on {product.reviewsCount || 94} reviews
                  </div>
                  <div style={{ background: '#F4F4F5', padding: '20px', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                       <strong style={{ color: 'var(--color-dark)' }}>Bikash K.</strong>
                       <span style={{ color: '#A1A1AA', fontSize: '0.85rem' }}>Verified Buyer</span>
                    </div>
                    <div style={{ display: 'flex', color: '#F59E0B', marginBottom: '12px' }}>
                       {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#F59E0B" />)}
                    </div>
                    <p style={{ fontStyle: 'italic', lineHeight: '1.6' }}>"Best suitcase I've owned in Nepal. Traveled to Pokhara and Mustang with zero scuffs! The wheels handle uneven roads surprisingly well."</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products / You May Also Like */}
      <section style={{ maxWidth: '1280px', margin: '80px auto 0', padding: '0 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
           <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: '400', color: 'var(--color-dark)' }}>You May Also Like</h3>
           <button onClick={() => setActivePage('shop')} style={{ background: 'none', border: 'none', color: '#E11D48', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontSize: '0.95rem' }}>
              View All <ChevronRight size={18} />
           </button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px', '@media (minWidth: 768px)': { gridTemplateColumns: 'repeat(2, 1fr)' }, '@media (minWidth: 1024px)': { gridTemplateColumns: 'repeat(4, 1fr)' } }} className="related-grid-custom">
          <style dangerouslySetInnerHTML={{__html: `
            @media (min-width: 768px) { .related-grid-custom { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (min-width: 1024px) { .related-grid-custom { grid-template-columns: repeat(4, 1fr) !important; } }
          `}} />
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
