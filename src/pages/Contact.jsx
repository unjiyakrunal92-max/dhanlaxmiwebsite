import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import '../styles/App.css';
import { STORE_INFO } from '../utils/helpers';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send message via WhatsApp
    const message = `
*New Contact Form Submission*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Subject:* ${formData.subject}

*Message:*
${formData.message}
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });

    alert('Thank you! Your message will open in WhatsApp.');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: STORE_INFO.phone,
      link: `tel:${STORE_INFO.phone}`,
      color: '#10b981',
    },
    {
      icon: Mail,
      title: 'Email',
      details: STORE_INFO.email,
      link: `mailto:${STORE_INFO.email}`,
      color: '#3b82f6',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: STORE_INFO.address,
      link: null,
      color: '#ef4444',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Mon - Sat: 10:00 AM - 8:00 PM\nSunday: 11:00 AM - 6:00 PM',
      link: null,
      color: '#f59e0b',
    },
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="page-header">
        <div className="container"> 
          <h1>Get In Touch</h1>
          <p>
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section">
        <div className="container">
          <div className="features-grid">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="feature-box">
                  <div className="feature-icon" style={{ background: info.color }}>
                    <IconComponent size={32} strokeWidth={2} />
                  </div>
                  <h3 className="feature-title">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="feature-description"
                      style={{ color: 'var(--primary-color)', whiteSpace: 'pre-line' }}
                    >
                      {info.details}
                    </a>
                  ) : (
                    <p className="feature-description" style={{ whiteSpace: 'pre-line' }}>
                      {info.details}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section section-white">
        <div className="container">
          <div className="contact-form-grid">
            {/* Contact Form */}
            <div className="card">
              <h2 className="form-title">Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="form-textarea"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary form-submit-btn">
                  <Send size={20} />
                  <span>Send Message</span>
                </button>

                <p className="form-note">
                  This will open WhatsApp with your message pre-filled
                </p>
              </form>
            </div>

            {/* Map & Quick Contact */}
            <div className="contact-right">
              {/* Map Placeholder */}
              <div className="map-container">
                <iframe
                  title="Store Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250670.40776311516!2d72.17637485666953!3d22.82025981500103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395eed54437cb83d%3A0xb97778de620e8948!2sDhanalaxmi%20Electric%20%26%20Electronics!5e0!3m2!1sen!2sin!4v1765956162486!5m2!1sen!2sin&quot"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>

              {/* Quick Contact */}
              <div className="cta-section quick-contact">
                <h3 className="quick-contact-title">Need Immediate Help?</h3>
                <p className="quick-contact-text">
                  Our team is ready to assist you. Contact us directly via WhatsApp
                  for instant support.
                </p>
                <a
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary whatsapp-btn"
                >
                  <MessageCircle size={20} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;