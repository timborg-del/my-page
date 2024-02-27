import React from 'react';
import { useLanguageContext } from '../components/LanguageProvider';

const AboutMe = () => {
  // Use the language and toggleLanguage function from the context
  const { language } = useLanguageContext();

  const aboutMeText = language === 'swedish' ? (
    <div>
      <p>
        Jag heter Tim Lindborg, och jag gillar att hålla igång. På dagarna är jag en entusiastisk programmerare som spenderar min lediga tid med att fördjupa mig i programmeringsvärlden. Men när arbetsdagen är över är det dags för äventyr i den verkliga världen.
      </p>
    </div>
  ) : (
    <div>
      <p>
        I'm Tim Lindborg, and I like to be bussy. By day, I'm a coding enthusiast, spending my free time diving into the world of programming. But when work is done, it's time for some down-to-earth adventures.
      </p>
    </div>
  );

  const outdoorAdventuresText = language === 'swedish' ? (
    <div>
      <p>
        Jag älskar att hålla mig aktiv, och en av mina favoritsätt att göra det är att ge mig ut i backarna för en löprunda. Det är något magiskt med de slingrande stigarna som får mig att vilja återvända gång på gång. Det handlar inte om att slå rekord, det handlar om den enkla glädjen att röra på sig och vara omgiven av naturen.
      </p>
    </div>
  ) : (
    <div>
      <p>
        I'm a big fan of staying active, and one of my favorite ways to do that is by hitting the hills for a good run. There's something magical about those winding trails that keeps me coming back for more. It's not about breaking records, it's about the simple joy of moving and being surrounded by nature.
      </p>
    </div>
  );

  const musicalInterestsText = language === 'swedish' ? (
    <div>
      <p>
        Och sedan finns min gitarr. När jag inte kodar eller springer så spelar jag på gitarren bara för skojs skull. Det är mitt sätt att koppla av och låta kreativiteten flöda.
      </p>
    </div>
  ) : (
    <div>
      <p>
        And then there's my guitar. When I'm not coding or running i'm strumming away just for fun. It's my way of unwinding and letting creativity flow.
      </p>
    </div>
  );

  const lovedOnesText = language === 'swedish' ? (
    <div>
      <p>
        Har min fantastiska flickvän Natalie. Vi delar dessa passioner och tillbringar kvalitetstid tillsammans, vare sig det är att utforska nya stigar, spela musik eller bara umgås.
      </p>
      <p>
        Men det är inte allt, jag har turen att ha en krets av nära vänner som är som familj. Jag har mina fem bästa vänner, en syster, hennes man, deras bedårande dotter och, självklart, min alltid stöttande mamma. De lägger till ännu mer färg och glädje i mitt liv, och tillsammans skapar vi minnen som varar livet ut.
      </p>
    </div>
  ) : (
    <div>
      <p>
        I've got a fantastic partner, my girlfriend Natalie. We share these passions and spend quality time together, whether it's exploring new trails, making music, or just hanging out.
      </p>
      <p>
        But that's not all, I'm lucky to have a circle of close friends who are like family. I've got my five best friends, a sister, her husband, their adorable daughter, and, of course, my ever-supportive mother. They add even more color and joy to my life, and together, we create memories that last a lifetime.
      </p>
    </div>
  );

  return (
    <div>
      <div className='container-hline'>
      <header>
        <h1 className='hline1'>       
          {language === 'swedish' ? 'Om Mig' : 'About Me'}
          </h1>       
      </header>
      </div>
      <div className="about-me-container">
        <section>
          <h2 className={`headline-page ${language === 'swedish' ? 'slide-me' : 'slide-from-right fade-in-1'}`}>
            {language === 'swedish' ? 'Presentation' : 'Presentation'}
          </h2>
          {aboutMeText}
        </section>
        <section>
          <h2 className={`headline-page ${language === 'swedish' ? 'slide-me' : 'slide-from-right fade-in-2'}`}>
            {language === 'swedish' ? 'Äventyr utomhus' : 'Outdoor Adventures'}
          </h2>
          {outdoorAdventuresText}
        </section>
        <section>
          <h2 className={`headline-page ${language === 'swedish' ? 'slide-me' : 'slide-from-right fade-in-3'}`}>
            {language === 'swedish' ? 'Musikaliska intressen' : 'Musical Interests'}
          </h2>
          {musicalInterestsText}
        </section>
        <section>
          <h2 className={`headline-page ${language === 'swedish' ? 'slide-me' : 'slide-from-right fade-in-4'}`}>
            {language === 'swedish' ? 'Mina nära och kära' : 'My Loved Ones'}
          </h2>
          {lovedOnesText}
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
