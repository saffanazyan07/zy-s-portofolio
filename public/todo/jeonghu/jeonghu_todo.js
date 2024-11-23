// 주요 DOM 요소 가져오기
const themeToggle = document.querySelector(".toggle"); // 테마 전환 버튼
const themeIcon = document.getElementById("icon"); // 테마 아이콘
const background = document.getElementById("background-image"); // 배경 이미지
const newTodoInput = document.getElementById("input-text"); // 새로운 할 일 입력 필드
const mainContainer = document.querySelector(".main-container"); // 할 일 목록이 표시될 메인 컨테이너
const itemsLeft = document.querySelector(".remain-item"); // 남은 할 일 수 표시
const clearCompletedButton = document.querySelector(".clear"); // 완료된 할 일 삭제 버튼
const filterButtons = document.querySelectorAll(".filter-button"); // 필터 버튼들
const addTodoOval = document.querySelector(".oval"); // 할 일 추가 버튼의 Oval
const inputContainer = document.querySelector(".input-container"); // 입력 컨테이너
const bottomContainer = document.querySelector(".bottom-container"); // 하단 컨테이너

let todos = [];

let draggedIndex = null;

// Oval 상태 로컬 스토리지에서 가져오기
let ovalState = localStorage.getItem("ovalState") || "light";

// 기본, hover, 완료 상태 SVG
const lightOvalSVG = `
    <svg class="circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11.5" fill="white" stroke="#E3E4F1"/>
    </svg>`;

const darkOvalSVG = `
    <svg class="circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11.5" stroke="#393A4B"/>
    </svg>`;

const clickedOval = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11.5" fill="white" stroke="#E3E4F1"/>
        <circle cx="12" cy="12" r="12" fill="url(#paint0_linear_0_479)"/>
        <path d="M8 12.3041L10.6959 15L16.6959 9" stroke="white" stroke-width="2"/>
        <defs>
            <linearGradient id="paint0_linear_0_479" x1="-12" y1="12" x2="12" y2="36" gradientUnits="userSpaceOnUse">
                <stop stop-color="#55DDFF"/>
                <stop offset="1" stop-color="#C058F3"/>
            </linearGradient>
        </defs>
    </svg>`;

const hoverOval = `
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
        <circle cx="12" cy="12" r="11.5" fill="white" stroke="url(#paint0_linear_0_490)"/>
        <g opacity="0.01">
            <circle cx="12" cy="12" r="12" stroke="url(#paint1_linear_0_490)"/>
            <path d="M8 12.3041L10.6959 15L16.6959 9" stroke="white"/>
        </g>
        <defs>
            <linearGradient id="paint0_linear_0_490" x1="-12" y1="12" x2="12" y2="36" gradientUnits="userSpaceOnUse">
                <stop stop-color="#55DDFF"/>
                <stop offset="1" stop-color="#C058F3"/>
            </linearGradient>
            <linearGradient id="paint1_linear_0_490" x1="-12" y1="12" x2="12" y2="36" gradientUnits="userSpaceOnUse">
                <stop stop-color="#55DDFF"/>
                <stop offset="1" stop-color="#C058F3"/>
            </linearGradient>
        </defs>
    </svg>`;

// Oval 업데이트 함수
function updateAddTodoOval() {
  const isDark = document.body.classList.contains("dark");
  addTodoOval.innerHTML = isDark ? darkOvalSVG : lightOvalSVG;
}

// 테마 전환 함수에서 line과 텍스트 색상 업데이트 추가
const toggleTheme = () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");

  // 아이콘과 배경 이미지 변경
  themeIcon.src = isDark ? "../assets/icon-sun.svg" : "../assets/icon-moon.svg";
  background.style.backgroundImage = isDark
    ? "url(../assets/bg-desktop-dark.jpg)"
    : "url(../assets/bg-desktop-light.jpg)";

  // 낮/밤 모드에 따른 배경색 변경
  document.body.style.background = isDark ? "#171823" : "#FAFAFA";

  // 주요 컨테이너 배경색
  const containerBgColor = isDark ? "#25273D" : "#FFFFFF";
  inputContainer.style.background = containerBgColor;
  newTodoInput.style.background = containerBgColor;
  mainContainer.style.background = containerBgColor;
  bottomContainer.style.background = containerBgColor;

  // line 및 텍스트 색상 업데이트
  document.querySelectorAll(".line").forEach(line => {
    line.style.background = isDark ? "#393A4B" : "#E3E4F1";
  });
  document.querySelectorAll(".todo-text").forEach(text => {
    text.style.color = isDark ? "#C8CBE7" : "#494C6B";
  });

  // 로컬 스토리지에 테마 상태 저장
  localStorage.setItem("theme", isDark ? "dark" : "light");

  // Oval 상태 업데이트
  ovalState = isDark ? "dark" : "light";
  localStorage.setItem("ovalState", ovalState);
  updateAddTodoOval();
  updateTodoList();
};

// 초기 로딩 시 테마 및 할 일 설정
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");
  const isDark = savedTheme === "dark";

  if (isDark) {
    document.body.classList.add("dark");
    themeIcon.src = "../assets/icon-sun.svg";
    background.style.backgroundImage = "url(../assets/bg-desktop-dark.jpg)";
    document.body.style.background = "#171823";
    const containerBgColor = "#25273D";
    inputContainer.style.background = containerBgColor;
    newTodoInput.style.background = containerBgColor;
    mainContainer.style.background = containerBgColor;
    bottomContainer.style.background = containerBgColor;
  } else {
    document.body.classList.remove("dark");
    themeIcon.src = "../assets/icon-moon.svg";
    background.style.backgroundImage = "url(../assets/bg-desktop-light.jpg)";
    document.body.style.background = "#FAFAFA";
    const containerBgColor = "#FFFFFF";
    inputContainer.style.background = containerBgColor;
    newTodoInput.style.background = containerBgColor;
    mainContainer.style.background = containerBgColor;
    bottomContainer.style.background = containerBgColor;
  }

  updateAddTodoOval();

  const allButton = document.getElementById("all");
  allButton.classList.add("active");
  filterTodos("all");

  const savedTodos = JSON.parse(localStorage.getItem("todos"));
  if (savedTodos) {
    todos = savedTodos;
    updateAddTodoOval();
    updateTodoList();
  }
});

// 테마 토글 버튼 이벤트
themeToggle.addEventListener("click", toggleTheme);

// 새로운 할 일 추가
newTodoInput.addEventListener("keypress", e => {
  if (e.key === "Enter" && newTodoInput.value.trim()) {
    addTodo(newTodoInput.value);
    newTodoInput.value = "";
  }
});

// 할 일 추가 함수
function addTodo(text) {
  const todo = {text, completed: false};
  todos.push(todo);
  updateTodoList();
  saveTodosToLocalStorage();
}

function handleDragStart(event) {
  draggedIndex = event.target.getAttribute("data-index");
  event.dataTransfer.effectAllowed = "move";
}

function handleDragOver(event) {
  event.preventDefault(); // 드롭을 허용하기 위해 필요
  event.dataTransfer.dropEffect = "move";
}

function handleDrop(event) {
  event.preventDefault();
  const targetIndex = event.target
    .closest(".todo-item")
    .getAttribute("data-index");

  // todos 배열을 드래그한 항목과 드롭한 대상의 위치에 맞게 재정렬
  if (
    draggedIndex !== null &&
    targetIndex !== null &&
    draggedIndex !== targetIndex
  ) {
    const movedItem = todos.splice(draggedIndex, 1)[0];
    todos.splice(targetIndex, 0, movedItem);

    updateTodoList();
    saveTodosToLocalStorage();
  }
  draggedIndex = null;
}

// updateTodoList 함수에서 새로 생성되는 항목의 색상 설정
function updateTodoList() {
  mainContainer.innerHTML = ""; // 기존 목록 초기화
  const isDark = document.body.classList.contains("dark");

  todos.forEach((todo, index) => {
    const todoItem = document.createElement("div");
    todoItem.className = "todo-item";
    todoItem.draggable = true;
    todoItem.setAttribute("data-index", index);

    todoItem.innerHTML = `
            <div class="oval" data-index="${index}">
                ${
                  todo.completed
                    ? clickedOval
                    : isDark
                    ? darkOvalSVG
                    : lightOvalSVG
                }
            </div>
            <span class="todo-text" data-index="${index}" style="color: ${
              isDark ? "#C8CBE7" : "#494C6B"
            };">
                ${todo.text}
            </span>
            <div class="cross-line" data-index="${index}">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6777 0.707107L16.9706 0L8.83883 8.13173L0.707107 0L0 0.707107L8.13173 8.83883L0 16.9706L0.707106 17.6777L8.83883 9.54594L16.9706 17.6777L17.6777 16.9706L9.54594 8.83883L17.6777 0.707107Z" fill="#494C6B"/>
                </svg>
            </div>
        `;

    const oval = todoItem.querySelector(".oval");
    const todoText = todoItem.querySelector(".todo-text");

    if (todo.completed) {
      todoText.style.textDecoration = "line-through";
      todoText.style.color = isDark ? "#4D5067" : "#9495A5";
      oval.innerHTML = clickedOval;
    }

    oval.addEventListener("click", () => toggleComplete(index));
    todoText.addEventListener("click", () => toggleComplete(index));

    mainContainer.appendChild(todoItem);

    const line = document.createElement("div");
    line.className = "line";
    line.style.background = isDark ? "#393A4B" : "#E3E4F1";
    mainContainer.appendChild(line);
  });
}

// 할 일 목록 업데이트 함수 (드래그 앤 드롭 통합)
function updateTodoList() {
  mainContainer.innerHTML = ""; // 기존 목록 초기화
  const isDark = document.body.classList.contains("dark");

  todos.forEach((todo, index) => {
    const todoItem = document.createElement("div");
    todoItem.className = "todo-item";
    todoItem.draggable = true; // 드래그 가능하도록 설정
    todoItem.setAttribute("data-index", index);

    todoItem.innerHTML = `
            <div class="oval" data-index="${index}">
                ${
                  todo.completed
                    ? clickedOval
                    : isDark
                    ? darkOvalSVG
                    : lightOvalSVG
                }
            </div>
            <span class="todo-text" data-index="${index}" style="color: ${
              isDark ? "#C8CBE7" : "#494C6B"
            };">
                ${todo.text}
            </span>
            <div class="cross-line" data-index="${index}">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6777 0.707107L16.9706 0L8.83883 8.13173L0.707107 0L0 0.707107L8.13173 8.83883L0 16.9706L0.707106 17.6777L8.83883 9.54594L16.9706 17.6777L17.6777 16.9706L9.54594 8.83883L17.6777 0.707107Z" fill="#494C6B"/>
                </svg>
            </div>
        `;

    const oval = todoItem.querySelector(".oval");
    const todoText = todoItem.querySelector(".todo-text");
    const cancelButton = todoItem.querySelector(".cross-line");

    // 완료된 할 일 텍스트 스타일 적용
    if (todo.completed) {
      todoText.style.textDecoration = "line-through";
      todoText.style.color = isDark ? "#4D5067" : "#9495A5";
      oval.innerHTML = clickedOval;
    }

    // 드래그 앤 드롭 이벤트 추가
    todoItem.addEventListener("dragstart", handleDragStart);
    todoItem.addEventListener("dragover", handleDragOver);
    todoItem.addEventListener("drop", handleDrop);

    oval.addEventListener("click", () => toggleComplete(index));
    todoText.addEventListener("click", () => toggleComplete(index));
    cancelButton.addEventListener("click", e => {
      e.stopPropagation();
      deleteTodo(index);
    });

    mainContainer.appendChild(todoItem);

    const line = document.createElement("div");
    line.className = "line";
    line.style.background = isDark ? "#393A4B" : "#E3E4F1";
    mainContainer.appendChild(line);
  });

  updateItemsLeft();
}

// 할 일 삭제 함수
function deleteTodo(index) {
  todos.splice(index, 1);
  updateTodoList();
  saveTodosToLocalStorage();
}

// 완료 상태 토글 함수
function toggleComplete(index) {
  todos[index].completed = !todos[index].completed;
  updateTodoList();
  saveTodosToLocalStorage();
}

// 남은 할 일 수 업데이트
function updateItemsLeft() {
  const remainingItems = todos.filter(todo => !todo.completed).length;
  itemsLeft.textContent = `${remainingItems} items left`;
}

// 필터 버튼 이벤트
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    filterTodos(button.dataset.filter);
  });
});

// 필터링 함수에서 완료된 항목 스타일 수정
function filterTodos(filter) {
  mainContainer.innerHTML = ""; // 기존 목록 초기화

  const filteredTodos =
    filter === "all"
      ? todos
      : todos.filter(todo =>
          filter === "active" ? !todo.completed : todo.completed
        );

  // 필터링된 항목으로 목록 재구성
  filteredTodos.forEach((todo, index) => {
    const todoItem = document.createElement("div");
    todoItem.className = "todo-item";
    todoItem.setAttribute("data-index", index); // 재정렬된 인덱스 적용
    todoItem.innerHTML = `
            <div class="oval" data-index="${index}">
                ${
                  todo.completed
                    ? clickedOval
                    : document.body.classList.contains("dark")
                    ? darkOvalSVG
                    : lightOvalSVG
                }
            </div>
            <span class="todo-text" data-index="${index}">
                ${todo.text}
            </span>
        `;

    const oval = todoItem.querySelector(".oval");
    const todoText = todoItem.querySelector(".todo-text");

    // 완료 상태 스타일 적용
    if (todo.completed) {
      todoText.style.textDecoration = "line-through";
      todoText.style.color = document.body.classList.contains("dark")
        ? "#4D5067"
        : "#9495A5";
    }

    // 이벤트 핸들러 추가
    oval.addEventListener("click", () => toggleComplete(index));
    todoText.addEventListener("click", () => toggleComplete(index));

    mainContainer.appendChild(todoItem);

    // 라인 추가
    const line = document.createElement("div");
    line.className = "line";
    line.style.background = document.body.classList.contains("dark")
      ? "#393A4B"
      : "#E3E4F1";
    mainContainer.appendChild(line);
  });

  updateItemsLeft(); // 남은 항목 수 갱신
}

// 완료된 할 일 삭제
clearCompletedButton.addEventListener("click", () => {
  console.log("Before Clear:", todos); // Clear 전 todos 배열 확인
  todos = todos.filter(todo => !todo.completed); // 완료된 항목 제거
  console.log("After Clear:", todos); // Clear 후 todos 배열 확인

  saveTodosToLocalStorage(); // 로컬 스토리지 저장

  // 현재 활성화된 필터에 따라 목록 재구성
  const activeFilter = document.querySelector(".filter-button.active").dataset
    .filter;
  updateTodoList(); // 전체 목록 먼저 업데이트
  filterTodos(activeFilter); // 활성화된 필터 조건에 따라 표시
});

// 로컬 스토리지 저장
function saveTodosToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// 필터 버튼 스타일 설정

// 필터 버튼 이벤트
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    filterTodos(button.dataset.filter);
  });
});
