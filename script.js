
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  function updateToggleIcon() {
    if (body.classList.contains('dark')) {
      toggleBtn.textContent = '☀️';
    } else {
      toggleBtn.textContent = '🌙';
    }
  }

  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
  }
  updateToggleIcon();

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
    updateToggleIcon();
  });
});
