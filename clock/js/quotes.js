const quotes = [
	{
		quote: "The only thing we have to fear is fear itself.",
		author: "Franklin D. Roosevelt",
	},
	{
		quote: "Power corrupts; absolute power corrupts absolutely.",
		author: "John Dalberg-Acton",
	},
	{
		quote: "Speak softly and carry a big stick",
		author: "Theodore Roosevelt",
	},
	{
		quote: "Three can keep a secret, if two of them are dead.",
		author: "Benjamin Franklin",
	},
	{
		quote: "If you are going through hell, keep going.",
		author: "Winston Churchill",
	},
	{
		quote: "If you want something done right, do it yourself.",
		author: "Charles-Guillaume Étienne",
	},
	{
		quote: "I'm gonna make him an offer he can't refuse.",
		author: "Vito Corleone (character)",
	},
	{
		quote: "No one can make you feel inferior without your consent.",
		author: "Eleanor Roosevelt",
	},
	{
		quote: "Keep your friends close, but your enemies closer.",
		author: "Michael Corleone (character)",
	},
	{
		quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
		author: "Albert Einstein",
	},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// quotes 배열의 첫번째 값 찍기
// console.log(quotes[0]);

// quotes 배열에서 랜덤 인덱스로 가져오기
// Math.random(): 0에서 1 사이의 랜덤한 숫자
//	+ 10이 하드코딩 되어 있음
// console.log(quotes[Math.floor(Math.random() * 10)]);

// 10을 변경가능한 '변수'로 잡아준다.
console.log(quotes[Math.floor(Math.random() * quotes.length)])

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

