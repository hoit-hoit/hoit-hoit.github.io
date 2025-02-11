/***
 * 테마모드 클릭하면 라이트 모드와 다크 모드 전환
 * 클래스 추가 삭제 >> 버튼을 클릭했을 때 
 */
const season = ["basic","summer","autumn","winter"];
let rotate =0;
const MODE_KEY = "mode";
const modeElem = document.querySelector(".mode");

const deleteMode =()=>{
  localStorage.removeItem(MODE_KEY);
}
const saveMode = (mode)=>{
  localStorage.setItem(MODE_KEY,mode);
}
const loadMode = ()=>{
  return localStorage.getItem(MODE_KEY);
}
const rotate_bg = () => {
  rotate++;
  if( rotate >= season.length ){
    rotate = 0;
  }
  document.body.className = season[rotate];   
}
const mode_init = ()=>{
  let mode = loadMode();  
document.body.className=mode;
}
mode_init();
setInterval( rotate_bg , 10000);