import React from 'react';
import './FlagshipProgram.css';
import mime from '../assets/mime.png';

const FlagshipProgram = () => {
  return (
    <div className="container">
      <div className="image-section">
        <img src={mime} alt="Program Scene 1" className="image" />
      </div>
      <div className="text-section">
        <h1 className="title">AGAI – Our<br/> Flagship Program</h1>
        <p className="main-description">
          AGAI - Theatre Of Voices is an organization<br/> committed to using the transformative power of<br/> theatre to empower marginalized.
        </p>
        <button className="new-btn">Read Now</button>
      </div>
    </div>
  );
};

export default FlagshipProgram;
