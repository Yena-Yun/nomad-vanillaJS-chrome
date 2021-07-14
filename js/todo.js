const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

// function sayHello(item) {
// 	console.log("hello " + item);
// }

function saveToDos(newTodo) {
	//처음에는 localStorage에 todos 내용이 단순 텍스트로만 저장됨
	//객체나 배열을 텍스트로 바꿔주는 함수: JSON.stringify(바꿀 객체나 배열)
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
	//stringify 처리를 해주고 나면 localStorage에 
	//더 이상 단순 텍스트가 아닌 toDos '배열' 안에 담긴 문자열로 처리됨 (중요!)
	//	=> 값을 string으로 저장하고 싶을 때 JSON.stringify 사용!
}

//콘솔에 그냥 localStorage.getItem("todos") 찍으면
//"[\"a\",\"b\",\"c\",\"d\"]" 이렇게 뜨는데
//JSON.parse(localStorage.getItem("todos"))로 찍으면
//["a", "b", "c", "d"] 이렇게 예쁘게 뜸

function paintToDo(newTodo) {
	console.log(newTodo);
	const li = document.createElement("li");
	const span = document.createElement("span");
	span.innerText = newTodo;

	const button = document.createElement("button");
	button.innerText = "❌";

	//appendChild: (상위 태그의) 하위 태그로 추가
	//innerText: 태그 사이의 텍스트로 추가
	li.appendChild(span);
	li.appendChild(button);
	toDoList.appendChild(li);

	button.addEventListener("click", deleteTodo);
}

function deleteTodo(e) {
	//target: 클릭된 html 태그(span)
	//span이 아닌 'li'를 지워야 함
	//parentElement: 클릭된 태그의 부모 태그
	const li = e.target.parentElement;
	li.remove(); //삭제는 단순히 remove 함수 호출하면 됨
}

function handleToDoSubmit(e) {
	//submit의 새로고침 event 막아주고
	e.preventDefault();
	//newTodo에 인풋의 value를 넣은 후
	const newTodo = toDoInput.value;
	//인풋창 초기화하고
	toDoInput.value = '';
	//toDos 배열에 newTodo 추가한 뒤
	toDos.push(newTodo);
	//todo 보여주는(그려주는) 함수에 newTodo 전달
	paintToDo(newTodo);
	saveToDos(); //toDos 배열을 로컬스토리지에 저장하는 함수
}

toDoForm.addEventListener("submit", handleToDoSubmit);

//로컬스토리지에 저장되어 있는 todos
const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
	//JSON.parse(파싱할 문자열): 문자열을 배열로 바꿔줌
	// ** 배열이어야 자바스크립트에서 꺼내 쓸 수 있음
	const parsedTodos = JSON.parse(savedTodos);	
	console.log(parsedTodos);

	//** forEach: 배열에 있는 각각의 item에 대해 함수 실행
	//parsedTodos.forEach(sayHello); //자동으로 배열에서 뽑은 각 요소를 함수의 파라미터로 넣어줌
	// 또는 forEach문에 함수를 바로 포함할 수도 있음
	parsedTodos.forEach((item) => console.log("hello " + item));
}