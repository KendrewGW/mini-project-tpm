const navbar = document.getElementById('navbar');
let prevYpos = 0;

window.onscroll = function(){
    const Ypos = window.scrollY;
    if(Ypos > prevYpos){
        navbar.style.top = navbar.offsetHeight * -1 + 'px';
    }else{
        navbar.style.top = '0px';
    }
    prevYpos = Ypos;
}

const hamburgerButton = document.getElementById('hamburger-btn');
const closeButton = document.getElementById('close-btn');

hamburgerButton.addEventListener('click',toggleNav);
closeButton.addEventListener('click',toggleNav)

function toggleNav(){
    document.getElementsByClassName('nav-menu')[0].classList.toggle('active');
}



$(document).ready(function(){
    $('#form').validate({
        rules: rules,
        messages: messages
    })
})