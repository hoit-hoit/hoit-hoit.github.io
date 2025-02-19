const doc = document.documentElement; // 
const start = 700; //700만큼 내려갔을 때 버튼이 나타나도록 하기 위한 변수 선언
const topElem = document.querySelector(".top");
window.addEventListener('scroll', function () { //scroll이라는 이벤트가 발생했을 때  
  if (start < doc.scrollTop) { // 스크롤 탑의 값이 start보다 클 경우->스크롤을 일정 범위이상 내렸을때
    // 위에서 변수선언한 대상에 class를 추가한다. 
    topElem.classList.add('top-visible');
    topElem.classList.remove('top');
    topElem.addEventListener("click",()=>{
      window.scrollTo({
        top:0,
        behavior:'smooth'
      });
      // //top btn을 보여주기      
      });
  } else { // 스크롤 탑의 값이 start보다 크지않은 경우 class를 추가하지 않는다 -> 아무런 스타일이 적용되지 않는다.
    topElem.classList.remove('top-visible');
    topElem.classList.add('top');
  };
});


  
  