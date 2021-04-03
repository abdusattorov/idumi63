let navbar=document.querySelector(".navbar-nav");
let header=document.querySelector(".hamburger-navigation")
function myFunction(x) {
    x.classList.toggle("change");
    navbar.classList.toggle("nav-off");
    navbar.classList.toggle("nav-on");
    header.classList.toggle("ham-nav-style");
  }