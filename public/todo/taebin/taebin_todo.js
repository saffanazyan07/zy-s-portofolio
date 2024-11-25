document.addEventListener("DOMContentLoaded", () => {
  const todoList = document.getElementById("todo-list");
  const newTodoInput = document.getElementById("new-todo");
  const remainingCount = document.getElementById("remaining-count");
  const toggleThemeButton = document.getElementById("toggle-theme");
  const showAllButton = document.getElementById("show-all");
  const showActiveButton = document.getElementById("show-active");
  const showCompletedButton = document.getElementById("show-completed");
  const clearCompletedButton = document.getElementById("clear-completed");
  const themeIcon = document.getElementById("theme-icon");

  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  let darkMode = JSON.parse(localStorage.getItem("darkMode")) || false;

  // 페이지 로드 시 모드에 맞는 클래스 추가
  document.body.classList.toggle("dark-mode", darkMode);
  document.body.classList.toggle("light-mode", !darkMode);

  // 초기 아이콘 및 배경 설정
  const headerBg = document.querySelector(".header-bg");
  headerBg.src = darkMode
    ? "assets/images/bg-desktop-dark.jpg"
    : "../assets/images/bg-desktop-light.jpg";
  themeIcon.src = darkMode
    ? "assets/images/icon-sun.svg"
    : "../assets/images/icon-moon.svg";

  function renderTodos(filter = "all") {
    todoList.innerHTML = "";
    const filteredTodos = todos.filter(todo => {
      if (filter === "active") return !todo.completed;
      if (filter === "completed") return todo.completed;
      return true;
    });

    filteredTodos.forEach((todo, index) => {
      const todoItem = document.createElement("li");
      todoItem.className = `todo-item ${todo.completed ? "completed" : ""}`;

      const todoText = document.createElement("span");
      todoText.className = "todo-text";
      todoText.innerText = todo.text;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = todo.completed;
      checkbox.addEventListener("change", () => toggleTodoCompletion(index));

      const deleteButton = document.createElement("span");
      deleteButton.className = "delete-btn";
      deleteButton.addEventListener("click", () => deleteTodo(index));

      todoItem.appendChild(checkbox);
      todoItem.appendChild(todoText);
      todoItem.appendChild(deleteButton);
      todoList.appendChild(todoItem);
    });

    updateRemainingCount();
  }

  function addTodo() {
    const text = newTodoInput.value.trim();
    if (text) {
      todos.push({text, completed: false});
      newTodoInput.value = "";
      saveAndRender();
    }
  }

  function toggleTodoCompletion(index) {
    todos[index].completed = !todos[index].completed;
    saveAndRender();
  }

  function deleteTodo(index) {
    todos.splice(index, 1);
    saveAndRender();
  }

  function updateRemainingCount() {
    const remaining = todos.filter(todo => !todo.completed).length;
    remainingCount.innerText = `${remaining} items left`;
  }

  function clearCompletedTodos() {
    todos = todos.filter(todo => !todo.completed);
    saveAndRender();
  }

  function toggleTheme() {
    darkMode = !darkMode;
    document.body.classList.toggle("dark-mode", darkMode);
    document.body.classList.toggle("light-mode", !darkMode);

    // 이미지와 아이콘을 모드에 따라 변경
    headerBg.src = darkMode
      ? "../assets/images/bg-desktop-dark.jpg"
      : "../assets/images/bg-desktop-light.jpg";
    themeIcon.src = darkMode
      ? "../assets/images/icon-sun.svg"
      : "../assets/images/icon-moon.svg";

    // 변경된 모드 상태를 로컬스토리지에 저장
    localStorage.setItem("darkMode", darkMode);
  }

  function saveAndRender() {
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
  }

  // 이벤트 리스너 설정
  newTodoInput.addEventListener("keypress", e => {
    if (e.key === "Enter") addTodo();
  });

  toggleThemeButton.addEventListener("click", toggleTheme);
  showAllButton.addEventListener("click", () => renderTodos("all"));
  showActiveButton.addEventListener("click", () => renderTodos("active"));
  showCompletedButton.addEventListener("click", () => renderTodos("completed"));
  clearCompletedButton.addEventListener("click", clearCompletedTodos);

  // 초기 렌더링
  renderTodos();
});
