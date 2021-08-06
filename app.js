
window.addEventListener('scroll', ()=>{
    let navbar = document.querySelector('.navbar');
    let winPos = window.scrollY
    navbar.classList.toggle('navbar-scrolled', winPos > 20)
})