
var messageEl = document.querySelector("#message-el");
var isAlive = false;
var difficultySelect = false;
var i;
var selection = []
var selectionEl;



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
    display.innerText = selection;
    display.id = "selection-el";
    document.getElementById("number-display").appendChild(display)
    

     

     // Render the buttons with a for loop
    for (i = 1; i <10; i++) {
        var numberBtn = document.createElement("button")
        numberBtn.innerHTML =  i;
        numberBtn.id = i + "-btn";
        document.getElementById("number-buttons").appendChild(numberBtn);
    }
    
    
    var deleteBtn = document.createElement("button")
        deleteBtn.innerHTML =  "DELETE";
        deleteBtn.id = "delete-btn";
        document.getElementById("new-buttons").appendChild(deleteBtn);
        
    var confirmBtn = document.createElement("button")
        confirmBtn.innerHTML =  "CONFIRM";
        confirmBtn.id = "confirm-btn";
        document.getElementById("new-buttons").appendChild(confirmBtn);
     
    
   
    makeButtonsWork
    
}

function makeButtonsWork() {

  // When the button is clicked, the number will appear on the display
        document.getElementById(1 + "-btn").addEventListener("click", function() {
            selection.push(1);
            selectionEl = document.getElementById("selection-el");
            selectionEl.innerHTML = selection;
        })}
        document.getElementById(1 + "-btn").addEventListener("click", function() {
            selection.push(1);
            selectionEl = document.getElementById("selection-el");
            selectionEl.innerHTML = selection;
        })}
        document.getElementById(1 + "-btn").addEventListener("click", function() {
            selection.push(1);
            selectionEl = document.getElementById("selection-el");
            selectionEl.innerHTML = selection;
        })}

        


    
}

