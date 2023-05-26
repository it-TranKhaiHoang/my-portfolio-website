/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/*======= MENU SHOW =======*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*======= MENU HIDDEN =======*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
};
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById('header');
  // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
  this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header');
};
window.addEventListener('scroll', blurHeader);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
  contactMessage = document.getElementById('contact-message');
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_uozw52g', 'template_xkzk49f', '#contact-form', 'JmZ7bOXeXxm_wFEtW').then(
    function () {
      // Show sent message
      contactMessage.textContent = 'Message sent successfully ✅';
      // Remove message after five seconds
      setTimeout(() => {
        contactMessage.textContent = '';
      }, 5000);
      // Clear input fields
      contactForm.reset();
    },
    function (error) {
      // Show sent message
      contactMessage.textContent = 'Message not sent (services error) ❌';
    },
  );
};

contactForm.addEventListener('submit', sendEmail);
/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/