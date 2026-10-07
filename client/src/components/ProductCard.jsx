import React, { useState } from 'react';
import { Heart, ArrowRight } from 'lucide-react';

export default function ProductCard({ 
  product, 
  onSelectProduct, 
  onAddToCart, 
  isWishlisted, 
  onToggleWishlist 
}) {
  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(
    product.sizes?.[0] || '24"'
  );

  const selectedColor = product.colors?.[activeColorIndex] || product.colors?.[0] || {};
  const displayImage = selectedColor.image || product.image;

  // Format badge color
  const isRedBadge = product.badge === 'Bestseller' || product.badge === 'Popular' || product.badge === 'Best Seller' || product.badge === 'Value Set';

  return (
    <div className="shop-product-card">
      {/* Badge */}
      {product.badge && (
        <div className={`shop-card-badge ${isRedBadge ? 'badge-red' : 'badge-green'}`}>
          {product.badge}
        </div>
      )}

      {/* Wishlist Button */}
      <button 
        className={`shop-card-wishlist ${isWishlisted ? 'active' : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          if (onToggleWishlist) onToggleWishlist(product);
        }}
        title="Add to Wishlist"
        aria-label="Wishlist"
      >
        <Heart 
          size={16} 
          fill={isWishlisted ? 'var(--color-brand)' : 'none'} 
          stroke={isWishlisted ? 'var(--color-brand)' : '#3F3F46'} 
        />
      </button>

      {/* Image Container */}
      <div 
        className="shop-card-img-container" 
        onClick={() => onSelectProduct && onSelectProduct(product)}
      >
        <img 
          src={displayImage} 
          alt={product.name} 
          className="shop-card-img" 
          loading="lazy" 
        />
      </div>

      {/* Product Details Body */}
      <div className="shop-card-body">
        <h3 
          className="shop-card-title"
          onClick={() => onSelectProduct && onSelectProduct(product)}
        >
          {product.name}
        </h3>

        <div className="shop-card-material">
          {product.subtitle || product.material || 'Hard Shell Suitcase'}
        </div>

        {/* Size Pills */}
        <div className="shop-card-size-pills">
          {product.sizes && product.sizes.length > 0 ? (
            product.sizes.map((s, idx) => {
              const displayLabel = s.includes('20"') ? '20"' : s.includes('24"') ? '24"' : s.includes('28"') ? '28"' : s;
              return (
                <button
                  key={idx}
                  className={`size-tag-pill ${selectedSize === s ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSize(s);
                  }}
                >
                  {displayLabel}
                </button>
              );
            })
          ) : (
            <>
              <button className="size-tag-pill active">20"</button>
              <button className="size-tag-pill">24"</button>
              <button className="size-tag-pill">28"</button>
            </>
          )}
        </div>

        {/* Color Swatches */}
        {product.colors && product.colors.length > 0 && (
          <div className="shop-card-swatches">
            {product.colors.map((c, idx) => (
              <button
                key={idx}
                className={`shop-swatch-btn ${idx === activeColorIndex ? 'active' : ''}`}
                style={{ backgroundColor: c.hex }}
                title={c.name}
                aria-label={c.name}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveColorIndex(idx);
                }}
              />
            ))}
          </div>
        )}

        {/* Price & CTA Button */}
        <div className="shop-card-footer">
          <div className="shop-card-price">
            NPR {product.price?.toLocaleString()}
          </div>

          <button 
            className="shop-card-add-btn"
            onClick={() => onAddToCart && onAddToCart(product, selectedSize, selectedColor.name)}
          >
            Add to Cart <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
