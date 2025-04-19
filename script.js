
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // Funktion zur Aktualisierung des Icons
  function updateToggleIcon() {
    if (body.classList.contains('dark')) {
      toggleBtn.textContent = '☀️';
    } else {
      toggleBtn.textContent = '🌙';
    }
  }

  // Beim Laden: Dark Mode prüfen und anwenden
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
  }
  updateToggleIcon();

  // Toggle-Button-Klick
  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
    updateToggleIcon();
  });
});
