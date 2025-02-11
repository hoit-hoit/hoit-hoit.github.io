
const $sections = document.querySelectorAll("section");
const $town = document.querySelectorAll(".town>img");
const $sun = document.querySelector(".sun");
const $moon=document.querySelector(".moon");
const setBackground = (idx)=>{
  $sections.forEach((obj)=>{
    obj.classList.remove("active");
  });
  $sections[idx].classList.add("active");
}
const setTown = (idx)=>{
  $town.forEach((obj)=>{
    obj.classList.remove("active");
  });
  $town[idx].classList.add("active");
}
const setSun = (idx)=>{  
  const pos = [-90, -45, 45, 90];
  $sun.style.transform = `translateX(-50%) rotate(${pos[idx]}deg)`;  
  //
  // if(idx===0 || idx ===3){
  //   $sun.style.opacity = '0';
  // }else{
  //   $sun.style.opacity = '1';
  // }
  if(Math.abs(pos[idx])===90){
    $sun.style.opacity ='0';
  }else{
    $sun.style.opacity = '1';
  }
}
const setMoon = (idx)=>{
  if(idx){
    $moon.classList.add("active");
  }else{
    $moon.classList.remove("active");
  }
}
const changeBG = (percent)=>{
  if(percent<25){
    setBackground(0);  
    setTown(0); 
    setSun(0);   
    setMoon(0);
  }else if(percent>=25 && percent<50){
    setBackground(1);
    setTown(0); 
    setSun(1);   
    setMoon(0);
  }else if(percent>=50 && percent<75){
    setBackground(2);
    setTown(1);   
    setSun(2);
    setMoon(0);    
  }else if(percent>=75 && percent<100){
    setBackground(3);
    setTown(1);  
    setSun(3);    
    setMoon(1);
  }
}
const init = ()=>{
  //스크롤 처리 
  window.addEventListener("scroll",()=>{
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
    const percent = Math.round((scrollTop/(scrollHeight-clientHeight))*100);    
    changeBG(percent);
});
}
window.onload = init();