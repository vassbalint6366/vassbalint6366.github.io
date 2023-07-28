function changeAboutLanguage() {
    var aboutAboutMe = document.getElementById('aboutAboutMe');
    var aboutAboutMeContent = document.getElementById('aboutAboutMeContent');
    var aboutEducation = document.getElementById('aboutEducation');
    var aboutCS = document.getElementById('aboutCS');
    var aboutUniversity = document.getElementById('aboutUniversity');
    var aboutACSC = document.getElementById('aboutACSC');
    var aboutHighSchool = document.getElementById('aboutHighSchool');
    var aboutSkills = document.getElementById('aboutSkills');
    var aboutLanguages = document.getElementById('aboutLanguages');
    var aboutLanguagesHU = document.getElementById('aboutLanguagesHU');
    var aboutLanguagesEN = document.getElementById('aboutLanguagesEN');
    var aboutCertificates = document.getElementById('aboutCertificates');
    

    if(en){
        aboutAboutMe.innerHTML = englishContent.aboutAboutMe;
        aboutAboutMeContent.innerHTML = englishContent.aboutAboutMeContent;
        aboutEducation.innerHTML = englishContent.aboutEducation;
        aboutCS.innerHTML = englishContent.aboutCS;
        aboutUniversity.innerHTML = englishContent.aboutUniversity;
        aboutACSC.innerHTML = englishContent.aboutACSC;
        aboutHighSchool.innerHTML = englishContent.aboutHighSchool;
        aboutSkills.innerHTML = englishContent.aboutSkills;
        aboutLanguages.innerHTML = englishContent.aboutLanguages;
        aboutLanguagesHU.innerHTML = englishContent.aboutLanguagesHU;
        aboutLanguagesEN.innerHTML = englishContent.aboutLanguagesEN;
        aboutCertificates.innerHTML = englishContent.aboutCertificates;
        
    } else if (!en) {
        aboutAboutMe.innerHTML = hungarianContent.aboutAboutMe;
        aboutAboutMeContent.innerHTML = hungarianContent.aboutAboutMeContent;
        aboutEducation.innerHTML = hungarianContent.aboutEducation;
        aboutCS.innerHTML = hungarianContent.aboutCS;
        aboutUniversity.innerHTML = hungarianContent.aboutUniversity;
        aboutACSC.innerHTML = hungarianContent.aboutACSC;
        aboutHighSchool.innerHTML = hungarianContent.aboutHighSchool;
        aboutSkills.innerHTML = hungarianContent.aboutSkills;
        aboutLanguages.innerHTML = hungarianContent.aboutLanguages;
        aboutLanguagesHU.innerHTML = hungarianContent.aboutLanguagesHU;
        aboutLanguagesEN.innerHTML = hungarianContent.aboutLanguagesEN;
        aboutCertificates.innerHTML = hungarianContent.aboutCertificates;
    }
}

changeLanguage(storedLanguage);