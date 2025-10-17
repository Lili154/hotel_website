  const imageGroups = [
    ['gallery/gallery1.jpg', 'gallery/gallery2.jpg', 'gallery/gallery3.jpg'],
    ['gallery/gallery4.jpg', 'gallery/gallery5.jpg', 'gallery/gallery6.jpg'],
    ['gallery/gallery7.jpg', 'gallery/gallery8.jpg', 'gallery/gallery9.jpg'],
    ['gallery/gallery10.jpg', 'gallery/gallery11.jpg', 'gallery/gallery12.jpg']
  ];

  let currentGroup = 0;
  const gallery = document.getElementById('gallery');

  function updateGallery() {
    const newImages = imageGroups[currentGroup];
    gallery.innerHTML = '';

    newImages.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.className = 'gallery-img';
      img.onclick = () => openLightbox(src);
      gallery.appendChild(img);
    });

    currentGroup = (currentGroup + 1) % imageGroups.length;
  }

  function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
  }

  function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
  }

  updateGallery();
  setInterval(updateGallery, 3000); // Every 3 seconds


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 10, 
          behavior: 'smooth'
        });
      }
    });
  });
