let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game

// use the value stored in the nextPlayer variable to indicate who the next player is
let playerIndicator = document.querySelector("b");
playerIndicator.innerText = "Next Player: " + nextPlayer;

//This call will create the buttons needed for the gameboard.
createGameBoard();

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   for (let i = 0; i < 9; i++) {
       let cellID = "c" + (i + 1);
       var newBtn = document.createElement("button");
       newBtn.innerText = "[ ]";
       document.getElementById(cellID).appendChild(newBtn);
   }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll("button");
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener("click", (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
    event.target.innerText = nextPlayer;
    if (nextPlayer == "X") {
        nextPlayer = "O";
    }
    else {
        nextPlayer = "X";
    }
    playerIndicator.innerText = "Next Player: " + nextPlayer;


    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
    event.target.disabled = 'disabled';

    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let label = document.getElementById("game-over-lbl"); 
        let header = document.createElement("h1")
        header.innerText = "Game Over";
        label.appendChild(header);
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
   let usedBtns = true;
   for (let i = 0; i < btns.length; i++) {
       if (!btns[i].disabled) {
           usedBtns = false;
       }
   }
   return usedBtns;
}