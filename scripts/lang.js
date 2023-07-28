var en = true;

var englishContent = {
  navbarHome: 'Home',
  navbarAbout: 'About',
  navbarContact: 'Contact',
  navbarResume: 'Resume',
  navbarLanguage: 'Language',
  aboutAboutMe: 'About me',
  aboutAboutMeContent: 'I am a greatly motivated and ambitious individual who, as a recent university graduate, is looking for a full-time job. During my years of education, it become pretty clear to me that the world is progressively more revolved around computer science than it was in the past. I firmly believe that I can put my expertise to use when it comes to developing, programming and exploring creative ideas and I hope it will help the world become even more advanced in computer science.',
  aboutEducation: 'Education',
  aboutCS: 'Computer Science',
  aboutUniversity: 'University of Debrecen',
  aboutACSC: 'Advanced Computer Science Class',
  aboutHighSchool: 'Vasvári Pál High School',
  aboutSkills: 'Skills',
  aboutLanguages: 'Languages',
  aboutLanguagesHU: 'Native language: Hungarian',
  aboutLanguagesEN: 'B2 Complex in English (Origo) - 2019',
  aboutCertificates: 'Certificates'
};

var hungarianContent = {
  navbarHome: 'Kezdőlap',
  navbarAbout: 'Rólam',
  navbarContact: 'Kapcsolat',
  navbarResume: 'Önéletrajz',
  navbarLanguage: 'Nyelv',
  aboutAboutMe: 'Rólam',
  aboutAboutMeContent: 'Egy nagyon motivált és céltudatos egyén vagyok, aki az egyetem után pályakezdőként keresi első teljes munkaidős állását. Tanulmányaim során hamar tisztává vált számomra, hogy a világ egyre jobban az informatika köré szerveződik. Azt gondolom, hogy a programozói, fejlesztői tudásommal, illetve az iskolai éveim alatt szerzett tapasztalatommal megállom a helyem a munka világában is.',
  aboutEducation: 'Tanulmányok',
  aboutCS: 'Programtervező informatikus',
  aboutUniversity: 'Debreceni Egyetem',
  aboutACSC: 'Informatikus',
  aboutHighSchool: 'Vasvári Pár Gimnázium',
  aboutSkills: 'Kézségek',
  aboutLanguages: 'Nyelvek',
  aboutLanguagesHU: 'Anyanyelv: magyar',
  aboutLanguagesEN: 'B2 komplex angol nyelvvizsga (Origo) - 2019',
  aboutCertificates: 'Tanúsítványok'
};

function changeLanguage(language) {
  if (language === 'hu') {
    en = false;
    changeNavbarLanguage();
    if ( document.URL.includes("about.html") ) {
      changeAboutLanguage();
  }
  } else {
    en = true;
    changeNavbarLanguage();
    if ( document.URL.includes("about.html") ) {
      changeAboutLanguage();
  }
  }

  //console.log('Nyelv beállítva: ' + language);

  localStorage.setItem('language', language);
}

var storedLanguage = localStorage.getItem('language');
changeLanguage(storedLanguage);