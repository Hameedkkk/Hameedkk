const body=document.querySelector("body")

const menu=document.querySelector(".menu");
const cross=document.getElementById("cross");
const menu_bar=document.getElementById("bars");

menu_bar.addEventListener("click",()=>{
menu.style.left="0";
});

cross.addEventListener("click",()=>{
menu.style.left="-100%";
});


const err_pop=document.querySelector(".error")
const pro_btn=document.getElementById("pro-btns")
const err_btn=document.getElementById("err-btn")

function errorpopup(){
    err_pop.style.top="50%";
    
}

function closepopup(){
    err_pop.style.top="-100%";
    
}

err_btn.addEventListener('onclick',(e)=>{
    closepopup();
})

pro_btn.addEventListener('onclick',(e)=>{
    errorpopup();
})
