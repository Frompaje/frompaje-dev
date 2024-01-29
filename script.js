const menu = document.querySelector(".header-buttonMenu")
const navBar= document.querySelector(".header-navbar")
const headerNav = document.querySelector("header")

menu.addEventListener("click",()=>{
    navBar.classList.toggle("active")
    menu.classList.toggle("rotate")
    menu.classList.toggle("active")
    
})


window.addEventListener("scroll", function () {
    headerNav.classList.toggle("fixed", 
    window.scrollY > 72)

})