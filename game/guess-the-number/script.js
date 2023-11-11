const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');

    if (guessInput.value === '') {
        message.innerText = 'Please enter a number';
        return;
    }

    const playerGuess = parseInt(guessInput.value);

    if (isNaN(playerGuess) || playerGuess < 1 || playerGuess > 100) {
        message.innerText = 'Please enter a valid number between 1 and 100';
        return;
    }

    attempts++;

    if (playerGuess === secretNumber) {
        message.innerText = `Congratulations! You guessed the number in ${attempts} attempts.`;
        resetGame();
    } else if (playerGuess < secretNumber) {
        message.innerText = 'Too low. Try again!';
    } else {
        message.innerText = 'Too high. Try again!';
    }

    guessInput.value = '';
}

function resetGame() {
    attempts = 0;
    secretNumber = Math.floor(Math.random() * 100) + 1;
}

document.addEventListener('DOMContentLoaded', () => {
    const message = document.getElementById('message');
    message.innerText = 'Try to guess the number between 1 and 100:';
});
