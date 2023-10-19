$(document).ready(function(){
  $('#dropDown').click(function(){
    $('.drop-down').toggleClass('drop-down--active');
  });
});


var img1=document.getElementById("imagem1");
var a=document.querySelectorAll(".drop-down__menu-box a")[0];
a.addEventListener("click",function(){
img1.style.display="none";
});

var img1=document.getElementById("imagem1");
var a=document.querySelectorAll(".drop-down__menu-box a")[1];
a.addEventListener("click",function(){
img1.style.display="none";
});