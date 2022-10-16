const nav = document.querySelector("nav");
const container = document.querySelector(".container");
const menu = document.querySelector(".menu");

nav.addEventListener("click", () => {
  nav.classList.toggle("active");
  container.classList.toggle("active");
  menu.classList.toggle("active");
});
