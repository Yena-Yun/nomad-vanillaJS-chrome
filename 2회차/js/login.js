//const loginForm = document.getElementById("login-form");
//const loginForm = document.querySelector("#login-form");

//const loginInput = loginForm.querySelector("input");
//const loginButton = loginForm.querySelector("button");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
	//console.dir(loginInput); //input 태그 안에 들어가는 속성들(예: value, type, placeholder, ...)과 각 속성에 현재 지정되어 있는 값들을 보여줌

	console.log(loginInput.value); //기존에 html에서 value에  'lalala' 지우고, input창에 뭔가를 입력한 뒤 버튼을 누르면 그 값을 찍어줌

	//console.log("click!");

	// ** validation 작업: user가 인풋창에 뭔가(이름)를 입력했을 때만 버튼을 클릭할 수 있게 함
}

loginButton.addEventListener("click", onLoginBtnClick);