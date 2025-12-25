import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/ProductCard.css';
import { formatPrice, getDiscount } from '../utils/helpers';
import { ShoppingCart} from 'lucide-react';

const ProductCard = ({ product, onAddToWishlist }) => {
  const navigate = useNavigate();
  const discount = getDiscount(product.oldPrice, product.price);

  const handleBuyNow = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Redirect to product details page
    navigate(`/product/${product.id}`);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    if (onAddToWishlist) {
      onAddToWishlist(product);
    }
  };

  // Render star rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className="star">⭐</span>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<span key={i} className="star">⭐</span>);
      } else {
        stars.push(<span key={i} className="star empty">☆</span>);
      }
    }
    return stars;
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} style={{ display: 'flex', flexDirection: 'column', height: '100%', textDecoration: 'none', color: 'inherit' }}>
        {/* Image Container */}
        <div className="product-image-container">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />

          {/* Badges */}
          <div className="product-badges">
            {product.badge && (
              <span className={`product-badge ${product.badge.toLowerCase()}`}>
                {product.badge}
              </span>
            )}
            {discount > 0 && (
              <span className="product-badge discount">{discount}% OFF</span>
            )}
          </div>

          {/* Wishlist Button */}
          <button onClick={handleWishlist} className="wishlist-btn">
            ❤️
          </button>

          {/* Out of Stock Overlay */}
          {!product.inStock && (
            <div className="out-of-stock-overlay">
              <span className="out-of-stock-text">Out of Stock</span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="product-info" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          {/* Brand */}
          <p className="product-brand">{product.brand}</p>

          {/* Product Name */}
          <h3 className="product-name">{product.name}</h3>

          {/* Rating */}
          <div className="product-rating">
            <div className="rating-stars">{renderStars()}</div>
            <div className="rating-stars">({product.rating})</div>
            <br></br><br></br>
            <span className="rating-count">({product.reviews})</span>
          </div>

          {/* Specs */}
          {product.specs && product.specs.length > 0 && (
            <div className="product-specs">
              {product.specs.slice(0, 2).map((spec, index) => (
                <span key={index} className="product-spec">
                  {spec}
                </span>
              ))}
            </div>
          )}

          {/* Spacer to push content down */}
          <div style={{ flex: 1 }}></div>

          {/* Price */}
          <div className="product-price-container">
            {product.oldPrice && (
              <p className="product-old-price">
                {formatPrice(product.oldPrice)}
              </p>
            )}
            <p className="product-price">{formatPrice(product.price)}</p>
          </div>

          {/* Action Buttons */}
          <div className="product-actions">
            <button
              onClick={handleBuyNow}
              disabled={!product.inStock}
              className="buy-btn"
            >
              <span><ShoppingCart/></span>
              Buy Now
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;