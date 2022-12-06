function Pet (name, img, type, breed) {
    this.name = name;
    this.img = img;
    this.type = type;
    this.breed = breed;
}

let arrOfNames = ['Katrine', 'Jennifer', 'Woody', 'Sophia', 'Timmy', 'Scarlet', 'Freddie', 'Sandy', 'Laura', 'Loki', 'Gloria', 'Ann', 'Baby', 'Jarry', 'Tom'];
let petsArr = [];

for(let i = 1; i <= 13; i++ ) {
    petsArr.push(
        new Pet(arrOfNames[i], `../../assets/pets/pets_${i}.png`, 'dog', 'simple')
    )
};