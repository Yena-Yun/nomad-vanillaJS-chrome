const toDoForm = document.getElementById("todo-form");
//const toDoInput = document.querySelector("#todo-form input"); //id가 todo-form인 요소 안에서 input을 찾음
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

//saveTodos가 하는 일은 단 한 가지: toDos 배열을 localStorage에 저장하는 것
function saveTodos() {
	localStorage.setItem("todos", JSON.stringify(toDos)); //(', ' 따로 추가하지 않아도 자동으로 붙어서 저장됨 - 단, 띄어쓰기는 안 해줌)
	//문제: localStorage는 배열이 아닌 텍스트만 저장 가능
	//		하지만 이렇게 하면 todo 리스트의 의미가 없음 (배열로 저장하는 게 적절)

	// const player = {name: "nico"}
	// JSON.stringify(player): 문자열이 아닌 것들(배열, 객체 등)을 문자열로 변환
}

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

function handleTodoSubmit(event) {
	event.preventDefault();
	const newTodo = toDoInput.value;
	toDoInput.value = "";
	//맨 위 전역에서 선언한 빈 배열 toDos에 newTodo 텍스트를 push해서 추가한다.
	toDos.push(newTodo);
	paintTodo(newTodo);
	saveTodos();
}

//전역 공간
//form은 submit 이벤트를 기다리고 있어야 함
toDoForm.addEventListener("submit", handleTodoSubmit);

// const todos = localStorage.getItem("todo");
// paintTodo(todos);