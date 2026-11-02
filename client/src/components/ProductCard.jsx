import React, { useState } from 'react';
import { Heart, ShoppingBag } from 'lucide-react';

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
  const [isHovered, setIsHovered] = useState(false);

  const selectedColor = product.colors?.[activeColorIndex] || product.colors?.[0] || {};
  const displayImage = selectedColor.image || product.image;

  return (
    <div 
      className="product-card-minimal"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div 
        className="product-card-image"
        onClick={() => onSelectProduct && onSelectProduct(product)}
      >
        <img 
          src={displayImage} 
          alt={product.name} 
          loading="lazy" 
        />

        {/* Wishlist — only show on hover */}
        <button 
          className={`product-wishlist-btn ${isWishlisted ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            if (onToggleWishlist) onToggleWishlist(product);
          }}
          style={{ opacity: isHovered || isWishlisted ? 1 : 0 }}
          aria-label="Wishlist"
        >
          <Heart 
            size={15} 
            fill={isWishlisted ? 'var(--color-text-primary)' : 'none'} 
            stroke={isWishlisted ? 'var(--color-text-primary)' : 'currentColor'} 
          />
        </button>

        {/* Quick add — only on hover */}
        <button 
          className="product-quick-add"
          style={{ 
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0)' : 'translateY(8px)'
          }}
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart && onAddToCart(product, selectedSize, selectedColor.name);
          }}
        >
          <ShoppingBag size={14} />
          Add to Bag
        </button>
      </div>

      {/* Info */}
      <div className="product-card-info">
        {/* Color dots */}
        {product.colors && product.colors.length > 1 && (
          <div className="product-card-colors">
            {product.colors.map((c, idx) => (
              <button
                key={idx}
                className={`color-dot ${idx === activeColorIndex ? 'active' : ''}`}
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

        <h3 
          className="product-card-name"
          onClick={() => onSelectProduct && onSelectProduct(product)}
        >
          {product.name}
        </h3>

        <span className="product-card-price">
          NPR {product.price?.toLocaleString()}
        </span>
      </div>
    </div>
  );
}
