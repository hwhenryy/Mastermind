
var selectionEl = document.querySelector("#selection-el");
var messageEl = document.querySelector("#message-el");
var difficultySelect = 0;
var lifeSelect = 0;
var i;
var selection = []
var randomNumber;
var randomNumberMatrix = []




// This function will start the game and remove itself when clicked.
// It will display "Select Difficulty" and "Select Lives" and make the button
// visible to choose.
function startGame() {
    // Remove start game button
    var startGameBtn = document.querySelector("#startGame-btn");
    startGameBtn.remove();

    // Replace message to prompt for number of digits
    messageEl.textContent = "Select the number of digits you wish to guess";
    
     // Add the display for numbers
    selectionEl.textContent = "Choice: ";
  
    

     

     // Render the buttons with a for loop
    for (i = 1; i <10; i++) {
        var numberBtn = document.createElement("button")
        numberBtn.innerHTML =  i;
        numberBtn.id = i + "-btn";
        document.getElementById("number-buttons").appendChild(numberBtn);
    }
    
    
    
   
    
    var deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = "DELETE";
        deleteBtn.id = "delete-btn";
        document.getElementById("DC-buttons").appendChild(deleteBtn);
        
    var confirmBtn = document.createElement("button")
        confirmBtn.innerHTML =  "CONFIRM";
        confirmBtn.id = "confirm-btn";
        document.getElementById("DC-buttons").appendChild(confirmBtn);
     
    
   
    makeNumberButtonWork(1)
    makeNumberButtonWork(2)
    makeNumberButtonWork(3)
    makeNumberButtonWork(4)
    makeNumberButtonWork(5)
    makeNumberButtonWork(6)
    makeNumberButtonWork(7)
    makeNumberButtonWork(8)
    makeNumberButtonWork(9)
    makeDeleteButtonWork()
    makeConfirmButtonWork()
    
}

function makeNumberButtonWork(btnNumber) {

  // When the button is clicked, the number will appear on the display
    document.getElementById(btnNumber + "-btn").addEventListener("click", function() {
        selection.push(btnNumber);
        selectionEl.innerText = "Choice: ";
            for (var i = 0; i < selection.length; i++) {
            selectionEl.innerText += selection[i] + " ";}})
        
}

function makeDeleteButtonWork() {
        document.getElementById("delete-btn").addEventListener("click", function() {
        selection.pop();
        selectionEl.innerText = "Choice: ";
            for (var i = 0; i < selection.length; i++) {
            selectionEl.innerText += selection[i] + " ";}})
        
}

function makeConfirmButtonWork() {

    
    document.getElementById("confirm-btn").addEventListener("click", function() {
        
    if (difficultySelect === 0 && lifeSelect === 0) {
        if (selection.length === 1) {
            difficultySelect = selection;
            console.log(difficultySelect)
            messageEl.innerText = "Select the number of lives you will possess";
            resetSelection();
            
        }  else {
            messageEl.innerText = "Select between 1-9 digits";
            resetSelection();
        }   
    } else if (difficultySelect != 0 && lifeSelect === 0) {
        if (selection.length === 1) {
            lifeSelect = selection;
            console.log(lifeSelect)
            messageEl.innerText = "Guess a " + difficultySelect + "-digit number";
            resetSelection();

        }   else {
            messageEl.innerText = "Select between 1-9 lives";
            resetSelection();
        }   
        
    }
    
    
    
    
    
   // final brackets 
   })
}

function resetSelection() {
   selectionEl.textContent = "Choice: ";
   selection = []; 
}

function generateRandomNumber(digits) {
    let maxNumber = 10^digits-1
    let randomNumber = Math.floor(Math.random()*maxNumber) + 1
    console.log(randomNumber);

}