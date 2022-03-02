// fucntion to generate random number()
play1 = 1;
play2 = 1;

function random() {
    return Math.floor(Math.random() * 6 + 1);
}

// assign random number to the player 1

function player1() {
    play1 = random();
    document.querySelector('#player1').setAttribute('src', './images/dice' + play1 + '.png');
    wonPlayer();
}

function player2() {
    play2 = random();
    document.querySelector('#player2').setAttribute('src', './images/dice' + play2 + '.png');
    wonPlayer();
}

function wonPlayer() {
    document.querySelector('.visible').style.display = 'block';
    if (play1 == play2) {
        document.querySelector('.visible').textContent = 'Match has draw';
    } else if (play1 > play2) {
        document.querySelector('.visible').textContent = 'Player 1 has won';
    } else {
        document.querySelector('.visible').textContent = 'Player 2 has won';
    }
}

// assign random number to the player 2