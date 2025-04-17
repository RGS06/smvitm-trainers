import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(null);

  // Sample gallery images with descriptions
  const galleryImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'Technical Workshop on AI and Machine Learning',
      description: 'Students participating in a hands-on workshop on artificial intelligence and machine learning concepts.'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'Soft Skills Development Program',
      description: 'Communication skills training session conducted for final year students.'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'Team Building Activities',
      description: 'Students engaging in team-building exercises to enhance collaboration and leadership skills.'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'Web Development Bootcamp',
      description: 'Intensive training session on modern web development technologies conducted by industry experts.'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'Mock Interview Session',
      description: 'Students participating in mock interviews to prepare for placement drives.'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'Cloud Computing Workshop',
      description: 'Hands-on session on AWS services and cloud deployment strategies.'
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      title: 'Industry Expert Talk',
      description: 'Guest lecture by industry professionals on current technology trends and career opportunities.'
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
      title: 'Cyber Security Training',
      description: 'Workshop on ethical hacking and cybersecurity practices.'
    }
  ];

  const openModal = (image) => {
    setActiveImage(image);
  };

  const closeModal = () => {
    setActiveImage(null);
  };

  return (
    <div className="gallery">
      <h2>Training Gallery</h2>
      <div className="gallery-container">
        {galleryImages.map((image) => (
          <div className="gallery-item" key={image.id} onClick={() => openModal(image)}>
            <img src={image.url} alt={image.title} />
            <div className="gallery-item-overlay">
              <h3>{image.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {activeImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <img src={activeImage.url} alt={activeImage.title} />
            <div className="image-info">
              <h3>{activeImage.title}</h3>
              <p>{activeImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
