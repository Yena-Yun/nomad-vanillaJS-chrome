const toDoForm = document.getElementById("todo-form");
//const toDoInput = document.querySelector("#todo-form input"); //id가 todo-form인 요소 안에서 input을 찾음
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

//const toDos인 경우 새로고침할 때마다 빈 배열이 paintTodo 함수로 넘어가서
//localStorage의 기존 배열이 다 지워지고 새로운 내용만 저장되게 됨
//	=> toDos를 변경가능하게 하기 위해서 'let'으로 바꿔주고 아래에서 parse 할 때
//		toDos를 parsedTodos로 변경
let toDos = [];

//saveTodos가 하는 일은 단 한 가지: toDos 배열을 localStorage에 저장하는 것
function saveTodos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //(', ' 따로 추가하지 않아도 자동으로 붙어서 저장됨 - 단, 띄어쓰기는 안 해줌)
	//문제: localStorage는 배열이 아닌 텍스트만 저장 가능
	//		하지만 이렇게 하면 todo 리스트의 의미가 없음 (불러와서 쓸 때는 배열로 바꿔야 함)

	// 예: const player = {name: "nico"}
	// JSON.stringify(player): 문자열이 아닌 것들(배열, 객체 등)을 문자열로 변환
	// <-> JSON.parse(player): 문자열을 배열이나 객체로 변환
}

function deleteTodo(event) {
	//event(누르는 행위)의 target(눌러진 것, button) 
	//	=> 어떤 것의 button이 눌러졌는지(= 부모 node인 li가 어떤 것인지)를 알아야 함 
	//	=> parentNode 또는 parentElement로 li를 잡아냄 (여기까지만 해도 컴퓨터는 알 수 있음)
	//	(=> 개발자도 알려면 그 안의 innerText 또는 outerText 또는 textContent를 찍어보면 됨)
	const li = event.target.parentElement;
	li.remove(); //찾은 li를 바로 지워주면 됨

	//localStorage에서도 지워줘야 새로고침 시 지웠던 내용이 다시 뜨지 않음
	//li의 id를 기준으로 filter 함수 사용해서 toDos에 다시 담아줌
	toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
	//삭제 후 localStorage에 다시 저장해주기
	saveTodos();

}

function paintTodo(newTodo) {
	const li = document.createElement("li");
	//받은 newTodo 객체의 id를 li의 id에 넣어준다 (삭제 시 필요)
	li.id = newTodo.id;

	const span = document.createElement("span");
	//그냥 newTodo가 아니라 newTodo의 text를 넣어줘야 한다
	span.innerText = newTodo.text;

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
	//input의 내용을 newTodo라는 변수에 따로 담아주고
	const newTodo = toDoInput.value;
	//input 자리는 초기화
	toDoInput.value = "";

	const newTodoObj = {
		text: newTodo, //input의 내용
		id: Date.now(), //오늘 날짜(= 고유함)을 id로 지정
	};

	//id가 포함된 newTodoObj를 맨 위에 선언한 toDos 빈 배열에 추가(push)
	toDos.push(newTodoObj);
	//paintTodo 함수에 newTodoObj를 전달하여 브라우저에 렌더링
	//(브라우저에는 text 부분만 렌더링)
	paintTodo(newTodoObj);

	//saveTodos 함수로 localStorage에 저장
	//(localStorage에는 객체 형태({text: ..., id: ...})로 저장됨)
	saveTodos();
}

//전역 공간
//form은 submit 이벤트를 기다리고 있어야 함
toDoForm.addEventListener("submit", handleTodoSubmit);

//localStorage에 저장된 내용 불러와서 사용하기
const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos); // parsed와 같은 형태지만 아직은 그냥 일반 문자열

//savedToDos가 존재하는 경우 (localStorage에 저장된 정보가 있을 경우)
if (savedToDos) {
	//해당 정보를 JSON.parse를 통해 배열 또는 객체로 변환
	const parsedToDos = JSON.parse(savedToDos);
	console.log(parsedToDos); // 배열로 뜸 ((6) ["a", "b", "e", "c", "w", "e"])
	//왼쪽에 토글키 누르면 배열 정보 나옴

	//parse된 내용을 맨 위의 toDos 빈 배열에도 저장해줌으로써 새로운 내용을 추가해도
	//localStorage의 내용을 그대로 유지하게 한다
	toDos = parsedToDos;

	//forEach: 배열에 있는 '각각의 item에 대해(for each item ~)' function을 실행할 수 있게 해줌
	//예: sayHello("a") 함수에 "a", "b", "e", "c", "w", "e"가 각각 파라미터로 들어감
	parsedToDos.forEach(paintTodo); //localStorage에 저장된 item들에 대해 각각 paintTodo 함수를 실행해 줌
}