// Variables
let min = 1;
let max = 100;
let randomNumber = generateRandomNumber(min, max);
const guessInput = document.getElementById('guess');
const messageElement = document.getElementById('message');
const submitButton = document.getElementById('submitGuess');
const restartButton = document.getElementById('restartGame');
const setRangeButton = document.getElementById('setRange');
const minRangeInput = document.getElementById('minRange');
const maxRangeInput = document.getElementById('maxRange');

// Function to generate a random number in a given range
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to handle guess
function handleGuess() {
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < min || userGuess > max) {
    setMessage(`Please enter a number between ${min} and ${max}.`, 'red');
    return;
  }

  if (userGuess === randomNumber) {
    setMessage(`🎉 Correct! The number was ${randomNumber}.`, 'green');
    submitButton.disabled = true; // Disable further guesses
  } else if (userGuess < randomNumber) {
    setMessage('Too low! Try again.', 'orange');
  } else {
    setMessage('Too high! Try again.', 'orange');
  }

  guessInput.value = ''; // Clear the input
}

// Function to display messages
function setMessage(message, color) {
  messageElement.textContent = message;
  messageElement.style.color = color;
}

// Function to restart the game
function restartGame() {
  randomNumber = generateRandomNumber(min, max); // New random number
  guessInput.value = '';
  setMessage(`Game restarted! Guess a number between ${min} and ${max}.`, 'black');
  submitButton.disabled = false; // Enable the submit button
}

// Function to set a custom range
function setCustomRange() {
  const customMin = parseInt(minRangeInput.value);
  const customMax = parseInt(maxRangeInput.value);

  if (isNaN(customMin) || isNaN(customMax) || customMin >= customMax) {
    setMessage('Invalid range! Ensure Min is less than Max.', 'red');
    return;
  }

  min = customMin;
  max = customMax;
  randomNumber = generateRandomNumber(min, max); // Generate a new random number for the custom range

  document.getElementById('min').textContent = min;
  document.getElementById('max').textContent = max;

  setMessage(`Range set! Guess a number between ${min} and ${max}.`, 'black');
}

// Event Listeners
submitButton.addEventListener('click', handleGuess);
restartButton.addEventListener('click', restartGame);
setRangeButton.addEventListener('click', setCustomRange);
