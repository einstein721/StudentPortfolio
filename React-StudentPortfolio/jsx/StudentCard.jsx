// src/components/StudentCard.jsx
import React from 'react';

function StudentCard({ name, image, bio }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card-content">
        <h3>{name}</h3>
        <p>{bio}</p>
        <a href="#" className="btn">Read More</a>
      </div>
    </div>
  );
}

export default StudentCard;
