"use strict"

let burger = document.querySelector("#header-burger");
let popup = document.querySelector("#popup");
let headerLink = document.querySelector("#header-link").cloneNode(1);
let menu = document.querySelector("#menu").cloneNode(1);
let startFogging = document.querySelector("#start");
let body = document.body;
let popupWrapper = '<div class="wrapper popup-wrapper"><div class="popupHeaderWrapper"></div></div>';
let popupBurger = document.querySelector("#header-burger").cloneNode(1);

function openBurger(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    body.classList.toggle("noscroll");
    if(!popup.hasChildNodes()) {
        renderPopup();
    }
    else {
        removeMenu();
    };
};

function renderPopup() {
    popup.innerHTML = popupWrapper;
    popup.firstElementChild.firstElementChild.appendChild(headerLink);
    popup.firstElementChild.firstElementChild.appendChild(popupBurger);
    popup.firstElementChild.appendChild(menu);
    popup.querySelector(".header-logo").classList.add("header-logo-open");
    popup.querySelector(".header-burger").classList.add("header-burger-open");
};

function removeMenu() {
    let child = popup.firstElementChild;
    popup.removeChild(child);
};

function handleMenuClick(e) {
    if (e.target instanceof HTMLAnchorElement) {
        setTimeout(openBurger, 0, e);
    }
  }


burger.addEventListener("click", openBurger);
popupBurger.addEventListener("click", openBurger);
menu.addEventListener('click', handleMenuClick);