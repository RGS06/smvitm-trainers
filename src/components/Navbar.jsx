import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="/">SMVITM Trainers</a>
        </div>

        

        <div className="nav-links">
          <a href="/" className="nav-link">Home</a>
          <a href="/trainers" className="nav-link active">Trainers</a>
          <a href="/placement" className="nav-link">Placement</a>
          <a href="/contact" className="nav-link">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
