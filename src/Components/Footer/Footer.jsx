import React from 'react';
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="company-info">
            <h3 className="footer-title">Company Name</h3>
            <p className="company-description">
              Creating innovative solutions for tomorrow's challenges. Join us in building the future.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link">
                <Github size={20} />
              </a>
              <a href="#" className="social-link">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="quick-links">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Services</a></li>
              <li><a href="#" className="footer-link">Projects</a></li>
              <li><a href="#" className="footer-link">Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="contact-list">
              <li className="contact-item">
                <Phone size={16} />
                <span>(555) 123-4567</span>
              </li>
              <li className="contact-item">
                <Mail size={16} />
                <span>contact@example.com</span>
              </li>
              <li className="contact-item">
                <MapPin size={16} />
                <span>123 Business St, NY 10001</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="newsletter">
            <h3 className="footer-title">Newsletter</h3>
            <p className="newsletter-description">Subscribe to our newsletter for updates and insights.</p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button
                type="submit"
                className="newsletter-button"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;