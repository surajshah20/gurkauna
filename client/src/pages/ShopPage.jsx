import React, { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';

export default function ShopPage({ products, onSelectProduct, onAddToCart, wishlist, onToggleWishlist }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedCollections, setSelectedCollections] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  // Filter handlers
  const handleMaterialChange = (mat) => {
    setSelectedMaterials(prev => 
      prev.includes(mat) ? prev.filter(m => m !== mat) : [...prev, mat]
    );
  };

  const handleCollectionChange = (col) => {
    setSelectedCollections(prev =>
      prev.includes(col) ? prev.filter(c => c !== col) : [...prev, col]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedMaterials([]);
    setSelectedCollections([]);
    setSelectedPriceRange('all');
  };

  // Filter Logic
  let filteredProducts = products.filter(p => {
    // Search
    if (searchTerm && !p.name.toLowerCase().includes(searchTerm.toLowerCase()) && !p.subtitle.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    // Category Pill
    if (selectedCategory !== 'All' && p.category !== selectedCategory) {
      return false;
    }
    // Material
    if (selectedMaterials.length > 0 && !selectedMaterials.includes(p.material)) {
      return false;
    }
    // Collection
    if (selectedCollections.length > 0 && !selectedCollections.includes(p.collection)) {
      return false;
    }
    // Price Range
    if (selectedPriceRange === '5k-10k' && (p.price < 5000 || p.price > 10000)) return false;
    if (selectedPriceRange === '10k-15k' && (p.price < 10000 || p.price > 15000)) return false;
    if (selectedPriceRange === '15k+' && p.price < 15000) return false;

    return true;
  });

  // Sort Logic
  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div>
      {/* Top Banner */}
      <div style={{
        background: '#122B24',
        color: 'white',
        padding: '50px 24px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '12px' }}>Shop Our Collection</h1>
        <p style={{ color: '#A7F3D0', fontSize: '1rem', maxWidth: '500px', margin: '0 auto 24px auto' }}>
          Find the perfect suitcase engineered for your next journey.
        </p>

        {/* Search Input Bar */}
        <div style={{
          maxWidth: '540px',
          margin: '0 auto',
          position: 'relative'
        }}>
          <input
            type="text"
            placeholder="Search for products (e.g. Pro, Hard Shell, Aluminium)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '14px 20px 14px 48px',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              fontSize: '0.95rem',
              outline: 'none',
              boxShadow: 'var(--shadow-md)'
            }}
          />
          <Search size={20} style={{ position: 'absolute', left: '18px', top: '16px', color: 'var(--color-gray-500)' }} />
          {searchTerm && (
            <X size={18} style={{ position: 'absolute', right: '18px', top: '17px', color: 'var(--color-gray-500)', cursor: 'pointer' }} onClick={() => setSearchTerm('')} />
          )}
        </div>
      </div>

      {/* Category Tabs */}
      <div style={{ padding: '24px 24px 0 24px' }}>
        <div className="filter-bar">
          {['All', 'Hard Shell', 'Soft Shell', 'Premium', 'Travel Sets'].map((cat) => (
            <button
              key={cat}
              className={`filter-tab ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Shop Main Layout */}
      <div className="shop-layout">
        {/* Sidebar Filters */}
        <aside className="sidebar-filter">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid #E2E8F0' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Filter size={18} /> Filters
            </h3>
            <button onClick={clearFilters} style={{ fontSize: '0.8rem', color: 'var(--color-brand)', fontWeight: '700' }}>
              Clear all
            </button>
          </div>

          {/* Material Filter */}
          <div className="filter-group">
            <h4 className="filter-title">Material</h4>
            <div className="checkbox-list">
              {['ABS', 'PC + ABS', 'Polycarbonate', 'Aluminium', 'Cordura Nylon'].map((mat) => (
                <label key={mat} className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={selectedMaterials.includes(mat)}
                    onChange={() => handleMaterialChange(mat)}
                  />
                  {mat}
                </label>
              ))}
            </div>
          </div>

          {/* Collection Filter */}
          <div className="filter-group">
            <h4 className="filter-title">Collection</h4>
            <div className="checkbox-list">
              {['Classic', 'Pro', 'Elite', 'Premium'].map((col) => (
                <label key={col} className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={selectedCollections.includes(col)}
                    onChange={() => handleCollectionChange(col)}
                  />
                  {col} Series
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="filter-group">
            <h4 className="filter-title">Price Range</h4>
            <div className="checkbox-list">
              {[
                { label: 'All Prices', val: 'all' },
                { label: 'NPR 5k - 10k', val: '5k-10k' },
                { label: 'NPR 10k - 15k', val: '10k-15k' },
                { label: 'NPR 15k+', val: '15k+' }
              ].map((p) => (
                <label key={p.val} className="checkbox-item">
                  <input
                    type="radio"
                    name="priceRange"
                    checked={selectedPriceRange === p.val}
                    onChange={() => setSelectedPriceRange(p.val)}
                  />
                  {p.label}
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Product Grid Column */}
        <main>
          {/* Header Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div style={{ fontSize: '0.95rem', color: 'var(--color-gray-600)' }}>
              Showing <strong>{filteredProducts.length}</strong> products
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-gray-700)' }}>Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid #CBD5E1',
                  background: 'white',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Grid */}
          {filteredProducts.length === 0 ? (
            <div style={{ background: 'white', padding: '60px', borderRadius: 'var(--radius-lg)', textAlign: 'center', border: '1px solid #E2E8F0' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '8px' }}>No products match your filters</h3>
              <p style={{ color: 'var(--color-gray-500)', marginBottom: '20px' }}>Try resetting your selected filters or search query.</p>
              <button className="btn-primary" style={{ background: 'var(--color-brand)', color: 'white' }} onClick={clearFilters}>
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="products-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              {filteredProducts.map((product) => (
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
          )}
        </main>
      </div>
    </div>
  );
}
