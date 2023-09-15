import React from 'react';
import { useLanguageContext } from '../components/LanguageProvider';
import lexicon from '../pages/img/logo-lexicon.jpg'; // Replace with the actual path to your first image
import volvo from '../pages/img/volvo.png'; // Replace with the actual path to your second image

export const Cv = () => {
  const { language } = useLanguageContext();

  return (
    <div>
      <header>
        <h1 className='hline'>{language === 'swedish' ? 'CV' : 'CV'}</h1>
      </header>
      <div className="cv-container">
        <div className="text-cv">
          <div className="image-placeholder">
            <img src={volvo} alt="volvo Logo" className='img-class' />
          </div>
          <strong className="slide-from-right fade-in-1">
            {language === 'swedish' ? 'Volvo Construction Equipment' : 'Volvo Construction Equipment'}
          </strong>
          <br />
          <em>{language === 'swedish' ? 'Korgsvetsare' : 'Basket Welder'}</em>
          {language === 'swedish' ? ' 2021 - Nutid' : ' 2021 - Present'}
          <br />
          {language === 'swedish' ? 'MAG-svetsningsteknik för tunga maskinkomponenter.' : 'Expertise in MAG welding technology for heavy machinery components.'}
          <br />
        </div>
        <div className="text-cv1">
          <div className="image-placeholder">
            <img src={lexicon} alt="lexicon" className="img-class" />
          </div>
          <strong className="slide-from-right fade-in-2">
            {language === 'swedish' ? 'Melagos Corner med Lexicon' : 'Melagos Corner With Lexicon'}
          </strong>
          <br />
          <em>{language === 'swedish' ? 'Praktik' : 'Internship'}</em>
          {language === 'swedish' ? ' 2020' : ' 2020'}
          <br />
          {language === 'swedish' ? 'Utvecklade ett försäljningssystem med användning av MySQL, MVC-arkitektur och React.' : 'Developed a sales system using MySQL, MVC architecture, and React.'}
          <br />
        </div>
      </div>
    </div>
  );
};







          /* <br />
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
          // <br /> */
          {/* ... Rest of your content ... */}
      //   </span>
      // </p>

      {/* Button to toggle the language */}
//       </div>
//     </div>
//   );
// };
 export default Cv;