function changeAboutLanguage() {
    var aboutAboutMe = document.getElementById('aboutAboutMe');
    var aboutAboutMeContent = document.getElementById('aboutAboutMeContent');
    var aboutEducation = document.getElementById('aboutEducation');
    var aboutCS = document.getElementById('aboutCS');
    var aboutUniversity = document.getElementById('aboutUniversity');
    var aboutACSC = document.getElementById('aboutACSC');
    var aboutHighSchool = document.getElementById('aboutHighSchool');
    var aboutSkills = document.getElementById('aboutSkills');
    var aboutSkillsIT = document.getElementById('aboutSkillsIT');
    var aboutSkillsSoftwares = document.getElementById('aboutSkillsSoftwares');
    var aboutSkillsPL = document.getElementById('aboutSkillsPL');
    var aboutSkillsTesting = document.getElementById('aboutSkillsTesting');
    var aboutSkillsInterpersonal = document.getElementById('aboutSkillsInterpersonal');

    var aboutSkillsCommunication = document.getElementById('aboutSkillsCommunication');
    var aboutSkillsCommunicationContent = document.getElementById('aboutSkillsCommunicationContent');
    var aboutSkillsProblemSolving = document.getElementById('aboutSkillsProblemSolving');
    var aboutSkillsProblemSolvingContent = document.getElementById('aboutSkillsProblemSolvingContent');
    var aboutSkillsEmpathy = document.getElementById('aboutSkillsEmpathy');
    var aboutSkillsEmpathyContent = document.getElementById('aboutSkillsEmpathyContent');
    var aboutSkillsTeamwork = document.getElementById('aboutSkillsTeamwork');
    var aboutSkillsTeamworkContent = document.getElementById('aboutSkillsTeamworkContent');
    var aboutSkillsTimeManagment = document.getElementById('aboutSkillsTimeManagment');
    var aboutSkillsTimeManagmentContent = document.getElementById('aboutSkillsTimeManagmentContent');
    var aboutSkillsConflict = document.getElementById('aboutSkillsConflict');
    var aboutSkillsConflictContent = document.getElementById('aboutSkillsConflictContent');

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
        aboutSkillsIT.innerHTML = englishContent.aboutSkillsIT;
        aboutSkillsSoftwares.innerHTML = englishContent.aboutSkillsSoftwares;
        aboutSkillsPL.innerHTML = englishContent.aboutSkillsPL;
        aboutSkillsTesting.innerHTML = englishContent.aboutSkillsTesting;
        aboutSkillsInterpersonal.innerHTML = englishContent.aboutSkillsInterpersonal;

        aboutSkillsCommunication.innerHTML = englishContent.aboutSkillsCommunication;
        aboutSkillsCommunicationContent.innerHTML = englishContent.aboutSkillsCommunicationContent;
        aboutSkillsProblemSolving.innerHTML = englishContent.aboutSkillsProblemSolving;
        aboutSkillsProblemSolvingContent.innerHTML = englishContent.aboutSkillsProblemSolvingContent;
        aboutSkillsEmpathy.innerHTML = englishContent.aboutSkillsEmpathy;
        aboutSkillsEmpathyContent.innerHTML = englishContent.aboutSkillsEmpathyContent;
        aboutSkillsTeamwork.innerHTML = englishContent.aboutSkillsTeamwork;
        aboutSkillsTeamworkContent.innerHTML = englishContent.aboutSkillsTeamworkContent;
        aboutSkillsTimeManagment.innerHTML = englishContent.aboutSkillsTimeManagment;
        aboutSkillsTimeManagmentContent.innerHTML = englishContent.aboutSkillsTimeManagmentContent;
        aboutSkillsConflict.innerHTML = englishContent.aboutSkillsConflict;
        aboutSkillsConflictContent.innerHTML = englishContent.aboutSkillsConflictContent;

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
        aboutSkillsIT.innerHTML = hungarianContent.aboutSkillsIT;
        aboutSkillsSoftwares.innerHTML = hungarianContent.aboutSkillsSoftwares;
        aboutSkillsPL.innerHTML = hungarianContent.aboutSkillsPL;
        aboutSkillsTesting.innerHTML = hungarianContent.aboutSkillsTesting;
        aboutSkillsInterpersonal.innerHTML = hungarianContent.aboutSkillsInterpersonal;

        aboutSkillsCommunication.innerHTML = hungarianContent.aboutSkillsCommunication;
        aboutSkillsCommunicationContent.innerHTML = hungarianContent.aboutSkillsCommunicationContent;
        aboutSkillsProblemSolving.innerHTML = hungarianContent.aboutSkillsProblemSolving;
        aboutSkillsProblemSolvingContent.innerHTML = hungarianContent.aboutSkillsProblemSolvingContent;
        aboutSkillsEmpathy.innerHTML = hungarianContent.aboutSkillsEmpathy;
        aboutSkillsEmpathyContent.innerHTML = hungarianContent.aboutSkillsEmpathyContent;
        aboutSkillsTeamwork.innerHTML = hungarianContent.aboutSkillsTeamwork;
        aboutSkillsTeamworkContent.innerHTML = hungarianContent.aboutSkillsTeamworkContent;
        aboutSkillsTimeManagment.innerHTML = hungarianContent.aboutSkillsTimeManagment;
        aboutSkillsTimeManagmentContent.innerHTML = hungarianContent.aboutSkillsTimeManagmentContent;
        aboutSkillsConflict.innerHTML = hungarianContent.aboutSkillsConflict;
        aboutSkillsConflictContent.innerHTML = hungarianContent.aboutSkillsConflictContent;

        aboutLanguages.innerHTML = hungarianContent.aboutLanguages;
        aboutLanguagesHU.innerHTML = hungarianContent.aboutLanguagesHU;
        aboutLanguagesEN.innerHTML = hungarianContent.aboutLanguagesEN;
        aboutCertificates.innerHTML = hungarianContent.aboutCertificates;
    }
}

changeLanguage(storedLanguage);