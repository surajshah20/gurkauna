import React, { useState, useMemo } from 'react';
import { Filter, X, ChevronDown, ChevronUp, ShieldCheck, Compass, Truck, Headphones } from 'lucide-react';
import ProductCard from '../components/ProductCard';

export default function ShopPage({ products = [], onSelectProduct, onAddToCart, wishlist = [], onToggleWishlist }) {
  // Category tabs state
  const [selectedCategoryTab, setSelectedCategoryTab] = useState('All');
  
  // Sort state
  const [sortBy, setSortBy] = useState('popularity');

  // Sidebar filter states
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState(['PC + ABS']);
  const [selectedCollections, setSelectedCollections] = useState(['Pro']);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState(['10k-15k']);
  const [selectedColor, setSelectedColor] = useState(null);

  // Mobile filter drawer state
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Collapsible section toggles
  const [openSections, setOpenSections] = useState({
    category: true,
    material: true,
    collection: true,
    price: true,
    color: true
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  // Toggle helper for multi-checkboxes
  const toggleCheckbox = (list, setList, item) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const clearAllFilters = () => {
    setSelectedCategoryTab('All');
    setSelectedSizes([]);
    setSelectedMaterials([]);
    setSelectedCollections([]);
    setSelectedPriceRanges([]);
    setSelectedColor(null);
  };

  // Expand fallback products list to ensure full shop catalog (6 items as in mockup)
  const fullProductsList = useMemo(() => {
    if (products && products.length >= 6) return products;

    return [
      {
        id: 'gurkauna-pro',
        name: 'Gurkauna Pro',
        subtitle: 'PC + ABS Hard Shell',
        category: 'Hard Shell',
        collection: 'Pro',
        material: 'PC + ABS',
        price: 9999,
        originalPrice: 11999,
        badge: 'Bestseller',
        rating: 4.9,
        sizes: ['20"', '24"', '28"'],
        colors: [
          { name: 'Forest Green', hex: '#1C3F34', image: 'https://images.unsplash.com/photo-1581553680321-4fffae59febd?auto=format&fit=crop&w=800&q=80' },
          { name: 'Midnight Black', hex: '#1C1C1E', image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80' },
          { name: 'Navy Blue', hex: '#1B2A4A', image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80' },
          { name: 'Rose Gold', hex: '#E8A29A', image: 'https://images.unsplash.com/photo-1581553680321-4fffae59febd?auto=format&fit=crop&w=800&q=80' }
        ],
        image: 'https://images.unsplash.com/photo-1581553680321-4fffae59febd?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'gurkauna-elite',
        name: 'Gurkauna Elite',
        subtitle: 'Polycarbonate Hard Shell',
        category: 'Premium',
        collection: 'Elite',
        material: 'Polycarbonate',
        price: 14999,
        originalPrice: 16999,
        badge: 'New',
        rating: 5.0,
        sizes: ['20"', '24"', '28"'],
        colors: [
          { name: 'Midnight Black', hex: '#1C1C1E', image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80' },
          { name: 'Titanium Silver', hex: '#D1D5DB', image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80' },
          { name: 'Warm Beige', hex: '#E5D9C5', image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80' }
        ],
        image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'gurkauna-classic',
        name: 'Gurkauna Classic',
        subtitle: 'ABS Hard Shell',
        category: 'Hard Shell',
        collection: 'Classic',
        material: 'ABS',
        price: 7999,
        originalPrice: 9500,
        badge: 'Bestseller',
        rating: 4.8,
        sizes: ['20"', '24"', '28"'],
        colors: [
          { name: 'Coral Pink', hex: '#E8A29A', image: 'https://images.unsplash.com/photo-1581553680321-4fffae59febd?auto=format&fit=crop&w=800&q=80' },
          { name: 'Midnight Black', hex: '#1C1C1E', image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80' },
          { name: 'Navy Blue', hex: '#1B2A4A', image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80' }
        ],
        image: 'https://images.unsplash.com/photo-1581553680321-4fffae59febd?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'gurkauna-voyager',
        name: 'Gurkauna Voyager',
        subtitle: 'Soft Shell',
        category: 'Soft Shell',
        collection: 'Pro',
        material: 'Cordura Nylon',
        price: 8999,
        originalPrice: 10500,
        badge: 'Popular',
        rating: 4.7,
        sizes: ['20"', '24"', '28"'],
        colors: [
          { name: 'Navy Blue', hex: '#1B2A4A', image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80' },
          { name: 'Midnight Black', hex: '#1C1C1E', image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80' },
          { name: 'Forest Green', hex: '#1C3F34', image: 'https://images.unsplash.com/photo-1581553680321-4fffae59febd?auto=format&fit=crop&w=800&q=80' }
        ],
        image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'gurkauna-premium',
        name: 'Gurkauna Premium',
        subtitle: 'Aluminium',
        category: 'Premium',
        collection: 'Premium',
        material: 'Aluminium',
        price: 18999,
        originalPrice: 22000,
        badge: 'Flagship',
        rating: 4.9,
        sizes: ['20"', '24"', '28"'],
        colors: [
          { name: 'Titanium Silver', hex: '#D1D5DB', image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80' },
          { name: 'Midnight Black', hex: '#1C1C1E', image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80' }
        ],
        image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'gurkauna-travel-set',
        name: 'Gurkauna Travel Set',
        subtitle: 'PC + ABS Hard Shell',
        category: 'Travel Sets',
        collection: 'Premium',
        material: 'PC + ABS',
        price: 24999,
        originalPrice: 29999,
        badge: 'Bestseller',
        rating: 5.0,
        sizes: ['20" + 24" + 28"'],
        colors: [
          { name: 'Forest Green', hex: '#1C3F34', image: 'https://images.unsplash.com/photo-1581553680321-4fffae59febd?auto=format&fit=crop&w=800&q=80' },
          { name: 'Midnight Black', hex: '#1C1C1E', image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80' },
          { name: 'Navy Blue', hex: '#1B2A4A', image: 'https://images.unsplash.com/photo-1565026057447-b8899f2905a7?auto=format&fit=crop&w=800&q=80' },
          { name: 'Rose Gold', hex: '#E8A29A', image: 'https://images.unsplash.com/photo-1581553680321-4fffae59febd?auto=format&fit=crop&w=800&q=80' }
        ],
        image: 'https://images.unsplash.com/photo-1581553680321-4fffae59febd?auto=format&fit=crop&w=800&q=80'
      }
    ];
  }, [products]);

  // Filtering Logic
  const filteredProducts = useMemo(() => {
    return fullProductsList.filter(p => {
      // Category Tab filter
      if (selectedCategoryTab !== 'All' && p.category !== selectedCategoryTab) {
        return false;
      }

      // Material Checkboxes
      if (selectedMaterials.length > 0 && !selectedMaterials.includes(p.material)) {
        return false;
      }

      // Collection Checkboxes
      if (selectedCollections.length > 0 && !selectedCollections.includes(p.collection)) {
        return false;
      }

      // Price Range Checkboxes
      if (selectedPriceRanges.length > 0) {
        const matchesPrice = selectedPriceRanges.some(range => {
          if (range === '5k-10k') return p.price >= 5000 && p.price <= 10000;
          if (range === '10k-15k') return p.price > 10000 && p.price <= 15000;
          if (range === '15k-20k') return p.price > 15000 && p.price <= 20000;
          if (range === '20k+') return p.price > 20000;
          return true;
        });
        if (!matchesPrice) return false;
      }

      // Color filter
      if (selectedColor && !p.colors?.some(c => c.hex === selectedColor)) {
        return false;
      }

      return true;
    });
  }, [fullProductsList, selectedCategoryTab, selectedMaterials, selectedCollections, selectedPriceRanges, selectedColor]);

  // Sorting Logic
  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
    if (sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      list.sort((a, b) => (b.badge === 'New' ? 1 : -1));
    } else if (sortBy === 'rating') {
      list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }
    return list;
  }, [filteredProducts, sortBy]);

  return (
    <div className="shop-page-wrapper">
      {/* ---------------------------------------------------- */}
      {/* 1. PREMIUM SHOP HERO HEADER */}
      {/* ---------------------------------------------------- */}
      <section className="shop-hero">
        <div className="shop-hero-overlay" />
        <div className="shop-hero-container">
          <span className="shop-hero-eyebrow">SHOP OUR COLLECTION</span>
          <h1 className="shop-hero-title">Premium Suitcases for Every Journey</h1>
          <p className="shop-hero-subtitle">
            Explore our range of high-quality suitcases designed for durability, style and convenience.
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. CATEGORY TABS & SORT BAR */}
      {/* ---------------------------------------------------- */}
      <div className="shop-control-bar-wrapper">
        <div className="shop-control-container">
          {/* Category Tabs */}
          <div className="shop-tabs">
            {['All', 'Hard Shell', 'Soft Shell', 'Premium', 'Travel Sets'].map((cat) => (
              <button
                key={cat}
                className={`shop-tab-pill ${selectedCategoryTab === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategoryTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="shop-sort-box">
            <span className="shop-sort-label">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="shop-sort-select"
            >
              <option value="popularity">Popularity</option>
              <option value="newest">Newest Arrival</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {/* Mobile Filter Toggle Button */}
          <button 
            className="mobile-filter-trigger"
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          >
            <Filter size={16} /> Filters
          </button>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3. MAIN SHOP LAYOUT (SIDEBAR + PRODUCT GRID) */}
      {/* ---------------------------------------------------- */}
      <div className="shop-main-container">
        {/* Sidebar Filters */}
        <aside className={`shop-sidebar ${isMobileFilterOpen ? 'mobile-open' : ''}`}>
          <div className="sidebar-header">
            <h3 className="sidebar-title">
              <Filter size={18} /> Filters
            </h3>
            <div className="sidebar-header-actions">
              <button className="clear-all-btn" onClick={clearAllFilters}>
                Clear All
              </button>
              {isMobileFilterOpen && (
                <button className="close-mobile-filter" onClick={() => setIsMobileFilterOpen(false)}>
                  <X size={20} />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter */}
          <div className="filter-block">
            <div className="filter-block-title" onClick={() => toggleSection('category')}>
              <span>Category</span>
              {openSections.category ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
            {openSections.category && (
              <div className="filter-block-content">
                <label className="checkbox-row">
                  <input type="checkbox" onChange={() => toggleCheckbox(selectedSizes, setSelectedSizes, 'Cabin')} />
                  <span className="checkbox-text">Cabin (20")</span>
                  <span className="count-badge">12</span>
                </label>
                <label className="checkbox-row">
                  <input type="checkbox" onChange={() => toggleCheckbox(selectedSizes, setSelectedSizes, 'Medium')} />
                  <span className="checkbox-text">Medium (24")</span>
                  <span className="count-badge">16</span>
                </label>
                <label className="checkbox-row">
                  <input type="checkbox" onChange={() => toggleCheckbox(selectedSizes, setSelectedSizes, 'Large')} />
                  <span className="checkbox-text">Large (28")</span>
                  <span className="count-badge">14</span>
                </label>
                <label className="checkbox-row">
                  <input type="checkbox" onChange={() => toggleCheckbox(selectedSizes, setSelectedSizes, 'Sets')} />
                  <span className="checkbox-text">Travel Sets</span>
                  <span className="count-badge">6</span>
                </label>
              </div>
            )}
          </div>

          {/* Material Filter */}
          <div className="filter-block">
            <div className="filter-block-title" onClick={() => toggleSection('material')}>
              <span>Material</span>
              {openSections.material ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
            {openSections.material && (
              <div className="filter-block-content">
                {[
                  { name: 'ABS', count: 18 },
                  { name: 'PC + ABS', count: 24 },
                  { name: 'Polycarbonate', count: 8 },
                  { name: 'Aluminium', count: 4 }
                ].map((m) => (
                  <label key={m.name} className="checkbox-row">
                    <input 
                      type="checkbox" 
                      checked={selectedMaterials.includes(m.name)} 
                      onChange={() => toggleCheckbox(selectedMaterials, setSelectedMaterials, m.name)} 
                    />
                    <span className="checkbox-text">{m.name}</span>
                    <span className="count-badge">{m.count}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Collection Filter */}
          <div className="filter-block">
            <div className="filter-block-title" onClick={() => toggleSection('collection')}>
              <span>Collection</span>
              {openSections.collection ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
            {openSections.collection && (
              <div className="filter-block-content">
                {[
                  { name: 'Classic', count: 14 },
                  { name: 'Pro', count: 18 },
                  { name: 'Elite', count: 8 },
                  { name: 'Premium', count: 6 }
                ].map((col) => (
                  <label key={col.name} className="checkbox-row">
                    <input 
                      type="checkbox" 
                      checked={selectedCollections.includes(col.name)} 
                      onChange={() => toggleCheckbox(selectedCollections, setSelectedCollections, col.name)} 
                    />
                    <span className="checkbox-text">{col.name}</span>
                    <span className="count-badge">{col.count}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Price Range Filter */}
          <div className="filter-block">
            <div className="filter-block-title" onClick={() => toggleSection('price')}>
              <span>Price Range</span>
              {openSections.price ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
            {openSections.price && (
              <div className="filter-block-content">
                {[
                  { label: 'NPR 5,000 – 10,000', id: '5k-10k', count: 12 },
                  { label: 'NPR 10,001 – 15,000', id: '10k-15k', count: 18 },
                  { label: 'NPR 15,001 – 20,000', id: '15k-20k', count: 10 },
                  { label: 'NPR 20,001+', id: '20k+', count: 6 }
                ].map((p) => (
                  <label key={p.id} className="checkbox-row">
                    <input 
                      type="checkbox" 
                      checked={selectedPriceRanges.includes(p.id)} 
                      onChange={() => toggleCheckbox(selectedPriceRanges, setSelectedPriceRanges, p.id)} 
                    />
                    <span className="checkbox-text">{p.label}</span>
                    <span className="count-badge">{p.count}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Color Filter */}
          <div className="filter-block">
            <div className="filter-block-title" onClick={() => toggleSection('color')}>
              <span>Color</span>
              {openSections.color ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
            {openSections.color && (
              <div className="color-swatch-picker">
                {[
                  { hex: '#1C1C1E', name: 'Black' },
                  { hex: '#1C3F34', name: 'Forest Green' },
                  { hex: '#1B2A4A', name: 'Navy Blue' },
                  { hex: '#E8A29A', name: 'Rose Gold' },
                  { hex: '#D1D5DB', name: 'Silver' }
                ].map((c) => (
                  <button
                    key={c.hex}
                    className={`sidebar-swatch-circle ${selectedColor === c.hex ? 'active' : ''}`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                    onClick={() => setSelectedColor(selectedColor === c.hex ? null : c.hex)}
                  />
                ))}
                {selectedColor && (
                  <button className="clear-color-btn" onClick={() => setSelectedColor(null)}>
                    +
                  </button>
                )}
              </div>
            )}
          </div>
        </aside>

        {/* Main Product Grid Column */}
        <main className="shop-grid-column">
          {sortedProducts.length === 0 ? (
            <div className="shop-empty-state">
              <h3>No products match your selected filters</h3>
              <p>Try clearing your active filters to explore the rest of our collection.</p>
              <button className="btn-brand-primary" onClick={clearAllFilters}>
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="shop-products-grid">
              {sortedProducts.map((product) => (
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

          {/* Pagination Bar */}
          <div className="shop-pagination-wrapper">
            <button className="pagination-arrow" disabled>‹</button>
            <button className="pagination-num active">1</button>
            <button className="pagination-num">2</button>
            <button className="pagination-num">3</button>
            <button className="pagination-num">4</button>
            <button className="pagination-num">5</button>
            <span className="pagination-dots">..</span>
            <button className="pagination-arrow">›</button>
          </div>
        </main>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 4. TRUST / BENEFIT STRIP (SHOP BOTTOM) */}
      {/* ---------------------------------------------------- */}
      <section className="shop-benefits-strip">
        <div className="shop-benefits-container">
          <div className="shop-benefit-card">
            <ShieldCheck size={28} strokeWidth={1.5} className="shop-benefit-icon" />
            <h4 className="shop-benefit-title">Durable & Reliable</h4>
            <p className="shop-benefit-desc">Built to last, wherever you go.</p>
          </div>

          <div className="shop-benefit-card">
            <Compass size={28} strokeWidth={1.5} className="shop-benefit-icon" />
            <h4 className="shop-benefit-title">Travel Ready</h4>
            <p className="shop-benefit-desc">Perfect for every adventure.</p>
          </div>

          <div className="shop-benefit-card">
            <Truck size={28} strokeWidth={1.5} className="shop-benefit-icon" />
            <h4 className="shop-benefit-title">Fast Delivery</h4>
            <p className="shop-benefit-desc">Across Nepal.</p>
          </div>

          <div className="shop-benefit-card">
            <Headphones size={28} strokeWidth={1.5} className="shop-benefit-icon" />
            <h4 className="shop-benefit-title">Dedicated Support</h4>
            <p className="shop-benefit-desc">We're here to help.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
