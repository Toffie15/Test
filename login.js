
function login() {
  const user = document.getElementById('username').value;
  const pw = document.getElementById('password').value;
  const error = document.getElementById('errorMsg');

  if (user === 'admin' && pw === '1234') {
    window.location.href = 'dashboard.html';
  } else {
    error.style.display = 'block';
  }
}
