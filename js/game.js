const grid = document.querySelector('.grid');

const characters = [
    'familia-adams01',
    'maozinha',
    'tio-chico01',
    'wand',
    'wandinha-umbrella',
    'wandinha',
    'wandinha03',
    'wandinha04',
    'enid',
    'tio-chico02',
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const checkCards = () => {

}

const revealCard = ({ target }) => {
    
    if(target.parentNode.classList.add('reveal-card')) {
        return;
    }

    if (firstCard === '') {

        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;

    } else if (secondCard === '') {

        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();

    }
}

const createCard = (characters) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../img2/${characters}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);

    return card;
}

const loadGame = () => {

    const duplicateCharacters = [ ...characters, ...characters ];

    const shuffledArray = duplicateCharacters.sort( () => Math.random() - 0.5 );
    
    shuffledArray.forEach((characters) => {

        const card = createCard(characters);
        grid.appendChild(card);

    });
}

loadGame();