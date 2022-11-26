"use strict"

let burger = document.querySelector("#header-burger");
let popup = document.querySelector("#popup");
let headerLogo = document.querySelector("#header-logo").cloneNode(1);
let menu = document.querySelector("#menu").cloneNode(1);
let startFogging = document.querySelector("#start");
let body = document.body;
let popupWrapper = '<div class="wrapper popup-wrapper"><div class="popupHeaderWrapper"></div></div>';
let popupBurger = document.querySelector("#header-burger").cloneNode(1);

function openBurger(e) {
    e.preventDefault();
    // startFogging.classList.toggle("fogging");
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
    popup.firstElementChild.firstElementChild.appendChild(headerLogo);
    popup.firstElementChild.firstElementChild.appendChild(popupBurger);
    popup.firstElementChild.appendChild(menu);
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