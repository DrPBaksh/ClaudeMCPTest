import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>MountainApp</h3>
            <p>A stunning mountain-themed experience created entirely with Claude Model Context Protocol.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Mountains</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <ul className="footer-links">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} ClaudeMCPTest. All rights reserved.</p>
          <p className="attribution">Created with Claude Model Context Protocol</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;