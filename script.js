// Create a game of Rock-Paper-Scissors, player vs computer
// Player input 1 of 3 choices: rock, paper, scissors
// Computer randomly choose between 3 choices
// Compare choices of player vs choices of computer
// Show who won, or a tie
// if player enter a string that is not either "rock", "paper" or "scissors"
//    the system will tell the player to correct their input

const choices = ["rock", "paper", "scissors"];
const playerChoice = prompt("Please choose between Rock, Paper or Scissor");

function computerChoice() {
    random = Math.floor(Math.random() * choices.length);
    return computerChoice = choices[random];
}
console.log("Computer choose: " + computerChoice());

if (playerChoice === computerChoice) {
    console.log("It is a tie");
} else if (playerChoice === "rock" && computerChoice === "paper") {
    console.log("You lose, paper beats rock");
} else if (playerChoice === "rock" && computerChoice === "scissors") {
    console.log("You win, rock beats scissor");
} else if (playerChoice === "paper" && computerChoice === "rock") {
    console.log("You win, paper beats rock");
} else if (playerChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose, scissors beats paper");
} else if (playerChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose, rock beats scissors");
} else if (playerChoice === "scissors" && computerChoice === "paper") {
    console.log("You win, scissors beats paper");
} else if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
    console.log("Your choice is wrong, please enter again");
    prompt("Please choose between Rock, Paper or Scissor");
}
