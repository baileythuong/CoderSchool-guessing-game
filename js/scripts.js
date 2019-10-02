let guesses = 10;
let guessCounter = 0;
let randomNumber = Math.floor(Math.random() * 100 + 1);
console.log("the random number is", randomNumber);

let history = [];

function guessTheNumber() {
    // counting guesses
    guesses--;

    if (guesses < 0) {
    location.reload();
    } else if (guesses === 0) {
    document.getElementById("remainingGuesses").innerHTML = `Try again!`
    } else {
    document.getElementById("remainingGuesses").innerHTML = `${guesses} guesses left...`
    console.log(guesses, "turn(s) left");
    }

    // getting user's input
  let userGuess = document.getElementById("value").value;

  if (history.includes(userGuess)) {
    document.getElementById("guessPrompt").innerHTML = `You've already guessed ${userGuess}`;
    document.getElementById("value").value = "";
    return;
  }

    // doing the guess game
  if (userGuess > randomNumber) {
    document.getElementById("guessPrompt").innerHTML = `${userGuess} is too high`;
    document.getElementById("value").value = "";
    history.push(userGuess);
  } else if (userGuess < randomNumber) {
    document.getElementById("guessPrompt").innerHTML = `${userGuess} is too low`;
    document.getElementById("value").value = "";
    history.push(userGuess);
  } else {
    document.getElementById("guessPrompt").innerHTML = `${userGuess} is the correct number!`;
    document.getElementById("value").value = "";
    history.push(userGuess);
  }
  // displaying history
  document.getElementById("history").innerHTML = `You've guessed the following numbers: ${history.join(", ")}`;
}

function startOver() {
location.reload();
}

let time = 0; // start times
let gameTime;

function gameCounter() {
    gameTime = setInterval(function() {
    time += 1;
    document.getElementById("timeRemaining").innerHTML=time;

    if(time === 30) {
        stopCounter();
    }
    }, 1000);
}

function stopCounter() {
    clearInterval(gameTime);
    document.getElementById("guessCounterAlert").innerHTML=`Time's out, please start over.`;
    document.getElementById("value").disabled = true;
}

  // displaying guess counter
  gameCounter();