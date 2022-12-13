"use strict";

let burger = document.querySelector("#header-burger");
let popup = document.querySelector("#popup");
let shadow = document.querySelector("#shadow");
let headerLogo = document.querySelector("#header-logo").cloneNode(1);
let menu = document.querySelector("#menu").cloneNode(1);
let startFogging = document.querySelector("#start");
let body = document.body;
let popupWrapper =
  '<div class="wrapper popup-wrapper"><div class="popupHeaderWrapper"></div></div>';
let popupBurger = document.querySelector("#header-burger").cloneNode(1);
let startLogoLink = document.querySelector(".header-logo");
let notOnlyLink = document.querySelector(".start-link");

function renderPopup() {
  popup.innerHTML = popupWrapper;
  popup.firstElementChild.firstElementChild.appendChild(headerLogo);
  popup.firstElementChild.firstElementChild.appendChild(popupBurger);
  popup.firstElementChild.appendChild(menu);
}

function removeMenu() {
  let child = popup.firstElementChild;
  popup.removeChild(child);
}

function openBurger(event) {
  // event.preventDefault();
  event.stopPropagation();

  shadow.classList.toggle("open");
  body.classList.toggle("noscroll");
  startLogoLink.classList.toggle("deactivated");
  notOnlyLink.classList.toggle("deactivated");
  burger.classList.toggle("header-burger-open");

  if (!popup.hasChildNodes()) {
    renderPopup();
    popup.classList.add("open");
  } else {
    popup.classList.remove("open");
    removeMenu();
  }

  popup.querySelector(".header-burger").classList.add("header-burger-open");
}

burger.addEventListener("click", openBurger);
popupBurger.addEventListener("click", openBurger);
shadow.addEventListener("click", openBurger);