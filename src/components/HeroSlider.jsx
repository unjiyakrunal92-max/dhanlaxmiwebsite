import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeroSlider.css';
import slidesData from '../data/slides.json';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = slidesData;

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="hero-slider">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
        >
          {/* Background */}
          <div className="slide-background">
            <img src={slide.image} alt={slide.title} />
            <div
              className="slide-overlay"
              style={{ 
                background: slide.bgGradient,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%' 
              }}
            ></div>
          </div>

          {/* Content */}
          <div className="slide-content">
            <div className="slide-text">
              <p className="slide-subtitle">{slide.subtitle}</p>
              <h1 className="slide-title">{slide.title}</h1>
              <p className="slide-price">{slide.price}</p>
              <Link to="/products" className="slide-button">
                {slide.buttonText}
              </Link>
            </div>

            <div className="slide-image">
              <img src={slide.image} alt={slide.title} />
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="slider-nav prev" aria-label="Previous slide">
        <span>‹</span>
      </button>
      <button onClick={nextSlide} className="slider-nav next" aria-label="Next slide">
        <span>›</span>
      </button>

      {/* Dots Indicator */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;