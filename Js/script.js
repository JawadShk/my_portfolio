// !Typing animation
var typed = new Typed(".typing",{
    strings:["","Full Stack Web Developer!", "Programmer"],
    typeSpeed:100,
    BackSpeed:40,
    loop:true
})

// !Navbar on scroll
$(document).ready(function() {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
           $('#navbar').addClass('stick');
        } else {
           $('#navbar').removeClass('stick');
        }
    });
  });

// ! Back to top
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
    
AOS.init();