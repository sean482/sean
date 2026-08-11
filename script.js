const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('#theme-toggle .material-symbols-outlined');

function updateThemeIcon() {
  if (!themeIcon) return;
  themeIcon.textContent = document.documentElement.classList.contains('dark') ? 'dark_mode' : 'light_mode';
}

themeToggle?.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  updateThemeIcon();
});

updateThemeIcon();
