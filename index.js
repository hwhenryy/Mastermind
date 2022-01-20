
var messageEl = document.querySelector("#message-el");
var isAlive = false;
var difficultySelect = false;




// This function will start the game and remove itself when clicked.
// It will display "Select Difficulty" and "Select Lives" and make the button
// visible to choose.
function startGame() {
    // Remove start game button
    var startGameBtn = document.querySelector("#startGame-btn");
    startGameBtn.remove();

    // Replace message to prompt for number of digits
    messageEl.textContent = "Select the number of digits you wish to guess: ";
    

}