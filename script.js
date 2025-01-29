// Simulate loading screen
window.addEventListener('load', () => {
  const loadingScreen = document.querySelector('.loading-screen');
  const content = document.querySelector('.content');

  setTimeout(() => {
    loadingScreen.style.display = 'none';
    content.style.opacity = '1';
  }, 2000); // 2 seconds loading time
});
