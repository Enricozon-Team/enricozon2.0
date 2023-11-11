let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function makeMove(index) {
    if (!gameBoard[index] && gameActive) {
        gameBoard[index] = currentPlayer;
        updateBoard();
        checkWinner();
        togglePlayer();
    }
}

function updateBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        cell.textContent = gameBoard[index];
    });
}

function togglePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            endGame(`${currentPlayer} vince!`);
            return;
        }
    }

    if (!gameBoard.includes('')) {
        endGame('Pareggio!');
    }
}

function endGame(message) {
    gameActive = false;
    document.getElementById('message').textContent = message;
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.getElementById('message').textContent = '';
    updateBoard();
}

document.addEventListener('DOMContentLoaded', updateBoard);
