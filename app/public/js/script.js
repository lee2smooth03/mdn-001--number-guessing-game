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

const allGuesses = document.querySelector('.guesses');      //1st paragraph
const lastResult = document.querySelector('.lastResult');   //2nd paragraph
const lowORhi = document.querySelector('.lowORhi');         //3rd paragraph

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

    if (guessCount === 1) {
        //this is the only hint that the player will get while they play the game:
        //alert(`This is guess #1 for you. The answer is ${randomNumber}. Good Luck!`);

        //turns on the visibility of a hidden <div>
        resultDiv.style.visibility = 'visible';

        allGuesses.textContent = `Previous Guesses: [${userGuess}]`;

        //1st check: using ternary operator (true|fase)? ifTRUE: ifFALSE;
        //(guessCount < 1)?allGuesses.textContent = 'Previous guesses: ': allGuesses.textContent += `[${userGuess}], `;
    } else {
        (guessCount < 10)? allGuesses.textContent += `, [${userGuess}]`: allGuesses.textContent += `, [${userGuess}]!`;
    }

    //2nd check: compare guess to the random number
    if (userGuess === randomNumber){
        /*
        lastResult.textContent = 'Congratulations!!!';
        lastResult.style.backgroundColor = 'green';
        lowORhi.textContent = '';*/
        thisResult('bulls-eye', `Your last guess was just right. Way to go!`);

        setGameOver();
    } else if (guessCount === 10){
        lastResult.textContent = `!!!Game Over!!!`
        lowORhi.textContent = `Your last guess was too ${(userGuess<randomNumber)?'low':'high'}. The correct answer was ${randomNumber}.`;
        setGameOver();
    } else {
        /**
        lastResult.textContent = 'Wrong'

        //nest a ternary operator that offers a clue
        lowORhi.textContent = `Your last guess was too ${(userGuess<randomNumber)?'low':'high'}.`;
        */

        /**
         * maybe call a function here
         * maybe build it out right here
         * 
         * 01) is the guess higher or lower?
         * 02) is the difference within 25, 10, 5?
         *      - (within 25) your last guess was very cold
         *      - (within 10) getting warmer, but still cold
         *      - (within 05) getting hot
         */

        var theDiff = Math.abs(randomNumber - userGuess);
        //alert(theDiff, randomNumber);
        switch (true){
            case (theDiff > 25): {
                thisResult('colder', `Your last guess was too ${(userGuess < randomNumber)?'low':'high'}. Very, very COLD!`);
                break;
            }
            case (theDiff > 10): {
                thisResult('colder', `Too ${(userGuess < randomNumber)?'low':'high'}! You are getting closer, but still COLD...`);
                break;
            }
            case (theDiff > 0): {
                //alert('getting hot!');
                thisResult('warmer', `Oh, you are getting HOT! Still a little too ${(userGuess < randomNumber)?'low':'high'} tho.`);
                break;
            }
            default: {
                alert('tell me where to go');
            }
        }

    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

//2nd function
guessSubmit.addEventListener('click', checkGuess);

//3rd function: display the game over; add button
function setGameOver(){

    let buttonDiv;

    guessField.disabled = true;
    guessSubmit.disabled = true;

    //create a reset button
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start New Game';
    resetButton.style.marginTop = '10px';

/** adds a reset button to the document
    document.body.append(resetButton);*/

    buttonDiv = document.createElement('div');
    buttonDiv.appendChild(resetButton);

    lowORhi.appendChild(buttonDiv);
    //lowORhi.appendChild(resetButton);
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

    lastResult.style.backgroundColor = 'rgba(255, 255, 255, 0.75)';
    allGuesses.textContent = 'Previous Guesses: ';
}

/**function togglePara() {
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
}*/

function thisResult(temp, phrasing) {
    //remove any pre-existing backgrounds and phrases before adding new ones
    document.querySelector('div.resultsPara p:nth-child(2)').classList.remove('colder', 'warmer', 'bulls-eye');
    document.querySelector('div.resultsPara p:nth-child(2)').classList.add(temp);   //adds whatever temp

    //remove anything that's there already before adding the 
    lowORhi.textContent = '';
    lowORhi.textContent = phrasing;
}