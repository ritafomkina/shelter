"use strict";

const slider = document.querySelector(".slider-line");
const sliderItems = Array.from(slider.children);
const leftBtn = document.querySelector(".left-button");
const rightBtn = document.querySelector(".right-button");

function countSlides(width) { // как это красиво написать

  let num;

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
  return visebleSlides;
}

function makeVisible(arr) {
  sliderItems.forEach((slide) => {
    !arr.includes(slide)
    ? slide.classList.remove("visible")
    : slide.classList.add("visible");
  });
}

function changeNumOfSlides(event) {
  numOfSlides = countSlides(event.target.outerWidth);
 };

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

  previousSlides = visibleSlides.slice(0);
  visibleSlides = nextSliders.slice(0);
}

rightBtn.addEventListener("click", movingSlider);
leftBtn.addEventListener("click", movingSlider);
window.addEventListener("resize", changeNumOfSlides);