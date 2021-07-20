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
		quote: "Three can keep a secret, if two of them are dead.",
		author: "Benjamin Franklin",
	},
	{
		quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
		author: "Albert Einstein",
	},
	{
		quote: "I'm gonna make him an offer he can't refuse.",
		author: "Vito Corleone (character)",
	},
	{
		quote: "Keep your friends close, but your enemies closer.",
		author: "Michael Corleone (character)",
	},
	{
		quote: "No one can make you feel inferior without your consent.",
		author: "Eleanor Roosevelt",
	},
	{
		quote: "If you are going through hell, keep going.",
		author: "Winston Churchill",
	},
	{
		quote: "Speak softly and carry a big stick",
		author: "Theodore Roosevelt",
	},
	{
		quote: "If you want something done right, do it yourself.",
		author: "Charles-Guillaume Étienne",
	},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//10으로 고정해놓으면 확장성이 떨어짐 => quotes 배열의 길이로 바꿔줌
//console.log(quotes[Math.floor(Math.random() * quotes.length)]);
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

//각 DOM에 처리한 배열의 정보를 넣어준다 => 렌더링
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


