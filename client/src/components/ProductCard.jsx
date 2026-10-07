import React, { useState } from 'react';
import { ShoppingBag, Heart, ArrowRight } from 'lucide-react';

export default function ProductCard({ product, onSelectProduct, onAddToCart, isWishlisted, onToggleWishlist }) {
  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const selectedColor = product.colors?.[activeColorIndex] || product.colors?.[0] || {};
  const displayImage = selectedColor.image || product.image;

  return (
    <div className="product-card">
      {product.badge && <div className="product-badge">{product.badge}</div>}
      
      <button 
        className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
        onClick={(e) => { 
          e.stopPropagation(); 
          if (onToggleWishlist) onToggleWishlist(product); 
        }}
        title="Add to Wishlist"
        aria-label="Wishlist"
      >
        <Heart size={16} fill={isWishlisted ? 'var(--color-brand)' : 'none'} stroke={isWishlisted ? 'var(--color-brand)' : 'currentColor'} />
      </button>

      <div className="product-img-wrapper" onClick={() => onSelectProduct && onSelectProduct(product)}>
        <img src={displayImage} alt={product.name} loading="lazy" />
      </div>

      <div className="product-body">
        <div className="product-category-tag">{product.material || product.category || 'Hard Shell'}</div>
        
        <h3 className="product-title" onClick={() => onSelectProduct && onSelectProduct(product)}>
          {product.name}
        </h3>
        
        <p className="product-subtitle">{product.subtitle}</p>

        {/* Color Indicators */}
        {product.colors && product.colors.length > 0 && (
          <div className="swatches">
            {product.colors.map((c, i) => (
              <button 
                key={i} 
                className={`swatch-circle ${i === activeColorIndex ? 'active' : ''}`} 
                style={{ background: c.hex }}
                title={c.name}
                aria-label={c.name}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveColorIndex(i);
                }}
              />
            ))}
          </div>
        )}

        <div className="product-footer">
          <div className="price-block">
            <span className="product-price">NPR {product.price?.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="product-price-strike">NPR {product.originalPrice?.toLocaleString()}</span>
            )}
          </div>
          
          <button 
            className="add-cart-btn"
            onClick={() => onAddToCart && onAddToCart(product, product.sizes?.[0], selectedColor.name)}
            title="Add to Cart"
          >
            Add <ShoppingBag size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
