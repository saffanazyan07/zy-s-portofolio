// 테마 관련 코드 (변경 없음)
const savedTheme = localStorage.getItem("theme");
const themeIcon = document.getElementById("themeIcon");

if (savedTheme) {
  document.body.classList.add(savedTheme);
  themeIcon.src =
    savedTheme === "dark-mode"
      ? "./assets/icon-sun.svg"
      : "./assets/icon-moon.svg"; // 초기 아이콘 설정
} else {
  document.body.classList.add("light-mode");
  themeIcon.src = "../assets/icon-moon.svg";
}

const themeToggleButton = document.getElementById("themeToggle");

themeToggleButton.addEventListener("click", () => {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    themeIcon.src = "../assets/icon-moon.svg";
    localStorage.setItem("theme", "light-mode");
  } else {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    themeIcon.src = "../assets/icon-sun.svg";
    localStorage.setItem("theme", "dark-mode");
  }
});

// 페이지 로드 시 저장된 Todo 불러오기
window.addEventListener("load", () => {
  const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  savedTodos.forEach(todo => addTodoItem(todo.text, todo.completed));
  reorderTodoList(); // 로드 후 정렬 호출
  updateRemainingCount();
});

// Todo 입력 처리
const todoInputField = document.getElementById("todoInput");
const todoForm = document.getElementById("todoForm"); // 폼에 반드시 id="todoForm"을 설정하세요.

if (todoForm) {
  // 폼이 있는 경우 'submit' 이벤트 사용
  todoForm.addEventListener("submit", event => {
    event.preventDefault(); // 폼 제출 기본 동작 방지
    const todoText = todoInputField.value.trim();
    if (todoText) {
      addTodoItem(todoText, false);
      todoInputField.value = "";
      saveTodos();
    }
  });
} else {
  // 폼이 없는 경우 기존 'keydown' 이벤트 사용
  todoInputField.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      event.preventDefault(); // 기본 동작 방지
      const todoText = todoInputField.value.trim();
      if (todoText) {
        addTodoItem(todoText, false);
        todoInputField.value = "";
        saveTodos();
      }
    }
  });
}

// Todo 항목 추가 함수 수정
function addTodoItem(text, completed = false) {
  const todoList = document.getElementById("todoList");
  const todoItem = document.createElement("li");
  todoItem.className = "todo-item";
  todoItem.setAttribute("draggable", true);
  if (completed) {
    todoItem.classList.add("completed");
  }

  // 체크박스 컨테이너 생성
  const checkboxContainer = document.createElement("div");
  checkboxContainer.className = "checkbox-container";

  const checkboxId = `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = checkboxId;
  if (completed) {
    checkbox.checked = true;
  }

  const label = document.createElement("label");
  label.htmlFor = checkboxId;

  const todoTextSpan = document.createElement("span");
  todoTextSpan.className = "todo-text";
  todoTextSpan.textContent = text;

  checkboxContainer.appendChild(checkbox);
  checkboxContainer.appendChild(label);
  checkboxContainer.appendChild(todoTextSpan);

  // 삭제 아이콘 생성
  const deleteIcon = document.createElement("span");
  deleteIcon.className = "../assets/deleteIcon.png";

  todoItem.appendChild(checkboxContainer);
  todoItem.appendChild(deleteIcon);

  todoList.appendChild(todoItem);
  reorderTodoList();
  updateRemainingCount();

  // 체크박스 이벤트
  checkbox.addEventListener("change", e => {
    todoItem.classList.toggle("completed", e.target.checked);
    updateRemainingCount();
    saveTodos();
    reorderTodoList();
  });

  // 삭제 아이콘 이벤트
  deleteIcon.addEventListener("click", () => {
    todoItem.remove();
    updateRemainingCount();
    saveTodos();
  });

  addDragAndDropEvents(todoItem);
}

// 남은 항목 수 업데이트
function updateRemainingCount() {
  const remainingTasks = document.querySelectorAll(
    ".todo-item:not(.completed)"
  ).length;
  document.getElementById(
    "remainingCount"
  ).textContent = `${remainingTasks} items left`;
}

// 필터 버튼 이벤트
document.querySelectorAll(".filter-button").forEach(button => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-button")
      .forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.textContent.toLowerCase();
    filterTodos(filter);
  });
});

// 필터링 함수
function filterTodos(filter) {
  const todoItems = document.querySelectorAll(".todo-item");
  todoItems.forEach(item => {
    const isCompleted = item.classList.contains("completed");
    if (
      filter === "all" ||
      (filter === "active" && !isCompleted) ||
      (filter === "completed" && isCompleted)
    ) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

// 완료된 항목 삭제
document.getElementById("clearCompleted").addEventListener("click", () => {
  document
    .querySelectorAll(".todo-item.completed")
    .forEach(item => item.remove());
  updateRemainingCount();
  saveTodos();
});

// Todo 저장 함수
function saveTodos() {
  const todos = Array.from(document.querySelectorAll(".todo-item")).map(
    item => ({
      text: item.querySelector(".todo-text").innerText,
      completed: item.classList.contains("completed")
    })
  );
  localStorage.setItem("todos", JSON.stringify(todos));
}

// 드래그 앤 드롭 이벤트
const todoList = document.getElementById("todoList");

todoList.addEventListener("dragstart", e => {
  if (e.target.classList.contains("todo-item")) {
    e.target.classList.add("dragging");
  }
});

todoList.addEventListener("dragend", e => {
  if (e.target.classList.contains("todo-item")) {
    e.target.classList.remove("dragging");
    saveTodos();
  }
});

todoList.addEventListener("dragover", e => {
  e.preventDefault();
  const draggingItem = document.querySelector(".dragging");
  if (!draggingItem) return;

  const items = [...todoList.querySelectorAll(".todo-item:not(.dragging)")];
  const afterElement = items.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = e.clientY - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return {offset: offset, element: child};
      } else {
        return closest;
      }
    },
    {offset: Number.NEGATIVE_INFINITY}
  ).element;

  if (afterElement) {
    todoList.insertBefore(draggingItem, afterElement);
  } else {
    todoList.appendChild(draggingItem);
  }
});

// Todo 리스트 재정렬 함수
function reorderTodoList() {
  const todoList = document.getElementById("todoList");
  const todoItems = Array.from(todoList.children);

  todoItems.sort((a, b) => {
    const aCompleted = a.classList.contains("completed") ? 1 : 0;
    const bCompleted = b.classList.contains("completed") ? 1 : 0;
    return bCompleted - aCompleted;
  });

  todoItems.forEach(item => todoList.appendChild(item));
}

function addDragAndDropEvents(todoItem) {
  // 이미 dragstart, dragend, dragover 이벤트가 todoList에 설정되어 있으므로
  // 개별 아이템에 추가 이벤트는 필요하지 않습니다.
  // 필요 시 추가 기능을 여기에 구현할 수 있습니다.
}
