const inputdiv = document.querySelector("#userInput");
const playRock = document.querySelector("#rock");
const playPaper = document.querySelector("#paper");
const playScissor = document.querySelector("#scissors");
const computerInput = document.querySelector("#computerInput");
const yourInput = document.querySelector("#yourInput");
const resulter = document.querySelector("#resulter");
const theRound = document.querySelector("#theRounds");
const button = document.querySelector(".inputButton")
const replay = document.querySelector("#replay");
const finalResult = document.querySelector("#finalResult");


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

function playerPlays(damn) {
    let playerGuessNumber;
    let playerGuessString = damn;
    //let correctedInput = caseCorrectInput(playerGuessString);
    if (playerGuessString == "Rock") {
        playerGuessNumber = 1;
    } else if (playerGuessString == "Paper") {
        playerGuessNumber = 2;
    } else if (playerGuessString == "Scissor") {
        playerGuessNumber = 3;
    }
    return playerGuessNumber;
}

function theThrow(p1, c1) {

    if (p1 == 1 && c1 == 1 || p1 == 2 && c1 == 2 || p1 == 3 && c1 == 3) {
        return "This round is a draw";
    } else if (p1 == 1 && c1 == 3 || p1 == 2 && c1 == 1 || p1 == 3 && c1 == 2) {
        return "You win this round";
    } else if (p1 == 1 && c1 == 2 || p1 == 2 && c1 == 3 || p1 == 3 && c1 == 1) {
        return "You lose this round";
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
    if (theInput === "This round is a draw") {
        return 0;
    } else if (theInput === "You win this round") {
        return 1;
    } else {
        return -1;
    }
}
var score = 0;
var round = 1;
theRound.textContent = "Round  " + round;
finalResult.textContent = "5 rounds to go!"

function game(hello) {
   // Initiallizations
   var ComputerGuessNumber;
   var computerGuess;

    // Execution
    theRound.textContent = "Round  " + round;
    round++;

   //for (let i = 1; i <= 5; i++) {
   //theRound.textContent = "Round" + i;
   //console.log(" ");
   let playersThrow = playerPlays(hello);
   let decodedPlayer = ThrowDecoder(playersThrow);

   let computersThrow = computerPlays();
   let decodedComputer = ThrowDecoder(computersThrow);

   console.log("The Computer throws...    " +  decodedComputer);

   computerInput.textContent = "The computer throws ...  " +  decodedComputer;

   console.log("The Player throws...    " +  decodedPlayer);

   yourInput.textContent = "The player throws ...   " + decodedPlayer;

   console.log(" ");
   let roundResult = theThrow(playersThrow, computersThrow);
   console.log(roundResult);
   console.log("reaced");
   resulter.textContent = roundResult;

   console.log(" ");
    

   //result addition

   score = score + resultCoder(roundResult);
   //}
   console.log(score);
   let toGo = 6 - round;
   finalResult.textContent = toGo + " rounds to go!";
   if (round < 6) return;

   playPaper.disabled = true;
   playRock.disabled = true;
   playScissor.disabled = true;

   finalResult.textContent = winnerDecider(score);
}

function winnerDecider(result) {
    if (result > 0) {
        return "Hey you win the game, dirty cheater !!";
    } else if (result < 0) {
        return "Haha, you lose the game, stinkface !!";
    } else {
       return "Its a draw, neck and neck !!";
    }  
}

//console.log(winnerDecider(game()));



playPaper.addEventListener('click', function () {
    game("Paper");
});

playRock.addEventListener('click', function () {
    game("Rock");
}); 

playScissor.addEventListener('click', function () {
    game("Scissor");
});

replay.addEventListener('click', function () {
    location.reload();
});


