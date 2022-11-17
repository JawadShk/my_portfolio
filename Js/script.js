var typed = new Typed(".typing",{
    strings:["","Full Stack Web Developer!", "Programmer"],
    typeSpeed:100,
    BackSpeed:40,
    loop:true
})

// window.onscroll = function() {scrollFunction()};
 
// function scrollFunction() {
//   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    
//     document.getElementById("navbar").classList
//   } else {
   
//     document.getElementById("navbar").style.background = "none";
//   }
// }

$(document).ready(function() {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
           $('#navbar').addClass('stick');
        } else {
           $('#navbar').removeClass('stick');
        }
    });
  });

const mediaQuery = window.matchMedia('(max-width: 768px)')
    if (mediaQuery.matches) {
        $('navbar').addClass('stick');
    } else {
        $('#navbar').removeClass('stick');
    }

var btn = $('#button');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
    btn.addClass('show');
    } else {
    btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});
    
    