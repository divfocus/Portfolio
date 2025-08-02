const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const closeBtn = document.querySelector('.lightbox-close');

  document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const figures = document.querySelectorAll(".gallery figure");
    figures.forEach((figure, index) => {
      figure.style.animationDelay = `${index * 0.1}s`;
    });
  });
  