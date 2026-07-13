/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
        });
    }
};

showMenu('nav-toggle', 'nav-menu');

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');

    if (navMenu) {
        navMenu.classList.remove('show-menu');
    }
}

navLinks.forEach(link => {
    link.addEventListener('click', linkAction);
});

/*=============== ACTIVE LINK ON SCROLL ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        const navLink = document.querySelector(
            '.nav__menu a[href*="' + sectionId + '"]'
        );

        if (!navLink) return;

        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ) {
            navLink.classList.add('active-link');
        } else {
            navLink.classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

/*=============== SHOW SCROLL TOP ===============*/
function scrollTopFunction() {

    const scrollTopBtn =
        document.getElementById('scrolltop') ||
        document.getElementById('scroll-top');

    if (!scrollTopBtn) return;

    if (window.scrollY >= 200) {
        scrollTopBtn.classList.add('show-scroll');
    } else {
        scrollTopBtn.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollTopFunction);

/*=============== DARK / LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme)
        ? 'dark'
        : 'light';

const getCurrentIcon = () =>
    themeButton && themeButton.classList.contains(iconTheme)
        ? 'bx-moon'
        : 'bx-sun';

if (selectedTheme) {
    document.body.classList[
        selectedTheme === 'dark' ? 'add' : 'remove'
        ](darkTheme);

    if (themeButton) {
        themeButton.classList[
            selectedIcon === 'bx-moon' ? 'add' : 'remove'
            ](iconTheme);
    }
}

if (themeButton) {
    themeButton.addEventListener('click', () => {
        document.body.classList.toggle(darkTheme);
        themeButton.classList.toggle(iconTheme);

        localStorage.setItem(
            'selected-theme',
            getCurrentTheme()
        );

        localStorage.setItem(
            'selected-icon',
            getCurrentIcon()
        );
    });
}

/*=============== PDF GENERATOR ===============*/
const areaCv = document.getElementById('area-cv');
const resumeButton = document.getElementById('resume-button');

const opt = {
    margin: 0,
    filename: 'Resume.pdf',

    image: {
        type: 'jpeg',
        quality: 1
    },

    html2canvas: {
        scale: 2,
        useCORS: true
    },

    jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait'
    },

    pagebreak: {
        mode: ['css']
    }
};

function generateResume() {

    if (!areaCv) {
        console.error('Element #area-cv not found');
        return;
    }

    if (typeof html2pdf === 'undefined') {
        console.error('html2pdf library not loaded');
        alert('html2pdf library not loaded');
        return;
    }

    html2pdf()
        .set(opt)
        .from(areaCv)
        .save();
}

if (resumeButton) {
    resumeButton.addEventListener('click', generateResume);
}

/*=============== DEBUG ===============*/
console.log('main.js loaded successfully');
