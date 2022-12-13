const petsArr = [
    {
      "name": "Jennifer",
      "img": "../../assets/pets/pets_1.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/pets/pets_3.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/pets/pets_2.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/pets/pets_6.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/pets/pets_0.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/pets/pets_4.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/pets/pets_7.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/pets/pets_5.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "3 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    },
    {
        "name": "Laura",
        "img": "../../assets/pets/pets_8.png",
        "type": "Dog",
        "breed": "Hairy",
        "description": "This cute hairy girl is four years old and she likes adults and kids. She isn’t fond of many other dogs, so she might do best in a single dog home.",
        "age": "4 years",
        "inoculations": ["leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    },
    {
        "name": "Loki",
        "img": "../../assets/pets/pets_9.png",
        "type": "Dog",
        "breed": "Сolly",
        "description": "Border Collies are highly intelligent and highly trainable and are superstars at canine activities such as herding, obedience, and agility.",
        "age": "2 years",
        "inoculations": ["leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    },
    {
        "name": "Gloria",
        "img": "../../assets/pets/pets_10.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "The British Shorthair is a very pleasant cat to have as a companion. She is easy going and placid. The British is a fiercely loyal, loving cat and will attach herself to every one of her family members.",
        "age": "2 years",
        "inoculations": ["leptospirosis"],
        "diseases": ["none"],
        "parasites": ["lice", "fleas"]
    },
    {
        "name": "Ann",
        "img": "../../assets/pets/pets_11.png",
        "type": "Cat",
        "breed": "Exotic Shorthair",
        "description": "Exotic shorthair cats are a medium-sized breed with beautiful round heads, eyes, and bodies. Most will tip the scales between 10–12 pounds. Exotic shorthairs are a quiet and curious breed that are a bit more active than their long-haired cousins.",
        "age": "1 year",
        "inoculations": ["leptospirosis"],
        "diseases": ["none"],
        "parasites": ["lice", "fleas"]
    },
    {
        "name": "Dina",
        "img": "../../assets/pets/pets_12.png",
        "type": "Dog",
        "breed": "Yorkshire Terrier",
        "description": "The Yorkshire terrier is energetic, feisty and domineering, but also affectionate. It is considered a good apartment dog, but it can be stubborn with house training.",
        "age": "3 years",
        "inoculations": ["leptospirosis"],
        "diseases": ["none"],
        "parasites": ["lice", "fleas"]
    },
    {
        "name": "Jarry",
        "img": "../../assets/pets/pets_13.png",
        "type": "Dog",
        "breed": "Pembroke Welsh Corgi",
        "description": "Built long and low, Pembrokes are surprisingly quick and agile. They can be red, sable, fawn, and black and tan, with or without white markings.",
        "age": "1 year",
        "inoculations": ["leptospirosis"],
        "diseases": ["none"],
        "parasites": ["lice", "fleas"]
    }
  ];
