import React, { useState } from 'react';
import '../styles/Locations.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SnowEffect from '../components/SnowEffect';
import { Link } from 'react-router-dom';

const Locations = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const locations = [
    {
      id: 1,
      name: 'Chamonix',
      country: 'France',
      description: 'Nestled beneath Mont Blanc, Chamonix offers world-class skiing, a vibrant international community, and excellent infrastructure for remote workers.',
      tags: ['french-alps', 'popular', 'skiing'],
      image: 'https://images.pexels.com/photos/2138922/pexels-photo-2138922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      internetSpeed: '100+ Mbps',
      costOfLiving: 'High',
      expatCommunity: 'Large'
    },
    {
      id: 2,
      name: 'Innsbruck',
      country: 'Austria',
      description: 'A perfect blend of urban amenities and mountain living, Innsbruck provides excellent university facilities, public transportation, and cultural attractions.',
      tags: ['austrian-alps', 'city', 'university'],
      image: 'https://images.pexels.com/photos/2788292/pexels-photo-2788292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      internetSpeed: '100+ Mbps',
      costOfLiving: 'Medium',
      expatCommunity: 'Medium'
    },
    {
      id: 3,
      name: 'Zermatt',
      country: 'Switzerland',
      description: 'This car-free paradise beneath the Matterhorn offers luxury living, excellent infrastructure, and some of the most reliable public services in the Alps.',
      tags: ['swiss-alps', 'luxury', 'car-free'],
      image: 'https://images.pexels.com/photos/753325/pexels-photo-753325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      internetSpeed: '100+ Mbps',
      costOfLiving: 'Very High',
      expatCommunity: 'Medium'
    },
    {
      id: 4,
      name: 'Cortina d\'Ampezzo',
      country: 'Italy',
      description: 'Known as the "Queen of the Dolomites," Cortina offers spectacular mountain landscapes, rich Italian culture, and a more affordable entry point to Alpine living.',
      tags: ['italian-alps', 'affordable', 'culture'],
      image: 'https://images.pexels.com/photos/6650184/pexels-photo-6650184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      internetSpeed: '50+ Mbps',
      costOfLiving: 'Medium',
      expatCommunity: 'Small'
    },
    {
      id: 5,
      name: 'Garmisch-Partenkirchen',
      country: 'Germany',
      description: 'This Bavarian treasure combines German efficiency with alpine charm, offering excellent infrastructure, healthcare, and proximity to Munich.',
      tags: ['bavarian-alps', 'family-friendly', 'accessible'],
      image: 'https://images.pexels.com/photos/352395/pexels-photo-352395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      internetSpeed: '100+ Mbps',
      costOfLiving: 'Medium-High',
      expatCommunity: 'Medium'
    },
    {
      id: 6,
      name: 'Annecy',
      country: 'France',
      description: 'Often called the "Pearl of the French Alps," Annecy combines mountain living with lakeside beauty, excellent cuisine, and proximity to Geneva.',
      tags: ['french-alps', 'lakeside', 'accessible'],
      image: 'https://images.pexels.com/photos/8430138/pexels-photo-8430138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      internetSpeed: '100+ Mbps',
      costOfLiving: 'Medium-High',
      expatCommunity: 'Medium'
    }
  ];
  
  const filters = [
    { id: 'all', label: 'All Locations' },
    { id: 'french-alps', label: 'French Alps' },
    { id: 'swiss-alps', label: 'Swiss Alps' },
    { id: 'italian-alps', label: 'Italian Alps' },
    { id: 'austrian-alps', label: 'Austrian Alps' },
    { id: 'bavarian-alps', label: 'Bavarian Alps' }
  ];
  
  const filteredLocations = activeFilter === 'all' 
    ? locations 
    : locations.filter(location => location.tags.includes(activeFilter));
  
  return (
    <div className="locations-page">
      <Header />
      
      <div className="page-hero">
        <SnowEffect intensity="light" />
        <div className="page-hero-content">
          <h1>Alpine Destinations</h1>
          <p>Discover the perfect mountain location for your new life</p>
        </div>
      </div>
      
      <main className="locations-content">
        <div className="container">
          <section className="intro-section">
            <div className="intro-content">
              <h2>Finding Your Alpine Home</h2>
              <p>The Alps span across eight countries, each offering unique benefits for those considering relocation. From vibrant cities with mountain backdrops to peaceful village retreats, there's a perfect Alpine setting for every lifestyle.</p>
              <p>Our location guides provide essential information on residence permits, property markets, cost of living, healthcare, education, and local culture to help you make an informed decision.</p>
            </div>
          </section>
          
          <section className="filters-section">
            <div className="filter-buttons">
              {filters.map(filter => (
                <button 
                  key={filter.id}
                  className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </section>
          
          <section className="locations-grid">
            {filteredLocations.map(location => (
              <div key={location.id} className="location-card">
                <div className="location-image">
                  <img src={location.image} alt={location.name} />
                  <div className="location-country">{location.country}</div>
                </div>
                <div className="location-details">
                  <h3>{location.name}</h3>
                  <p className="location-description">{location.description}</p>
                  <div className="location-features">
                    <div className="feature">
                      <span className="feature-label">Internet:</span>
                      <span className="feature-value">{location.internetSpeed}</span>
                    </div>
                    <div className="feature">
                      <span className="feature-label">Living Cost:</span>
                      <span className="feature-value">{location.costOfLiving}</span>
                    </div>
                    <div className="feature">
                      <span className="feature-label">Expat Community:</span>
                      <span className="feature-value">{location.expatCommunity}</span>
                    </div>
                  </div>
                  <Link to={`/locations/${location.id}`} className="btn location-btn">View Details</Link>
                </div>
              </div>
            ))}
          </section>
          
          <section className="cta-section location-cta">
            <div className="cta-content">
              <h2>Not Sure Where to Start?</h2>
              <p>Schedule a consultation with our relocation experts to discuss your priorities, budget, and lifestyle needs.</p>
              <Link to="/contact" className="btn btn-large">Get Personalized Recommendations</Link>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Locations;