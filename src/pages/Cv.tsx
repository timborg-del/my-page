import React from 'react';
import { useLanguageContext } from '../components/useLanguageContext';
 
export const Cv = () => {
  const { language } = useLanguageContext();

  return (
    <div>
      <header>
        <h1 className='hline'>{language === 'swedish' ? 'CV' : 'CV'}
        </h1>
      </header>
      <div className="about-me-container">
            <p className='slide-me'>
        <strong className='headline-page'>
          {language === 'swedish' ? 'Yrkeserfarenhet' : 'Professional Experience'}
        </strong>
        <br />
        <span className="fade-in-fast">
        <br />
          <br />
          <strong className="slide-from-right fade-in-1">
            {language === 'swedish' ? 'Volvo Construction Equipment' : 'Volvo Construction Equipment'}
          </strong>
          <br />

          <em>{language === 'swedish' ? 'Korgsvetsare' : 'Basket Welder'}</em>
          {language === 'swedish' ? ' 2021 - Nutid' : ' 2021 - Present'}
          <br />
          {language === 'swedish' ? 'MAG-svetsningsteknik för tunga maskinkomponenter.' : 'Expertise in MAG welding technology for heavy machinery components.'}
          <br />
          <strong className="slide-from-right fade-in-2">
            <br />
            {language === 'swedish' ? 'Melagos Corner' : 'Melagos Corner'}
         </strong><br />
          <em>{language === 'swedish' ? 'Praktik' : 'Internship'}</em>
          {language === 'swedish' ? ' 2021' : ' 2021'}
          <br />
          {language === 'swedish' ? 'Utvecklade ett försäljningssystem med användning av MySQL, MVC-arkitektur och React.' : 'Developed a sales system using MySQL, MVC architecture, and React.'}
          <br />
          <br />
          <strong className="slide-from-right fade-in-3">
          {language === 'swedish' ? 'Volvo Construction Equipment, Braås' : 'Volvo Construction Equipment, Braås'}
          </strong>
          <br />
          <em>{language === 'swedish' ? 'Korgsvetsare' : 'Basket Welder'}</em>
          {language === 'swedish' ? ' 2018 - 2019' : ' 2018 - 2019'}
          <br />
          {language === 'swedish' ? 'MAG-svetsning under nattskift.' : 'MAG welding during night shifts.'}
          <br />
          <br />
          <strong className="slide-from-right fade-in-4">
          {language === 'swedish' ? 'Pahlèn' : 'Pahlèn'}
          </strong>
          <br />
          <em>{language === 'swedish' ? 'Ansvarig för poolpumpavdelningen' : 'Responsible for the pool pump department'}</em>
          {language === 'swedish' ? ' 2012 - 2016' : ' 2012 - 2016'}
          <br />
          {language === 'swedish' ? 'Lyckades framgångsrikt förvalta poolpumpavdelningen.' : 'Successfully managed the pool pump department.'}
          <br />
          {/* ... Rest of your content ... */}
        </span>
      </p>

      {/* Button to toggle the language */}
      </div>
    </div>
  );
};
export default Cv;