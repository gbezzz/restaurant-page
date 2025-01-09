import "./home.css";

const home = document.createElement("div");
home.classList.add("container");

const title = document.createElement("div");
title.textContent = "HOME";
title.classList.add("title");
home.appendChild(title);

export { home };
