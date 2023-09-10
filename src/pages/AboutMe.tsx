import React from 'react';
import { useLanguageContext } from '../components/useLanguageContext';

const AboutMe = () => {
  // Use the language and toggleLanguage function from the context
  const { language } = useLanguageContext();

  return (
    <div>
      <header>
        <h1 className='hline'>
          {language === 'swedish' ? 'Om Mig' : 'About Me'}
        </h1>
      </header>
      <div className="about-me-container">
        <section>
          <h2 className={`headline-page ${language === 'swedish' ? 'slide-me' : 'slide-from-right fade-in-1'}`}>
            {language === 'english' ? 'Introduction' : 'Introduktion'}
          </h2>
          <p className={`fade-in-fast ${language === 'swedish' ? 'slide-me' : 'slide-from-right fade-in-1'}`}>
            {language === 'english'
              ? "Hey there! I'm Tim Lindborg, and I like to keep things interesting. By day, I'm a coding enthusiast, spending my free time diving into the world of programming. But when work is done, it's time for some down-to-earth adventures."
              : 'Hej där! Jag heter Tim Lindborg, och jag gillar att hålla det intressant. På dagarna är jag en entusiastisk programmerare som spenderar min lediga tid med att fördjupa mig i programmeringsvärlden. Men när arbetsdagen är över är det dags för äventyr i den verkliga världen.'}
          </p>
        </section>
        <section>
          <h2 className={`headline-page ${language === 'swedish' ? 'slide-me' : 'slide-from-right fade-in-2'}`}>
            {language === 'english' ? 'Outdoor Adventures' : 'Äventyr utomhus'}
          </h2>
          <p className={`fade-in-fast ${language === 'swedish' ? 'slide-me' : 'slide-from-right fade-in-2'}`}>
            {language === 'english'
              ? "I'm a big fan of staying active, and one of my favorite ways to do that is by hitting the hills for a good run. There's something magical about those winding trails that keeps me coming back for more. It's not about breaking records; it's about the simple joy of moving and being surrounded by nature."
              : 'Jag älskar att hålla mig aktiv, och en av mina favoritsätt att göra det är att ge mig ut i backarna för en löprunda. Det är något magiskt med de slingrande stigarna som får mig att vilja återvända gång på gång. Det handlar inte om att slå rekord; det handlar om den enkla glädjen att röra på sig och vara omgiven av naturen.'}
          </p>
        </section>
        <section>
          <h2 className={`headline-page ${language === 'swedish' ? 'slide-me' : 'slide-from-right fade-in-3'}`}>
            {language === 'english' ? 'Musical Interests' : 'Musikaliska intressen'}
          </h2>
          <p className={`fade-in-fast ${language === 'swedish' ? 'slide-me' : 'slide-from-right fade-in-3'}`}>
            {language === 'english'
              ? "And then there's my trusty guitar. When I'm not coding or running, I'm strumming away just for fun. It's my way of unwinding and letting creativity flow."
              : 'Och sedan finns min pålitliga gitarr. När jag inte kodar eller springer, så spelar jag på gitarren bara för skojs skull. Det är mitt sätt att koppla av och låta kreativiteten flöda.'}
          </p>
        </section>
        <section>
          <h2 className={`headline-page ${language === 'swedish' ? 'slide-me' : 'slide-from-right fade-in-4'}`}>
            {language === 'english' ? 'My Loved Ones' : 'Mina nära och kära'}
          </h2>
          <p className={`fade-in-fast ${language === 'swedish' ? 'slide-me' : 'slide-from-right fade-in-4'}`}>
            {language === 'english'
              ? "Of course, I've got a fantastic partner in crime, my girlfriend [Girlfriend's Name]. We share these passions and spend quality time together, whether it's exploring new trails, making music, or just hanging out."
              : 'Självklart har jag en fantastisk medbrottsling, min flickvän [Flickv'}
          </p>
          <p>
            {language === 'english'
              ? "But that's not all; I'm lucky to have a circle of close friends who are like family. I've got my five best friends, a sister, her husband, their adorable daughter, and, of course, my ever-supportive mother. They add even more color and joy to my life, and together, we create memories that last a lifetime."
              : 'Men det är inte allt; jag har turen att ha en krets av nära vänner som är som familj. Jag har mina fem bästa vänner, en syster, hennes man, deras bedårande dotter och, självklart, min alltid stöttande mamma. De lägger till ännu mer färg och glädje i mitt liv, och tillsammans skapar vi minnen som varar livet ut.'}
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
