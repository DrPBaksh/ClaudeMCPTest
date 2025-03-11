import React from 'react';
import '../styles/MountainCard.css';

const MountainCard = ({ title, description, imageSrc, altText, difficulty }) => {
  const getDifficultyColor = () => {
    switch(difficulty.toLowerCase()) {
      case 'easy':
        return '#4CAF50';
      case 'moderate':
        return '#FF9800';
      case 'hard':
        return '#F44336';
      default:
        return '#2196F3';
    }
  };

  return (
    <div className="mountain-card">
      <div className="mountain-card-image">
        <img src={imageSrc} alt={altText || title} />
        <div 
          className="difficulty-badge"
          style={{ backgroundColor: getDifficultyColor() }}
        >
          {difficulty}
        </div>
      </div>
      <div className="mountain-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="mountain-card-btn">View Details</button>
      </div>
    </div>
  );
};

export default MountainCard;