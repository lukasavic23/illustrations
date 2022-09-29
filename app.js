const navbar = document.querySelector(".navbar");
const navbarList = document.querySelector(".navbar-list");
const button = document.querySelector(".content-text-button");
const title = document.querySelector(".content-text-title");

const menu = document.querySelector(".hamburger-menu");

menu.addEventListener("click", () => {
  navbar.classList.toggle("active-nav");
});

const box1 = document.querySelector(".illustration-one");
const box2 = document.querySelector(".illustration-two");
const box3 = document.querySelector(".illustration-three");

box1.addEventListener("click", () => {
  box2.classList.remove("active-box");
  box3.classList.remove("active-box");
  navbar.classList.remove("active-purple", "active-blue");
  navbarList.classList.remove("active-purple", "active-blue");
  button.classList.remove("active-purple", "active-blue");
  title.classList.remove("active-purple-title", "active-blue-title");

  box1.style.setProperty("flex", "3");
});

box2.addEventListener("click", () => {
  box1.style.setProperty("flex", "1");
  box3.classList.remove("active-box");
  navbar.classList.remove("active-blue");
  navbarList.classList.remove("active-blue");
  button.classList.remove("active-blue");
  title.classList.remove("active-blue-title");

  box2.classList.add("active-box");
  navbar.classList.add("active-purple");
  navbarList.classList.add("active-purple");
  button.classList.add("active-purple");
  title.classList.add("active-purple-title");
});

box3.addEventListener("click", () => {
  box1.style.setProperty("flex", "1");
  box2.classList.remove("active-box");
  navbar.classList.remove("active-purple");
  navbarList.classList.remove("active-purple");
  button.classList.remove("active-purple");
  title.classList.remove("active-purple-title");

  box3.classList.add("active-box");
  navbar.classList.add("active-blue");
  navbarList.classList.add("active-blue");
  button.classList.add("active-blue");
  title.classList.add("active-blue-title");
});
