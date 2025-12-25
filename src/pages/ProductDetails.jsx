import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, CreditCard } from 'lucide-react';
import '../styles/ProductDetails.css';
import BrandsSlider from '../components/BrandsSlider';
import productsData from '../data/products.json';
import { formatPrice, sendToWhatsApp, getDiscount } from '../utils/helpers';

const ProductDetails = ({ onAddToWishlist }) => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showZoom, setShowZoom] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  // Get all products
  const allProducts = [
    ...productsData.fan,
    ...productsData.televisions,
    ...productsData.geyser,
    ...productsData.ro,
    ...productsData.appliances,
    ...productsData.cameras,
  ];

  // Find product by ID
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <h2>Product Not Found</h2>
        <Link to="/products" className="btn btn-primary" style={{ marginTop: '1rem' }}>
          Back to Products
        </Link>
      </div>
    );
  }

  // Collect all product images (main image + additional images)
  const productImages = [
    product.image,
    product.image2,
    product.image3,
    product.image4,
    product.image5,
  ].filter(img => img); // Remove undefined/null images

  const discount = getDiscount(product.oldPrice, product.price);

  // Initialize selected size and color
  React.useEffect(() => {
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      setSelectedSize(product.sizes[0]);
    }
    if (product.colors && product.colors.length > 0 && !selectedColor) {
      setSelectedColor(product.colors[0]);
    }
  }, [product, selectedSize, selectedColor]);

  // Render star rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} size={20} fill="#fbbf24" color="#fbbf24" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<Star key={i} size={20} fill="#fbbf24" color="#fbbf24" />);
      } else {
        stars.push(<Star key={i} size={20} color="#d1d5db" />);
      }
    }
    return stars;
  };

  const handleBuyNow = () => {
    sendToWhatsApp(product, quantity, selectedSize, selectedColor);
  };

  const handleAddToWishlist = () => {
    if (onAddToWishlist) {
      onAddToWishlist(product);
    }
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setShowZoom(true);
  };

  const handleMouseLeave = () => {
    setShowZoom(false);
  };

  return (
    <div className="product-details-page">
      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/products">Products</Link>
          <span>/</span>
          <span>{product.name}</span>
        </div>

        <div className="product-details-container">
          {/* Left - Image Gallery */}
          <div className="product-images-section">
            {/* Thumbnail Images - Left Side */}
            {productImages.length > 1 && (
              <div className="thumbnail-images-vertical">
                {productImages.map((img, index) => (
                  <div
                    key={index}
                    className={`thumbnail-vertical ${selectedImage === index ? 'active' : ''}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img src={img} alt={`${product.name} ${index + 1}`} />
                  </div>
                ))}
              </div>
            )}

            {/* Main Image - Right Side */}
            <div className="main-image-container">
              <div 
                className="main-image"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img src={productImages[selectedImage]} alt={product.name} />
                {product.badge && (
                  <span className={`product-badge1 ${product.badge.toLowerCase()}`}>
                    {product.badge}
                  </span>
                )}
                {discount > 0 && (
                  <span className="discount-badge1">{discount}% OFF</span>
                )}
              </div>

              {/* Zoomed Image Preview */}
              {showZoom && (
                <div className="zoomed-preview">
                  <div 
                    className="zoomed-image"
                    style={{
                      backgroundImage: `url(${productImages[selectedImage]})`,
                      backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                      backgroundSize: '250%',
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                </div>
              )}

              {/* Action Buttons */}
              <div className="image-actions">
                <button className="action-btn" onClick={handleAddToWishlist}>
                  <Heart size={20} />
                  Add to Wishlist
                </button>
                <button className="action-btn">
                  <Share2 size={20} />
                  Share
                </button>
              </div>
            </div>
          </div>

          {/* Right - Product Info */}
          <div className="product-info-section">
            {/* Brand */}
            <p className="product-brand">{product.brand}</p>

            {/* Product Name */}
            <h1 className="product-title">{product.name}</h1>

            {/* Rating & Reviews */}
            <div className="product-rating-section">
              <div className="rating-stars">{renderStars(product.rating)}</div>
              <span className="rating-value">{product.rating}</span>
              <span className="rating-separator">|</span>
              <span className="reviews-count">{product.reviews} Reviews</span>
            </div>

            {/* Price Section */}
            <div className="price-section">
              <div className="current-price">{formatPrice(product.price)}</div>
              {product.oldPrice && (
                <>
                  <div className="old-price">{formatPrice(product.oldPrice)}</div>
                  <div className="discount-percent">{discount}% off</div>
                </>
              )}
            </div>

            {/* Stock Status */}
            <div className={`stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
              {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
            </div>

            {/* Specifications */}
            {product.specs && product.specs.length > 0 && (
              <div className="specs-section">
                <h3>Key Specifications:</h3>
                <ul className="specs-list">
                  {product.specs.map((spec, index) => (
                    <li key={index}>• {spec}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Size Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="variant-section">
                <h3>Select Size:</h3>
                <div className="variant-options">
                  {product.sizes.map((size, index) => (
                    <button
                      key={index}
                      className={`variant-btn ${selectedSize === size ? 'active' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selector */}
            {product.colors && product.colors.length > 0 && (
              <div className="variant-section">
                <h3>Select Color:</h3>
                <div className="variant-options">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      className={`variant-btn color-btn ${selectedColor === color ? 'active' : ''}`}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="quantity-section">
              <label>Quantity:</label>
              <div className="quantity-selector">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="qty-btn"
                >
                  -
                </button>
                <span className="qty-value">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="qty-btn"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buy Button */}
            <button
              onClick={handleBuyNow}
              disabled={!product.inStock}
              className="buy-now-btn"
            >
              <ShoppingCart size={20} />
              Buy Now via WhatsApp
            </button>
            <p className="buy-warning-text">
  ⚠️ Please do not send message multiple times
</p>

            {/* Features */}
            <div className="product-features">
              <div className="feature-item">
                <Truck size={24} />
                <div>
                  <h4>Free Delivery</h4>
                  <p>On orders above ₹5000</p>
                </div>
              </div>
              <div className="feature-item">
                <Shield size={24} />
                <div>
                  <h4>Warranty</h4>
                  <p>
                    {product.warranty && product.warranty.trim() !== ""
                      ? `${product.warranty} manufacturer warranty`
                      : "No warranty"}
                  </p>
                </div>
              </div>
              {product.EMI && product.EMI.toLowerCase() === "available" && (
                <div className="feature-item">
                  <CreditCard size={24} />
                  <div>
                    <h4>EMI Available</h4>
                    <p>Easy monthly installments</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="product-description-section">
          <h2>Product Description</h2>
          <div className="description-content">
            <p>{product.description}</p>
            <p>{product.description2}</p>
          </div>
        </div>

        {/* Specifications Table */}
        <div className="specifications-section">
          <h2>Detailed Specifications</h2>
          <table className="specs-table">
            <tbody>
              <tr>
                <td className="spec-label">Brand</td>
                <td className="spec-value">{product.brand}</td>
              </tr>
              <tr>
                <td className="spec-label">Model</td>
                <td className="spec-value">{product.name}</td>
              </tr>
              <tr>
                <td className="spec-label">Category</td>
                <td className="spec-value">{product.category}</td>
              </tr>
              {product.specs && product.specs.map((spec, index) => (
                <tr key={index}>
                  <td className="spec-label">Specification {index + 1}</td>
                  <td className="spec-value">{spec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Reviews Section */}
        <div className="reviews-section">
          <h2>Customer Reviews</h2>
          <div className="reviews-summary">
            <div className="rating-overview">
              <div className="rating-number">{product.rating}</div>
              <div className="rating-stars-large">{renderStars(product.rating)}</div>
              <p>{product.reviews} reviews</p>
            </div>
          </div>
        </div>
        <BrandsSlider/>

      </div>
    </div>
  );
};

export default ProductDetails;