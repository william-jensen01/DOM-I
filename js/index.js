const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


// Nav
const navLinks = document.querySelectorAll('a');
navLinks[0].textContent = siteContent['nav']['nav-item-1'];
navLinks[1].textContent = siteContent['nav']['nav-item-2'];
navLinks[2].textContent = siteContent['nav']['nav-item-3'];
navLinks[3].textContent = siteContent['nav']['nav-item-4'];
navLinks[4].textContent = siteContent['nav']['nav-item-5'];
navLinks[5].textContent = siteContent['nav']['nav-item-6'];
navLinks.forEach((link) => {
  return link.style.color = 'green'
});


// H1 & Button
const h1 = document.querySelector('.cta-text h1').innerHTML = "DOM <br> Is <br> Awesome";
const button = document.querySelector(".cta-text button").innerHTML = "Get Started";


// Img
const roundImg = document.getElementById('cta-img');
roundImg.setAttribute('src', siteContent["cta"]["img-src"]);

const rectImg = document.getElementById('middle-img');
rectImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


// Top Content Features
const featureH4 = document.querySelectorAll('.top-content .text-content h4');
featureH4[0].textContent = (siteContent['main-content']['features-h4'])

const featurePar = document.querySelectorAll('.top-content .text-content p');
featurePar[0].textContent = (siteContent['main-content']['features-content'])


// Top Content About
const aboutH4 = document.querySelectorAll('.top-content .text-content h4');
aboutH4[1].textContent = (siteContent['main-content']['about-h4']);

const aboutPar = document.querySelectorAll('.top-content .text-content p');
aboutPar[1].textContent = (siteContent['main-content']['about-content']);


// Bottom Content Services
const servH4 = document.querySelectorAll('.bottom-content .text-content h4');
servH4[0].textContent = siteContent['main-content']['services-h4']

const servPar = document.querySelectorAll('.bottom-content .text-content p');
servPar[0].textContent = siteContent['main-content']['services-content'];


// Bottom Content Product
const prodH4 = document.querySelectorAll('.bottom-content .text-content h4');
prodH4[1].textContent = siteContent['main-content']['product-h4']

const prodPar = document.querySelectorAll('.bottom-content .text-content p');
prodPar[1].textContent = siteContent['main-content']['product-content'];


// Bottom Content Vision
const visH4 = document.querySelectorAll('.bottom-content .text-content h4');
visH4[2].textContent = siteContent['main-content']['vision-h4']

const visPar = document.querySelectorAll('.bottom-content .text-content p');
visPar[2].textContent = siteContent['main-content']['vision-content'];


// Contact
const contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent['contact']['contact-h4'];

const contactPar = document.querySelectorAll(".contact p");
contactPar[0].innerHTML = siteContent['contact']['address'];
contactPar[1].textContent = siteContent["contact"]["phone"];
contactPar[2].textContent = siteContent["contact"]["email"];


// Footer
const footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];

// New Content
const nav = document.querySelector('.container nav');
const newNav = document.createElement('a');
newNav.textContent = 'Home';
newNav.href = '#';
newNav.style.color = 'green';
nav.prepend(newNav);

const newNav2 = document.createElement('a');
newNav2.textContent = "New";
newNav2.href = "#";
newNav2.style.color = 'green';
nav.appendChild(newNav2);