const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ||userInput === 'bomb') {
  return userInput;
} else {
  console.log('ERROR!');
}
};
const getComputerChoice = function () {
Math.floor(Math.random() * 3);
switch (Math.floor(Math.random() * 3)) {
  case 0:
  return 'rock';
  case 1:
  return 'paper';
  case 2:
  return 'scissors';
}
};
const determineWinner = (userChoice, computerChoice) => {
if (userChoice === computerChoice) {
  return 'Tie!';
  }
if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
    return 'The computer won!';
  } else {
  return 'User won!';
}
};
if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'User won!';
}
};
if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'The computer won!';
  } else {
    return 'User won!';
}
}
if (userChoice === 'bomb'){
return 'YOU WIN!'
}
};
const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();