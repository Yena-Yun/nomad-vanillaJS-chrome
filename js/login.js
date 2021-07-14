// const loginForm = document.getElementById("login-form");
// const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form input:last-child");

function onLoginBtnClick() {
	//dir로 특정 태그를 콘솔에 찍으면 그 태그의 내부를 보여줌
	// console.dir(loginInput); //input에 대한 정보를 모두 보여줌 (특히 value)
	// console.log("click!!");
	console.log("hello " + loginInput.value);
}

loginButton.addEventListener("click", onLoginBtnClick);

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

const greeting = document.querySelector("#greeting");

// string만 포함된 변수의 변수명은 보통 대문자로 표기 (관습)
const HIDDEN_CLASSNAME = "hidden";
// 같은 문자열을 반복해서 사용할 때 오타 방지를 위해 변수로 선언
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
	e.preventDefault();
	
	const username = loginInput.value;
	//localStorage로 브라우저가 유저명을 기억하게 함
	localStorage.setItem(USERNAME_KEY, username);
	
	paintGreetings(username);
}

function handleLinkClick(e) {
	// 링크 눌러도 바로 사이트로 이동하지 않도록 (기본 동작을 막음)
	e.preventDefault();
	console.dir(e); //dir: () 내용의 내부를 볼 때 (e, input, ...)
	// alert창 띄워지면 js의 모든 동작을 막게 됨 (ok 버튼 눌러야 그 다음 동작 수행 => 예: href로 연결된 사이트로 이동)
	alert("clicked!");
}

// 함수에 ()를 붙이면 click 여부와 상관없이 즉시 실행되고 한 번만 실행됨
// link.addEventListener("click", handleLinkClick());
// => ()를 없애서, js한테 함수의 이름만 주고 실행하는 건 js의 몫으로 남김

loginForm.addEventListener("submit", onLoginSubmit);
// link.addEventListener("click", handleLinkClick);

function paintGreetings(username) {
	//greeting.innerText = "Hello " + username;
	greeting.innerText = `Hello ${username}`; //jsx로 string과 변수 하나로 합치기
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
// console.log(savedUsername); //'저장된 값'이므로 새로고침하자마자 뜸

if (savedUsername == null) {
	// show the form
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	// show the greeting
	loginForm.classList.add(HIDDEN_CLASSNAME);
	paintGreetings(savedUsername);
}
