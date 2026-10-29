const mobile = document.getElementById('mobile-menu');
const navlinks = document.getElementById('nav-links');

mobile.addEventListener('click', ()=>{
    const isopen = navlinks.classList.toggle('open')
    mobile.setAttribute('id', String(isopen))
        if(mobile.classList.contains('open')){
        mobile.textContent = isopen;
    }
})

const faq = document.querySelectorAll('.question')

faq.forEach(function(button){
    button.addEventListener('click', function(){
        const ans = button.parentElement;
      const open = ans.classList.toggle('expand')
      const answer =  ans.querySelector('#answer')
      button.setAttribute('id', open)
      answer.style.maxHeight = open ? answer.scrollHeight + "px" : "0";
    })
})