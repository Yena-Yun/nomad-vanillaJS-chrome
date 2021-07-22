const toDoForm = document.getElementById("todo-form");
//const toDoInput = document.querySelector("#todo-form input"); //id가 todo-form인 요소 안에서 input을 찾음
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function deleteTodo(event) {
	//event(누르는 행위)의 target(눌러진 것, button) 
	//	=> 어떤 것의 button이 눌러졌는지(= 부모 node인 li가 어떤 것인지)를 알아야 함 
	//	=> parentNode 또는 parentElement로 li를 잡아냄 (여기까지만 해도 컴퓨터는 알 수 있음)
	//	(=> 개발자도 알려면 그 안의 innerText 또는 outerText 또는 textContent를 찍어보면 됨)
	const li = event.target.parentElement;
	li.remove(); //찾은 li를 바로 지워주면 됨
}

function paintTodo(newTodo) {
	const li = document.createElement("li");
	const span = document.createElement("span");
	span.innerText = newTodo;
	const button = document.createElement("button");
	button.innerText = "❌";
	//삭제버튼은 click 이벤트를 기다리고 있어야 함
	button.addEventListener("click", deleteTodo);

	//appendChild는 항상 맨 마지막에
	li.appendChild(span);
	li.appendChild(button);
	//console.log(li);
	toDoList.appendChild(li);
}

const savedTodo = [];
function saveTodo(newTodo) {
	savedTodo.push(newTodo);
	localStorage.setItem("todo", savedTodo);
}

function handleTodoSubmit(event) {
	event.preventDefault();
	const newTodo = toDoInput.value;
	toDoInput.value = "";
	paintTodo(newTodo);
	saveTodo(newTodo);
}

//전역 공간
//form은 submit 이벤트를 기다리고 있어야 함
toDoForm.addEventListener("submit", handleTodoSubmit);

// const todos = localStorage.getItem("todo");
// paintTodo(todos);