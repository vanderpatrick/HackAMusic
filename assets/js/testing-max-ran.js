// the numBeats variable will be function of the game level
let numBeats = 5;
let rightAnswers = 0;
let userInput = [];
let randomSong = [];
let level = 1
const question_counter = document.querySelector(".level-current");
const randomSongElement = document.querySelector(".random-song");
const playButton = document.querySelector('.btn-play');

// Assigning audio file to variables
const sound1 = new Audio('assets/sounds/sound1.wav');
const sound2 = new Audio('assets/sounds/sound2.wav');
const sound3 = new Audio('assets/sounds/sound3.wav');
const sound4 = new Audio('assets/sounds/sound4.wav');
const sound5 = new Audio('assets/sounds/sound5.wav');
const sound6 = new Audio('assets/sounds/sound6.wav');

let soundArray = [sound1, sound2, sound3, sound4, sound5, sound6];
 

function playSong() {
  var interval = 1000; // how much time should the delay between two iterations be (in milliseconds)?
  soundArray.forEach(function (el, index) {
    setTimeout(function () {
      soundArray[index].play();
    }, index * interval);
  });
}


// function to start a turn
function userTurn() {
  userInput = [];
  rightAnswers = 0
  createSong(numBeats);
  playSong();
  playButton.setAttribute('onclick','#');
  randomSongElement.innerHTML = randomSong;
}

// function to generate randomSong using 6 different sounds, length equal to the numBeats
function createSong(numBeats) {
  randomSong = Array.from({length: numBeats}, () => Math.floor((Math.random() * 6) + 1));
  console.log(randomSong)
}
function removeClass() {
  let key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  key.classList.remove("active")
}
function PlaySound(event) {
  let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  let key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  key.classList.add("active")
  
  audio.currentTime = 0;
  audio.play();
}
// function that starts the user turn and returns results
function keyPress(key) {
  let keyPressed = document.querySelector(`div[data-key="${key.keyCode}"]`).getAttribute("data-sound")
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

document.addEventListener('keydown', keyPress)
document.addEventListener('keydown', PlaySound)
document.addEventListener('keyup', removeClass)
