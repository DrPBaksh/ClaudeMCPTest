import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>AlpineLiving</h3>
            <p>Your trusted partner for relocating to the Alps. We provide comprehensive services and resources to make your mountain living dreams a reality.</p>
            <div className="footer-social">
              <a href="#" className="social-link"><i className="social-icon facebook"></i></a>
              <a href="#" className="social-link"><i className="social-icon instagram"></i></a>
              <a href="#" className="social-link"><i className="social-icon linkedin"></i></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Alpine Regions</h4>
            <ul className="footer-links">
              <li><Link to="/locations/french-alps">French Alps</Link></li>
              <li><Link to="/locations/swiss-alps">Swiss Alps</Link></li>
              <li><Link to="/locations/italian-alps">Italian Alps</Link></li>
              <li><Link to="/locations/austrian-alps">Austrian Alps</Link></li>
              <li><Link to="/locations/bavarian-alps">Bavarian Alps</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><Link to="/services/property-search">Property Search</Link></li>
              <li><Link to="/services/relocation-consulting">Relocation Consulting</Link></li>
              <li><Link to="/services/visa-assistance">Visa Assistance</Link></li>
              <li><Link to="/services/language-resources">Language Resources</Link></li>
              <li><Link to="/services/legal-support">Legal Support</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><Link to="/resources/remote-work">Remote Work Guide</Link></li>
              <li><Link to="/resources/cost-of-living">Cost of Living</Link></li>
              <li><Link to="/resources/healthcare">Healthcare</Link></li>
              <li><Link to="/resources/education">Education</Link></li>
              <li><Link to="/resources/testimonials">Success Stories</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} AlpineLiving. All rights reserved.</p>
          <ul className="legal-links">
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/accessibility">Accessibility</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;