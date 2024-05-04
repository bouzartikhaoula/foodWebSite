// <!-- start seting part -->
let setingDiv=document.querySelector(".fa-solid");
let divAddOpen=document.querySelector(".setting-box")
setingDiv.onclick=function () {
    this.classList.toggle("fa-spin")
    divAddOpen.classList.toggle("opened")

}

// <!-- end seting part -->



// <!-- start landing page -->
let landingPage=document.querySelector(".food-imege");

let arrayImage=["01.jpg", "02.jpg","03.jpg"];

setInterval(()=>{
    let randomNumber=Math.floor(Math.random()*arrayImage.length);
    
    landingPage.style.backgroundImage='url("../image/food/'+ arrayImage[randomNumber] +'")';
},3000);

// <!-- end landing page -->

