import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, TrendingUp, Star, Sparkles, DollarSign, Truck, Heart } from 'lucide-react';
import '../styles/App.css';

const About = () => {
  const stats = [
    { icon: Users, label: 'Happy Customers', value: '10,000+', color: '#3b82f6' },
    { icon: Award, label: 'Years Experience', value: '15+', color: '#f59e0b' },
    { icon: TrendingUp, label: 'Products Sold', value: '20,000+', color: '#10b981' },
    { icon: Star, label: 'Customer Rating', value: '4.8/5', color: '#eab308' },
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'We only stock products from trusted brands with proven quality and reliability.',
      icon: Sparkles,
      color: '#3b82f6',
    },
    {
      title: 'Customer Satisfaction',
      description: 'Your happiness is our priority. We go above and beyond to ensure you are satisfied.',
      icon: Heart,
      color: '#ec4899',
    },
    {
      title: 'Best Prices',
      description: 'Competitive pricing without compromising on quality or service.',
      icon: DollarSign,
      color: '#10b981',
    },
    {
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery to get your products to you as soon as possible.',
      icon: Truck,
      color: '#f59e0b',
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="page-header">
        <div className="container">
          <h1>About Dhanlaxmi Electronics</h1>
          <p>
            Your trusted partner for premium electronics and home appliances in
            Ahemdabad
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="stat-box">
                  <div className="stat-icon" style={{ background: stat.color }}>
                    <IconComponent size={28} strokeWidth={2} />
                  </div>
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-label">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section section-white">
        <div className="container">
          <div className="card about-story-card">
            <h2 className="about-story-title">Our Story</h2>
            <div className="about-story-content">
              <p>
                Founded in 2019 in Ahmedabad, Dhanlaxmi Electronics began with a clear vision — to deliver top-quality electronics, genuine products, and exceptional customer service at fair and transparent prices.
              </p>
              <p>
                What started as a focused local venture has rapidly grown into a trusted name in the electronics retail space, built on strong values, reliability, and long-term customer relationships. Our journey has been powered by the trust of our customers and our commitment to providing expert guidance, authentic brands, and dependable after-sales support.
              </p>
              <p>
                Today, Dhanlaxmi Electronics offers a wide and carefully curated range of products, including smartphones, televisions, laptops, home appliances, and the latest technology from leading global brands. Our experienced team ensures every customer finds the right product that fits both their needs and budget.
              </p>
              <p>
                Beyond products, we are proud to be building a strong community — connecting people with technology that enhances everyday life, homes, and businesses. As we continue to grow, our focus remains the same: quality, trust, innovation, and customer satisfaction.
              </p>
              <p>
                We look forward to serving Ahmedabad and beyond, bringing the best of technology to our community for many years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <div className="about-values-header">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">What makes us different</p>
          </div>
          <div className="features-grid">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="feature-box">
                  <div className="feature-icon" style={{ background: value.color }}>
                    <IconComponent size={32} strokeWidth={2} />
                  </div>
                  <h3 className="feature-title">{value.title}</h3>
                  <p className="feature-description">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section section-white">
        <div className="container">
          <div className="about-team-header">
            <h2 className="section-title">Our Team</h2>
            <p className="section-subtitle">
              Meet the dedicated professionals who make Dhanlaxmi Electronics the
              best choice for your electronics needs
            </p>
          </div>
          <div className="card about-team-card">
            <p className="about-team-text">
              Our team consists of experienced sales consultants, technical experts,
              and customer service professionals who are passionate about helping you
              find the right products. With years of combined experience in the
              electronics industry, we're here to answer your questions and provide
              expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="cta-section">
            <h2>Ready to Experience the Difference?</h2>
            <p>Visit our store or browse our online collection today</p>
            <div className="cta-buttons">
              <Link to="/products" className="btn btn-primary cta-btn-white">
                Browse Products
              </Link>
              <Link to="/contact" className="btn btn-outline cta-btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;