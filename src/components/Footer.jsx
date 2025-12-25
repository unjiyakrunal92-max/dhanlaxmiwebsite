import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import '../styles/Footer.css';
import { STORE_INFO } from '../utils/helpers';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const categories = [
    { name: 'Fan', path: '/products?category=fan' },
    { name: 'Televisions', path: '/products?category=televisions' },
    { name: 'Water Purifiers', path: '/products?category=ro' },
    { name: 'Geyser', path: '/products?category=geyser' },
  ];

  const policies = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Return Policy', path: '/terms' },
    { name: 'Shipping Info', path: '/shipping' },
  ];

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="container">
        <div className="footer-content">
          {/* Store Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <div className="footer-logo-icon"><img src='https://i.ibb.co/SXXzh2hD/web-app-manifest-512x512.png'></img></div>
              <div className="footer-logo-text">
                <h4>Dhanlaxmi</h4>
                <p>Electronics</p>
              </div>
            </div>
            <p>
              Your trusted destination for premium electronics and home appliances in Ahemdabad.
            </p>

            {/* Contact Info */}
            <div className="footer-contact">
              <div className="footer-contact-item">
                <Phone size={18} />
                <a href={`tel:${STORE_INFO.phone}`}>{STORE_INFO.phone}</a>
              </div>
              <div className="footer-contact-item">
                <Mail size={18} />
                <a href={`mailto:${STORE_INFO.email}`}>{STORE_INFO.email}</a>
              </div>
              <div className="footer-contact-item">
                <MapPin size={18} />
                <a href='https://maps.app.goo.gl/VPpqyo4AaKn5ASsT8' target='_blank'>{STORE_INFO.address}</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            {quickLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                {link.name}
              </Link>
            ))}
          </div>

          {/* Categories */}
          <div className="footer-section">
            <h3>Categories</h3>
            {categories.map((category) => (
              <Link key={category.path} to={category.path}>
                {category.name}
              </Link>
            ))}
          </div>

          {/* Policies & Social */}
          <div className="footer-section">
            <h3>Information</h3>
            {policies.map((policy) => (
              <Link key={policy.path} to={policy.path}>
                {policy.name}
              </Link>
            ))}

            {/* Social Media */}
            <h3 style={{ marginTop: '2rem' }}>Follow Us</h3>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link twitter">
                <Twitter size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link youtube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © 2024 Dhanlaxmi Electronics. All rights reserved.
            </p>
            <div className="footer-badges">
              <span>🔒 Secure Payment</span>
              <span>📦 Free Delivery</span>
              <span>↩️ Easy Returns</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;