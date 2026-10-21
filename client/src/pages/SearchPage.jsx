import React, { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import EmptyState from '../components/EmptyState';

export default function SearchPage({ allProducts, onSelectProduct, onAddToCart, wishlist, onToggleWishlist, setActivePage }) {
  const [query, setQuery] = useState('Classic');
  const [showFilters, setShowFilters] = useState(false);

  const results = allProducts.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ backgroundColor: '#FAFAFA', minHeight: '100vh', padding: '40px 24px' }}>
      <style dangerouslySetInnerHTML={{__html: `
        .search-layout { display: grid; grid-template-columns: 1fr; gap: 32px; }
        .search-filters-sidebar { display: none; }
        .mobile-filter-btn { display: flex; }
        .search-grid-custom { display: grid; grid-template-columns: repeat(1, 1fr); gap: 24px; }
        @media (min-width: 768px) {
          .search-grid-custom { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .search-layout { grid-template-columns: 250px 1fr; }
          .mobile-filter-btn { display: none !important; }
          .search-filters-sidebar { display: block !important; }
        }
        @media (min-width: 1280px) {
          .search-grid-custom { grid-template-columns: repeat(3, 1fr); }
        }
      `}} />
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <form onSubmit={handleSearch} style={{ position: 'relative', maxWidth: '600px', margin: '0 auto 24px' }}>
            <Search size={24} style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: '#A1A1AA' }} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for luggage, backpacks, accessories..."
              style={{ width: '100%', padding: '20px 24px 20px 60px', borderRadius: '40px', border: '1px solid #E4E4E7', fontSize: '1.1rem', boxShadow: 'var(--shadow-sm)', boxSizing: 'border-box' }}
            />
            <button type="submit" style={{ position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)', background: 'var(--color-dark)', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '40px', fontWeight: '600', cursor: 'pointer' }}>
              Search
            </button>
          </form>
          <div style={{ fontSize: '1rem', color: '#71717A' }}>
            {results.length} {results.length === 1 ? 'result' : 'results'} found for "{query}"
          </div>
        </div>
        {results.length === 0 ? (
          <EmptyState
            type="search"
            title="No results found"
            message={`We couldn't find anything matching "". Try searching for something else or browse our collections.`}
            actionText="Browse Collections"
            onAction={() => setActivePage('collections')}
          />
        ) : (
          <>
            <button
              className="mobile-filter-btn"
              onClick={() => setShowFilters(!showFilters)}
              style={{ width: '100%', padding: '16px', background: 'white', border: '1px solid #E4E4E7', borderRadius: 'var(--radius-md)', alignItems: 'center', justifyContent: 'center', gap: '8px', fontWeight: '600', color: 'var(--color-dark)', cursor: 'pointer', marginBottom: '16px' }}
            >
              <SlidersHorizontal size={18} /> Filters and Sorting
            </button>
            {showFilters && (
              <div style={{ background: 'white', padding: '24px', borderRadius: 'var(--radius-lg)', border: '1px solid #E4E4E7', marginBottom: '24px' }}>
                <FilterContent onClose={() => setShowFilters(false)} showClose />
              </div>
            )}
            <div className="search-layout">
              <div className="search-filters-sidebar" style={{ background: 'white', padding: '24px', borderRadius: 'var(--radius-lg)', border: '1px solid #E4E4E7', alignSelf: 'start', position: 'sticky', top: '100px' }}>
                <FilterContent />
              </div>
              <div className="search-grid-custom">
                {results.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onSelectProduct={onSelectProduct}
                    onAddToCart={onAddToCart}
                    isWishlisted={wishlist.some(w => w.id === product.id)}
                    onToggleWishlist={onToggleWishlist}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function FilterContent({ onClose, showClose }) {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-dark)', margin: 0 }}>Filters</h3>
        {showClose && (
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#71717A', cursor: 'pointer', fontSize: '0.95rem' }}>Close</button>
        )}
      </div>
      <div style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid #E4E4E7' }}>
        <h4 style={{ fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', color: '#A1A1AA', marginBottom: '12px' }}>Category</h4>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', cursor: 'pointer' }}>
          <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px', accentColor: 'var(--color-dark)' }} /> Hard Shell Suitcases
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', cursor: 'pointer' }}>
          <input type="checkbox" style={{ width: '18px', height: '18px', accentColor: 'var(--color-dark)' }} /> Soft Shell Bags
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <input type="checkbox" style={{ width: '18px', height: '18px', accentColor: 'var(--color-dark)' }} /> Travel Accessories
        </label>
      </div>
      <div style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid #E4E4E7' }}>
        <h4 style={{ fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', color: '#A1A1AA', marginBottom: '12px' }}>Sort By</h4>
        <select style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid #E4E4E7', fontSize: '0.95rem' }}>
          <option>Relevance</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>New Arrivals</option>
        </select>
      </div>
      <button style={{ width: '100%', padding: '12px', background: 'var(--color-dark)', color: 'white', borderRadius: 'var(--radius-sm)', border: 'none', fontWeight: '600', cursor: 'pointer' }}>
        Apply Filters
      </button>
    </>
  );
}
