
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z"];
            
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

    document.getElementById("win").innerHTML = "Wins: " + wins;
    document.getElementById("loss").innerHTML = "Losses: " + losses;
    document.getElementById("guesses").innerHTML = "Guesses Left: " + guesses;
    document.getElementById("guessedletters").innerHTML = "Your Guesses so far: " + guessedLetters;
}

function resetGame(){
    win = 0;
    guesses = 9;
    guessedLetters = [];
    computerChoice = alphabet[Math.floor(math.random() * alphabet.length)];
}


    
            
// // Create variables that hold references to the places in the HTML where we want to display things.
//     var directionsText = document.getElementById("directions-text");
//     // var computerChoiceText = document.getElementById("computerchoice-text");
//     var winsText = document.getElementById("wins-text");
//     var lossesText = document.getElementById("losses-text");
//     var guessLeftText = document.getElementById("guessLeft-text");
//     var userChoiceText = document.getElementById("userchoice-text");
            
// // This function is run whenever the user presses a key.
//     document.onkeyup = function(event) {
            
// // Determines which key was pressed.
//     var userGuess = event.key;
            
// // Randomly chooses a choice from the options array. This is the Computer's guess.
//     var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            
// // Reworked our code from last step to use "else if" instead of lots of if statements.
            
// // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
//     // if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {
            
//     // if ((userGuess === "r") && (computerGuess === "s")) {
//     //     wins++;
//     // } else if ((userGuess === "r") && (computerGuess === "p")) {
//     //     losses++;
//     // } else if ((userGuess === "s") && (computerGuess === "r")) {
//     //     losses++;
//     // } else if ((userGuess === "s") && (computerGuess === "p")) {
//     //     wins++;
//     // } else if ((userGuess === "p") && (computerGuess === "r")) {
//     //     wins++;
//     // } else if ((userGuess === "p") && (computerGuess === "s")) {
//     //     losses++;
//     // } else if (userGuess === computerGuess) {
//     //     ties++;
//     // }
            
// // Hide the directions
//     directionsText.textContent = "";
            
// // Display the user and computer guesses, and wins/losses/ties.
//     userChoiceText.textContent = "You chose: " + userGuess;
//     computerChoiceText.textContent = "The computer chose: " + computerGuess;
//     winsText.textContent = "wins: " + wins;
//     lossesText.textContent = "losses: " + losses;
//     tiesText.textContent = "ties: " + ties;
//     }
         
// };
//               </script>
            
