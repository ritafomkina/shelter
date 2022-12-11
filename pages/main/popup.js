const cardContainer = document.querySelector(".card-container");
const petPupup = document.querySelector(".pet-popup");
const pupupShadow = document.querySelector(".popup-shadow");
let closeIcon;

function renderPetPopup(pet) {
  const petImg = document.createElement("img");
  petImg.classList.add("pet-img");
  petPupup.prepend(petImg);

  closeIcon = document.createElement("span");
  closeIcon.classList.add("close-icon");
  petImg.before(closeIcon);

  const petContent = document.createElement("div");
  petContent.classList.add("pet-content");
  petPupup.append(petContent);

  const petHeader = document.createElement("div");
  petHeader.classList.add("pet-header");
  petContent.prepend(petHeader);

  const petName = document.createElement("h3");
  petName.classList.add("pet-name");
  petHeader.prepend(petName);

  const petType = document.createElement("h4");
  petType.classList.add("pet-type");
  petHeader.append(petType);

  const addInfo = document.createElement("ul");
  addInfo.classList.add("pet-addInfo");
  petContent.append(addInfo);

  const petDesc = document.createElement("p");
  petDesc.classList.add("pet-desc");
  addInfo.before(petDesc);

  const infoItems = [];

  for(let i = 0; i < 4; i++) {
    infoItems.push(document.createElement("li"));
    infoItems[i].classList.add("info-item");
    addInfo.append(infoItems[i]);
  };

    petImg.src = pet.img;
    petImg.alt = "pet";

     petName.innerHTML = pet.name;
     petType.innerHTML = pet.type + " - " + pet.breed;
     petDesc.innerHTML = pet.description;

     infoItems[0].innerHTML = "<b>Age:</b>" + "&nbsp;" + pet.age;
     infoItems[2].innerHTML = "<b>Diseases:</b>" + "&nbsp;" + pet.diseases;
     infoItems[1].innerHTML = "<b>Inoculations:</b>" + "&nbsp;" + pet.inoculations;
     infoItems[3].innerHTML = "<b>Parasites:</b>" + "&nbsp;" + pet.parasites;
};


function removePetPopup() {
  while(petPupup.firstElementChild) {
    petPupup.removeChild(petPupup.firstElementChild);
}
};

function openPetPupup(event) {

  pupupShadow.classList.toggle("popup-shadow-active");
  petPupup.classList.toggle("pet-popup-open");
  body.classList.toggle("noscroll");

  console.log(event.currentTarget);

  if (!petPupup.hasChildNodes()) {
    let petCard = event.currentTarget;
    let name = petCard.firstElementChild.nextElementSibling.textContent;
    let pet = petsArr.filter(pet => pet.name === name);
    renderPetPopup(pet[0]);
  } else {
    removePetPopup();
  }

  closeIcon.addEventListener("click", openPetPupup);

};

function getNewCards () {
  Array.from(visibleCards).forEach(card => {
    card.addEventListener("click", openPetPupup, {"capture": true});
  });
}

document.addEventListener("mouseover", getNewCards);
pupupShadow.addEventListener("click", openPetPupup);
