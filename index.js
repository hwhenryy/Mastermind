
var selectionEl = document.querySelector("#selection-el");
var messageEl = document.querySelector("#message-el");
var debugEl = document.querySelector("#debug-el");
var difficultySelect = 0;
var lifeSelect = 0;
var i;
var selection = []
var randomNumber;
var maxRandomNumber;
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
            debugEl.innerText = "function makeNumberButtonWork executed" 
        
}

function makeDeleteButtonWork() {
        document.getElementById("delete-btn").addEventListener("click", function() {
        selection.pop();
        selectionEl.innerText = "Choice: ";
            for (var i = 0; i < selection.length; i++) {
            selectionEl.innerText += selection[i] + " ";}})
            debugEl.innerText = "function makeDeleteButtonWork executed" 
        
}


// make the confirm button work
function makeConfirmButtonWork() {

    
    document.getElementById("confirm-btn").addEventListener("click", function() {
        
    if (difficultySelect === 0 && lifeSelect === 0) {
        if (selection.length === 1) {
            difficultySelect = selection;
            console.log(difficultySelect)

            messageEl.innerText = "Select the number of lives you will possess";
            resetSelection();

            maxRandomNumber = 10^difficultySelect-1
            randomNumber = generateRandomNumber(difficultySelect);
            debugEl.innerText = "function makeNumberConfirmButtonWork clause 1 executed" 
            
            
        }  else {
            messageEl.innerText = "Select between 1-9 digits";
            resetSelection();
            debugEl.innerText = "function makeNumberConfirmButtonWork clause 2 executed" 
        }   
    } else if (difficultySelect != 0 && lifeSelect === 0) {
        if (selection.length === 1) {
            lifeSelect = selection;
            console.log(lifeSelect)
            messageEl.innerText = "Guess a " + difficultySelect + "-digit number";
            resetSelection();
            debugEl.innerText = "function makeNumberConfirmButtonWork clause 3 executed" 

        }   else {
            messageEl.innerText = "Select between 1-9 lives";
            resetSelection();
            debugEl.innerText = "function makeNumberConfirmButtonWork clause 4 executed" 
        }   
        
    }
      
   
   })
}

function resetSelection() {
   selectionEl.textContent = "Choice: ";
   selection = []; 
}

function generateRandomNumber(maxRandomNumber) {
    randomNumber = Math.floor(Math.random()*maxRandomNumber) + 1
    debugEl.innerText = "function generateRandomNumber executed"
    return randomNumber;
    

}