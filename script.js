const hamburger = document.querySelector(".hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", function () {
  nav.classList.toggle("active");
});