//const loginForm = document.getElementById("login-form");
//querySelector는 기본적으로 '태그'를 선택하는 선택자이므로
//id나 class를 선택할 때는 '#'이나 '.'를 명시해줘야 한다.
const loginForm = document.querySelector("#login-form");

//const loginInput = loginForm.querySelector("input");
//const loginButton = loginForm.querySelector("button");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

const link = document.querySelector("a");

const greeting = document.querySelector("#greeting");

//(일반적으로 string만 포함된 변수는 대문자로 표기(관습))
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//인풋창에 입력된 값을 변수에 담는다.
const username = loginInput.value;

//로그인 버튼 클릭 시 (submit 함수 만들기 전)
function onLoginBtnClick() {
	//input 태그의 속성들(예: value, type, placeholder, ...) + 현재 각 속성에 지정되어 있는 값을 보여줌
	//console.dir(loginInput);
	//기존의 html에서 value에 있던 'lalala'(초기값으로 인풋창에 선입력됨)을 지우고 이 콘솔문 실행 
	//('lalala' 대신) input창에 입력된 값을 콘솔창에 찍어줌
	console.log(username);

	// ** validation(유효성 검사)
	// 1) input창에는 반드시 뭔가를 입력해야 함 (필수입력항목 => required 지정)
	// 2) input창의 내용이 너무 길면 안됨 (=> maxlength를 정해준다)

	const username = loginInput.value;
	// if (username === "") {
	// 	//console.log("Please write your name.");
	// 	//콘솔창은 개발자가 보는 용도 => 유저가 볼 수 있게 하려면 alert 사용하기
	// 	alert("Please write your name.");
	// } else if (username.length > 15) {
	// 	alert("Your name is too long!");
	// }

	// 위에서 진행한 이러한 validation은 브라우저에서 자체 제공하는 input의 속성으로 해결 가능 (=> required, maxlength)
	//	**주의: 이러한 브라우저 자체의 유효성 검사가 작동하려면 input이 'form' 태그 안에 있어야 함
	// 		=> div를 form 태그로 바꾸고, username을 아직 받는다는 걸 확인하기 위해 콘솔에 찍어본다
	console.log(username); //input의 유효성 검사가 작동하기 시작 (아무 것도 입력 안 하면 경고창 뜨고, 내용은 15자 이상 입력 안됨)

	// + form의 특징
	// 1) 버튼을 클릭하지 않고 enter만 쳐도 submit됨
	// 2) submit 시 브라우저가 새로고침 됨
	//	=> 개발자의 할 일: 브라우저가 새로고침하지 않고 user 정보를 저장하게 함
}

//로그인 submit 시 함수
//click의 event와 submit의 event는 다름
//addEventListener로 함수 실행하면 js(브라우저)가 함수를 실행해주고
//함수의 ()에 파라미터로 자리 만들어주면 거기에 event에 대한 정보도 담아줌
//(자리를 안 만들어 줄 수도 있음, 이 정보 중에는 함수도 있음 => 예: preventDefault())
function onLoginSubmit(event) {
	//form의 submit 이벤트에 내재된 새로고침 이벤트 방지
	event.preventDefault(); //event의 preventDefault() '함수' 호출

	// ** DOM에 클래스 추가(classList.add(추가할 클래스 문자열))
	//	=> 인풋창 form이 사라짐
	loginForm.classList.add(HIDDEN_CLASSNAME);

	const username = loginInput.value;
	//console.log(username);

	//localStorage에 인풋창에 입력된 username 저장 (setItem)
	localStorage.setItem(USERNAME_KEY, username);

	//"Hello " + username 문구를 띄우는 함수 실행
	paintGreetings(username);
}

//인사말 보여주는 함수
function paintGreetings(username) {
	// greeting.innerText = "Hello " + username; //간격 기억해야 하고 불편
	greeting.innerText = `Hello ${username}`; //더 많이 쓰는 방법 (백틱을 쓰자..!)
	greeting.classList.remove(HIDDEN_CLASSNAME); //hidden 클래스를 제거하면 greeting이 보이게 됨
}


function handleLinkClick(event) {
	event.preventDefault(); //클릭 이벤트에도 이거 지정하면 브라우저 동작을 막음 (=> 노마드코더 페이지로 이동하지 않음)

	//alert("click!"); //alert는 확인버튼을 누를 때까지 page가 다른 기본동작을 하지 못하도록 막음 (=> 요즘 alert를 안 쓰는 이유)

	console.dir(event); 
	//콘솔에 뜨는 MouseEvent의 screenX, screenY = 유저가 클릭한 곳의 좌표값
	//(중요 => 유저가 어디를 클릭했는지 알아야 할 때가 있어서)
	//(event.preventDefault() 하고 나면 콘솔의 이곳에 defaultPrevented: true 라고 뜸)
}

// loginButton.addEventListener("click", onLoginBtnClick);
// 함수에 '()'가 있으면 '즉시 실행' 그리고 한 번만 실행되고 끝 
// '()'가 없으면 js(브라우저)가 명령에 맞추어 매번 함수 실행함 (예: 'submit' 시 실행)
//	=> ** addEventListener 안에 있는 함수는 이벤트 시 발생해야 하므로 즉시 실행하지 않는다

// loginButton.addEventListener("submit", onLoginBtnClick());
// loginButton.addEventListener("submit", onLoginBtnClick);

link.addEventListener("click", handleLinkClick);

// localStorage에 저장된 username 불러오기 (getItem)
const savedUsername = localStorage.getItem(USERNAME_KEY);
//console.log(savedUsername);

// localStorage에 저장된 username이 없으면 (= 아직 로그인이 안 된 상태이면)
if (savedUsername === null) {
	//form을 보여주고 (hidden 클래스 제거)
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	//submit 시 submit하는 함수 실행 (setItem으로 저장하고 greeting 문구 보여주기)
	loginForm.addEventListener("submit", onLoginSubmit);

	//저장된 username이 이미 있으면 (= 로그인이 된 상태이면)
} else {
	//화면에 username 보여주는 함수 실행
	paintGreetings(savedUsername);
}