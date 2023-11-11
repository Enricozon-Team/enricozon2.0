const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown'];
let shuffledColors = shuffle([...colors, ...colors]);
let selectedCards = [];
let canSelect = true;

function createCard(color, index) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.color = color;
    card.dataset.index = index;
    card.addEventListener('click', handleCardClick);
    return card;
}

function renderGameBoard() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';

    shuffledColors.forEach((color, index) => {
        const card = createCard(color, index);
        gameBoard.appendChild(card);
    });
}

function handleCardClick() {
    if (!canSelect) return;

    const card = this;
    card.style.backgroundColor = card.dataset.color;
    selectedCards.push(card);

    if (selectedCards.length === 2) {
        canSelect = false;
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    const [card1, card2] = selectedCards;

    if (card1.dataset.color === card2.dataset.color) {
        card1.removeEventListener('click', handleCardClick);
        card2.removeEventListener('click', handleCardClick);
    } else {
        card1.style.backgroundColor = '';
        card2.style.backgroundColor = '';
    }

    selectedCards = [];
    canSelect = true;

    if (document.querySelectorAll('.card:not([style*="background-color"])').length === 0) {
        alert('Congratulazioni, hai vinto!');
        resetGame();
    }
}

function resetGame() {
    shuffledColors = shuffle([...colors, ...colors]);
    selectedCards = [];
    canSelect = true;
    renderGameBoard();
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

document.addEventListener('DOMContentLoaded', () => {
    renderGameBoard();
});
