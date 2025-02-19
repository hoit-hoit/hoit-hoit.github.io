const PsliderWrap = document.querySelector("#WEB-PUBLISHING");
const PsliderImg = document.querySelector(".publishing-slide"); //보여지는 영역
const PsliderInner = document.querySelector(" .publishing-m"); //움직이는 영역
const Pslider = document.querySelectorAll(".publishing-background"); //각각 이미지
const PsliderBtn = PsliderWrap.querySelector(".slide-btn"); //버튼
const PsliderBtnPrev =PsliderWrap.querySelector(".prev>img"); //왼쪽 버튼
const PsliderBtnNext =PsliderWrap.querySelector(".next>img"); //오른쪽 버튼
const PmainBtn =PsliderWrap.querySelector(".main-btn");
const PfirstBtn = PsliderWrap.querySelector(".main-btn>button:nth-of-type(1)");
const PsecondBtn = PsliderWrap.querySelector(".main-btn>button:nth-of-type(2)");
const PthirdBtn = PsliderWrap.querySelector(".main-btn>button:nth-of-type(3)");
const PfourthBtn = PsliderWrap.querySelector(".main-btn>button:nth-of-type(4)");


let currentIdx = 0; //현재 이미지
let PsliderCount = Pslider.length; //이미지 갯수
let PsliderWidth = PsliderImg.offsetWidth; //이미지 가로값
console.log(PsliderBtnNext);

//2. 각 버튼이 눌린값을 토대로 transform을 이용해 이동
function goSlider(num) {
  PsliderInner.style.transition = "all 700ms";
  PsliderInner.style.transform = "translateX(" + -sliderWidth * num + "px)";
  currentIdx = num;
}

//1. 왼쪽 버튼 클릭
PsliderBtnPrev.addEventListener("click", () => {
  currentIdx--;
  if (currentIdx <= 0) {
    currentIdx = 0;
    PfirstBtn.classList.add('active');
    PsecondBtn.classList.remove('active');
    PthirdBtn.classList.remove('active');
    PfourthBtn.classList.remove('active');
    PsliderBtnPrev.src = "./images/left-stop.png";
    PsliderBtnNext.src = "./images/rig-web.png";
  } else if( currentIdx==1){
    currentIdx = 1;
    PfirstBtn.classList.remove('active');
    PsecondBtn.classList.add('active');
    PthirdBtn.classList.remove('active');    
    PfourthBtn.classList.remove('active');
  }
  else if( currentIdx==2){
    PfirstBtn.classList.remove('active');
    PsecondBtn.classList.remove('active');
    PthirdBtn.classList.add('active');
    PfourthBtn.classList.remove('active');
  } else{
    PfirstBtn.classList.remove('active');
    PsecondBtn.classList.remove('active');
    PthirdBtn.classList.remove('active');
    PfourthBtn.classList.add('active');    
  }
  goSlider( currentIdx);  
});

//1. 오른쪽 버튼 클릭
PsliderBtnNext.addEventListener("click", () => {
  currentIdx++;
  if ( currentIdx >= 3) {
    currentIdx = 3;
    PsliderBtnNext.src = "./images/right-stop.png";
    PfirstBtn.classList .remove('active');
    PsecondBtn.classList.remove('active');
    PthirdBtn.classList.remove('active');  
     PfourthBtn.classList.add('active');   
  } else if( currentIdx==2) {
    PsliderBtnPrev.src = "./images/li-web.png";
    PsliderBtnNext.src = "./images/rig-web.png"; 
    PfirstBtn.classList.remove('active');
    PsecondBtn.classList.remove('active');
    PthirdBtn.classList.add('active');
    PfourthBtn.classList.remove('active');  
  } else if( currentIdx==1) {
   PsliderBtnPrev.src = "./images/li-web.png";
    PsliderBtnNext.src = "./images/rig-web.png"; 
    PfirstBtn.classList.remove('active');
    PsecondBtn.classList.add('active');
    PthirdBtn.classList.remove('active');
    PfourthBtn.classList.remove('active'); 
  }else{ 
    PfirstBtn.classList.add('active');
    PsecondBtn.classList.remove('active');
    PthirdBtn.classList.remove('active');
    PfourthBtn.classList.remove('active'); 
  }
  goSlider( currentIdx);
});




