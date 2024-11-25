const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const background = document.getElementById("background");
const newTodoInput = document.getElementById("new-todo");
const todoBox = document.querySelector(".todo-box");
const itemsLeft = document.getElementById("items-left");
const clearCompletedButton = document.getElementById("clear-completed");
const filterButtons = document.querySelectorAll(".filter-btn");
const TodoOval = document.querySelector(".oval");
let todos = [];

// oval SVG
const lightOvalSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11.5" fill="white" stroke="#E3E4F1"/>
        <g opacity="0.01">
            <circle cx="12" cy="12" r="12" fill="url(#paint0_linear_0_626)"/>
            <path d="M8 12.3041L10.6959 15L16.6959 9" stroke="white"/>
        </g>
        <defs>
            <linearGradient id="paint0_linear_0_626" x1="-12" y1="12" x2="12" y2="36" gradientUnits="userSpaceOnUse">
                <stop stop-color="#55DDFF"/>
                <stop offset="1" stop-color="#C058F3"/>
            </linearGradient>
        </defs>
    </svg>`;

const darkOvalSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11.5" stroke="#393A4B"/>
        <g opacity="0.01">
            <circle cx="12" cy="12" r="12" fill="url(#paint0_linear_0_323)"/>
            <path d="M8 12.3041L10.6959 15L16.6959 9" stroke="white"/>
        </g>
        <defs>
            <linearGradient id="paint0_linear_0_323" x1="-12" y1="12" x2="12" y2="36" gradientUnits="userSpaceOnUse">
                <stop stop-color="#55DDFF"/>
                <stop offset="1" stop-color="#C058F3"/>
            </linearGradient>
        </defs>
    </svg>`;

// oval 상태를 로컬 스토리지에 저장하는 함수
function updateTodoOval() {
  const isDark = document.body.classList.contains("dark");
  TodoOval.innerHTML = isDark ? darkOvalSVG : lightOvalSVG;

  // oval 상태를 로컬 스토리지에 저장
  const ovalState = isDark ? "dark" : "light";
  localStorage.setItem("ovalState", ovalState);
}

// 테마 전환
const toggleTheme = () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeIcon.src = isDark ? "../assets/icon-sun.svg" : "../assets/icon-moon.svg";
  background.style.backgroundImage = isDark
    ? "url(../assets/bg-desktop-dark.jpg)"
    : "url(../assets/bg-desktop-light.jpg)";
  localStorage.setItem("theme", isDark ? "dark" : "light");

  // oval 상태 업데이트;
  updateTodoOval();
  updateTodoList();
};

// 초기 로딩 시 테마 설정
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");
  const savedOvalState = localStorage.getItem("ovalState");

  // 테마 설정
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeIcon.src = "../assets/icon-sun.svg";
    background.style.backgroundImage = "url(../assets/bg-desktop-dark.jpg)";
  } else {
    document.body.classList.remove("dark");
    themeIcon.src = "../assets/icon-moon.svg";
    background.style.backgroundImage = "url(../assets/bg-desktop-light.jpg)";
  }
  console.log(savedTheme);

  // oval 상태 업데이트
  const isDark = savedTheme === "dark" || savedOvalState === "dark";
  TodoOval.innerHTML = isDark ? darkOvalSVG : lightOvalSVG;
  console.log(savedOvalState);

  // "All" 버튼 기본 활성화
  const allButton = document.querySelector('.filter-btn[data-filter="all"]');
  allButton.classList.add("active"); // "All" 버튼에 active 클래스 추가
  filterTodos("all"); // "All" 필터로 필터링

  // 로컬스토리지에서 할 일 리스트 가져오기
  const savedTodos = JSON.parse(localStorage.getItem("todos"));
  if (savedTodos) {
    todos = savedTodos;
    updateTodoList();
  }
});

// 테마 토글 버튼 클릭 이벤트
themeToggle.addEventListener("click", toggleTheme);

// TODO 추가
newTodoInput.addEventListener("keypress", e => {
  if (e.key === "Enter" && newTodoInput.value.trim()) {
    addTodo(newTodoInput.value);
    newTodoInput.value = "";
  }
});

// TODO 추가 함수
function addTodo(text) {
  const todo = {
    text,
    completed: false
  };
  todos.push(todo);
  updateTodoList();
  saveTodosToLocalStorage(); // 할 일을 로컬 스토리지에 저장
}

// TODO 리스트 업데이트 함수
function updateTodoList() {
  todoBox.innerHTML = ""; // 기존 리스트 초기화
  todos.forEach((todo, index) => {
    const todoItem = document.createElement("div");
    todoItem.className = "todo";

    todoItem.draggable = true;
    todoItem.dataset.index = index;

    todoItem.innerHTML = `
            <div class="oval" data-index="${index}">
                <!-- SVG는 기본적으로 light 모드로 설정 -->
                <svg class="light-oval" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="11.5" fill="white" stroke="#E3E4F1"/>
                    <g opacity="0.01">
                        <circle cx="12" cy="12" r="12" fill="url(#paint0_linear_0_626)"/>
                        <path d="M8 12.3041L10.6959 15L16.6959 9" stroke="white"/>
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_0_626" x1="-12" y1="12" x2="12" y2="36" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#55DDFF"/>
                            <stop offset="1" stop-color="#C058F3"/>
                        </linearGradient>
                    </defs>
                </svg>
                
                <!-- dark 모드에서는 이 SVG로 대체됨 -->
                <svg class="dark-oval" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="11.5" fill: "#25273D" stroke="#393A4B"/>
                    <g opacity="0.01">
                        <circle cx="12" cy="12" r="12" fill="url(#paint0_linear_0_323)"/>
                        <path d="M8 12.3041L10.6959 15L16.6959 9" stroke="white"/>
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_0_323" x1="-12" y1="12" x2="12" y2="36" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#55DDFF"/>
                            <stop offset="1" stop-color="#C058F3"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <span class="todo-text" data-index="${index}">${todo.text}</span>
            <div class="cancel" data-index="${index}">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6777 0.707107L16.9706 0L8.83883 8.13173L0.707107 0L0 0.707107L8.13173 8.83883L0 16.9706L0.707106 17.6777L8.83883 9.54594L16.9706 17.6777L17.6777 16.9706L9.54594 8.83883L17.6777 0.707107Z" fill="#494C6B"/>
                </svg>
            </div>
        `;

    const oval = todoItem.querySelector(".oval");
    const todoText = todoItem.querySelector(".todo-text");
    const cancelButton = todoItem.querySelector(".cancel");

    // dark 모드에 따라 oval SVG 변경
    if (document.body.classList.contains("dark")) {
      oval.querySelector(".light-oval").style.display = "none"; // light 모드 SVG 숨김
      oval.querySelector(".dark-oval").style.display = "block"; // dark 모드 SVG 보임
      cancelButton.querySelector("path").setAttribute("fill", "#5B5E7E"); // dark 모드 색상
    } else {
      oval.querySelector(".light-oval").style.display = "block"; // light 모드 SVG 보임
      oval.querySelector(".dark-oval").style.display = "none"; // dark 모드 SVG 숨김
      cancelButton.querySelector("path").setAttribute("fill", "#494C6B"); // light 모드 색상
    }

    // 완료된 todo 스타일링
    if (todo.completed) {
      oval.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="11.5" fill="white" stroke="#E3E4F1"/>
                    <circle cx="12" cy="12" r="12" fill="url(#paint0_linear_0_595)"/>
                    <path d="M8 12.3041L10.6959 15L16.6959 9" stroke="white" stroke-width="2"/>
                    <defs>
                        <linearGradient id="paint0_linear_0_595" x1="-12" y1="12" x2="12" y2="36" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#55DDFF"/>
                            <stop offset="1" stop-color="#C058F3"/>
                        </linearGradient>
                    </defs>
                </svg>
            `;
      todoText.style.textDecoration = "line-through";
      todoText.style.color = "#9495A5"; // Light모드에서 체크 완료 시 텍스트 색
    }

    // Oval 클릭 시 완료/미완료 상태 변경
    todoItem
      .querySelector(".oval")
      .addEventListener("click", () => toggleComplete(index));

    todoItem.addEventListener("dragstart", handleDragStart);
    todoItem.addEventListener("dragover", handleDragOver);
    todoItem.addEventListener("drop", handleDrop);

    todoBox.appendChild(todoItem);

    // 텍스트 클릭 시에도 완료/미완료 상태 변경
    todoText.addEventListener("click", () => toggleComplete(index));

    // Cancel 버튼 클릭 시 TODO 삭제
    cancelButton.addEventListener("click", e => {
      e.stopPropagation(); // 클릭 이벤트 전파 방지
      deleteTodo(index); // 해당 TODO 삭제
    });

    // TODO 리스트에 추가
    todoBox.appendChild(todoItem);

    // Line 추가
    const line = document.createElement("div");
    line.className = "line";
    todoBox.appendChild(line);
  });

  updateItemsLeft();
}

let draggedItem = null;

// 드래그 시작 시 호출되는 함수
function handleDragStart(e) {
  draggedItem = e.target; // 드래그 중인 아이템을 설정
  e.dataTransfer.effectAllowed = "move"; // 드래그 효과를 "move"로 설정
  e.dataTransfer.setData("text/html", draggedItem.innerHTML); // 드래그한 아이템의 HTML 내용을 데이터로 저장
}

// 드래그 중에 호출되는 함수
function handleDragOver(e) {
  e.preventDefault(); // 기본 동작 방지
  e.dataTransfer.dropEffect = "move"; // 드롭 효과를 "move"로 설정
  const target = e.target.closest(".todo"); // 드롭할 대상 요소 찾기
  if (target && target !== draggedItem) {
    // 대상이 드래그 중인 아이템이 아닌 경우
    target.style.borderTop = "2px solid #3A7CFD"; // 드롭 위치 시각적 표시 추가
  }
}

// 드롭 시 호출되는 함수
function handleDrop(e) {
  e.stopPropagation(); // 이벤트 전파 방지
  const target = e.target.closest(".todo"); // 드롭된 위치의 요소 찾기
  if (target && target !== draggedItem) {
    // 드래그 중인 아이템이 아닌 경우
    target.style.borderTop = ""; // 드롭 시각적 표시 초기화

    // 드래그 중인 아이템과 타겟 아이템의 인덱스 가져오기
    const draggedIndex = parseInt(draggedItem.dataset.index, 10);
    const targetIndex = parseInt(target.dataset.index, 10);

    // todos 배열에서 드래그된 아이템 제거
    const [movedItem] = todos.splice(draggedIndex, 1);

    // 타겟 아이템의 인덱스 다음 위치에 드래그된 아이템 삽입
    const insertIndex =
      targetIndex < draggedIndex ? targetIndex + 1 : targetIndex;
    todos.splice(insertIndex, 0, movedItem);

    updateTodoList(); // 리스트를 다시 렌더링
    saveTodosToLocalStorage(); // 변경된 리스트를 로컬 스토리지에 저장
  }
}

// 드래그가 떠날 때 호출되는 함수
function handleDragLeave(e) {
  const target = e.target.closest(".todo"); // 떠나는 위치의 요소 찾기
  if (target) target.style.borderTop = ""; // 시각적 표시 제거
}

// 드래그가 끝났을 때 스타일을 초기화하는 이벤트 리스너
todoBox.addEventListener("dragend", () => {
  draggedItem = null; // 드래그 중인 아이템 초기화
  document
    .querySelectorAll(".todo")
    .forEach(item => (item.style.borderTop = "")); // 모든 아이템의 시각적 표시 초기화
});

// TODO 삭제 함수
function deleteTodo(index) {
  todos.splice(index, 1); // 해당 인덱스의 TODO 삭제
  updateTodoList(); // TODO 리스트 업데이트
  saveTodosToLocalStorage(); // 로컬 스토리지에 저장
}

// 완료/미완료 상태 토글
function toggleComplete(index) {
  todos[index].completed = !todos[index].completed;
  updateTodoList();
  saveTodosToLocalStorage(); // 상태 변경 시 할 일 리스트를 로컬 스토리지에 저장
}

// 남은 todo 수 업데이트
function updateItemsLeft() {
  const remainingItems = todos.filter(todo => !todo.completed).length;
  itemsLeft.textContent = `${remainingItems} items left`;
}

// 필터링
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active")); // 모든 필터 버튼 비활성화
    button.classList.add("active"); // 클릭된 버튼 활성화
    const filter = button.dataset.filter;
    filterTodos(filter);
  });
});

// 필터링 함수
function filterTodos(filter) {
  todoBox.innerHTML = ""; // 기존 리스트 초기화
  let filteredTodos = [];
  if (filter === "all") {
    filteredTodos = todos;
  } else if (filter === "active") {
    filteredTodos = todos.filter(todo => !todo.completed);
  } else if (filter === "completed") {
    filteredTodos = todos.filter(todo => todo.completed);
  }

  filteredTodos.forEach((todo, index) => {
    const todoItem = document.createElement("div");
    todoItem.className = "todo";
    todoItem.innerHTML = `
            <svg class="oval" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" data-index="${index}">
                <circle cx="12" cy="12" r="11.5" stroke="#E3E4F1"/>
            </svg>
            <span class="todo-text" data-index="${index}">${todo.text}</span>
        `;

    const oval = todoItem.querySelector(".oval");
    const todoText = todoItem.querySelector(".todo-text");
    const isDark = document.body.classList.contains("dark");

    if (isDark) {
      oval.querySelector("circle").setAttribute("stroke", "#393A4B");
    }

    // 완료된 todo 스타일링
    if (todo.completed) {
      oval.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="11.5" fill="white" stroke="#E3E4F1"/>
                    <circle cx="12" cy="12" r="12" fill="url(#paint0_linear_0_595)"/>
                    <path d="M8 12.3041L10.6959 15L16.6959 9" stroke="white" stroke-width="2"/>
                    <defs>
                        <linearGradient id="paint0_linear_0_595" x1="-12" y1="12" x2="12" y2="36" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#55DDFF"/>
                            <stop offset="1" stop-color="#C058F3"/>
                        </linearGradient>
                    </defs>
                </svg>
            `;
      todoText.style.textDecoration = "line-through";
      todoText.style.color = "#9495A5"; // Light모드에서 체크 완료 시 텍스트 색
    }

    // Oval 클릭 시 완료/미완료 상태 변경
    oval.addEventListener("click", () => toggleComplete(index));

    // 텍스트 클릭 시에도 완료/미완료 상태 변경
    todoText.addEventListener("click", () => toggleComplete(index));

    // TODO 리스트에 추가
    todoBox.appendChild(todoItem);

    // Line 추가
    const line = document.createElement("div");
    line.className = "line";
    todoBox.appendChild(line);
  });
  updateItemsLeft();
}

// Clear Completed 버튼 클릭 이벤트
clearCompletedButton.addEventListener("click", () => {
  todos = todos.filter(todo => !todo.completed);
  updateTodoList();
  saveTodosToLocalStorage(); // 할 일 리스트를 로컬 스토리지에 저장
});

// 로컬 스토리지에 할 일 리스트 저장
function saveTodosToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// 초기 로딩 시 필터 버튼 활성화
document.addEventListener("DOMContentLoaded", () => {
  const savedFilter = localStorage.getItem("filter");
  if (savedFilter) {
    filterTodos(savedFilter);
  }
});
