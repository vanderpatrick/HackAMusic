// the numBeats variable will be function of the game level
let numBeats = 5;

// function to generate randomSong using 6 different sounds, length equal to the numBeats
function createSong(numBeats) {
  randomSong = Array.from({length: numBeats}, () => Math.floor((Math.random() * 6) + 1));
}

// sequence inserted by the user
const userInput = [1, 4, 2, 1, 3];

// function to compare two arrays and return the number of right values
function checkAnswer(randomSong, userInput) {
  let rightAnswers = 0;
  for (let i = 0; i < randomSong.length; i++) {
      if (randomSong[i] == userInput[i]) {
          rightAnswers = rightAnswers + 1;
        }
    }
}