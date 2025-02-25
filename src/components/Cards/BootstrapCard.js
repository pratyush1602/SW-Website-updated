// src/BootstrapCard.js
import React from 'react';
import './BootstrapCard.css'; // Import custom CSS for additional styling

const BootstrapCard = ({ image, name, title, link }) => {
  return (
    <div className="card text-center" style={{ width: '18rem' }}>
      <div className="card-body">
        <a href={link} style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={image} alt={name} className="rounded-circle card-img-top" />
          <h5 className="card-name">{name}</h5>
          <p className="card-title">{title}</p>
        </a>
      </div>
    </div>
  );
};


export default BootstrapCard;
