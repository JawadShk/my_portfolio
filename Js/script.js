var typed = new Typed(".typing",{
    strings:["","Full Stack Web Developer!", "Programmer"],
    typeSpeed:100,
    BackSpeed:40,
    loop:true
})

window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    
    document.getElementById("navbar").style.background = "#FF5733";
  } else {
   
    document.getElementById("navbar").style.background = "none";
  }
}