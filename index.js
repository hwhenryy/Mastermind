
var messageEl = document.querySelector("#message-el");
var lives = 0;
var difficultySelect = false;
var i;
var choice = "_____"




// This function will start the game and remove itself when clicked.
// It will display "Select Difficulty" and "Select Lives" and make the button
// visible to choose.
function startGame() {
    // Remove start game button
    var startGameBtn = document.querySelector("#startGame-btn");
    startGameBtn.remove();

    // Replace message to prompt for number of digits
    messageEl.textContent = "Select the number of digits you wish to guess: ";

    // Add the display for numbers
    var display = document.createElement("p");
    display.innerText = choice;
    display.id = "selection";
    document.getElementById("number-display").appendChild(display)
    

    // Render the buttons with a for loop
    for (i = 1; i <10; i++) {
        var numberBtn = document.createElement("button")
        numberBtn.innerHTML =  i;
        numberBtn.id = i + "-btn";
        document.getElementById("number-buttons").appendChild(numberBtn);
    }

    // add a delete and confirm button

        var deleteBtn = document.createElement("button")
        deleteBtn.innerHTML =  "DELETE";
        deleteBtn.id = "delete-btn";
        document.getElementById("DC-buttons").appendChild(deleteBtn);


        var confirmBtn = document.createElement("button")
        confirmBtn.innerHTML =  "CONFIRM";
        confirmBtn.id = "confirm-btn";
        document.getElementById("DC-buttons").appendChild(confirmBtn);

    // add button functionality
    makeButtonsWork();
} 

function makeButtonsWork() {

    
    for (i = 1; i < 10; i++) {
        document.getElementById(i + "-btn").addEventListener("click", function() {

        
                




    
        });
    }


}
