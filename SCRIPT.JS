let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function makeMove(cellIndex) {
    if (board[cellIndex] === '' && gameActive) {
        board[cellIndex] = currentPlayer;
        document.getElementsByClassName('cell')[cellIndex].textContent = currentPlayer;
        checkForWin();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkForWin() {
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameActive = false;
            document.getElementById('status').textContent = `${currentPlayer} wins!`;
        }
    }

    if (board.every(cell => cell !== '')) {
        gameActive = false;
        document.getElementById('status').textContent = "It's a draw!";
    }
}

function resetBoard() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.getElementById('status').textContent = '';
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
    }
}

resetBoard();
