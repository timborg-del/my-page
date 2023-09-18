import React from 'react';
import projectImage from './img/lf.jpg';
import ifmetall from './img/ifmetall.jpg';
import applebee from './img/applebee.jpg';
import { useLanguageContext } from '../components/LanguageProvider';
 
export const Portfolio = () => {
  const { language } = useLanguageContext();
// Import your CSS stylesheet for Portfolio styling


  return (
    <div>
    <div className='container-hline'>
        <header>
      <h1 className="hline1">{language === 'swedish' ? 'Portfölj' : 'Portfolio'}</h1>
    </header>
    </div>
    <div className="portfolio-container">

      <div className="project">
        <img
          src={projectImage}
          alt="lf.jpg"
          className="project-image"
        />
        <div className="project-description">
          <h3>Lost & Found</h3>
          <p>
          {language === 'swedish' ? 'Hittat & Tappat är en interaktiv karta som ursprungligen konstruerades som ett spel, men vi inser nu dess potential att underlätta bokningar av bord på restauranger, betalningar för parkeringsplatser eller kanske reservationer av platser på en biograf' : 'Lost & Found is an interactive map, initially conceived as a game, but we now realize its potential to facilitate booking tables at restaurants, paying for parking lots, or perhaps reserving seats at a movie theater.'}

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
          <h3>If Metall Homepage</h3>
          <p>
          {language === 'swedish' ? ' Metall Braås ville ha en sida för sina medlemmar lanserades den aldrig, dock' : 'If Metall Braås wanted a page for their members, '} 
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
          <h3>Our Project</h3>
          <p>
          {
            language === 'swedish' ? 
            'Apple Bee representerar vårt ambitiösa företagsäventyr. Tillsammans med en av mina närmaste vänner, en kodningsvirtuos, och mig själv i rollen som projektledare, besitter vi expertisen att tackla alla IT-utmaningar inom branschen.' 
            : 
            'Apple Bee represents our ambitious venture into the world of business. Partnered with one of my closest friends, a coding virtuoso, and myself in the role of project leader, we possess the expertise to tackle any IT challenge in the industry.'
            }          
          </p>
        </div>
      </div>
      
      {/* Add more project sections as needed */}
    </div>
    </div>
  );
};

 export default Portfolio; 
