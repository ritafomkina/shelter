"use strict";


let burger = document.querySelector("#header-burger");
let popup = document.querySelector("#popup");
let shadow = document.querySelector("#shadow");
let headerLink = document.querySelector("#header-link").cloneNode(1);
let menu = document.querySelector("#menu").cloneNode(1);
let startFogging = document.querySelector("#start");
let body = document.body;
let popupWrapper =
  '<div class="wrapper popup-wrapper"><div class="popupHeaderWrapper"></div></div>';
let popupBurger = document.querySelector("#header-burger").cloneNode(1);

function renderPopup() {
  popup.innerHTML = popupWrapper;
  popup.firstElementChild.firstElementChild.appendChild(headerLink);
  popup.firstElementChild.firstElementChild.appendChild(popupBurger);
  popup.firstElementChild.appendChild(menu);
}

function removeMenu() {
  let child = popup.firstElementChild;
  popup.removeChild(child);
}

function openBurger(event) {
  event.stopPropagation();

  popup.classList.toggle("open");
  body.classList.toggle("noscroll");
  shadow.classList.toggle("open");
  burger.classList.toggle("header-burger-open");
  if (!popup.hasChildNodes()) {
    renderPopup();
  } else {
    removeMenu();
  }

  popup.querySelector(".header-logo").classList.add("header-logo-open");
  popup.querySelector(".header-burger").classList.add("header-burger-open");
}

burger.addEventListener("click", openBurger);
popupBurger.addEventListener("click", openBurger);
shadow.addEventListener("click", openBurger);
