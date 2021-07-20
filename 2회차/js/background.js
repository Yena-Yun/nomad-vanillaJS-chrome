//JS에서는 폴더에 있는 이미지 파일 가져올 때 이름을 똑같이 써줘야 함
const images = ["0.jpg", "1.jpg", "2.jpg"];

//랜덤으로 선택된 이미지
const chosenImage = images[Math.floor(Math.random() * images.length)];

console.log(chosenImage);

// ** 이번에는 js에서 뭔가를 만들어서 html에 추가해보기
//	(이미지는 html에서 직접 만들 수 없고 JS에서 추가해야 해서)
const image = document.createElement("img");
image.src = `img/${chosenImage}`;
console.log(image)
// appendChild 할 때 'body'에 추가해주어야 (아니면 node 하나에 해야 된다고 하면서 에러 뜸)
document.body.appendChild(image);