const quotes = [
  {
    quote : "The best way to predict the future is to create it!",
    author : "Peter Ferdinand Drucker"
  },
  {
    quote : "You are never too old to set another goal or to dream a new dream.",
    author : "Clive Staples Lewis"
  },
  {
    quote : "In the end, it's not the years in your life that count. It's the life in your years.",
    author : "Abraham Lincoln"
  },
  {
    quote : "To love someone, you have to love yourself first.",
    author : "Beauty and the Beast"
  },
  {
    quote : "Venture outside your comfort zone. The rewards are worth it.",
    author : "Rapunzel"
  }
];
//랜덤 : Math.random();0~1상이의 값으로 출력
const num = Math.floor(Math.random()*quotes.length);
// console.log(num);
const today = quotes[num];
// console.log(today.quote); textContent 아니면 input은 value // 
const spanElem1 = document.querySelector(".quote > span:nth-child(1)");
spanElem1.textContent = today.quote;
const spanElem2 = document.querySelector(".quote > span:nth-child(2)");
spanElem2.textContent = today.author;

