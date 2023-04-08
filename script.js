const button = document.querySelector("#scrollTop");
const navmenu = document.querySelector("header .container nav");
const navBtn = document.querySelector("#nav-btn");
const navLis = document.querySelectorAll("header nav li a");

function scrollToTop() {
  window.scrollTo({
    top: 0,
  });
}
button.addEventListener("click", scrollToTop);

function checkScroll() {
  if (window.scrollY > 500) {
    button.style.cssText = "transform: translateX(0);";
  } else {
    button.style.cssText = "transform: translateX(100px);";
  }
}
window.addEventListener("scroll", checkScroll);

navBtn.addEventListener("click", () => {
  navmenu.classList.toggle("active");
  navBtn.classList.toggle("fa-xmark");
  navBtn.classList.toggle("fa-bars");
});

navLis.forEach((el) => {
  el.addEventListener("click", () => {
    navmenu.classList.toggle("active");
    navBtn.classList.toggle("fa-xmark");
    navBtn.classList.toggle("fa-bars");
  });
});
