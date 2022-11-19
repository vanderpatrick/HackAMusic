// the numBeats variable will be function of the game level
let numBeats = 5;
let rightAnswers = 0;
let userInput = [];
let randomSong = [];
let level = 1
const question_counter = document.querySelector(".level-current");
const randomSongElement = document.querySelector(".random-song");
const playButton = document.querySelector('.btn-play');

// function to start a turn
function userTurn() {
  userInput = [];
  rightAnswers = 0
  createSong(numBeats);
  playButton.setAttribute('onclick','#')
  randomSongElement.innerHTML = randomSong;
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

    if (rightAnswers >= (randomSong.length-1)) {
      
    /*alert(rightAnswers + " out of " + numBeats);*/
    Swal.fire({
      title: rightAnswers + " out of " + numBeats,
      background: '#111211',
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Level Up!",
      });
      level = level + 1
      numBeats = numBeats + 1;
      question_counter.innerHTML = level;}
    else {
      Swal.fire({
        title: rightAnswers + " out of " + numBeats,
        background: '#111211',
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Sorry, try again!",
        });
        location.reload();
    }

    playButton.setAttribute('onclick','userTurn(this)')
    
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

