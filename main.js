
// <!-- start landing page -->
let landingPage=document.querySelector(".food-imege")

let arrayImage=["01.jpg", "02.jpg","03.jpg"];

setInterval(()=>{
    let randomNumber=Math.floor(Math.random()*arrayImage.length);
    landingPage.style.backgroundImage='url("../image/food/'+ arrayImage[randomNumber] +'")';
},4000);
// <!-- end landing page -->