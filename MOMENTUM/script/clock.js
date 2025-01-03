const clockElem = document.querySelector(".clock");
const getClock = ()=>{
//시계설정
const today = new Date(); //현재시간
//시,분,초 가져오기
//class = clock인 객체의 텍스트를 변경
const hours =String(today.getHours()).padStart(2,"0");
const minutes = String(today.getMinutes()).padStart(2,"0");
// const seconds = String(today.getSeconds()).padStart(2,"0");
// const timeStr = `${hours}:${minutes}:${seconds}`;
// clockElem.textContent = timeStr;
clockElem.textContent = `${hours}:${minutes}`;
}
getClock();
setInterval(getClock,1000);
