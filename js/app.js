document.addEventListener("DOMContentLoaded", function(){
//pierwsza czesc znikajaca dekoracja

var divImage=[...document.querySelectorAll(".image-box")];

divImage.forEach(function(element){
  element.addEventListener("mouseover", function(event){
    this.firstElementChild.style.display="none";
  });

  })

 divImage.forEach(function(element){
   element.addEventListener("mouseout", function(event){
     this.firstElementChild.style.display="inherit";   });
 })


//druga czesc ze sliderem
var next = document.querySelector("#next");
var prev = document.querySelector("#prev");
var slider=document.querySelector(".slider");
var slides=document.querySelectorAll(".slide");
console.log(slider);
var indeks=0;

slides[indeks].classList.add("visible");

  next.addEventListener("click", function(event){
    slides[indeks].classList.remove("visible");
    if(indeks<slides.length-1){
      indeks++;
      } else {
        indeks=0;
    }
    slides[indeks].classList.add("visible");
  });
  prev.addEventListener("click", function(event){
    slides[indeks].classList.remove("visible");
    if(indeks>0){
      indeks--;
      } else {
        indeks=slides.length-1;
    }
    slides[indeks].classList.add("visible");
  });






});
