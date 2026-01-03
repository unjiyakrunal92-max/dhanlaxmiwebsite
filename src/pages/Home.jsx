import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import { Package, Shield, ChartNoAxesCombined } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import BrandsSlider from '../components/BrandsSlider';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import categoriesData from '../data/categories.json';
import productsData from '../data/products.json';

const Home = ({ onAddToWishlist }) => {
  // Get all products
  const allProducts = [
    ...productsData.televisions,
    ...productsData.fan,
    ...productsData.geyser,
    ...productsData.ro,
    ...productsData.appliances,
    ...productsData.cameras,
  ];

  // Filter featured products (where featured: true)
  const featuredProducts = allProducts.filter((product) => product.featured === true);
  
  // Filter trending products (where trending: true)
  const trendingProducts = allProducts.filter((product) => product.trending === true);

  return (
    <div className="home-page">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card blue">
              <div className="feature-icon-box"><Package /></div>
              <div className="feature-content">
                <h3>Fast Delivery</h3>
                <p>Same day delivery available(Near Ahemdabad)</p>
              </div>
            </div>

            <div className="feature-card green">
              <div className="feature-icon-box"><Shield/></div>
              <div className="feature-content">
                <h3>Secure Payment</h3>
                <p>100% safe & secure</p>
              </div>
            </div>

            <div className="feature-card purple">
              <div className="feature-icon-box"><ChartNoAxesCombined/></div>
              <div className="feature-content">
                <h3>Best Prices</h3>
                <p>Guaranteed lowest prices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <h2>Shop by Category</h2>
          </div>
          <div className="categories-grid">
            {categoriesData.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - Only show if there are featured products */}
      {featuredProducts.length > 0 && (
        <section className="products-section">
          <div className="container">
            <div className="section-header">
              <div className="section-title-group">
                <h2>Featured Products</h2>
                <p>Handpicked selections just for you</p>
              </div>
              <Link to="/products" className="view-all-link">
                View All
                <span>→</span>
              </Link>
            </div>
            <div className="products-grid">
              {featuredProducts.slice(0, 4).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToWishlist={onAddToWishlist}
                />
              ))}
            </div>
          </div>
        </section>
      )}
 <BrandsSlider />
      {/* Trending Products - Only show if there are trending products */}
      {trendingProducts.length > 0 && (
        <section className="products-section" style={{ background: 'var(--bg-light)' }}>
          <div className="container">
            <div className="section-header">
              <div className="section-title-group">
                <h2>Trending Now</h2>
                <p>Most popular electronics this week</p>
              </div>
              <Link to="/products" className="view-all-link">
                View All
                <span>→</span>
              </Link>
            </div>
            <div className="products-grid">
              {trendingProducts.slice(0, 4).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToWishlist={onAddToWishlist}
                />
              ))}
            </div>
          </div>
        </section>
      )}

     
      {/* CTA Banner */}
      <section className="container">
        <div className="cta-banner">
          <h2>Ready to Upgrade Your Tech?</h2>
          <p>Explore our wide range of premium electronics and home appliances</p>
          <Link to="/products" className="cta-button">
            Browse All Products
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;