const mobile = document.querySelector('#hamburger');
const links = document.querySelector(".links")
mobile.addEventListener('click', function (){
    mobile.classList.toggle('active')
    const open = links.classList.toggle('open')
    mobile.setAttribute('id', String(open)) 
})