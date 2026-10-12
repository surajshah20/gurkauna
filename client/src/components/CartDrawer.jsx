import React, { useEffect } from 'react';
import { X, Trash2, ArrowRight, ShieldCheck, Truck, RotateCcw, ShoppingBag, Plus, Minus } from 'lucide-react';
import './CartDrawer.css';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems = [],
  onUpdateQty,
  onRemoveItem,
  onGoToCart,
  onGoToCheckout,
  onGoToShop
}) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const freeShippingThreshold = 20000;
  const remainingForFree = Math.max(0, freeShippingThreshold - subtotal);
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const shippingFee = subtotal >= freeShippingThreshold ? 0 : 500;
  const grandTotal = subtotal + (cartItems.length > 0 ? shippingFee : 0);

  // Helper to resolve working local product image
  const resolveItemImage = (item) => {
    if (item.image && !item.image.includes('unsplash.com')) {
      return item.image;
    }
    const color = (item.color || '').toLowerCase();
    if (color.includes('green')) return '/images/luggage-green.png';
    if (color.includes('navy') || color.includes('blue')) return '/images/luggage-blue.png';
    return '/images/luggage-black.png';
  };

  const handleShopNavigation = (category) => {
    if (onGoToShop) {
      onGoToShop(category);
    } else if (onClose) {
      onClose();
    }
  };

  return (
    <div 
      className="cart-drawer-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="cart-drawer-panel" role="dialog" aria-modal="true" aria-label="Shopping Cart">
        {/* Drawer Header */}
        <div className="cart-drawer-header">
          <div className="cart-header-title-group">
            <h2 className="cart-header-title">Your Cart</h2>
            <span className="cart-item-count-badge">
              {totalQuantity} {totalQuantity === 1 ? 'item' : 'items'}
            </span>
          </div>
          <button 
            type="button" 
            className="cart-close-btn" 
            onClick={onClose}
            aria-label="Close cart drawer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Free Shipping Progress Meter */}
        <div className={`cart-shipping-banner ${remainingForFree === 0 ? 'unlocked' : ''}`}>
          <div className={`cart-shipping-info ${remainingForFree === 0 ? 'unlocked' : ''}`}>
            <Truck size={16} />
            <span>
              {remainingForFree === 0 ? (
                <>🎉 <strong>Congratulations!</strong> You unlocked <strong>FREE Delivery</strong> across Nepal!</>
              ) : (
                <>Add <strong style={{ color: '#0F172A' }}>NPR {remainingForFree.toLocaleString()}</strong> more to get <strong style={{ color: '#16A34A' }}>FREE Delivery!</strong></>
              )}
            </span>
          </div>
          <div className="cart-progress-track">
            <div 
              className={`cart-progress-bar ${remainingForFree === 0 ? 'unlocked' : ''}`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Content: Items List or Empty State */}
        {cartItems.length === 0 ? (
          <div className="cart-empty-view">
            <div className="cart-empty-icon-wrap">
              <ShoppingBag size={40} strokeWidth={1.5} />
            </div>
            <h3 className="cart-empty-title">Your cart is empty</h3>
            <p className="cart-empty-desc">
              Discover our crafted hard-shell luggage engineered for effortless journeys.
            </p>
            <button 
              type="button" 
              className="cart-empty-action-btn"
              onClick={() => handleShopNavigation()}
            >
              Start Shopping <ArrowRight size={17} />
            </button>

            {/* Quick Collection Filters */}
            <div className="cart-quick-categories">
              <div className="cart-quick-label">Browse Popular Luggage</div>
              <div className="cart-chips-row">
                <button 
                  type="button" 
                  className="cart-chip-btn"
                  onClick={() => handleShopNavigation('Hard Shell')}
                >
                  Hard Shell
                </button>
                <button 
                  type="button" 
                  className="cart-chip-btn"
                  onClick={() => handleShopNavigation('Cabin')}
                >
                  Cabin (20")
                </button>
                <button 
                  type="button" 
                  className="cart-chip-btn"
                  onClick={() => handleShopNavigation('Medium')}
                >
                  Medium (24")
                </button>
                <button 
                  type="button" 
                  className="cart-chip-btn"
                  onClick={() => handleShopNavigation('Travel Sets')}
                >
                  Travel Sets
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="cart-items-scroll">
            {cartItems.map((item, index) => {
              const imageSrc = resolveItemImage(item);
              const colorDot = item.color?.toLowerCase().includes('green') 
                ? '#1C3F34' 
                : (item.color?.toLowerCase().includes('blue') ? '#1B2A4A' : '#1C1C1E');

              return (
                <div key={`${item.id}-${item.size}-${item.color}-${index}`} className="cart-item-card">
                  {/* Thumbnail */}
                  <div className="cart-item-media">
                    <img 
                      src={imageSrc} 
                      alt={item.name}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = '/images/luggage-black.png';
                      }}
                    />
                  </div>

                  {/* Information & Controls */}
                  <div className="cart-item-details">
                    <div className="cart-item-top">
                      <div>
                        <h4 className="cart-item-name">{item.name}</h4>
                        <div className="cart-item-specs-badge">
                          <span className="cart-item-color-dot" style={{ backgroundColor: colorDot }} />
                          <span>{item.size || '24" (Medium)'} • {item.color || 'Forest Green'}</span>
                        </div>
                      </div>
                      <button 
                        type="button" 
                        className="cart-item-remove-btn"
                        onClick={() => onRemoveItem(index)}
                        title="Remove item"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>

                    <div className="cart-item-bottom">
                      <div className="cart-item-price">
                        NPR {item.price.toLocaleString()}
                      </div>

                      {/* Stepper */}
                      <div className="cart-stepper">
                        <button 
                          type="button" 
                          className="cart-stepper-btn"
                          onClick={() => onUpdateQty(index, item.quantity - 1)}
                          title="Decrease quantity"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} strokeWidth={2.5} />
                        </button>
                        <span className="cart-stepper-qty">{item.quantity}</span>
                        <button 
                          type="button" 
                          className="cart-stepper-btn"
                          onClick={() => onUpdateQty(index, item.quantity + 1)}
                          title="Increase quantity"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} strokeWidth={2.5} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Footer Summary (only when cart has items) */}
        {cartItems.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-summary-line">
              <span className="cart-summary-label">Subtotal</span>
              <span className="cart-summary-val">NPR {subtotal.toLocaleString()}</span>
            </div>

            <div className="cart-summary-line">
              <span className="cart-summary-label">Estimated Shipping</span>
              {shippingFee === 0 ? (
                <span className="cart-badge-free">FREE</span>
              ) : (
                <span className="cart-summary-val">NPR {shippingFee.toLocaleString()}</span>
              )}
            </div>

            <div className="cart-summary-divider" />

            <div className="cart-summary-total-line">
              <div className="cart-total-label-wrap">
                <span className="cart-total-label">Total</span>
                <span className="cart-total-subtext">Includes VAT & all taxes</span>
              </div>
              <span className="cart-total-amount">NPR {grandTotal.toLocaleString()}</span>
            </div>

            {/* Buttons Row */}
            <div className="cart-cta-row">
              <button 
                type="button" 
                className="cart-btn-secondary" 
                onClick={onGoToCart}
              >
                <ShoppingBag size={16} /> View Cart
              </button>
              <button 
                type="button" 
                className="cart-btn-primary" 
                onClick={onGoToCheckout}
              >
                Checkout <ArrowRight size={17} />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="cart-trust-strip">
              <div className="cart-trust-item">
                <ShieldCheck size={14} style={{ color: '#10B981' }} />
                <span>10-Yr Warranty</span>
              </div>
              <div className="cart-trust-item">
                <Truck size={14} style={{ color: '#3B82F6' }} />
                <span>Nepal Delivery</span>
              </div>
              <div className="cart-trust-item">
                <RotateCcw size={14} style={{ color: '#8B5CF6' }} />
                <span>7-Day Return</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
