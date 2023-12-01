// Smooth scrolling for anchor links
const navLinks = document.querySelectorAll('.navcontent a');

navLinks.forEach((link) => {
  link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
  e.preventDefault();
  const targetId = e.target.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetId);
  const offsetTop = targetElement.offsetTop;

  window.scrollTo({
    top: offsetTop - 50,
    behavior: 'smooth',
  })
}

// Form submission alert
const contactForm = document.querySelector('.contactform form');
contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Form submitted. Thank you!');
});

// JavaScript for smooth section transitions
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});

const section = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - window.innerHeight / 2;
        if (scrollY >= sectionTop) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});


// JavaScript to handle section transitions
const aboutMeSection = document.querySelector('#aboutme');
const sectionElements = [aboutMeSection, aboutMeSection.querySelector('.About1'), aboutMeSection.querySelector('.skills'), aboutMeSection.querySelector('.interests')];

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const sectionTop = aboutMeSection.offsetTop - window.innerHeight / 2;

    if (scrollY >= sectionTop) {
        sectionElements.forEach((element) => {
            element.classList.add('active');
        });
    } else {
        sectionElements.forEach((element) => {
            element.classList.remove('active');
        });
    }
});

window.addEventListener('load', function () {
    window.scrollTo(0, 0);
});

window.addEventListener('load', (event) => {
    // Scroll to the #home section when the page loads
    const homeSection = document.getElementById('home');
    homeSection.scrollIntoView();
  });
  
