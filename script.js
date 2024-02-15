// Create a game of Rock-Paper-Scissors, player vs computer
// Player input 1 of 3 choices: rock, paper, scissors
// Computer randomly choose between 3 choices
// Compare choices of player vs choices of computer
// Show who won, or a tie
// if player enter a string that is not either "rock", "paper" or "scissors"
//    the system will tell the player to correct their input

const choices = ["rock", "paper", "scissors"];
let playerChoice = prompt("Please choose between Rock, Paper or Scissor!").toLowerCase();

if (playerChoice !== "rock" && "paper" && "scissors") {
    playerChoice = prompt("Your Choice is wrong. Please choose between Rock, Paper or Scissor!").toLowerCase();
}

function computerChoice() {
    random = Math.floor(Math.random() * choices.length);
    return computerChoice = choices[random];
}
console.log("Computer choose " + computerChoice());

function playAGame() {
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
console.log(playAGame());