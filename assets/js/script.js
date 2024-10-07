'use strict';

const navbar = document.querySelector("[data-navbar]")
const navtoggler = document.querySelector("[data-nav-toggler]");

navtoggler.addEventListener("click", function(){
    navbar.classList.toggle("active");
});

const header=document.querySelector("[data-header]");
window.addEventListener("scroll",function(){
    header.classList[this.scrollY  >50 ? "add":"remove"]("active");
});