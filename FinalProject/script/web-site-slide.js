const container = document.querySelector(".imgP-main");
const imageBtnleft = document.querySelector(".image-btn-left>p");
const imageBtnright = document.querySelector(".image-btn-right>p");
// console.log(imageBtnright);

imageBtnleft.addEventListener('click',()=>{
    const slides = document.querySelectorAll('.img-card');
    console.log(slides);    
    container.append(slides[0]);  
  })
imageBtnright.addEventListener('click',()=>{
    const slides = document.querySelectorAll('.img-card');    
    container.prepend(slides[slides.length-1]);
  })