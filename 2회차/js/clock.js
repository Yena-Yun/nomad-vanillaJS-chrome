const clock = document.querySelector("h2#clock");
// const clock = document.getElementById("clock");

function sayHello() {
	console.log("hello");
}

function getClock() {
	const date = new Date();

	//console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
	//	=> 콘솔이 아닌 DOM의 innerText에 넣으면 화면에 찍힘
	//		(이때는 한 줄에 시간이 하나씩 뜨는 게 아니라 진짜 시계처럼 보여짐)
	// ** 한 자리 숫자들 앞에 0 붙여주기 (string.padStart(원하는 자릿수, 채울 문자열))
	// "1".padStart(2, "0"); // "01"
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");
	// hours.length === 1 ? hours.padStart(2, "0") : hours;
	clock.innerText = `${hours}:${minutes}:${seconds}`;
}

setTimeout(sayHello, 3000);

//매초마다 새로운 Date 객체를 생성하므로 콘솔에는 시간이 한 줄에 하나씩 찍힘 (화면으로 옮기면 해결됨)
//새로고침 후 1초 뒤에 시간이 뜨는 현상 수정 필요
//	=> 웹사이트가 load 되자마자 getClock() 실행하고 매초마다 다시 실행하도록 
setInterval(getClock, 1000);

