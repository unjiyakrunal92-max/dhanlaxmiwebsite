import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, Grid, ShoppingBag, User } from 'lucide-react';
import '../styles/MobileNav.css';

const MobileNav = ({ cartCount = 0 }) => {
  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Search', path: '/products', icon: Search },
    { name: 'Categories', path: '/products', icon: Grid },
    { name: 'Cart', path: '/cart', icon: ShoppingBag, badge: cartCount },
    { name: 'Profile', path: '/profile', icon: User },
  ];

  return (
    <div className="mobile-nav">
      <div className="mobile-nav-content">
        {navItems.map((item) => (
          <NavLink
            key={item.path + item.name}
            to={item.path}
            className={({ isActive }) =>
              `mobile-nav-item ${isActive ? 'active' : ''}`
            }
          >
            <div className="mobile-nav-icon-wrapper">
              <item.icon size={24} strokeWidth={2} className="mobile-nav-icon" />
              {item.badge > 0 && (
                <span className="mobile-nav-badge">{item.badge}</span>
              )}
            </div>
            <span className="mobile-nav-label">{item.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;