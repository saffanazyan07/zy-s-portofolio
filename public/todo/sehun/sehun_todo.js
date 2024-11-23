// 초기 모드 설정
const savedTheme = localStorage.getItem('theme');
const themeIcon = document.getElementById('theme-icon');

if (savedTheme) {
    document.body.classList.add(savedTheme);
    themeIcon.src = savedTheme === 'dark-mode' ? '../assets/images/icon-sun.svg' : '../assets/images/icon-moon.svg'; // 초기 아이콘 설정
} else {
    document.body.classList.add('light-mode');
    themeIcon.src = 'moon.png'; // 기본 아이콘 설정
}

// 다크/라이트 모드 전환
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';

    // 아이콘 변경
    themeIcon.src = currentTheme === 'dark-mode' ? '../assets/images/icon-sun.svg' : '../assets/images/icon-moon.svg';

    localStorage.setItem('theme', currentTheme);
});

// 저장된 할 일 목록 불러오기
window.addEventListener('load', () => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    savedTodos.forEach((todo) => addTodoItem(todo.text, todo.completed));
    updateRemainingCount();
});

// 새로운 할일 추가
const todoInput = document.getElementById('todo-input');

// 엔터 키 감지
todoInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { // 엔터 키가 눌렸을 때
        const todoText = todoInput.value.trim();
        if (todoText) {
            addTodoItem(todoText, false);
            todoInput.value = ''; // 입력 필드 초기화
            saveTodos(); // 로컬스토리지에 저장
        }
    }
});

// 할 일 추가 함수 (completed 인자 추가: 완료 상태를 지정)
function addTodoItem(text, completed = false) {
    const todoList = document.getElementById('todo-list');
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';
    todoItem.setAttribute('draggable', true); // 드래그 가능하게 설정
    if (completed) {
        todoItem.classList.add('completed');
    }

    const checkboxId = `checkbox-${Math.random().toString(36).substr(2, 9)}`; // 고유한 ID 생성
    todoItem.innerHTML = `
        <div class="todo-checkbox">
            <input type="checkbox" id="${checkboxId}" ${completed ? 'checked' : ''}>
            <label for="${checkboxId}"></label>
            <span class="todo-text">${text}</span>
        </div>
        <span class="delete-icon"></span>
    `;

    todoList.appendChild(todoItem);
    updateRemainingCount();

    // 체크박스 이벤트: 체크박스 상태가 변경될 때마다 완료 상태와 남은 할일 개수 업데이트
    const checkbox = todoItem.querySelector(`#${checkboxId}`);
    checkbox.addEventListener('change', (e) => {
        todoItem.classList.toggle('completed', e.target.checked);
        updateRemainingCount();
        saveTodos(); // 로컬스토리지에 저장
    });

    // 삭제 버튼 이벤트
    todoItem.querySelector('.delete-icon').addEventListener('click', () => {
        todoItem.remove();
        updateRemainingCount();
        saveTodos(); // 로컬스토리지에 저장
    });
}

// 남은 할일 개수 업데이트 함수
function updateRemainingCount() {
    const remainingTasks = document.querySelectorAll('.todo-item:not(.completed)').length;
    document.getElementById('remaining-count').textContent = `${remainingTasks} items left`;
}

// 필터링 기능
document.querySelectorAll('.filter').forEach((button) => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.filter').forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.textContent.toLowerCase();
        filterTodos(filter);
    });
});

function filterTodos(filter) {
    const todoItems = document.querySelectorAll('.todo-item');
    todoItems.forEach((item) => {
        const isCompleted = item.classList.contains('completed');
        if (
            filter === 'all' ||
            (filter === 'active' && !isCompleted) ||
            (filter === 'completed' && isCompleted)
        ) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// 완료된 항목 삭제
document.getElementById('clear-completed').addEventListener('click', () => {
    document.querySelectorAll('.todo-item.completed').forEach((item) => item.remove());
    updateRemainingCount();
    saveTodos(); // 로컬스토리지에 저장
});

// 현재 할 일 목록을 로컬스토리지에 저장
function saveTodos() {
    const todos = Array.from(document.querySelectorAll('.todo-item')).map((item) => ({
        text: item.querySelector('.todo-text').innerText,
        completed: item.classList.contains('completed'),
    }));
    localStorage.setItem('todos', JSON.stringify(todos));
}

// 드래그 앤 드롭 기능 추가
const todoList = document.getElementById('todo-list');

todoList.addEventListener('dragstart', (e) => {
    e.target.classList.add('dragging');
});

todoList.addEventListener('dragend', (e) => {
    e.target.classList.remove('dragging');
    saveTodos(); // 드래그 후 상태 저장
});

todoList.addEventListener('dragover', (e) => {
    e.preventDefault();
    const draggingItem = document.querySelector('.dragging');
    const items = [...todoList.querySelectorAll('.todo-item:not(.dragging)')];
    const afterElement = items.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = e.clientY - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;

    if (afterElement) {
        todoList.insertBefore(draggingItem, afterElement);
    } else {
        todoList.appendChild(draggingItem);
    }
});

// 드래그 앤 드롭 후 상태를 로컬스토리지에 저장하기
todoList.addEventListener('dragend', () => {
    saveTodos(); // 드래그가 끝난 후 상태 저장
});
