console.log("JS connected. Navbar loaded.");

// HERO BACKGROUND SLIDESHOW
const hero = document.querySelector('.hero');

const slides = [
  'images/CASApic1.avif',
  'images/CASApic2.avif',
  'images/CASApic3.avif'
];

let current = 0;

function changeHeroBackground() {
  current = (current + 1) % slides.length;
  hero.style.backgroundImage = `url('${slides[current]}')`;
}

// Set first image immediately
hero.style.backgroundImage = `url('${slides[0]}')`;

// Change every 6 seconds
setInterval(changeHeroBackground, 6000);