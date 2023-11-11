function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result;

    if (playerChoice === computerChoice) {
        result = "It's a draw!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'forbice') ||
        (playerChoice === 'paper' && computerChoice === 'sasso') ||
        (playerChoice === 'scissors' && computerChoice === 'carta')
    ) {
        result = 'Hai vinto!';
    } else {
        result = 'Hai perso!';
    }

    document.getElementById('result').innerHTML = `Hai scelto ${playerChoice}. Il computer ha scelto ${computerChoice}. ${result}`;
}
