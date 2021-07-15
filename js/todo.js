const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input"); // const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

// 공통적으로 쓰는 걸 미리 빼 놓으면 오타 줄일 수 있음
const TODOS_KEY = "todos";

// toDos 배열을 변경 가능하도록 const에서 let으로 변경
let toDos = [];

// todo를 브라우저에 그려주는(생성하는) 함수
function paintToDo(newTodo) {
	const li = document.createElement("li");
	// html에서 가져온 li 태그의 id를 newTodo 객체의 id로 지정 (<li id="1"></li>)
	li.id = newTodo.id;

	const span = document.createElement("span");
	// html에서 가져온 span 태그의 innerText를 newTodo 객체의 text로 지정
	span.innerText = newTodo.text;

	const button = document.createElement("button");
	// button 태그의 innerText로 이모지 넣어줌
	button.innerText = "❌";

	// 상위 태그.appendChild(하위 태그): (html에서 상위 태그의) 하위 태그로 추가
	li.appendChild(span);
	li.appendChild(button);
	//toDoList(ul)에도 li 추가
	toDoList.appendChild(li);

	// button에 Click 이벤트 추가 (누르면 삭제되도록)
	button.addEventListener("click", deleteTodo);
}

//todo를 localStorage에 저장하는 함수
function saveToDos() {
	// localStorage에는 문자열만 저장됨
	//		=> toDos 배열을 문자열로 바꿔주고 "todos" 키로 저장 (JSON.stringify(): 문자열로 만듦)
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//todo의 'id'를 기준으로 특정 todo를 삭제하는 함수
function deleteTodo(e) {
	//target: 클릭된 html 태그 자체(=> span)
	//지우는 대상은 span이 아닌 부모 태그인 li
	//parentElement: 부모 태그
	const li = e.target.parentElement; //html에서 li를 얻음
	console.log(li.id); //(id: 1423758932)
	li.remove(); //화면에서의 삭제는 단순히 remove 함수 호출하면 됨

	//localStorage에서도 삭제하기
	// * id는 '숫자(Number)'여야 함
	console.log(typeof li.id); // => string으로 뜸
	//	=> li.id를 'parseInt'를 통해 숫자로 바꿔줘야

	//localStorage에서의 삭제 실행 = toDos 배열 교체
	//기존 toDos에서 하나씩 꺼낸 toDo의 id가
	//삭제하기 위해 선택한 li의 id과 다른 것만 골라내서 새 배열로 반환 (= 배열 교체 효과)
	toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
	//배열 교체 후 꼭 'saveToDos' 호출! (=> 저장)
	saveToDos(); //교체된 toDos 배열이 전역변수이므로 파라미터로 넣어주지 않아도 인식함
}

//인풋창의 내용을 submit하는 함수
function handleToDoSubmit(e) {
	//form을 submit할 때 기본적으로 실행되는 새로고침 event 막아주고
	e.preventDefault();

	//newTodo에 인풋의 value(단순 텍스트)를 넣음
	const newTodo = toDoInput.value;
	//인풋창 초기화
	toDoInput.value = '';

	//삭제할 때 각 todo의 id 필요
	//인풋의 value와 id를 한 번에 넣어서 newTodo '객체'(= 새로 만들어질 todo 항목)를 만듦
	const newTodoObj = {
		text: newTodo,
		id: Date.now(),
	}

	//toDos 전역 배열에 newTodo 객체 추가
	toDos.push(newTodoObj);

	//새 todo를 화면에 보여주는 함수 실행 (= 브라우저에 그려줌)
	paintToDo(newTodoObj);

	//새로 생성된 toDos 배열을 localStorage에 저장하는 함수 호출 (= db에 저장)
	saveToDos();
}

//인풋창에 todo 내용 입력 후 엔터 치면 submit 함수 실행
toDoForm.addEventListener("submit", handleToDoSubmit);


/* 함수 여부와 상관없이 항상 실행해야 하는 부분 => 기존 todo를 계속 브라우저에 그려주기 */
//localStorage에 저장되어 있는 todos를 "todos" 키로 가져옴
const savedTodos = localStorage.getItem(TODOS_KEY);

//savedTodos가 존재한다면(= 기존에 localStorage에 저장된 내용이 있다면)
if (savedTodos) {
	//savedTodos(문자열)을 '배열'로 바꿔줌 (JSON.parse(파싱할 문자열))
	// ** 배열이어야 자바스크립트에서 꺼내 쓸 수 있음
	const parsedTodos = JSON.parse(savedTodos);	

	//toDos 배열에 parsedTodos(기존 내용)을 담아주기
	//(saveToDos 함수 실행 시 기존 것과 함께 저장하도록)
	toDos = parsedTodos;

	//기존 내용 배열에서 하나씩 꺼내 브라우저에 렌더링
	//** forEach: 배열에 있는 각각의 item에 대해 '함수' 실행
	//(parsedTodos에서 자동으로 newTodo가 하나씩 꺼내져서 paintToDo로 전달됨)
	parsedTodos.forEach(paintToDo);
}

//콘솔에 그냥 localStorage.getItem("todos") 찍으면
//"[\"a\",\"b\",\"c\",\"d\"]" 이렇게 뜨는데 (= 일반 문자열)
//JSON.parse(localStorage.getItem("todos"))로 찍으면
//["a", "b", "c", "d"] 이렇게 예쁘게 뜸 (= 문자열 요소를 가진 배열)