// Simulate loading screen
window.addEventListener('load', () => {
  const loadingScreen = document.querySelector('.loading-screen');
  const content = document.querySelector('.content');

  setTimeout(() => {
    loadingScreen.style.display = 'none';
    content.style.opacity = '1';
  }, 2000); // 2 seconds loading time

  // Add fade-in effect to sections
  const sections = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach((section) => {
    observer.observe(section);
  });
});
