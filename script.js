/* typing effect */

const text="Professional Web Developer";
let i=0;

function typing(){
if(i<text.length){
document.getElementById("typing").innerHTML+=text.charAt(i);
i++;
setTimeout(typing,50);
}
}
typing();

/* scroll animation */

window.addEventListener("scroll",function(){
let reveals=document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){
let windowHeight=window.innerHeight;
let elementTop=reveals[i].getBoundingClientRect().top;
let visible=100;

if(elementTop<windowHeight-visible){
reveals[i].classList.add("active");
}
}
});

/* mobile menu */

const menuBtn=document.getElementById("menuBtn");
const menu=document.getElementById("menu");

menuBtn.onclick=function(){
menu.classList.toggle("active");
};