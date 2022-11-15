let menu = document.querySelector("#menu-btn");
let navBar = document.querySelector(".navbar");
let hamburger = document.querySelector(".fa-bars");
let header = document.querySelector(".header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navBar.classList.toggle("nav-toggle");
};

window.onload = () => {
  hamburger.classList.remove("fa-times");
  navBar.classList.remove("nav-toggle");
};

window.onscroll = () => {
  var top = window.scrollY;
  // console.log(top);
  if (top >= 30) {
    header.classList.add("nav-scroll");
  } else {
    header.classList.remove("nav-scroll");
  }
};
