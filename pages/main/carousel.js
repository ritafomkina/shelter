"use strict";

const slider = document.querySelector(".slider-container");
const leftBtn = document.querySelector(".left-button");
const rightBtn = document.querySelector(".right-button");

function createCardContainer(img, name) {
  const cardContainer = document.createElement('div');
  cardContainer.className = "card-container";
  cardContainer.innerHTML = `<img class="pets-img" src="${img}" alt="cat">
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
  let randomPets;
  let viseblePets = [];

  for (let i = 0; viseblePets.length < 3; i++) {
    randomPets = arr[Math.floor(Math.random() * (end - start) + start)];
    if (!viseblePets.includes(randomPets) && !previousArr.includes(randomPets)) {
        viseblePets.push(randomPets);
      }
    }
  return viseblePets;
}

function makeVisible(arr) {
  arr.forEach(cards => {
    slider.append(cards)
  });
}

function deletePreviousEls(arr) {
  Array.from(arr).forEach(card => card.remove());
}

function getVisiblePets(arr, petsArr) {
  let tmp = Array.from(arr).map(el => el.textContent);
  let visiblePets = [];
  tmp.forEach(name => {
    petsArr.forEach(pet => {
      if(pet.name == name) visiblePets.push(pet);
    });
  });
  return visiblePets;
}

let rightBtnPressed, leftBtnPressed;
let previousCards, nextCards;
let visiblePets, nextPets;
let visiblePar;
let visibleCards;
let previousPets;

visibleCards = document.getElementsByClassName("card-container");
visiblePar = document.getElementsByClassName("card-name");


function movingSlider(event) {

  visiblePets = getVisiblePets(visiblePar, petsArr);

  leftBtn.disabled = false;

  rightBtnPressed = rightBtnPressed || false;
  leftBtnPressed = leftBtnPressed || false;

  if (event.target.classList.contains("left-button")) {
    if (rightBtnPressed == true) {
      previousCards = previousPets.map(pet => createCardContainer(pet.img, pet.name));
      deletePreviousEls(visibleCards);
      makeVisible(previousCards);
      previousPets = visiblePets.slice(0);
      visiblePets = nextPets.slice(0);

      leftBtnPressed = true;
      rightBtnPressed = false;

      return;
    }

    leftBtnPressed = true;
    rightBtnPressed = false;

  } else if (event.target.classList.contains("right-button")) {
    if (leftBtnPressed == true) {
      previousCards = previousPets.map(pet => createCardContainer(pet.img, pet.name));
      deletePreviousEls(visibleCards);
      makeVisible(previousCards);
      previousPets = visiblePets.slice(0);
      visiblePets = nextPets.slice(0);
      rightBtnPressed = true;
      leftBtnPressed = false;

      return;
    }

    rightBtnPressed = true;
    leftBtnPressed = false;
  }

  nextPets = chooseRandomPets(
    petsArr,
    visiblePets,
    0,
    14
  );

  nextCards = nextPets.map(pet => createCardContainer(pet.img, pet.name));

  deletePreviousEls(visibleCards);
  makeVisible(nextCards);
  previousPets = visiblePets.slice(0);
}

rightBtn.addEventListener("click", movingSlider);
leftBtn.addEventListener("click", movingSlider);
