import React from 'react';
import projectImage from './img/lf.jpg';
import ifmetall from './img/ifmetall.jpg';
import applebee from './img/applebee.jpg';
// Import your CSS stylesheet for Portfolio styling

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h2 className="portfolio-title">Portfolio</h2>

      <div className="project">
        <img
          src={projectImage}
          alt="lf.jpg"
          className="project-image"
        />
        <div className="project-description">
          <h3>Project Title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            vitae erat vel nisl fermentum interdum a id lorem.
          </p>
        </div>
      </div>

      <div className="project">
        <img
          src={ifmetall}
          alt="ifmetall.jpg"
          className="project-image"
        />
        <div className="project-description">
          <h3>Project Title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            vitae erat vel nisl fermentum interdum a id lorem.
          </p>
        </div>
      </div>

      <div className="project">
        <img
          src={applebee}
          alt="applebee.jpg"
          className="project-image"
        />
        <div className="project-description">
          <h3>Project Title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            vitae erat vel nisl fermentum interdum a id lorem.
          </p>
        </div>
      </div>

      {/* Add more project sections as needed */}
    </div>
  );
};
export default Portfolio;
