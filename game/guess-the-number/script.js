const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');

    if (guessInput.value === '') {
        message.innerText = 'Perfavore metti un numero';
        return;
    }

    const playerGuess = parseInt(guessInput.value);

    if (isNaN(playerGuess) || playerGuess < 1 || playerGuess > 100) {
        message.innerText = 'Perfavore metti un numero valido tra 1 e 100';
        return;
    }

    attempts++;

    if (playerGuess === secretNumber) {
        message.innerText = `Congratulazioni hai indovinato il numero in ${attempts} tentativi.`;
        resetGame();
    } else if (playerGuess < secretNumber) {
        message.innerText = 'Troppo basso. Riprova';
    } else {
        message.innerText = 'Troppo alto. Riprova!';
    }

    guessInput.value = '';
}

function resetGame() {
    attempts = 0;
    secretNumber = Math.floor(Math.random() * 100) + 1;
}

document.addEventListener('DOMContentLoaded', () => {
    const message = document.getElementById('message');
    message.innerText = 'Prova ad indovinare un numero tra 1 e 100:';
});
