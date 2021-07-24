const API_KEY = '19b463f645082e5a2b82ed39f510c675';

//성공함수에 position으로 파라미터 자리를 만들어주면
function onGeoOk(position) {
	//geolocation의 (coords의) latitude와 longitude를 받을 수 있음
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	console.log("You live in ", lat, lon);
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	fetch(url).then(response => response.json()).then(data => {
		const city = document.querySelector("#weather span:first-child");
		const temperature = document.querySelector("#weather span:last-child");

		city.innerText = data.name;
		temperature.innerText = data.main.temp;

		console.log(data);
		console.log(data.name);
		console.log(data.main.temp);
	}
	);
}

function onGeoError() {
	alert("Can't find you. No weather for you.");
}

//성공함수와 실패함수를 넣어준다
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);