

        //// Changement du thème de la page sombre/clair

document.addEventListener('DOMContentLoaded', function () {
// Déclaration des variables    
    var csstheme = document.getElementById('csstheme');
    var iconSoleil = document.getElementById('icon-soleil');
    var iconLune = document.getElementById('icon-lune');
    var iconSocialSombre = document.querySelectorAll('.icon-social-sombre');
    var iconSocialClair = document.querySelectorAll('.icon-social-clair');

    // Vérifie le thème enregistré dans le stockage local
    var theme = localStorage.getItem('theme');
    // C'est le thème sombre (de base)
    if (theme === 'sombre') {
        csstheme.setAttribute('href', 'css/sombre-theme.css');
        iconSoleil.style.display = 'none';
        iconLune.style.display = 'block';
        iconSocialSombre.forEach(icon => icon.style.display = 'block');
        iconSocialClair.forEach(icon => icon.style.display = 'none');
    } else {
        // Sinon c'est le thème clair
        csstheme.setAttribute('href', 'css/clair-theme.css');
        iconSoleil.style.display = 'block';
        iconLune.style.display = 'none';
        iconSocialSombre.forEach(icon => icon.style.display = 'none');
        iconSocialClair.forEach(icon => icon.style.display = 'block');
    }

    // Ajoute un écouteur d'événement pour le changement de thème (le clique sur l'icone)
    document.getElementById('button_theme').addEventListener('click', function () {
        if (csstheme.getAttribute('href') === 'css/sombre-theme.css') {
            csstheme.setAttribute('href', 'css/clair-theme.css');
            iconSoleil.style.display = 'block';
            iconLune.style.display = 'none';
            localStorage.setItem('theme', 'clair');
            iconSocialSombre.forEach(icon => icon.style.display = 'none');
            iconSocialClair.forEach(icon => icon.style.display = 'block');
        } else {
            csstheme.setAttribute('href', 'css/sombre-theme.css');
            iconSoleil.style.display = 'none';
            iconLune.style.display = 'block';
            localStorage.setItem('theme', 'sombre');
            iconSocialSombre.forEach(icon => icon.style.display = 'block');
            iconSocialClair.forEach(icon => icon.style.display = 'none');
        }
    });
});

        /////////

        // Menu de navigation

    document.addEventListener('DOMContentLoaded', function() {
        const menuIcon = document.querySelector('.menu-icon');
        const lienNav = document.querySelector('.lien_nav');
        const buttonFermer = document.querySelector('.button_ferme_menu');

        menuIcon.addEventListener('click',function() {
            lienNav.classList.toggle('active');
        });

        buttonFermer.addEventListener('click', function () {
            lienNav.classList.remove('active');
        });
    });


    