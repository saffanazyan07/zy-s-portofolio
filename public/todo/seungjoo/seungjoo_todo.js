const newTodoInput = document.getElementById("new-todo");
const todoList = document.getElementById("todo-list");
const remainingCount = document.getElementById("remaining-count");
const modeToggle = document.getElementById("mode-toggle");
const body = document.body;
let todos = JSON.parse(localStorage.getItem("todos")) || [];

const currentTheme = localStorage.getItem("theme") || "light";
document.body.classList.add(`${currentTheme}-mode`);
modeToggle.src =
  currentTheme === "dark"
    ? "../assets/icon-sun.svg"
    : "../assets/icon-moon.svg";

let draggedItem = null;
// Update renderTodos function to include draggable attributes
function renderTodos() {
  todoList.innerHTML = "";

  const activeFilter = document.querySelector(".filter-group .active");
  const filter = activeFilter ? activeFilter.id.replace("filter-", "") : "all";

  todos
    .filter(todo => {
      if (filter === "all") return true;
      if (filter === "active") return !todo.completed;
      if (filter === "completed") return todo.completed;
    })
    .forEach((todo, index) => {
      const taskElement = document.createElement("div");
      taskElement.classList.add("task");
      if (todo.completed) taskElement.classList.add("completed");

      taskElement.setAttribute("draggable", true);
      taskElement.setAttribute("data-index", index);

      // Set image based on the completion state and theme
      const taskImage = document.createElement("img");
      taskImage.src = todo.completed
        ? "../assets/check.svg"
        : document.body.classList.contains("dark-mode")
        ? "../assets/Oval Copy Dark.svg"
        : "../assets/Oval Copy.svg";
      taskImage.classList.add("task-check");

      // Toggle completion on image click
      taskImage.addEventListener("click", () => toggleTodoComplete(todo.id));

      taskElement.innerHTML = `
      ${taskImage.outerHTML}
      <span class="task-text">${todo.text}</span>
      <div class="task-delete-wrapper">
        ${
          document.body.classList.contains("dark-mode")
            ? `<svg class="task-delete" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6777 0.707107L16.9706 0L8.83883 8.13173L0.707107 0L0 0.707107L8.13173 8.83883L0 16.9706L0.707106 17.6777L8.83883 9.54594L16.9706 17.6777L17.6777 16.9706L9.54594 8.83883L17.6777 0.707107Z" fill="#FFF"/>
            </svg>`
            : `<img src="assets/icon-cross.svg" class="task-delete">`
        }
      </div>
    `;
      taskElement
        .querySelector(".task-check")
        .addEventListener("click", () => toggleTodoComplete(todo.id));
      taskElement
        .querySelector(".task-delete")
        .addEventListener("click", () => deleteTodoItem(todo.id));

      taskElement.addEventListener("dragstart", dragStart);
      taskElement.addEventListener("dragover", dragOver);
      taskElement.addEventListener("drop", dragDrop);
      taskElement.addEventListener("dragend", dragEnd);

      todoList.appendChild(taskElement);

      const divider = document.createElement("div");
      divider.classList.add("task-divider");
      todoList.appendChild(divider);
    });

  updateRemainingCount();
}

// Drag event handlers
function dragStart(e) {
  draggedItem = this;
  e.dataTransfer.effectAllowed = "move";
  setTimeout(() => this.classList.add("invisible"), 0); // Optional styling for dragged item
}
function dragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
}
function dragDrop(e) {
  e.preventDefault();

  const dragIndex = parseInt(draggedItem.getAttribute("data-index"));
  const dropIndex = parseInt(this.getAttribute("data-index"));
  // Reorder the todos array
  const movedItem = todos.splice(dragIndex, 1)[0];
  todos.splice(dropIndex, 0, movedItem);
  saveAndRender(); // Save and re-render the updated order
}
function dragEnd() {
  draggedItem.classList.remove("invisible");
  draggedItem = null;
}
function addTodo() {
  const text = newTodoInput.value.trim();
  if (text === "") return;
  todos.push({id: Date.now(), text, completed: false});
  newTodoInput.value = "";
  saveAndRender();
}

function toggleTodoComplete(id) {
  todos = todos.map(todo => {
    if (todo.id === id) {
      const updatedTodo = {...todo, completed: !todo.completed};
      return updatedTodo;
    }
    return todo;
  });

  // Save updated todos to localStorage and re-render the todo list
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

function deleteTodoItem(id) {
  todos = todos.filter(todo => todo.id !== id);
  saveAndRender();
}

function clearCompletedTodos() {
  todos = todos.filter(todo => !todo.completed);
  saveAndRender();
}

function setFilter(button) {
  document
    .querySelectorAll(".filter")
    .forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");
  renderTodos();
}

function toggleTheme() {
  body.classList.toggle("dark-mode");
  const currentTheme = body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", currentTheme);
  modeToggle.src =
    currentTheme === "dark"
      ? "../assets/icon-sun.svg"
      : "../assets/icon-moon.svg";

  // Re-render todos to update the task-check images
  renderTodos();
}

function updateRemainingCount() {
  const uncompletedCount = todos.filter(todo => !todo.completed).length;
  remainingCount.textContent = `${uncompletedCount} items left`;
}

function saveAndRender() {
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

// Event listeners for other parts of the code
newTodoInput.addEventListener("keypress", e => {
  if (e.key === "Enter") addTodo();
});
modeToggle.addEventListener("click", toggleTheme);
document
  .getElementById("clear-completed")
  .addEventListener("click", clearCompletedTodos);
document
  .querySelectorAll(".filter")
  .forEach(button => button.addEventListener("click", () => setFilter(button)));

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("filter-all").classList.add("active");
  renderTodos();
});
// Function to set filter and toggle active class
function setFilter(button) {
  // Remove the 'active' class from all filters
  document
    .querySelectorAll(".filter")
    .forEach(btn => btn.classList.remove("active"));
  // Add the 'active' class to the clicked filter
  button.classList.add("active");
  // Re-render todos based on the selected filter
  renderTodos();
}
