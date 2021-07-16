const clock = document.querySelector("#clock");

// clock.innerText = "Hello Nico";

// function sayHello() {
// 	console.log("hello");
// }

function getClock() {
	const date = new Date();
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");

	clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
// delay 시간마다 반복해서 일어남
setInterval(getClock, 1000);

// delay 시간 뒤 딱 한 번 일어남
// setTimeout(sayHello, 3000);;