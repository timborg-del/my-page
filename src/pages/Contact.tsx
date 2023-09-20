import { useLanguageContext } from '../components/LanguageProvider';

const Contact= () =>{
const { language } = useLanguageContext();
    return(
        <div >
          <div className='container-hline'>
        <header>
          <h1 className='hline1'>{language === 'swedish' ? 'Kontakt' : 'Contact'}</h1>
        </header>
        </div>
        <div className="about-me-container">
          <p className='slide-me'>
            <strong className='headline-page'>
              {language === 'swedish' ? 'Kontakta mig' : 'Get in Touch With Me'}
            </strong>
            <br />
            <span className="fade-in-fast">
              <br />
              <br />
              <p className="slide-from-right fade-in-1">
                {language === 'swedish' ? 'E-post:' : 'Email:'} timl@live.se
              </p>
              <br />
              <p className="slide-from-right fade-in-2">
                {language === 'swedish' ? 'Telefon:' : 'Phone:'} +46 (790) 47 37 771
              </p>
              <br />
              <p className="slide-from-right fade-in-3">
                {language === 'swedish' ? 'Hemsida:' : 'Home Page:'} <a href='https://www.applebee.se' target='_blank'>www.applebee.se</a>
              </p>
            </span>
          </p>
        </div>
      </div>
    );
  };
  
  export default Contact;