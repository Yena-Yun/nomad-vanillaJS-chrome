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

	// ** validation(유효성 검사)
	// 1) input창에는 반드시 뭔가를 입력해야 함 (필수입력항목)
	// 2) input창의 내용이 너무 길면 안됨
	const username = loginInput.value;
	// if (username === "") {
	// 	//console.log("Please write your name.");
	// 	//콘솔창은 개발자가 보는 용도 => 유저가 볼 수 있게 하려면 alert 사용
	// 	alert("Please write your name.");
	// } else if (username.length > 15) {
	// 	alert("Your name is too long!");
	// }

	// 위에서 진행한 validation을 브라우저에서 자체 제공하는 input의 속성으로 해결 가능함 => 1): required, 2): maxlength
	//	**주의: 이러한 input 자체의 유효성 검사가 작동하려면
	//					input이 form 태그 안에 있어야 함
	// => div를 form 태그로 바꾸고, username을 아직 받는다는 걸 확인하기 위해 콘솔에 찍어봄
	console.log(username); //input의 유효성 검사가 작동하기 시작 (아무 것도 입력 안 하면 경고창 뜨고, 15자 이상 입력이 안됨)

	// + form의 특징
	// 1) 버튼을 클릭하지 않고 엔터만 쳐도 submit됨
	// 2) submit 시 브라우저가 새로고침 됨
	//	=> 개발자의 할 일: 브라우저가 새로고침하지 않고 user 정보를 저장하게 함
}

loginButton.addEventListener("click", onLoginBtnClick);