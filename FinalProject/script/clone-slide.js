const sliderWrap = document.querySelector("#CLONE-WEB-PUBLISHING");
const sliderImg = document.querySelector(".clone-slide"); //보여지는 영역
const sliderInner = document.querySelector(".p-main"); //움직이는 영역
const slider = document.querySelectorAll(".clone-background"); //각각 이미지
const sliderBtn = document.querySelector(".slide-btn"); //버튼
const sliderBtnPrev = sliderBtn.querySelector(".prev>img"); //왼쪽 버튼
const sliderBtnNext = sliderBtn.querySelector(".next>img"); //오른쪽 버튼
const mainBtn = document.querySelector(".main-btn");
const firstBtn = document.querySelector(".main-btn>button:nth-of-type(1)");
const secondBtn = document.querySelector(".main-btn>button:nth-of-type(2)");
const thirdBtn = document.querySelector(".main-btn>button:nth-of-type(3)");
const fourthBtn = document.querySelector(".main-btn>button:nth-of-type(4)");


let currentIndex = 0; //현재 이미지
let sliderCount = slider.length; //이미지 갯수
let sliderWidth = sliderImg.offsetWidth; //이미지 가로값


//2. 각 버튼이 눌린값을 토대로 transform을 이용해 이동
function gotoSlider(num) {
  sliderInner.style.transition = "all 700ms";
  // sliderInner.style.transform = "translateX(" + -sliderWidth * num + "px)";
  sliderInner.style.transform =  `translateX(${-sliderWidth * num}px)`;
  currentIndex = num;
}

//1. 왼쪽 버튼 클릭
sliderBtnPrev.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex <= 0) {
    currentIndex = 0;
    firstBtn.classList.add('active');
    secondBtn.classList.remove('active');
    thirdBtn.classList.remove('active');
    fourthBtn.classList.remove('active');
    sliderBtnPrev.src = "./images/left-stop.png";
    sliderBtnNext.src = "./images/right.png";
  } else if(currentIndex==1){
    currentIndex = 1;
    firstBtn.classList.remove('active');
    secondBtn.classList.add('active');
    thirdBtn.classList.remove('active');    
    fourthBtn.classList.remove('active');
  }
  else if(currentIndex==2){
    firstBtn.classList.remove('active');
    secondBtn.classList.remove('active');
    thirdBtn.classList.add('active');
    fourthBtn.classList.remove('active');
  } else{
    firstBtn.classList.remove('active');
    secondBtn.classList.remove('active');
    thirdBtn.classList.remove('active');
    fourthBtn.classList.add('active');    
  }
  gotoSlider(currentIndex);  
});

//1. 오른쪽 버튼 클릭
sliderBtnNext.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= 3) {
    currentIndex = 3;
    sliderBtnNext.src = "./images/right-stop.png";
    firstBtn.classList .remove('active');
    secondBtn.classList.remove('active');
    thirdBtn.classList.remove('active');  
    fourthBtn.classList.add('active');   
  } else if(currentIndex==2) {
    sliderBtnPrev.src = "./images/left.png";
    sliderBtnNext.src = "./images/right.png"; 
    firstBtn.classList.remove('active');
    secondBtn.classList.remove('active');
    thirdBtn.classList.add('active');
    fourthBtn.classList.remove('active');  
  } else if(currentIndex==1) {
    sliderBtnPrev.src = "./images/left.png";
    sliderBtnNext.src = "./images/right.png"; 
    firstBtn.classList.remove('active');
    secondBtn.classList.add('active');
    thirdBtn.classList.remove('active');
    fourthBtn.classList.remove('active'); 
  }else{ 
    firstBtn.classList.add('active');
    secondBtn.classList.remove('active');
    thirdBtn.classList.remove('active');
    fourthBtn.classList.remove('active'); 
  }
  gotoSlider(currentIndex);
});




const init = () => {
  sliderBtnPrev.src = "./images/left-stop.png";
  PsliderBtnPrev.src = "./images/left-stop.png";  
  firstBtn.classList.add("active");
  PfirstBtn.classList.add("active");
};
window.onload = init;
