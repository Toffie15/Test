
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

function loadTodos() {
  const list = document.getElementById('todoList');
  list.innerHTML = '';
  const todos = JSON.parse(localStorage.getItem('todos') || '[]');
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.className = todo.done ? 'completed' : '';
    li.innerHTML = \`\${todo.text} <div><button onclick="toggleTodo(\${index})">✔</button> <button onclick="deleteTodo(\${index})">✖</button></div>\`;
    list.appendChild(li);
  });
}

function addTodo() {
  const input = document.getElementById('todoInput');
  const text = input.value.trim();
  if (!text) return;
  const todos = JSON.parse(localStorage.getItem('todos') || '[]');
  todos.push({ text, done: false });
  localStorage.setItem('todos', JSON.stringify(todos));
  input.value = '';
  loadTodos();
}

function toggleTodo(index) {
  const todos = JSON.parse(localStorage.getItem('todos') || '[]');
  todos[index].done = !todos[index].done;
  localStorage.setItem('todos', JSON.stringify(todos));
  loadTodos();
}

function deleteTodo(index) {
  const todos = JSON.parse(localStorage.getItem('todos') || '[]');
  todos.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(todos));
  loadTodos();
}

window.onload = function () {
  if (document.getElementById('todoList')) {
    loadTodos();
  }
};
