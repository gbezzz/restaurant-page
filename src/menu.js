import "./menu.css";

const menu = document.createElement("div");
menu.classList.add("container");

const title = document.createElement("div");
title.textContent = "MENU";
title.classList.add("title");
menu.appendChild(title);

export { menu };
