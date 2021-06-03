const inputdiv = document.querySelector("#userInput");
const playRock = document.querySelector("#rock");
const playPaper = document.querySelector("#paper");
const playScissor = document.querySelector("#scissors");
const computerInput = document.querySelector("#computerInput");
const yourInput = document.querySelector("#yourInput");
const resulter = document.querySelector("#resulter");

function computerPlays() {
    var ComputerGuessNumber = Math.floor(Math.random() * (3)) + 1;
    if (ComputerGuessNumber == 1) {
        computerGuess = 1;
    } else if (ComputerGuessNumber == 2) {
        computerGuess = 2;
    } else if (ComputerGuessNumber == 3) {
        computerGuess = 3;
    }
    return computerGuess;
}

function caseCorrectInput (myString) {
    return myString[0].toUpperCase() + myString.substring(1).toLowerCase();
}

function playerPlays(yo) {
    let playerGuessNumber;
    let playerGuessString = yo;
    let correctedInput = caseCorrectInput(playerGuessString);
    if (correctedInput == "Rock") {
        playerGuessNumber = 1;
    } else if (correctedInput == "Paper") {
        playerGuessNumber = 2;
    } else if (correctedInput == "Scissor") {
        playerGuessNumber = 3;
    }
    return playerGuessNumber;
}

function theThrow(p1, c1) {

    if (p1 == 1 && c1 == 1 || p1 == 2 && c1 == 2 || p1 == 3 && c1 == 3) {
        return "It's a draw";
    } else if (p1 == 1 && c1 == 3 || p1 == 2 && c1 == 1 || p1 == 3 && c1 == 2) {
        return "You win";
    } else if (p1 == 1 && c1 == 2 || p1 == 2 && c1 == 3 || p1 == 3 && c1 == 1) {
        return "You lose";
    }
}

function ThrowDecoder(theInput) {
    if (theInput == 1) {
        return "Rock";
    } else if (theInput == 2) {
        return "Paper";
    } else {
        return "Scissor";
    }
}

function resultCoder(theInput) {
    if (theInput === "It's a draw") {
        return 0;
    } else if (theInput === "You win") {
        return 1;
    } else {
        return -1;
    }
}

function game(yo) {
   // Initiallizations
   var ComputerGuessNumber;
   var computerGuess;
   var score = 0;

    // Execution



   //for (let i = 1; i <= 5; i++) {
   //console.log("Round" + i);
   console.log(" ");
   let playersThrow = playerPlays(yo);
   let decodedPlayer = ThrowDecoder(playersThrow);

   let computersThrow = computerPlays();
   let decodedComputer = ThrowDecoder(computersThrow);

   console.log("The Computer throws...    " +  decodedComputer);

   computerInput.textContent = "The computer throws ...  " +  decodedComputer;

   console.log("The Player throws...    " +  decodedPlayer);

   yourInput.textContent = "The player throws ...   " +  decodedPlayer;

   console.log(" ");
   let roundResult = theThrow(playersThrow, computersThrow);
   //console.log(roundResult);

   resulter.textContent = roundResult;

   console.log(" ");
    

   //result addition

   score = score + resultCoder(roundResult);
   //}
   
   return score;

}

//function winnerDecider(result) {
//    if (result > 0) {
//        return "Hey you win the game, dirty cheater !!";
//    } else if (result < 0) {
//        return "Haha, you lose, stinkface !!";
//    } else {
//       return "Its a draw, neck and neck !!";
//    }  
//}

//console.log(winnerDecider(game()));





playPaper.addEventListener('click', function () {
    game("paper");
});

playRock.addEventListener('click', function () {
    game("rock");
}); 

playScissor.addEventListener('click', function () {
    game("scissor");
});

