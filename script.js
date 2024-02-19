const choices = ['Rock', 'Paper', 'Scissors'];

function getRandomNumber() {
  return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
  return choices[getRandomNumber()];
}

function printWinText(player, computer) {
  alert(
    `Player: ${player} --- Computer: ${computer} --- You Win! ${player} Beats ${computer}!`
  );
}
function printLossText(player, computer) {
  alert(
    `Player: ${player} --- Computer: ${computer} --- You Lose! ${computer} Beats ${player}!`
  );
}
function printTieText(player, computer) {
  alert(`Player: ${player} --- Computer: ${computer} --- You Tie!`);
}

function comparePlayers(player, computer) {
  switch (player) {
    case 'Rock':
      if (computer === 'Scissors') {
        printWinText(player, computer);
        break;
      } else if (computer === 'Paper') {
        printLossText(player, computer);
        break;
      } else if (computer === 'Rock') {
        printTieText(player, computer);
        break;
      }
    case 'Paper':
      if (computer === 'Rock') {
        printWinText(player, computer);
        break;
      } else if (computer === 'Scissors') {
        printLossText(player, computer);
        break;
      } else if (computer === 'Paper') {
        printTieText(player, computer);
        break;
      }
    case 'Scissors':
      if (computer === 'Paper') {
        printWinText(player, computer);
        break;
      } else if (computer === 'Rock') {
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
}

let buttonRock = document.querySelector('.rock-hand');
let buttonPaper = document.querySelector('.paper-hand');
let buttonScissors = document.querySelector('.scissors-hand');

buttonRock.addEventListener('click', ()=>{playGame('Rock', getComputerChoice())});
buttonPaper.addEventListener('click', ()=>{playGame('Paper', getComputerChoice())});
buttonScissors.addEventListener('click', ()=>{playGame('Scissors', getComputerChoice())});