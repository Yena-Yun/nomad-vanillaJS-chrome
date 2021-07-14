const images = ["chicken.jpg", "flying_cat.jpg", "totoro.jpg"];

// 랜덤으로 선택된 이미지
const chosenImage = images[Math.floor(Math.random() * images.length)];

console.log(chosenImage);

// 이미지를 추가하는 건 html이 할 수 없고 오직 js만 할 수 있음
// createElement("생성할 태그") : html에 원하는 태그를 생성해주는 함수
const bgImage = document.createElement("img");
console.log(bgImage); // <img>

// 기존 html의 <img> 태그에 있던 속성들을 js에서 지정하는 것이 가능해짐
bgImage.src = `/img/${chosenImage}`;
console.log(bgImage.src);

// appendChild(): body에 createElement로 만들어진 html 태그 추가
document.body.appendChild(bgImage);