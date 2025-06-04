import '../Logo/Logo.css';
import React from 'react';
import logoImage from '../../assets/logo.png'; 

const Logo = () => {
  return (
    <a href="/" className="logo-link">
      <div className="logo">
        <img src={logoImage} alt="Logo MaCompagnie" className="logo-image" />
      </div>
    </a>
  );
};

export default Logo;