const loginForm = document.querySelector("#loginForm");
const inputElem = document.querySelector("input");
const pElem = document.querySelector("p");
const outElem = document.querySelector(".logout");
const LOGIN_KEY = "loginname";

const saveLoginName = (strInput) =>{
  localStorage.setItem(LOGIN_KEY,strInput);
}
const loadLoginName = ()=>{
  return localStorage.getItem(LOGIN_KEY);
  }
//1. 처음에는 p태그가 안보인다.
//1-1. submit이벤트가 실행되면 로그인이 된거다.
//2. 로그인하면 p태그가 보인다.
//3. 로그인하면 foam태그가 안보인다.
const printLoginName = (strName)=>{
  pElem.textContent = `hello.${strName}`;
  pElem.classList.remove("hidden");
  loginForm.classList.add("hidden");
  outElem.classList.remove("hidden");
}
const handlerSubmit = (event)=>{
  event.preventDefault();  //기능초기화
  console.log(inputElem.value); 
  printLoginName(inputElem.value);
  saveLoginName(inputElem.value);
  inputElem.value= null;
}
//로그아웃 버튼 누르면
//0. localStorage에서 삭제 : 삭제 키를 이용하여 remove item이용
//1.화면에서 p태그와 out 버튼이 안보이게
//2.form이 다시 보여짐

const init = () =>{
  //처음 실행되는 함수
  //저장된 데이터 확인
  let loginName = loadLoginName();
  // console.log(loginName);
  if(loginName){
    //화면에 출력
    printLoginName(loginName);
  }else{
    loginForm.addEventListener("submit",handlerSubmit);
  }
  outElem.addEventListener("click",()=>{
    //1.로컬 스토리지 삭제
    localStorage.removeItem(LOGIN_KEY);
    //2. p태그와 out버튼이 안보이게
    pElem.classList.add("hidden");   
    outElem.classList.add("hidden");
   //3.form이 다시 보여지게
    loginForm.classList.remove("hidden");
  })
}
window.onload = init;