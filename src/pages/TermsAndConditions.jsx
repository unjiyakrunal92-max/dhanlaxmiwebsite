import React from 'react';
import { Shield, AlertTriangle, CheckCircle, MessageSquare, Clock, FileText } from 'lucide-react';
import '../styles/TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <div className="terms-page">
      <div className="container">
        {/* Header */}
        <div className="terms-header">
          <Shield size={48} className="terms-icon" />
          <h1>Terms & Conditions</h1>
          <p>Please read these terms carefully before using our services</p>
          <div className="last-updated">Last Updated: December 20, 2024</div>
        </div>

        {/* Content Sections */}
        <div className="terms-content">
          
          {/* WhatsApp Communication */}
          <section className="terms-section">
            <div className="section-header">
              <MessageSquare size={24} />
              <h2>WhatsApp Communication Policy</h2>
            </div>
            <div className="terms-list">
              <div className="term-item warning">
                <AlertTriangle size={20} />
                <div>
                  <h3>Do Not Send Multiple Messages</h3>
                  <p>Sending multiple inquiries for the same product may result in delayed responses or being blocked from our WhatsApp service. Please send your inquiry once and wait for our response.</p>
                </div>
              </div>
              
              <div className="term-item warning">
                <AlertTriangle size={20} />
                <div>
                  <h3>Professional Communication Required</h3>
                  <p>Use of abusive language, threats, or inappropriate messages on WhatsApp is strictly prohibited and may result in immediate blocking and legal action if necessary.</p>
                </div>
              </div>
              
              <div className="term-item info">
                <Clock size={20} />
                <div>
                  <h3>Response Time</h3>
                  <p>We strive to respond to all inquiries within 2-4 hours during business hours (10 AM - 8 PM). If we are unavailable, we will message you as soon as possible.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Product Warranty */}
          <section className="terms-section">
            <div className="section-header">
              <Shield size={24} />
              <h2>Warranty & Support Policy</h2>
            </div>
            <div className="terms-list">
              <div className="term-item success">
                <CheckCircle size={20} />
                <div>
                  <h3>Warranty Coverage</h3>
                  <p>All products come with manufacturer warranty as specified on the product page. Warranty period starts from the date of purchase.</p>
                </div>
              </div>
              
              <div className="term-item warning">
                <AlertTriangle size={20} />
                <div>
                  <h3>Expired Warranty</h3>
                  <p>Once the warranty period expires, we cannot provide free repairs or replacements. Out-of-warranty service may be available at additional cost, subject to availability.</p>
                </div>
              </div>
              
              <div className="term-item info">
                <FileText size={20} />
                <div>
                  <h3>Warranty Claims</h3>
                  <p>To claim warranty, you must provide proof of purchase (invoice/receipt). Warranty does not cover damage due to misuse, accidents, or unauthorized repairs.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Order & Delivery */}
          <section className="terms-section">
            <div className="section-header">
              <CheckCircle size={24} />
              <h2>Order & Delivery Policy</h2>
            </div>
            <div className="terms-list">
              <div className="term-item success">
                <CheckCircle size={20} />
                <div>
                  <h3>Order Confirmation</h3>
                  <p>All orders must be confirmed via WhatsApp. Product availability is subject to stock and will be confirmed before delivery.</p>
                </div>
              </div>
              
              <div className="term-item info">
                <Clock size={20} />
                <div>
                  <h3>Delivery Time</h3>
                  <p>Delivery within Ahmedabad and nearby areas typically takes 1-3 business days. Same-day delivery available for orders placed before 12 PM (subject to location).</p>
                </div>
              </div>
              
              <div className="term-item warning">
                <AlertTriangle size={20} />
                <div>
                  <h3>Product Availability</h3>
                  <p>Product prices and availability are subject to change without notice. We reserve the right to cancel orders if products become unavailable.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Payment Terms */}
          <section className="terms-section">
            <div className="section-header">
              <FileText size={24} />
              <h2>Payment Terms</h2>
            </div>
            <div className="terms-list">
              <div className="term-item success">
                <CheckCircle size={20} />
                <div>
                  <h3>Payment Methods</h3>
                  <p>We accept cash on delivery, online bank transfer, UPI, and credit/debit cards. EMI options available on select products.</p>
                </div>
              </div>
              
              <div className="term-item info">
                <FileText size={20} />
                <div>
                  <h3>Pricing</h3>
                  <p>All prices are in Indian Rupees (INR) and include applicable taxes unless otherwise stated. Delivery charges may apply based on location.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Returns & Refunds */}
          <section className="terms-section">
            <div className="section-header">
              <AlertTriangle size={24} />
              <h2>Returns & Refunds</h2>
            </div>
            <div className="terms-list">
              <div className="term-item warning">
                <AlertTriangle size={20} />
                <div>
                  <h3>Return Policy</h3>
                  <p>Returns accepted within 7 days of delivery for defective or damaged products only. Product must be in original packaging with all accessories.</p>
                </div>
              </div>
              
              <div className="term-item info">
                <Clock size={20} />
                <div>
                  <h3>Refund Processing</h3>
                  <p>Approved refunds will be processed within 5-7 business days. Refunds will be issued to the original payment method.</p>
                </div>
              </div>
            </div>
          </section>

          {/* General Terms */}
          <section className="terms-section">
            <div className="section-header">
              <Shield size={24} />
              <h2>General Terms</h2>
            </div>
            <div className="terms-list">
              <div className="term-item info">
                <FileText size={20} />
                <div>
                  <h3>Changes to Terms</h3>
                  <p>We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of modified terms.</p>
                </div>
              </div>
              
              <div className="term-item success">
                <CheckCircle size={20} />
                <div>
                  <h3>Contact Us</h3>
                  <p>For any questions regarding these terms, please contact us via WhatsApp at +91 98244 39668 or email at info@dhanlaxmi.com</p>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* Footer Note */}
        <div className="terms-footer">
          <p>By using our website and services, you agree to these terms and conditions.</p>
          <p className="store-name">— Dhanlaxmi Electronics</p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;