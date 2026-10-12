import React from 'react';
import ProductCard from '../components/ProductCard';
import EmptyState from '../components/EmptyState';

export default function WishlistPage({ wishlist, onSelectProduct, onAddToCart, onToggleWishlist, setActivePage }) {
  
  return (
    <div style={{ backgroundColor: '#FAFAFA', minHeight: '100vh', padding: '60px 24px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: '500', color: 'var(--color-dark)', marginBottom: '8px' }}>
          My Wishlist
        </h1>
        <div style={{ fontSize: '1rem', color: '#71717A', marginBottom: '32px' }}>
          {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved
        </div>

        {wishlist.length === 0 ? (
          <EmptyState 
            type="wishlist"
            title="Your wishlist is empty"
            message="Save something for your next journey."
            actionText="Explore Collection"
            onAction={() => setActivePage('collections')}
          />
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px', '@media (minWidth: 768px)': { gridTemplateColumns: 'repeat(2, 1fr)' }, '@media (minWidth: 1024px)': { gridTemplateColumns: 'repeat(4, 1fr)' } }} className="wishlist-grid-custom">
            <style dangerouslySetInnerHTML={{__html: `
              .wishlist-grid-custom { grid-template-columns: repeat(1, 1fr); }
              @media (min-width: 768px) { .wishlist-grid-custom { grid-template-columns: repeat(2, 1fr) !important; } }
              @media (min-width: 1024px) { .wishlist-grid-custom { grid-template-columns: repeat(4, 1fr) !important; } }
            `}} />
            {wishlist.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
                onAddToCart={onAddToCart}
                isWishlisted={true}
                onToggleWishlist={onToggleWishlist}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
