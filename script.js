/* Player's guess. */
const playerGuess = document.querySelector('.guess').value;


/* Generating random number between 1 and 20. */
let randomNumber = Math.floor(Math.random() * 20) + 1;


/* Player's score. */
let playerScore = 20;


/* Display game messages to user */
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}


/* Change color according to the state of the game. */
const alterScreenColor = function(backgroundColor) {
  document.getElementsByTagName('body')[0].style.backgroundColor = backgroundColor;
}


/* Change size of the hidden number box according to the state to the game. */
const alterRandomNumberBoxSize = function(number) {
  document.querySelector('.number').style.width = number;
}


/* Display player score. */
const displayPlayerScore = function(score) {
  document.querySelector('.score').textContent = score;
}


/* Game logic. */
document.querySelector('.check').addEventListener('click', function() {
  const playerGuess = Number(document.querySelector('.guess').value);
  if(!playerGuess) {
    displayMessage("🚫 No Number");
  }
  else if (playerGuess === randomNumber) {
    displayMessage("🏆 Correct Number!");
    alterScreenColor("#32CD30");
    alterRandomNumberBoxSize("30rem");
    document.querySelector('.highscore').textContent = playerScore;
    document.querySelector('.number').textContent = randomNumber;
  } 


  /* Player guess is incorrect. */
  else if(playerGuess !== randomNumber) {
    if(playerScore > 1) {
      document.querySelector('.message').textContent = (playerGuess > randomNumber) ? ("📈 Too High!") : ("📉 Too Low!");
      playerScore--;
      document.querySelector('.score').textContent = playerScore;
    }
    else {
      displayMessage("😓 You Lost!");
      alterScreenColor("#FF2E2E");
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = randomNumber;
    }
  }
  

  /* Game reset logic. */
  document.querySelector('.again').addEventListener('click', function() {
    playerScore = 20;
    randomNumber = Math.floor(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = "";
    displayPlayerScore(playerScore);
    displayMessage("Start guessing...")
    alterScreenColor("#333333");
    alterRandomNumberBoxSize("15rem");
  });
});





/* THIS CODE IS RE-FACTORED ABOVE*/


// else if(playerGuess > randomNumber) {
//   if(playerScore > 1) {
//     document.querySelector('.message').textContent = "📈 Too High!"
//     playerScore--;
//     document.querySelector('.score').textContent = playerScore;
//   }
//   else {
//     document.querySelector('.message').textContent = "😓 You Lost!"
//     document.querySelector('.score').textContent = 0;
//     document.getElementsByTagName('body')[0].style.backgroundColor = "#FF2E2E";
//   }
// } 
// else if(playerGuess < randomNumber) {
//   if(playerScore > 1) {
//     document.querySelector('.message').textContent = "📉 Too Low!";
//     playerScore--;
//     document.querySelector('.score').textContent = playerScore;
//   }
//   else {
//     document.querySelector('.message').textContent = "😓 You Lost!"
//     document.querySelector('.score').textContent = 0;
//     document.getElementsByTagName('body')[0].style.backgroundColor = "tomato";
//   }
// }


