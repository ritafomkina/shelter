"use strict"

// Burger menu

let burger = document.querySelector("#header-burger");
let popup = document.querySelector("#popup");
let shadow = document.querySelector("#shadow");
let headerLogo = document.querySelector("#header-logo").cloneNode(1);
let menu = document.querySelector("#menu").cloneNode(1);
let startFogging = document.querySelector("#start");
let body = document.body;
let popupWrapper = '<div class="wrapper popup-wrapper"><div class="popupHeaderWrapper"></div></div>';
let popupBurger = document.querySelector("#header-burger").cloneNode(1);
let startLogoLink = document.querySelector(".header-logo");
let notOnlyLink = document.querySelector(".start-link");


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

function openBurger(event) {

    // event.preventDefault();
    event.stopPropagation();

    popup.classList.toggle("open");
    shadow.classList.toggle("open");
    body.classList.toggle("noscroll");
    startLogoLink.classList.toggle("deactivated");
    notOnlyLink.classList.toggle("deactivated");

    if(!popup.hasChildNodes()) {
        renderPopup();
    } else {
        removeMenu();
    };
};


burger.addEventListener("click", openBurger);
popupBurger.addEventListener("click", openBurger);
shadow.addEventListener('click', openBurger);
menu.addEventListener('click', handleMenuClick);

// carousel

const slider = document.querySelector(".slider-line");
const sliderItems = Array.from(slider.children);
const leftBtn = document.querySelector(".left-button");
const rightBtn = document.querySelector(".right-button");


rightBtn.addEventListener("click", movingSlider);

// leftBtn.addEventListener("click", (e) => {
//     if(typeof previousSlides == "undefined") {
//         movingSlider(e);
//     } else {
//         movingSliderBack(e);
//     };
// });

sliderItems.forEach((slide, index) => slide.dataset.index = index);

function makeSlidersVisible(arr, previousArr, start, end) {
    let randomSlide;
    let visebleSlides = [];
    for(let i = 0; visebleSlides.length < 3; i++) {
        randomSlide = arr[Math.floor(Math.random() * (end - start) + start)];
        if(!visebleSlides.includes(randomSlide)) {
            if(typeof previousArr == "undefined" ||
            !previousArr.includes(randomSlide)) {
                visebleSlides.push(randomSlide);
            };
        };
    };
    return visebleSlides;
};

let previousSlides = "undefined";

function movingSlider(event, visebleSlides) {
    visebleSlides = makeSlidersVisible(sliderItems, previousSlides, 0, sliderItems.length-1);
    previousSlides = visebleSlides.slice(0);
    sliderItems.forEach(slide => {
        visebleSlides.includes(slide)? slide.classList.remove("hidden"): slide.classList.add("hidden");
    });
};

// function movingSliderBack(event, visebleSlides) {
//     debugger;
//     sliderItems.forEach(slide => {
//         previousSlides.includes(slide)? slide.classList.remove("hidden"): slide.classList.add("hidden");
//     });

// }
