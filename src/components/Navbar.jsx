import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, Heart, User, Menu, X, Phone, MapPin, Truck } from 'lucide-react';
import '../styles/Navbar.css';
import { STORE_INFO } from '../utils/helpers';

const Navbar = ({ cartCount = 0, wishlistCount = 0, onSearchChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  
  // Show search only on Products page
  const showSearch = location.pathname === '/products';

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearchChange) {
      onSearchChange(value);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'TermsAndConditions' , path: '/terms'}
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="top-bar-left">
              <a href={`tel:${STORE_INFO.phone}`} className="top-bar-link">
                <Phone size={16} />
                <span>{STORE_INFO.phone}</span>
              </a>
              <a href="https://maps.app.goo.gl/FJwLQ5LC3qcNTpo57" target='_blank' className="top-bar-link">
                <MapPin size={16} />
                <span>Dholka, Ahmedabad</span>
              </a>
            </div>
            <div className="top-bar-right">
              <span className="top-bar-text"><Truck size={16} /> Free Delivery on orders above ₹5000</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            {/* Logo */}
            <Link to="/" className="navbar-logo">
              <div className="logo-icon">
                <img src='https://i.ibb.co/SXXzh2hD/web-app-manifest-512x512.png' alt="Logo" />
              </div>
              <div className="logo-text">
                <h1>Dhanlaxmi</h1>
                <p>Electronics</p>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Search Bar - Desktop */}
            {showSearch && (
              <div className="navbar-search desktop-search">
                <Search className="search-icon" size={18} strokeWidth={2} />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="search-input"
                />
              </div>
            )}

            {/* Nav Actions */}
            <div className="nav-actions">
              <Link to="/wishlist" className="nav-icon" title="Wishlist">
                <Heart size={22} strokeWidth={2} />
                {wishlistCount > 0 && <span className="nav-badge">{wishlistCount}</span>}
              </Link>

              <Link to="/cart" className="nav-icon" title="Cart">
                <ShoppingCart size={22} strokeWidth={2} />
                {cartCount > 0 && <span className="nav-badge">{cartCount}</span>}
              </Link>

              <Link to="/profile" className="nav-icon user-icon-desktop" title="Profile">
                <User size={22} strokeWidth={2} />
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="mobile-menu-toggle"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Search - Positioned below the main header */}
          {showSearch && (
            <div className="mobile-search-container">
              <div className="navbar-search">
                <Search className="search-icon" size={18} strokeWidth={2} />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="search-input"
                />
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="mobile-menu active">
            <ul className="mobile-nav-links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink to="/profile" onClick={() => setMobileMenuOpen(false)}>
                  Profile
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;