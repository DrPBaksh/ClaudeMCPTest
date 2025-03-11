import React, { useEffect, useRef } from 'react';
import '../styles/Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  const mountainRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const snowflakesContainerRef = useRef(null);

  useEffect(() => {
    // Create snowflakes
    const createSnowflakes = () => {
      const snowflakesContainer = snowflakesContainerRef.current;
      if (!snowflakesContainer) return;
      
      // Clear previous snowflakes
      snowflakesContainer.innerHTML = '';
      
      const numberOfSnowflakes = 50;
      
      for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        // Random properties
        const size = Math.random() * 10 + 5;
        const posX = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 5 + 5;
        
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${posX}%`;
        snowflake.style.animationDelay = `${delay}s`;
        snowflake.style.animationDuration = `${duration}s`;
        
        snowflakesContainer.appendChild(snowflake);
      }
    };
    
    // Initialize animations
    createSnowflakes();
    
    // Mountain parallax effect on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (mountainRef.current) {
        mountainRef.current.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home-page">
      <div className="hero-section">
        <div ref={snowflakesContainerRef} className="snowflakes-container"></div>
        <div className="hero-content">
          <h1 ref={titleRef} className="hero-title">Winter Mountain Experience</h1>
          <p ref={subtitleRef} className="hero-subtitle">All produced with Claude Model Context Protocol</p>
          <a href="#explore" className="btn explore-btn">Explore</a>
        </div>
        <div className="mountain-container">
          <div ref={mountainRef} className="mountain-background">
            <img src="https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Snow covered mountains" className="mountain-img" />
          </div>
        </div>
      </div>
      
      <Header />
      
      <main className="main-content">
        <section id="explore" className="features-section">
          <div className="container">
            <h2 className="section-title">Stunning Mountain Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon snow-icon"></div>
                <h3>Fresh Powder</h3>
                <p>Experience the finest snow conditions with our daily groomed trails.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon view-icon"></div>
                <h3>Panoramic Views</h3>
                <p>Breathtaking vistas of snow-capped peaks and alpine forests.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon tech-icon"></div>
                <h3>Modern Technology</h3>
                <p>Powered by Claude's Model Context Protocol for a seamless experience.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="showcase-section">
          <div className="container">
            <div className="showcase-content">
              <div className="showcase-text">
                <h2>AI-Powered Design</h2>
                <p>This entire application was crafted using Claude's Model Context Protocol, demonstrating the power of AI in creating beautiful, functional web experiences.</p>
                <p>From the stylish animations to the responsive design, everything you see here was generated through advanced AI capabilities.</p>
                <button className="btn">Learn More</button>
              </div>
              <div className="showcase-image">
                <img src="https://images.pexels.com/photos/355770/pexels-photo-355770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Snowy mountain peak" />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;