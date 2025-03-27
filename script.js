const allImages = document.querySelectorAll('.image-grid img');
const heroTitle = document.querySelector('.hero-title');

// Apply hollow effect, image blending, and vector border
allImages.forEach((img) => {
  img.addEventListener('mouseenter', (e) => {
    heroTitle.classList.add('hollow-text');
    allImages.forEach((otherImg) => {
      if (otherImg !== e.target) {
        // Vector-like graphic effect with border
        otherImg.style.filter = 'opacity(0.1) grayscale(100%)';
        otherImg.style.mixBlendMode = 'difference';
        otherImg.style.border = '2px solid white';
      } else {
        otherImg.style.filter = 'none';
        otherImg.style.border = 'none';
      }
    });
  });

  img.addEventListener('mousemove', (e) => {
    const rect = img.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    // Move the image slightly with the mouse
    const moveX = x * 20; 
    const moveY = y * 20;
    img.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  img.addEventListener('mouseleave', () => {
    heroTitle.classList.remove('hollow-text');
    allImages.forEach((otherImg) => {
      otherImg.style.filter = '';
      otherImg.style.mixBlendMode = '';
      otherImg.style.border = 'none';
      otherImg.style.transform = 'translate(0, 0)'; // Reset position
    });
  });
});
