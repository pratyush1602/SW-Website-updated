// src/BootstrapCard.js
import React from 'react';
import './BootstrapCard.css'; // Import custom CSS for additional styling

const BootstrapCard = ({ image, name, title, link, email }) => {
  return (
    <div className="card text-center" style={{ width: '250px' }}>
      <div className="card-body d-flex flex-column" style={{ height: '100%' }}>
        <a href={link} style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={image} alt={name} className="rounded-circle card-img-top" />
          <h5 className="card-name">{name}</h5>
          <p className="card-title">{title}</p>
        </a>
        {email && <p className="card-email" style={{ fontSize: '14px', color: 'green', marginTop: 'auto' }}>{email}</p>}
      </div>
    </div>
  );
};

export default BootstrapCard;
