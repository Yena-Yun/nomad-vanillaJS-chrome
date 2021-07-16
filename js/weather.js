const API_KEY = "19b463f645082e5a2b82ed39f510c675";

//성공 시 함수
function onGeoOk(position) {
	console.log(position);
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	console.log("You live in", lat, lon);

	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

	fetch(url).then(response => response.json()).then(data => {
		const weather = document.querySelector("#weather span:first-child");
		const city = document.querySelector("#weather span:last-child");
		weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
		city.innerText = data.name;
	}	
	);
}

//실패 시 함수
function onGeoError() {
	alert("Can't find you. No weather for you.");
}

//geolocation을 통해 현재 위치 받아오기
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);