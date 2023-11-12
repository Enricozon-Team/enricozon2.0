function makeChoice(playerChoice) {
    const choices = ['sasso', 'carta', 'forbice'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const result = determineWinner(playerChoice, computerChoice);

    displayResult(result, playerChoice, computerChoice);
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'È un pareggio!';
    } else if (
        (playerChoice === 'sasso' && computerChoice === 'forbice') ||
        (playerChoice === 'carta' && computerChoice === 'sasso') ||
        (playerChoice === 'forbice' && computerChoice === 'carta')
    ) {
        return 'Hai vinto!';
    } else {
        return 'Hai perso!';
    }
}

function displayResult(result, playerChoice, computerChoice) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<p>${result}</p><p>Hai scelto ${playerChoice}. Il Computer ha scelto ${computerChoice}.</p>`;
}
