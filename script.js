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
  sections.forEach((section, index) => {
    setTimeout(() => {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }, 300 * (index + 1)); // Staggered fade-in effect
  });
});
