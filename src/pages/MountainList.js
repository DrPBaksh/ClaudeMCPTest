import React from 'react';
import '../styles/MountainList.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MountainCard from '../components/MountainCard';
import SnowEffect from '../components/SnowEffect';

const MountainList = () => {
  const mountains = [
    {
      id: 1,
      title: 'Alpine Heights',
      description: 'A majestic peak with panoramic views of surrounding valleys and crystal-clear lakes.',
      imageSrc: 'https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      difficulty: 'Moderate'
    },
    {
      id: 2,
      title: 'Snowcrest Summit',
      description: 'Famous for its year-round snow and challenging slopes, perfect for experienced adventurers.',
      imageSrc: 'https://images.pexels.com/photos/355770/pexels-photo-355770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      difficulty: 'Hard'
    },
    {
      id: 3,
      title: 'Pinewood Trails',
      description: 'Family-friendly mountain with gentle slopes and beautiful pine forests perfect for beginners.',
      imageSrc: 'https://images.pexels.com/photos/290452/pexels-photo-290452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      difficulty: 'Easy'
    },
    {
      id: 4,
      title: 'Glacier Point',
      description: 'Home to ancient glaciers with breathtaking ice formations and incredible biodiversity.',
      imageSrc: 'https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      difficulty: 'Moderate'
    },
    {
      id: 5,
      title: 'Crystal Peak',
      description: 'Named for its quartz deposits that sparkle like diamonds in the sunlight after fresh snowfall.',
      imageSrc: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      difficulty: 'Hard'
    },
    {
      id: 6,
      title: 'Meadow Highland',
      description: 'Known for its alpine meadows blooming with wildflowers during summer months.',
      imageSrc: 'https://images.pexels.com/photos/4215113/pexels-photo-4215113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      difficulty: 'Easy'
    }
  ];

  return (
    <div className="mountain-list-page">
      <Header />
      
      <div className="page-hero">
        <SnowEffect intensity="light" />
        <div className="page-hero-content">
          <h1>Discover Mountains</h1>
          <p>Explore our collection of stunning peaks and trails</p>
        </div>
      </div>
      
      <main className="mountain-list-content">
        <div className="container">
          <div className="filters-section">
            <h2>Mountain Destinations</h2>
            <div className="filter-buttons">
              <button className="filter-btn active">All</button>
              <button className="filter-btn">Easy</button>
              <button className="filter-btn">Moderate</button>
              <button className="filter-btn">Hard</button>
            </div>
          </div>
          
          <div className="mountains-grid">
            {mountains.map(mountain => (
              <div key={mountain.id} className="mountain-item">
                <MountainCard 
                  title={mountain.title}
                  description={mountain.description}
                  imageSrc={mountain.imageSrc}
                  difficulty={mountain.difficulty}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MountainList;