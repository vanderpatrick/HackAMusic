// the numBeats variable will be function of the game level
let numBeats = 5;
let rightAnswers = 0;
let userInput = [];
let randomSong = [];

// function to start a turn
function userTurn() {
  createSong(numBeats);
  alert(randomSong);
}

// function to generate randomSong using 6 different sounds, length equal to the numBeats
function createSong(numBeats) {
  randomSong = Array.from({length: numBeats}, () => Math.floor((Math.random() * 6) + 1));
}

// function that starts the user turn and returns results
function keyPress(key) {
  var keyPressed = key.getAttribute("data-sound");
  userInput.push(keyPressed);
  if (userInput.length == randomSong.length) {
    checkAnswer(randomSong,userInput);
    alert(rightAnswers + " out of " + numBeats);
  }
}

// function to compare two arrays and return the number of right values
function checkAnswer(randomSong, userInput) {
  for (let i = 0; i < randomSong.length; i++) {
      if (randomSong[i] == userInput[i]) {
          rightAnswers = rightAnswers + 1;
        }
    }
}

