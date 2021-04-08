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
logo.setAttribute('src', siteContent["nav"]["img-src"])


// List out what is needed

// div.container - link titles
const headLinks = document.querySelectorAll('nav a')
headLinks[0].textContent = siteContent['nav']['nav-item-1']
headLinks[1].textContent = siteContent['nav']['nav-item-2']
headLinks[2].textContent = siteContent['nav']['nav-item-3']
headLinks[3].textContent = siteContent['nav']['nav-item-4']
headLinks[4].textContent = siteContent['nav']['nav-item-5']
headLinks[5].textContent = siteContent['nav']['nav-item-6']

// I know this can be done in an easier way, but for now this is what I know. Will come back at later time to fix this.

// .appendChild
const newLink = document.createElement('a') // creates the link
newLink.textContent = 'Fun with DOM!' 
// createTextNode creates a new node with text, whereas textContent adds text to an existing element
const nav = document.querySelector('nav') //grab the nav to append the new link to
nav.appendChild(newLink)

// .prepend
const preLink = document.createElement('a')
preLink.textContent = 'What is the DOM?'
nav.prepend(preLink)

// img#cta-img - needs src
const codeSnippet = document.getElementById('cta-img')
codeSnippet.setAttribute('src', siteContent['cta']['img-src'])

// title
const pageTitle = document.querySelector('.cta-text h1')
pageTitle.textContent = siteContent['cta']['h1']
// button
const pageButton = document.querySelector('button')
pageButton.textContent = siteContent['cta']['button']

// div.text-content - h4 text, p text for both top-content and bottom-content

// top-content
const topContentH4 = document.querySelectorAll('.top-content h4');
topContentH4[0].textContent = siteContent['main-content']['features-h4'];
topContentH4[1].textContent = siteContent['main-content']['about-h4'];

const topContentP = document.querySelectorAll('.top-content p');
topContentP[0].textContent = siteContent['main-content']['features-content'];
topContentP[1].textContent =siteContent['main-content']['about-content'];

// middle-img - needs src
const middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

// bottom-content
const bottomContentH4 = document.querySelectorAll('.bottom-content h4');
bottomContentH4[0].textContent = siteContent['main-content']['services-h4'];
bottomContentH4[1].textContent = siteContent['main-content']['product-h4'];
bottomContentH4[2].textContent = siteContent['main-content']['vision-h4'];

const bottomContentP = document.querySelectorAll('.bottom-content p');
bottomContentP[0].textContent = siteContent['main-content']['services-content'];
bottomContentP[1].textContent = siteContent['main-content']['product-content'];
bottomContentP[2].textContent = siteContent['main-content']['vision-content'];

// section.contact - needs text content
const contactSectionH4 = document.querySelectorAll('.contact h4');
contactSectionH4[0].textContent = siteContent['contact']['contact-h4'];

const contactSectionP = document.querySelectorAll('.contact p');
contactSectionP[0].textContent = siteContent['contact']['address'];
contactSectionP[1].textContent = siteContent['contact']['phone'];
contactSectionP[2].textContent = siteContent['contact']['email'];

// footer - needs copyright
const copyright = document.querySelectorAll('footer p');
copyright[0].textContent = siteContent['footer']['copyright'];

// change nav text color to green
headLinks.forEach((link) => {
  link.style.color = 'green'
})
newLink.style.color= 'green'
preLink.style.color= 'green'