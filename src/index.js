import { home } from "./home";
import { menu } from "./menu";
import { about } from "./about";
import "./header.css";

const NavController = function () {
  const pageContent = document.querySelector("#content");
  pageContent.appendChild(home);

  const homeNavBtn = document.querySelector(".home");
  const menuNavBtn = document.querySelector(".menu");
  const aboutNavBtn = document.querySelector(".about");

  //   homepage switch
  homeNavBtn.addEventListener("click", () => {
    pageContent.textContent = "";
    return pageContent.appendChild(home);
  });

  //   menu page switch
  menuNavBtn.addEventListener("click", () => {
    pageContent.textContent = "";
    return pageContent.appendChild(menu);
  });

  //   about page switch
  aboutNavBtn.addEventListener("click", () => {
    pageContent.textContent = "";
    return pageContent.appendChild(about);
  });
};

NavController();
