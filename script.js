const choices = ['Rock', 'Paper', 'Scissors'];

function getRandomNumber() {
  return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
  return choices[getRandomNumber()];
}

function getPlayerSelection() {
  let playerInput = prompt('Enter your choice - Rock, Paper or Scissors');
  let playerChoice;

  choices.forEach((choice) => {
    if (choice.toLowerCase() === playerInput.toLowerCase()) {
      playerChoice = choice;
    }
  });

  if(!playerChoice){
    console.log()
  }
  return playerChoice;
}

function printWinText(player, computer) {
  alert(
    `Player: ${player} - Computer: ${computer} - You Win! ${player} Beats ${computer}!`
  );
}
function printLossText(player, computer) {
    alert(
    `Player: ${player} - Computer: ${computer} - You Lose! ${computer} Beats ${player}!`
  );
}
function printTieText(player, computer) {
    alert(`Player: - ${player} Computer: ${computer} - You Tie!`);
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

playGame(getPlayerSelection(), getComputerChoice());
playGame(getPlayerSelection(), getComputerChoice());
playGame(getPlayerSelection(), getComputerChoice());
playGame(getPlayerSelection(), getComputerChoice());
playGame(getPlayerSelection(), getComputerChoice());
