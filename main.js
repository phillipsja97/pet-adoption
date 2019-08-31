const pets = [
{
    image: 'https://m.media-amazon.com/images/M/MV5BNjdkNjYwM2UtYmEwOS00Mjg3LWE0NjQtYzQ2YTM5OTJlNGEyXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_CR0,45,480,270_AL_UX477_CR0,0,477,268_AL_.jpg',
    name: 'Zeus',
    color: 'Coat Color: White',
    specialSkill: 'Zeus loves to chew socks. He is really good at it. Almost too good at it. But he is cute right?',
    typeOfPet: 'Dogs',
}, 

{
    image: 'https://www.kimballstock.com/pix/DOG/18/DOG-18-NR0097-01P.JPG',
    name: 'Roger', 
    color: 'Coat Color: Black',
    specialSkill: 'Roger loves catching tennis balls. He can do it for hours on end. Can hold multiple tennis balls in his mouth at one time.',
    typeOfPet: 'Dogs',
},

{
    image: 'http://slimkitty.com/wp-content/uploads/2015/08/Do-cats-fart.jpg',
    name: 'David',
    color: 'Coat Color: Tan',
    specialSkill: 'David is chill. He does not do much. But he does have some silent but deadly farts.',
    typeOfPet: 'Cats',

},

{
    image: 'https://previews.123rf.com/images/jelena990/jelena9901601/jelena990160100009/51099683-brown-tabby-cat-sleeping-peacefully-in-human-bed-.jpg',
    name: 'Susy',
    color: 'Coat Color: Brown',
    specialSkill: 'Lets just be real... Susy sleeps all day. Literally, all day. How long does she sleep? All day.',
    typeOfPet: 'Cats',
},

{
    image: 'https://i.ytimg.com/vi/WqD9BS0n5NY/maxresdefault.jpg',
    name: 'Short Arm Steve',
    color: 'Coat Color: Green',
    specialSkill: 'Do not let Steves small arms fool you... he is very good at eating humans. Think twice before this adoption.',
    typeOfPet: 'Dinos',

},

{
    image:'https://previews.123rf.com/images/elenaphotos21/elenaphotos211403/elenaphotos21140300108/26493435-argentinosaurus-dinosaur-eating-at-the-top-of-a-tree-by-sunset.jpg',
    name: 'Peabody',
    color: 'Coat Color: Light Green',
    specialSkill: 'Peabody is not a danger. but He also does not do anything special. He eats nothing but trees.',
    typeOfPet: 'Dinos',
},
];

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint
};

const petsBuilder = (petsArray) => {
    let domString = ''
    for (i = 0; i < petsArray.length; i++) {
        const pets = petsArray[i];
        domString += 
        `<div class="card ${pets.typeOfPet}">
        <h2>${pets.name}</h2> 
        <img src=${pets.image} alt='image of ${pets.name}' />
        <h2>${pets.color}</h2>
        <h4>${pets.specialSkill}</h4>
        <h3>${pets.typeOfPet}</h3>
    </div>`
    };
    printToDom(domString, 'print')
};

const buttonClick = (event) => {
    const typeOfPet = event.target.id
    const selectedPets = []
    for (let i = 0; i < pets.length; i++) {
        const pet = pets[i];
        if (pet.typeOfPet === typeOfPet) {
            selectedPets.push(pet)
        };
    };
    // petsBuilder(selectedPets);

    
    if (typeOfPet === 'All') {
    petsBuilder(pets);
    } else {
    petsBuilder(selectedPets)
    };
};

petsBuilder(pets);



// document.getElementById('all').addEventListener('click', buttonClick);
document.getElementById('Dogs').addEventListener('click', buttonClick);
document.getElementById('Cats').addEventListener('click', buttonClick);
document.getElementById('Dinos').addEventListener('click', buttonClick);
document.getElementById('All').addEventListener('click', buttonClick);
