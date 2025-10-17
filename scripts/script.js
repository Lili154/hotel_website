
window.addEventListener('scroll', ()=>{
  document.querySelectorAll('.parallax').forEach(el=>{
    const sc = window.scrollY;
    el.style.backgroundPositionY = `${sc * 0.5}px`;
  });
});
const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add('visible');
  });
});
document.querySelectorAll('.text, .parallax').forEach(el => {
  el.classList.add('fade-in');
  io.observe(el);
});

