import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo-container">
          <a href="/" className="logo">MountainApp</a>
          <span className="logo-tagline">Claude MCP</span>
        </div>

        <nav className={`navigation ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item"><a href="#">Home</a></li>
            <li className="nav-item"><a href="#">Mountains</a></li>
            <li className="nav-item"><a href="#">Experiences</a></li>
            <li className="nav-item"><a href="#">About</a></li>
            <li className="nav-item"><a href="#">Contact</a></li>
          </ul>
        </nav>

        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;