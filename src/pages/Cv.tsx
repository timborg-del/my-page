import React from 'react';
import { useLanguageContext } from '../components/LanguageProvider';
import lexicon from '../pages/img/logo-lexicon.jpg'; // Replace with the actual path to your first image
import volvo from '../pages/img/volvo.png'; // Replace with the actual path to your second image
import '../components/css/NavigationMenu.css'; // Add CSS styling for the CV
import cvPdf from '../pages/img/timscv.pdf'; // Replace with the actual path to your CV PDF

export const Cv = () => {
  const { language } = useLanguageContext();

  const careerChangeText = language === 'swedish' ? (
    <div>
      <p>
        På Volvo Braås CE har jag varit i 4 år och svetsat, samtidigt som jag har haft programmering som en hobby på min fritid. Där har jag fått arbeta i team för att tillverka korgar till maskinerna, särskilt flaket till dumprar. Det är ett mycket krävande arbete eftersom tillverkningen av korgarna tar betydligt längre tid än alla andra komponenter i hela processen att färdigställa en dumper (maskin). 
      </p>
      <p>
        Nu strävar jag efter att byta karriär eftersom jag önskar en vardag där jag ständigt utvecklas och lär mig nya saker. Det kan vara utmanande att arbeta inom en industri där man producerar samma produkt om och om igen, vilket är varför jag tror att programmering passar mig bättre.
      </p>
    </div>
  ) : (
    <div>
      <p>
        At Volvo Braås CE, I have spent 4 years welding while pursuing programming as a hobby during my free time. During this period, I have worked in teams to manufacture baskets for the machines, specifically the dumpers. This job is particularly demanding as building the baskets takes much longer than any other component in the entire process of completing a dumper (machine).
      </p>
      <p>
        I now aspire to change my career path because I seek a daily routine where I am constantly evolving and learning new things. It can be challenging to work in an industry where you are producing the same product repeatedly, which is why I believe programming is a better fit for me.
      </p>
    </div>
  );

  const lengthyText =
  language === 'swedish' ? (
    <div>
      <p>
        Jag avslutade en intensiv tvåårig yrkesutbildning vid Lexicon, en ansedd yrkeshögskola. Denna utbildning var mycket krävande och inkluderade veckovisa avslutande prov, där endast de som klarade proven fick fortsätta sina studier.
      </p>
      <p>
        Under min tid på Lexicon förvärvade jag en djup förståelse för olika ämnen, inklusive MySQL, MVC-arkitektur och React. Mot slutet av programmet samarbetade vi som ett team i ett praktikprojekt för en riktig klient, Milagros Corner. Vi utvecklade framgångsrikt ett 'Point of Sale' (POS)-system åt dem.
      </p>
      <p>
        Efter att ha framgångsrikt avslutat min yrkesutbildning beslutade jag att temporärt arbeta som svetsare samtidigt som jag aktivt förföljer mitt långsiktiga mål att bli programmerare. Idag känner jag mig väl förberedd och entusiastisk inför att inleda min karriär som programmerare. Min hängivenhet och beslutsamhet är orubbliga, och jag ser fram emot att bidra med mina färdigheter till den dynamiska programmeringsbranschen.
      </p>
    </div>
  ) : (
    <div>
      <p>
        I completed an intensive two-year vocational program at Lexicon, a renowned vocational college. This program was highly demanding, featuring weekly final exams, with only those who passed being eligible to continue their studies.
      </p>
      <p>
        During my time at Lexicon, I acquired a profound understanding of various subjects, including MySQL, MVC architecture, and React. Towards the conclusion of the program, we collaborated as a team on an internship project for a real client, Milagros Corner. We successfully developed a 'Point of Sale' (POS) system for them.
      </p>
      <p>
        Upon the successful completion of my vocational training, I decided to temporarily work as a welder while actively pursuing my long-term goal of becoming a programmer. Today, I am well-prepared and enthusiastic about launching my career as a programmer. My dedication and determination are unwavering, and I am eager to contribute my skills to the dynamic field of programming.
      </p>
    </div>
  );

  return (
    <div>
      <div className='container-hline'>
          <header>
        <h1 className="hline1">{language === 'swedish' ? 'CV' : 'RESUME'}</h1>
      </header>
      </div>

      <div className="cv">
        <div className="cv-container">
          <div className="cv-entry">
            <div className="image-placeholder">
              <img src={volvo} alt="Volvo Logo" className="cv-image" />
            </div>
            <strong className="cv-job-title">
              {language === 'swedish' ? 'Volvo Construction Equipment' : 'Volvo Construction Equipment'}
            </strong>
            <br />
            <p>
              {careerChangeText}
            </p>
          </div>
          <div className="cv-entry">
            <div className="image-placeholder">
              <img src={lexicon} alt="Lexicon Logo" className="cv-image" />
            </div>
            <strong className="cv-job-title">
              {language === 'swedish' ? 'Melagos Corner med Lexicon' : 'Melagos Corner With Lexicon'}
            </strong>
            <br />
            <p>{lengthyText}</p>
          </div>
        </div>
      </div>

      <div className="download-cv">
        <p>
          {language === 'swedish' ? 'Vänligen ladda ner mitt CV i PDF här om du vill veta mer om min erfarenhet.' : 'Please download my CV in PDF here if you want to know more about my experience.'}
        </p>
        <a href={cvPdf} download className="download-button">
          {language === 'swedish' ? 'Ladda ner CV' : 'Download CV'}
        </a>
      </div>
    </div>
  );
};

export default Cv;
