const burger = document.getElementById('burger');
const nav = document.getElementById('desktopMenu');
const navLinks = nav.querySelectorAll('a');

// Toggle nav when burger is clicked
burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
  burger.classList.toggle('toggle');
});

// Close nav when a nav link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav-active');
    burger.classList.remove('toggle');
  });
});

// Parallax background scroll effect
window.addEventListener('scroll', function () {
  const scrolled = window.scrollY;
  const bg = document.querySelector('.background');
  if (bg) {
    bg.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});
