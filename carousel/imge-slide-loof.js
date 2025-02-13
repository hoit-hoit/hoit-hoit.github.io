//객체설정
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const imgSlider = document.querySelector('ul');
const circle = document.querySelector(".circle");
const startBtn = document.querySelector(".player>button:nth-child(1)");
const stopBtn = document.querySelector(".player>button:nth-child(2)");

//변수설정
let current = 1;
const SLIDE_COUNT = imgSlider.childElementCount;  //5개
const TOTAL = SLIDE_COUNT+2;
const IMG_WIDTH = document.querySelector('.slide').clientWidth;
let loopID = null;

startBtn.addEventListener("click",()=>{
  if(loopID ===null){
  loopID = setInterval(handlerNextBtn,1000); //setInterval 무한루프라서 id값이 필요하다.  settimeout은 1번만 실행
  prevBtn.disabled = true;
  nextBtn.disabled = true;
}
});
stopBtn.addEventListener("click",()=>{
  clearInterval(loopID);
  loopID=null;
  prevBtn.disabled = false;
  nextBtn.disabled = false;
})

const updateSlidePos = (idx)=>{
  imgSlider.style.transition="0.5s";
  imgSlider.style.transform = `translateX(-${IMG_WIDTH*idx}px)`;
}
const resetSlidePos = (idx)=>{
  setTimeout(()=>{
    imgSlider.style.transition="none";
    imgSlider.style.transform = `translateX(-${IMG_WIDTH*idx}px)`;
  },500);
}
//prev 버튼 클릭 핸들러
prevBtn.addEventListener("click",()=>{
  current--;
  updateSlidePos(current);
  
  // if(current===0){
  //   current=SLIDE_COUNT;
  // }
  if(current<1){
    current=SLIDE_COUNT;
    resetSlidePos(current);
  }
  updateDot();
  // console.log(current);
});
//next 버튼 클릭 핸들러
const handlerNextBtn = ()=>{
  current++;
  updateSlidePos(current);

  // if(current===TOTAL-1){
  //   current=1;
  // }
  if(current>SLIDE_COUNT){
    current=1;
    resetSlidePos(current);
  }
  updateDot();
  // console.log(current);
}
nextBtn.addEventListener("click",handlerNextBtn);
const updateDot = ()=>{
  const elem = document.querySelector(".active");
  if(elem !==null){
    elem.classList.remove('active');
  }
  circle.children[current-1].classList.add("active");
}
const createDot = ()=>{  
  for(let i=0; i<SLIDE_COUNT; i++){
    const elem = document.createElement("span");
    elem.className = "dot"
    circle.appendChild(elem);
  }
}
const cloneSlide = ()=>{
  //자식들에 대한 객체
  const slides = imgSlider.children;
  const first = slides[0].cloneNode(true);
  const last = slides[SLIDE_COUNT-1].cloneNode(true);
//1번 앞에 5번이 오도록 
imgSlider.prepend(last);
//5번 뒤에 1번이 오도록 뒤에 연결 appendchild, child 안붙이고 append만으로 가능
imgSlider.appendChild(first);
}
const setCssValue =()=>{
  //css의 변수값 가져오기
  let result = getComputedStyle(document.documentElement).getPropertyValue("--COUNT");
  // console.log(result);
  document.documentElement.style.setProperty("--COUNT",`${TOTAL}`);
}

const init =()=>{
  //처음 실행되는 함수
  createDot();
  updateDot();
  cloneSlide();
  setCssValue();
  //슬라이드 초기 위치 설정
  imgSlider.style.transform = `translateX(-${IMG_WIDTH}px)`;
}
window.onload = init;