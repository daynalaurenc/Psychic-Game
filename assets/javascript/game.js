
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z"];
            
var wins = 0;
var losses = 0;
var guesses;
var guessedLetters = [];

resetGame();

document.onkeypress = function(event) {
    var letter = event.key;
    guessedLetters.push(letter);

    if (letter === computerChoice) {
        wins++;
        resetGame();
    }

    else {
        guesses--;
    }

    if (guesses === 0) {
        losses++;
        resetGame();
    }

    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("guesses").innerHTML = "Guesses Left: " + guesses;
    document.getElementById("guessedLetters").innerHTML = "Your Guesses so far: " + guessedLetters;
}

function resetGame() {
    guesses = 9;
    guessedLetters = [];
    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("guessedLetter" + computerChoice);
}
