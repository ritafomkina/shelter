"use strict";

const slider = document.querySelector(".slider-container");
const leftBtn = document.querySelector(".left-button");
const rightBtn = document.querySelector(".right-button");

function createCardContainer(img, name) {
  const cardContainer = document.createElement('div');
  cardContainer.className = "card-container";
  cardContainer.innerHTML = `<img src="${img}" alt="cat">
<p class="card-name">${name}</p>`;

  function createButton() {
    const cardButton = document.createElement('button');
    cardButton.className = "card-button";
    cardButton.innerHTML = "Learn more";
    return cardButton;
  }

  cardContainer.append(createButton());

  return cardContainer;
}

function chooseRandomPets(arr, previousArr, start, end) {
  let randomSlide;
  let visebleSlides = [];

  for (let i = 0; visebleSlides.length < 3; i++) {
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
  arr.forEach(cards => {
    slider.prepend(cards)
  });
}

let rightBtnPressed, leftBtnPressed;
let visibleCards, previousCards, nextCards;
let visiblePets, previousPets, nextPets;

function movingSlider(event) {

  leftBtn.disabled = false;

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

  nextPets = chooseRandomPets(
    petsArr,
    previousPets,
    0,
    13
  );

  nextCards = nextPets.map(pet => createCardContainer(pet.img, pet.name));

  makeVisible(nextCards);

  visiblePets = nextPets.slice(0);
  previousPets = visiblePets.slice(0);
}

rightBtn.addEventListener("click", movingSlider);
leftBtn.addEventListener("click", movingSlider);
// window.addEventListener("resize", changeNumOfSlides);