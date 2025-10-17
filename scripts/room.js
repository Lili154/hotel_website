document.querySelectorAll('.room-list li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        // Hide all room content divs
        document.querySelectorAll('.room-content').forEach(div => {
            div.classList.remove('active');
        });

        // Show the one that matches the href
        const targetId = this.getAttribute('href').substring(1);
        const targetDiv = document.getElementById(targetId);
        if (targetDiv) {
            targetDiv.classList.add('active');
        }
    });
});

document.querySelectorAll('.gallery').forEach(gallery => {
    const mainImg = gallery.querySelector('.main-slide');
    const thumbnails = gallery.querySelectorAll('.thumb');

    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));

            // Add active to clicked one
            thumb.classList.add('active');

            // Change main image
            mainImg.src = thumb.src;
        });
    });
});
