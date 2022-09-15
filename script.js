let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// 1. create generateTarget fxn
const generateTarget = () => {
  return Math.floor(Math.random() * 9) + 0;
  };
// 6a. create getAbsoluteDistance fxn
const getAbsoluteDistance = (x, y) => {
  return Math.abs(x-y);
};
// 2. create compareGuesses fxn
const compareGuesses = (human, computer, generateTarget) => {
// 6b. create alert to make sure number is not out of range
    if ((human < 0) || (human > 9)) {
      window.alert('You are out of range. Please enter numbers only from 0 to 9.');
    }
    else if ((getAbsoluteDistance(human, generateTarget)) < (getAbsoluteDistance(computer, generateTarget))) {
    return true;
    } else { return false; }
  };
  // 3. create updateScore fxn
  const updateScore = (winner) => {
    if (winner === 'human') {
      humanScore++;
    } else if (winner === 'computer') {
      computerScore++;
    }
  };
  // 4. create advanceRound fxn
  const advanceRound = () => {
    currentRoundNumber++;
  };
