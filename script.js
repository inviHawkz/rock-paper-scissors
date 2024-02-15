// Create a game of Rock-Paper-Scissors, player vs computer
// Player input 1 of 3 choices: rock, paper, scissors
// Computer randomly choose between 3 choices
// Compare choices of player vs choices of computer
// Show who won, or a tie
// if player enter a string that is not either "rock", "paper" or "scissors"
//      the system will tell the player to correct their input
// checking the score of player and computer
//      if there is a string of "won" inside the result variable, increase playerScore by one
//      if there is a string of "lose" inside the result variable, increase computerScore by one
//      use the string method string.includes() to look if there is "win" or "lose" in the result, it returns a boolean value

const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let round = 0;

// This is the loop
for (let i = 1; i <= 5; i++) {
    ++round;
    let playerChoice = prompt(`Round ${round} - Please choose between Rock, Paper or Scissors!`).toLowerCase();

    // This conditional statement check if the player's input is right
    // *****This need to keep asking the player to input the right answer until it is right, currently it is only asking once
    //******this code isnt acting as i think, i will revisit this later
    // if (playerChoice !== "rock" || "paper" || "scissors") {
    //     playerChoice = prompt("Your choice is Wrong! - Please choose between Rock, Paper or Scissors!").toLowerCase();
    // } 
    
    // This function return a number between 0-2 
    function computerChoice() {
        random = Math.floor(Math.random() * choices.length);
        return computerChoice = choices[random];
    }
    console.log(`Round ${round} - Computer choose ` + computerChoice());

    // This function compare playerChoice and computerChoice
    function playRound() {
        if (playerChoice === computerChoice) {
            result = "It is a tie";
        } else if (playerChoice === "rock" && computerChoice === "paper") {
            result = "You lose, paper beats rock";
        } else if (playerChoice === "rock" && computerChoice === "scissors") {
            result = "You win, rock beats scissor";
        } else if (playerChoice === "paper" && computerChoice === "rock") {
            result = "You win, paper beats rock";
        } else if (playerChoice === "paper" && computerChoice === "scissors") {
            result = "You lose, scissors beats paper";
        } else if (playerChoice === "scissors" && computerChoice === "rock") {
            result = "You lose, rock beats scissors";
        } else if (playerChoice === "scissors" && computerChoice === "paper") {
            result = "You win, scissors beats paper";
        }
        return result;
    }
    console.log(playRound());

    // This conditional statement keeps track of the score
    if (result.includes("win")) {
        ++playerScore;
    } else if (result.includes("lose")) {
        ++computerScore;
    }
    console.log(`Player ${playerScore} - Computer ${computerScore}`);
}

// This conditional statement evaluate the score and declare the winner
if (playerScore > computerScore) {
    finalResult = "------Congratulation! You have won------";
} else if (playerScore < computerScore) {
    finalResult = "------Sorry, you lose------"
} else {
    finalResult = "------Well, you both have won------"
}
console.log(finalResult);