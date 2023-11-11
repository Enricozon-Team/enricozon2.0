function playGame(playerChoice) {
    const choices = ['sasso', 'carta', 'forbice'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result;

    if (playerChoice === computerChoice) {
        result = "E' un pareggio!";
    } else if (
        (playerChoice === 'Sasso' && computerChoice === 'Forbice') ||
        (playerChoice === 'Carta' && computerChoice === 'Sasso') ||
        (playerChoice === 'Forbice' && computerChoice === 'Carta')
    ) {
        result = 'Hai vinto!';
    } else {
        result = 'Hai perso!';
    }

    document.getElementById('Risultato').innerHTML = `Hai scelto ${playerChoice}. Il computer ha scelto ${computerChoice}. ${result}`;
}
