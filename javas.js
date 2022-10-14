
/* cursor blink */
function blink(){
  document.querySelector("h1").classList.toggle("active");
}
  setInterval(blink,500);
/* modal*/
const openYuzu= document.getElementById("yuzu");
const modal= document.querySelector(".modal");
const closeButton=modal.querySelector("button")
var clickNum=1;
function popUp(){
  modal.classList.remove("hidden");
}
function close(){
  modal.classList.add("hidden");
}
openYuzu.addEventListener("click", popUp);
closeButton.addEventListener("click", close);

/* photo slide*/
var slides= document.querySelector('.slides'),
slide= document.querySelectorAll('.slides li'),
currentIndex= 0,
slideCount=slide.length,
slideWidth= 220,
slideMargin= 10,
prevBtn= document.querySelector('.prev'),
nextBtn= document.querySelector('.next');

slides.style.width= (slideWidth+slideMargin)*slideCount- slideMargin + 'px';
function moveSlide(number){
  slides.style.left= (-230)*number+ 'px';
  currentIndex = number;
}
nextBtn.addEventListener('click', function(){
    if(currentIndex < slideCount-3){
  moveSlide(currentIndex+1)
}
  else{
    moveSlide(0);
  }
}
)
prevBtn.addEventListener('click', function(){
  if(currentIndex > 0){
  moveSlide(currentIndex-1)
}
})
