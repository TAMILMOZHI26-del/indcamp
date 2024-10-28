import React from 'react';
import './Container.css';
import nature from '../assets/nature.PNG'; // Replace with the actual path to your image

function container() {
  return (
    <div className="main-container">
      {/* About SRDS Section */}
      <section className="about-container">
        <h2>About SRDS</h2>
        <p>
          SRDS is a non-profit organization that focuses on Women, children, and underprivileged youth who experience some of the worst living conditions like malnutrition, illiteracy, child mortality, and all kinds of abuse due to the financial circumstances of their parents and family members.
        </p>
        <button className="learn-more-button-about">Learn More</button>
      </section>

      {/* Image Section */}
      <section className="image-container">
        <img src={nature} alt="Women Empowerment" />
      </section>

      {/* Our Projects Section */}
      <section className="projects-container">
        <h2>Our Projects</h2>
        <p>
          Each time a woman is empowered, a full circle of life is created, as she has the power to create, nurture, and transform a family, a community, and a country.
        </p>
        <button className="learn-more-button-projects">Learn More</button>
      </section>
    </div>
  );
}

export default container;
