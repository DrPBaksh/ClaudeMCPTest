import React, { useEffect, useRef } from 'react';
import '../styles/SnowEffect.css';

const SnowEffect = ({ intensity = 'medium' }) => {
  const snowflakesContainerRef = useRef(null);
  
  useEffect(() => {
    // Determine number of snowflakes based on intensity
    let numberOfSnowflakes;
    switch(intensity) {
      case 'light':
        numberOfSnowflakes = 30;
        break;
      case 'heavy':
        numberOfSnowflakes = 80;
        break;
      case 'medium':
      default:
        numberOfSnowflakes = 50;
        break;
    }
    
    const createSnowflakes = () => {
      const snowflakesContainer = snowflakesContainerRef.current;
      if (!snowflakesContainer) return;
      
      // Clear previous snowflakes
      snowflakesContainer.innerHTML = '';
      
      for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        // Random properties
        const size = Math.random() * 10 + 5;
        const posX = Math.random() * 100;
        const opacity = Math.random() * 0.6 + 0.4;
        const delay = Math.random() * 5;
        const duration = Math.random() * 5 + 5;
        
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${posX}%`;
        snowflake.style.opacity = opacity;
        snowflake.style.animationDelay = `${delay}s`;
        snowflake.style.animationDuration = `${duration}s`;
        
        snowflakesContainer.appendChild(snowflake);
      }
    };
    
    // Initialize snowflakes
    createSnowflakes();
    
    // Recreate snowflakes on window resize for better performance
    const handleResize = () => {
      createSnowflakes();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [intensity]);
  
  return (
    <div ref={snowflakesContainerRef} className="snowflakes-container"></div>
  );
};

export default SnowEffect;