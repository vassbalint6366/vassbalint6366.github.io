function changeNavbarLanguage() {
    var navbarAbout = document.getElementById('navbarAbout');
    var navbarHome = document.getElementById('navbarHome');
    var navbarContact = document.getElementById('navbarContact');
    var navbarResume = document.getElementById('navbarResume');
    var navbarLanguage = document.getElementById('navbarLanguage');

    if(en){
        navbarAbout.innerHTML = englishContent.navbarAbout;
        navbarHome.innerHTML = englishContent.navbarHome;
        navbarContact.innerHTML = englishContent.navbarContact;
        navbarResume.innerHTML = englishContent.navbarResume;
        navbarLanguage.innerHTML = englishContent.navbarLanguage;
        console.log("navbar lang: eng");
    } else if (!en) {
        navbarAbout.innerHTML = hungarianContent.navbarAbout;
        navbarHome.innerHTML = hungarianContent.navbarHome;
        navbarContact.innerHTML = hungarianContent.navbarContact;
        navbarResume.innerHTML = hungarianContent.navbarResume;
        navbarLanguage.innerHTML = hungarianContent.navbarLanguage;
        console.log("navbar lang: hu");
    }
}

changeLanguage(storedLanguage);