const weatherElem = document.querySelector(".weather>span:nth-child(1)");
// console.log(weatherElem);

let todaydate = new Date();   
let year = todaydate.getFullYear(); // 년도
let month = todaydate.getMonth() + 1;  // 월
let date = todaydate.getDate();  // 날짜
console.log(date);
weatherElem.textContent = `${year}-${month}-${date}`;  