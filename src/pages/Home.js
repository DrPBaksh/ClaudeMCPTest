import React, { useEffect, useRef } from 'react';
import '../styles/Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SnowEffect from '../components/SnowEffect';
import { Link } from 'react-router-dom';

const Home = () => {
  const mountainRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {    
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
        <SnowEffect intensity="medium" />
        <div className="hero-content">
          <h1 ref={titleRef} className="hero-title">Alpine Living</h1>
          <p ref={subtitleRef} className="hero-subtitle">Transform Your Life with a Move to the Alps</p>
          <a href="#explore" className="btn explore-btn">Discover</a>
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
            <h2 className="section-title">Why Move to the Alps?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon lifestyle-icon"></div>
                <h3>Quality of Life</h3>
                <p>Experience the perfect balance of natural beauty, outdoor activities, and relaxed mountain living.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon health-icon"></div>
                <h3>Health & Wellbeing</h3>
                <p>Benefit from clean air, active lifestyles and reduced stress in a pristine natural environment.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon community-icon"></div>
                <h3>Strong Communities</h3>
                <p>Join close-knit mountain communities with rich cultures and traditions that welcome newcomers.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="benefits-section">
          <div className="container">
            <div className="benefits-content">
              <h2>Live Where Others Vacation</h2>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <span className="benefit-number">01</span>
                  <h3>Year-Round Activities</h3>
                  <p>From winter skiing to summer hiking, the Alps offer endless recreational opportunities in every season.</p>
                </div>
                <div className="benefit-item">
                  <span className="benefit-number">02</span>
                  <h3>Remote Work Friendly</h3>
                  <p>Many Alpine regions now offer high-speed internet and co-working spaces perfect for digital nomads.</p>
                </div>
                <div className="benefit-item">
                  <span className="benefit-number">03</span>
                  <h3>Investment Opportunity</h3>
                  <p>Alpine property often retains value well and can provide rental income during tourism seasons.</p>
                </div>
                <div className="benefit-item">
                  <span className="benefit-number">04</span>
                  <h3>Cultural Experience</h3>
                  <p>Immerse yourself in unique Alpine traditions, festivals, cuisine, and multilingual environments.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="showcase-section">
          <div className="container">
            <div className="showcase-content">
              <div className="showcase-text">
                <h2>Your Alpine Journey Starts Here</h2>
                <p>Relocating to the Alps is more accessible than ever before. Our comprehensive resources help you navigate everything from residence permits to finding your dream mountain home.</p>
                <p>Whether you're seeking a permanent move, a seasonal residence, or investment property, we provide the expertise to make your Alpine aspirations a reality.</p>
                <div className="showcase-buttons">
                  <Link to="/locations" className="btn">Explore Locations</Link>
                  <Link to="/resources" className="btn btn-outline">Relocation Guide</Link>
                </div>
              </div>
              <div className="showcase-image">
                <img src="https://images.pexels.com/photos/355770/pexels-photo-355770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Snowy mountain peak" />
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials-section">
          <div className="container">
            <h2 className="section-title">Success Stories</h2>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"Moving from London to Chamonix was the best decision we ever made. Our children thrive in the outdoor lifestyle, and my work-life balance has never been better."</p>
                </div>
                <div className="testimonial-author">
                  <h4>James & Sarah</h4>
                  <p>Relocated from UK in 2022</p>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"As a remote software developer, I can work from anywhere. Innsbruck gives me the perfect blend of city amenities and immediate access to world-class mountains."</p>
                </div>
                <div className="testimonial-author">
                  <h4>Marcus</h4>
                  <p>Relocated from Germany in 2023</p>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"We purchased a chalet in the French Alps for both personal use and as a rental property. The return on investment has exceeded our expectations."</p>
                </div>
                <div className="testimonial-author">
                  <h4>Elena & Thomas</h4>
                  <p>Property investors since 2021</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Start Your Alpine Adventure?</h2>
              <p>Schedule a free consultation with our relocation specialists to discuss your specific needs and circumstances.</p>
              <Link to="/contact" className="btn btn-large">Book Consultation</Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;