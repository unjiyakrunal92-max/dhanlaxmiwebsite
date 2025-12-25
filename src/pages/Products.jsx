import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../styles/Products.css';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';
import categoriesData from '../data/categories.json';

const Products = ({ onAddToWishlist, searchTerm }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Get all products
  const allProducts = [
    ...productsData.televisions,
    ...productsData.fan,
    ...productsData.geyser,
    ...productsData.ro,
    ...productsData.appliances,
    ...productsData.cameras,
  ];

  // Get unique brands
  const brands = ['all', ...new Set(allProducts.map((p) => p.brand))];

  // Get category from URL
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  // Filter products
  let filteredProducts = allProducts;

  // Filter by category
  if (selectedCategory !== 'all') {
    filteredProducts = filteredProducts.filter(
      (p) => p.category === selectedCategory
    );
  }

  // Filter by brand
  if (selectedBrand !== 'all') {
    filteredProducts = filteredProducts.filter((p) => p.brand === selectedBrand);
  }

  // Filter by price range
  if (priceRange !== 'all') {
    filteredProducts = filteredProducts.filter((p) => {
      if (priceRange === 'under25k') return p.price < 25000;
      if (priceRange === '25k-50k') return p.price >= 25000 && p.price < 50000;
      if (priceRange === '50k-100k') return p.price >= 50000 && p.price < 100000;
      if (priceRange === 'above100k') return p.price >= 100000;
      return true;
    });
  }

  // Filter by search term
  if (searchTerm) {
    filteredProducts = filteredProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // Sort products
  filteredProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'priceLow') return a.price - b.price;
    if (sortBy === 'priceHigh') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedBrand('all');
    setPriceRange('all');
    setSortBy('featured');
    setSearchParams({});
  };

  const getCategoryName = () => {
    if (selectedCategory === 'all') return 'All Products';
    const cat = categoriesData.find((c) => c.id === selectedCategory);
    return cat ? cat.name : 'Products';
  };

  return (
    <div className="products-page">
      <div className="container">
        {/* Header */}
        <div className="products-header">
          <h1>{getCategoryName()}</h1>
          <p className="products-count">{filteredProducts.length} products found</p>
        </div>

        <div className="products-layout">
          {/* Sidebar Filters - Desktop */}
          <aside className="filter-sidebar">
            <div className="filter-header">
              <h3>Filters</h3>
              <button onClick={clearFilters} className="clear-filters-btn">
                Clear All
              </button>
            </div>

            {/* Category Filter */}
            <div className="filter-section">
              <h4>Category</h4>
              <div className="filter-options">
                <label className="filter-option">
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === 'all'}
                    onChange={() => handleCategoryChange('all')}
                  />
                  <span>All Categories</span>
                </label>
                {categoriesData.map((cat) => (
                  <label key={cat.id} className="filter-option">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === cat.id}
                      onChange={() => handleCategoryChange(cat.id)}
                    />
                    <span>{cat.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Brand Filter */}
            <div className="filter-section">
              <h4>Brand</h4>
              <div className="filter-options">
                {brands.map((brand) => (
                  <label key={brand} className="filter-option">
                    <input
                      type="radio"
                      name="brand"
                      checked={selectedBrand === brand}
                      onChange={() => setSelectedBrand(brand)}
                    />
                    <span>{brand === 'all' ? 'All Brands' : brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="filter-section">
              <h4>Price Range</h4>
              <div className="filter-options">
                <label className="filter-option">
                  <input
                    type="radio"
                    name="price"
                    checked={priceRange === 'all'}
                    onChange={() => setPriceRange('all')}
                  />
                  <span>All Prices</span>
                </label>
                <label className="filter-option">
                  <input
                    type="radio"
                    name="price"
                    checked={priceRange === 'under25k'}
                    onChange={() => setPriceRange('under25k')}
                  />
                  <span>Under ₹25,000</span>
                </label>
                <label className="filter-option">
                  <input
                    type="radio"
                    name="price"
                    checked={priceRange === '25k-50k'}
                    onChange={() => setPriceRange('25k-50k')}
                  />
                  <span>₹25,000 - ₹50,000</span>
                </label>
                <label className="filter-option">
                  <input
                    type="radio"
                    name="price"
                    checked={priceRange === '50k-100k'}
                    onChange={() => setPriceRange('50k-100k')}
                  />
                  <span>₹50,000 - ₹1,00,000</span>
                </label>
                <label className="filter-option">
                  <input
                    type="radio"
                    name="price"
                    checked={priceRange === 'above100k'}
                    onChange={() => setPriceRange('above100k')}
                  />
                  <span>Above ₹1,00,000</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="products-content">
            {/* Toolbar */}
            <div className="products-toolbar">
              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="mobile-filter-toggle"
              >
                <span>🔧</span>
                Filters
              </button>

              <div className="sort-container">
                <label className="sort-label">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select"
                >
                  <option value="featured">Featured</option>
                  <option value="priceLow">Price: Low to High</option>
                  <option value="priceHigh">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="products-grid">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToWishlist={onAddToWishlist}
                  />
                ))}
              </div>
            ) : (
              <div className="products-empty">
                <div className="empty-icon">📦</div>
                <h3>No products found</h3>
                <p>Try adjusting your filters or search term</p>
                <button onClick={clearFilters} className="btn btn-primary">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Filter Modal */}
        {showMobileFilters && (
          <div
            className="mobile-filter-modal active"
            onClick={() => setShowMobileFilters(false)}
          >
            <div
              className="mobile-filter-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mobile-filter-header">
                <h3>Filters</h3>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="close-modal-btn"
                >
                  ✕
                </button>
              </div>
              {/* Same filter content as sidebar */}
              <div className="filter-section">
                <h4>Category</h4>
                <div className="filter-options">
                  <label className="filter-option">
                    <input
                      type="radio"
                      name="mobile-category"
                      checked={selectedCategory === 'all'}
                      onChange={() => handleCategoryChange('all')}
                    />
                    <span>All Categories</span>
                  </label>
                  {categoriesData.map((cat) => (
                    <label key={cat.id} className="filter-option">
                      <input
                        type="radio"
                        name="mobile-category"
                        checked={selectedCategory === cat.id}
                        onChange={() => handleCategoryChange(cat.id)}
                      />
                      <span>{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;