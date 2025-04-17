import React, { useState } from 'react';
import './TrainerCard.css';

const TrainerCard = ({
  name,
  role,
  email,
  phone,
  image,
  specialization,
  experience,
  certifications,
  bio
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="trainer-card">
      <div className="trainer-image">
        <img src={image} alt={name} />
      </div>
      <div className="trainer-info">
        <h3>{name}</h3>
        <p className="trainer-role">{role}</p>

        <div className="trainer-contact">
          <p><i className="fas fa-envelope"></i> {email}</p>
          {phone && <p><i className="fas fa-phone"></i> {phone}</p>}
        </div>

        <div className="trainer-details">
          <p><strong>Specialization:</strong> {specialization}</p>
          <p><strong>Experience:</strong> {experience}</p>
        </div>

        {certifications && (
          <div className="trainer-certifications">
            <p><strong>Certifications:</strong></p>
            <ul>
              {certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>
        )}

        <div className={`trainer-bio ${isExpanded ? 'expanded' : ''}`}>
          <p>{bio}</p>
        </div>

        <button
          className="read-more-btn"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default TrainerCard;
