"use strict";
const navigation = document.querySelector(".nav-container");
const petSlider = document.querySelector(".slider-container");
const pageNumber = document.querySelector("#page");
const leftPetBtn = document.querySelector("#to-left");
const rightPetBtn = document.querySelector("#to-right");
const begginPetBtn = document.querySelector("#to-beggin-btn");
const endPetBtn = document.querySelector("#to-end-btn");

const petsContent = petsArr.slice(0, 8);

let visibleCards = document.getElementsByClassName("card-container");
let visiblePar = document.getElementsByClassName("card-name");

function createRandomArr(arr) {
  let ourPetsMatrix = [];

  while (ourPetsMatrix.length < 6) {
    let previousArr = [];

    while (previousArr.length < 8) {
      let el = arr[Math.floor(Math.random() * (7 - 0 + 1) + 0)];

      if (!previousArr.includes(el)) previousArr.push(el);
    }

    ourPetsMatrix.push(previousArr);
  }
  return ourPetsMatrix;
}

function createCardContainer(img, name) {
  const cardContainer = document.createElement("div");
  cardContainer.className = "card-container";
  cardContainer.innerHTML = `<img class="pets-img" src="${img}" alt="cat">
  <p class="card-name">${name}</p>`;

  function createButton() {
    const cardButton = document.createElement("button");
    cardButton.className = "card-button";
    cardButton.innerHTML = "Learn more";
    return cardButton;
  }

  cardContainer.append(createButton());

  return cardContainer;
}

function deletePreviousPage(arr) {
  Array.from(arr).forEach((card) => card.remove());
}

function makeVisible(arr) {
  arr.forEach((pet) =>
    petSlider.append(createCardContainer(pet.img, pet.name))
  );
  console.log(arr);
}

function getVisiblePets(arr, petsArr) {
  let tmp = Array.from(arr).map((el) => el.textContent);
  let visiblePets = [];
  tmp.forEach((name) => {
    petsArr.forEach((pet) => {
      if (pet.name == name) visiblePets.push(pet);
    });
  });
  return visiblePets;
}

let page = 1;

let visiblePets = getVisiblePets(visiblePar, petsArr);

let newPetMatrix = [];
newPetMatrix.push(visiblePets);
createRandomArr(petsContent).forEach((arr) => newPetMatrix.push(arr));
console.log(newPetMatrix);

function swichToPage(event) {
  if (!event.target.classList.contains("pets-button")) return;

  if (event.target.classList.contains("to-right-btn")) {
    leftPetBtn.disabled = false;
    begginPetBtn.disabled = false;

    deletePreviousPage(visibleCards);
    page += 1;
    makeVisible(newPetMatrix[page - 1]);
    pageNumber.textContent = page;
    // console.log(page);

    if (page == 6) {
      rightPetBtn.disabled = true;
      endPetBtn.disabled = true;
    }
  } else if (event.target.classList.contains("to-left-btn")) {
    rightPetBtn.disabled = false;
    endPetBtn.disabled = false;

    deletePreviousPage(visibleCards);
    page -= 1;
    makeVisible(newPetMatrix[page - 1]);
    pageNumber.textContent = page;

    if (page == 1) {
      leftPetBtn.disabled = true;
      begginPetBtn.disabled = true;
    }
  } else if (event.target.classList.contains("to-end-btn")) {
    deletePreviousPage(visibleCards);
    page = 6;
    makeVisible(newPetMatrix[page - 1]);
    pageNumber.textContent = page;
    rightPetBtn.disabled = true;
    endPetBtn.disabled = true;
    leftPetBtn.disabled = false;
    begginPetBtn.disabled = false;
  } else if (event.target.classList.contains("to-beggin-btn")) {
    deletePreviousPage(visibleCards);
    page = 1;
    makeVisible(newPetMatrix[page - 1]);
    pageNumber.textContent = page;
    leftPetBtn.disabled = true;
    begginPetBtn.disabled = true;
    rightPetBtn.disabled = false;
    endPetBtn.disabled = false;
  }
};

navigation.addEventListener("click", swichToPage);