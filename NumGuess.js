let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput=document.querySelector('#Guess');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.RemGuess');
const startOver = document.querySelector('.result');
const Msg=document.querySelector('.msg');

let playgame=true;
const p=document.createElement('p')
let prevGuess = [];
let Guesses = 1;

if(playgame){
    submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Enter a Valid Number");
    }else if(guess<1){
        alert('enter number greater than zero');
    }else if(guess >100){
        alert('enter a number less than 101');
    }else{
        prevGuess.push(guess);
        if(Guesses===10){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    Msg.innerHTML=`<img src="7Crore.jpeg" height=200px width=300px></img>`;
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`&#128514 &#128514...try Greater Number`);
  } else if (guess > randomNumber) {
    displayMessage(`&#128514 &#128514...try lower Number`);
  }
}

function displayMessage(message) {
    Msg.innerHTML = `<h2>${message}</h2>`;
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  Guesses++;
  remaining.innerHTML = `${11 - Guesses} `;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<button id="newGame">Start new Game</button>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    Guesses = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - Guesses} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    Msg.innerHTML = `<h2></h2>`;

    playGame = true;
  });
}