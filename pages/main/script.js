"use strict";

// Burger menu

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

  if (!popup.hasChildNodes()) {
    renderPopup();
  } else {
    removeMenu();
  }
}

burger.addEventListener("click", openBurger);
popupBurger.addEventListener("click", openBurger);
shadow.addEventListener("click", openBurger);
menu.addEventListener("click", handleMenuClick);

// carousel есть ошибка с nth child

const slider = document.querySelector(".slider-line");
const sliderItems = Array.from(slider.children);
const leftBtn = document.querySelector(".left-button");
const rightBtn = document.querySelector(".right-button");


function countSlides(width, num) { // как это красиво написать
   if (width >= 1280){
    num = 3;
   } else if (width >= 768 && width < 1280) {
    num = 2;
   } else if(width < 768) {
    num = 1;
   };

   sliderItems.map((slide, index) => index < num? slide.classList.add("visible"): slide.classList.remove("visible"));// не адаптивный

   return num;
};

let numOfSlides = countSlides(window.screen.width);
console.log(numOfSlides);

function chooseRandomSlides(arr, previousArr, start, end) {
  let randomSlide;
  let visebleSlides = [];

  for (let i = 0; visebleSlides.length < numOfSlides; i++) {
    randomSlide = arr[Math.floor(Math.random() * (end - start) + start)];
    if (!visebleSlides.includes(randomSlide)) {
      if (previousArr == null || !previousArr.includes(randomSlide)) {
        visebleSlides.push(randomSlide);
      }
    }
  }
console.log(visebleSlides);
  return visebleSlides;
}

function makeVisible(arr) {
  sliderItems.forEach((slide) => {
    arr.includes(slide)
      ? slide.classList.add("visible")
      : slide.classList.remove("visible");
})
  ;
}

let rightBtnPressed, leftBtnPressed;
let visibleSlides, previousSlides, nextSliders;

function movingSlider(event) {

  leftBtn.disabled = false;

  visibleSlides = sliderItems.filter(
    (slide) => slide.classList.contains("visible")
  );

  rightBtnPressed = rightBtnPressed || false;
  leftBtnPressed = leftBtnPressed || false;

  if (event.target.classList.contains("left-button")) {
    if (rightBtnPressed == true) {
      makeVisible(previousSlides);
      previousSlides = visibleSlides.slice(0); // тут надо бы переписаь
      visibleSlides = nextSliders.slice(0);
      leftBtnPressed = true;
      rightBtnPressed = false;

      return;
    }

    leftBtnPressed = true;
    rightBtnPressed = false;
  } else if (event.target.classList.contains("right-button")) {
    if (leftBtnPressed == true) {
      makeVisible(previousSlides);
      previousSlides = visibleSlides.slice(0);
      visibleSlides = nextSliders.slice(0);
      rightBtnPressed = true;
      leftBtnPressed = false;
      visibleSlides = previousSlides.slice(0);

      return;
    }

    rightBtnPressed = true;
    leftBtnPressed = false;
  }

  nextSliders = chooseRandomSlides(
    sliderItems,
    visibleSlides,
    0,
    sliderItems.length - 1
  );
  makeVisible(nextSliders);
  console.log(nextSliders);
  previousSlides = visibleSlides.slice(0);
  visibleSlides = nextSliders.slice(0);
}

rightBtn.addEventListener("click", movingSlider);
leftBtn.addEventListener("click", movingSlider);

//  убрать из сss nth child
