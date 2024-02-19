const choices = ['Rock', 'Paper', 'Scissors'];

let buttonRock = document.querySelector('.rock-hand');
let buttonPaper = document.querySelector('.paper-hand');
let buttonScissors = document.querySelector('.scissors-hand');
let resultsText = document.querySelector('.result-text');
let resultsScore = document.querySelector('.result-score');
let playerScore = 0;
let computerScore = 0;

function getRandomNumber() {
  return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
  return choices[getRandomNumber()];
}

function printWinText(player, computer) {
  resultsText.textContent = `The computer chose ${computer}. You Win! ${player} Beats ${computer}!`;
  resultsScore.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}
function printLossText(player, computer) {
  resultsText.textContent = `The computer chose ${computer}. You Lose! ${computer} Beats ${player}!`;
  resultsScore.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}
function printTieText(player, computer) {
  resultsText.textContent = `The computer chose ${computer}. You Tie!`;
  resultsScore.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

function comparePlayers(player, computer) {
  switch (player) {
    case 'Rock':
      if (computer === 'Scissors') {
        playerScore += 1;
        printWinText(player, computer);
        break;
      } else if (computer === 'Paper') {
        computerScore += 1;
        printLossText(player, computer);
        break;
      } else if (computer === 'Rock') {
        printTieText(player, computer);
        break;
      }
    case 'Paper':
      if (computer === 'Rock') {
        playerScore += 1;
        printWinText(player, computer);
        break;
      } else if (computer === 'Scissors') {
        computerScore += 1;
        printLossText(player, computer);
        break;
      } else if (computer === 'Paper') {
        printTieText(player, computer);
        break;
      }
    case 'Scissors':
      if (computer === 'Paper') {
        playerScore += 1;
        printWinText(player, computer);
        break;
      } else if (computer === 'Rock') {
        computerScore += 1;
        printLossText(player, computer);
        break;
      } else if (computer === 'Scissors') {
        printTieText(player, computer);
        break;
      }
  }
}

function playGame(player, computer) {
  comparePlayers(player, computer);
  if (playerScore === 5) {
    alert('You won 5 rounds! Congratulations!');
    playerScore = 0;
    computerScore = 0;
    resultsScore.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
  } else if (computerScore === 5) {
    alert('The computer won 5 rounds! Sorry but you lost!');
    playerScore = 0;
    computerScore = 0;
    resultsScore.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
  }
}

buttonRock.addEventListener('click', () => {
  playGame('Rock', getComputerChoice());
});
buttonPaper.addEventListener('click', () => {
  playGame('Paper', getComputerChoice());
});
buttonScissors.addEventListener('click', () => {
  playGame('Scissors', getComputerChoice());
});
