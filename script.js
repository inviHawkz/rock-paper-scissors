const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const container = document.querySelector('#container');
const div = document.querySelector('div');
const compareScore = document.createElement('div');
const newDiv = document.createElement('div');

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);

let playerScore = 0;
let computerScore = 0;
let round = 1;

function playRound(e) {
    const choices = ["rock", "paper", "scissors"];
    let playerChoice = e.target.id;
    function computerChoice() {
        random = Math.floor(Math.random() * choices.length);
        return computerChoice = choices[random];
    }
    computerChoice();

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

    if (result.includes("win")) {
        ++playerScore;
    } else if (result.includes("lose")) {
        ++computerScore;
    } else if (result.includes("tie")) {
        ++playerScore;
        ++computerScore;
    }
    newDiv.textContent = `Round ${round}: ${result}`;
    compareScore.textContent = `Computer ${computerScore} - You ${playerScore}`;
    div.appendChild(newDiv);
    div.appendChild(compareScore);
    round++;

    if (playerScore === 5) {
        newDiv.textContent = "-----You Are The Winner!!!-----";
        div.removeChild(compareScore);
    } else if (computerScore === 5) {
        newDiv.textContent = "-----You Lose!!!-----";
        div.removeChild(compareScore);
    }
}