/**
 * the following code accomplishes the following:
 * a) generates a random number between 1 and 100
 * b) keeps track of the guess the player is on
 * c) it provides the player with ways to guess
 * d) it records the guesses for players to see
 * e) performs a check on the guessed number...
 * f) if the guess is correct...
 * g) if the guess is incorrect and player has turns...
 * h) if the guess is incorrect and player has no turns...
 * i) once the game restarts, reset the UI to the original
 */

// variable declaration
// --------------------

// a) this generates a random number between 1 - 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

const allGuesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowORhi = document.querySelector('.lowORhi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const resultDiv = document.querySelector('.resultsPara');

let guessCount = 1;
let resetButton;

// functions
// ---------

//1st function
function checkGuess(){
    //variable declarations 
    let userGuess = Number(guessField.value);

    alert(`This is guess number ${guessCount} of 10 for you. Hint: the answer is ${randomNumber}`);

    if (guessCount < 10) {
        //turn the visibility of the hidden <div> element back on
        //resultDiv.style.display = 'block';
        resultDiv.style.visibility = 'visible';

        //1st check: using ternary operator (true|fase)? ifTRUE: ifFALSE;
        (guessCount < 1)?allGuesses.textContent = 'Previous guesses: ': allGuesses.textContent += `[${userGuess}], `;
    } else {
        allGuesses.textContent += `[${userGuess}]`
    }

    //2nd check: compare guess to the random number
    if (userGuess === randomNumber){
        lastResult.textContent = 'Congratulations!!!';
        lastResult.style.backgroundColor = 'green';
        lowORhi.textContent = '';
        setGameOver();
    } else if (guessCount === 10){
        lastResult.textContent = `!!!Game Over!!!`
        lowORhi.textContent = `Last guess was too ${(userGuess<randomNumber)?'low':'high'}. The correct answer was ${randomNumber}.`;
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong'

        //nest a ternary operator that offers a clue
        lowORhi.textContent = `Last guess was too ${(userGuess<randomNumber)?'low':'high'}.`;
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

//2nd function
guessSubmit.addEventListener('click', checkGuess);

//3rd function: display the game over; add button
function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;

    //create a reset button
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start New Game';

/** adds a reset button to the document
    document.body.append(resetButton);*/

    lowORhi.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

//4th function: reset the game
function resetGame(){
    //alert('the game is reset');
    //reset everything back to the game defaults;
    guessCount = 1;
    resetButton.parentNode.removeChild(resetButton);

    newRandom();
    clearPara();

    //enable fields
    guessSubmit.disabled = false;
    guessField.disabled = false;
    guessField.value = '';
    guessField.focus();
    
    //hide the div
    //resultDiv.style.display = 'none';
    resultDiv.style.visibility = 'hidden';
    
}

function newRandom() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
}

function clearPara() {
    const resetParas = document.querySelectorAll('.resultsPara p');
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    lastResult.style.backgroundColor = 'white';
    allGuesses.textContent = 'Previous Guesses: ';
}

function togglePara() {
    //if the <div> is on, turn it off; if it is off, turn it on
    const resultDiv = document.querySelector('.resultsPara');

    console.log(resultDiv);
    
    
    switch(resultDiv.style.display){
        case('none'):
        resultDiv.style.display = 'block';
        break;

        case('block'):
        resultDiv.style.display = 'none';
        break;

        default:
        console.log(`We didn't realize the div was displaying as ${resultDiv}`);
    }
}