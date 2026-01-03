import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import { Analytics } from '@vercel/analytics/react';
// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import TermsAndConditions from './pages/TermsAndConditions';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Add to Cart
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Add to Wishlist
  const addToWishlist = (product) => {
    const exists = wishlistItems.find((item) => item.id === product.id);
    if (!exists) {
      setWishlistItems([...wishlistItems, product]);
      alert(`${product.name} added to wishlist!`);
    } else {
      alert('Product already in wishlist!');
    }
  };

  // Remove from Wishlist
  const removeFromWishlist = (productId) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== productId));
  };

  // Handle Search
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        {/* Navbar */}
        <Navbar
          cartCount={cartItems.length}
          wishlistCount={wishlistItems.length}
          onSearchChange={handleSearch}
        />

        {/* Main Content with Page Transitions */}
        <main className="main-content">
          <PageTransition>
              <Routes>
              <Route path="/" element={<Home onAddToWishlist={addToWishlist} />} />
              <Route
                path="/products"
                element={
                  <Products
                    onAddToWishlist={addToWishlist}
                    searchTerm={searchTerm}
                  />
                }
              />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/product/:id"
                element={<ProductDetails onAddToWishlist={addToWishlist} />}
              />
              

              {/* Placeholder Routes */}
              <Route
                path="/cart"
                element={
                  <div className="section">
                    <div className="container">
                      <div className="empty-state">
                        <div className="empty-state-icon">🛒</div>
                        <h3>Shopping Cart</h3>
                        <p>
                          {cartItems.length === 0
                            ? 'Your cart is empty'
                            : `You have ${cartItems.length} items in your cart`}
                        </p>
                        <a href="/products" className="btn btn-primary">
                          Continue Shopping
                        </a>
                      </div>
                    </div>
                  </div>
                }
              />
              <Route
                path="/wishlist"
                element={
                  <div className="section">
                    <div className="container">
                      <div className="empty-state">
                        <div className="empty-state-icon">❤️</div>
                        <h3>My Wishlist</h3>
                        <p>
                          {wishlistItems.length === 0
                            ? 'Your wishlist is empty'
                            : `You have ${wishlistItems.length} items in your wishlist`}
                        </p>
                        <a href="/products" className="btn btn-primary">
                          Continue Shopping
                        </a>
                      </div>
                    </div>
                  </div>
                }
              />
              <Route
                path="/profile"
                element={
                  <div className="section">
                    <div className="container">
                      <div className="empty-state">
                        <div className="empty-state-icon">👤</div>
                        <h3>My Profile</h3>
                        <p>Manage your account and preferences</p>
                      </div>
                    </div>
                  </div>
                }
              />

              {/* 404 Page */}
              <Route
                path="*"
                element={
                  <div className="section">
                    <div className="container">
                      <div className="empty-state">
                        <div className="empty-state-icon">🔍</div>
                        <h3>Page Not Found</h3>
                        <p>The page you're looking for doesn't exist.</p>
                        <a href="/" className="btn btn-primary">
                          Go Home
                        </a>
                      </div>
                    </div>
                  </div>
                }
              />
            </Routes>
          </PageTransition>
        </main>

        {/* Footer */}
        <Footer />

        {/* Mobile Bottom Navigation */}
        <MobileNav cartCount={cartItems.length} />
      </div>
       <Analytics/>
    </Router>
  );
}

export default App;