const hamburger = document.getElementById("hamburger");
const navlist = document.getElementById("navlist");


hamburger.addEventListener("click", ()=>{
    
    hamburger.classList.toggle("hamburger-active")
    navlist.classList.toggle("navlist-active")


})