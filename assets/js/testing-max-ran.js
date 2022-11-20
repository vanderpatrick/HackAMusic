// the numBeats variable will be function of the game level
let numBeats = 5;
let rightAnswers = 0;
let userInput = [];
let randomSong = [];
let randomSongSounds = [];
let userScore = 0
let score = document.querySelector('.level-score')
let level = 1;
let keyboardActive = false;
let link = document.querySelector(".link1");
let link1 = document.querySelector(".link2");
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
const sound7 = new Audio('assets/sounds/sound7.wav');

let soundArray = [sound1, sound2, sound3, sound4, sound5, sound6];
 
function playSong() {
  var interval = 1000; // how much time should the delay between two iterations be (in milliseconds)?
  keyboardActive = false;
  setTimeout(function () {
    keyboardActive = true;
  }, randomSongSounds.length * interval);
  randomSongSounds.forEach(function (el, index) {
    setTimeout(function () {
      randomSongSounds[index].play();
    }, index * interval);
  });
  seconds = interval / 1000 * (level + 4);
  secondsTxt = seconds + "s"

  createProgressbar('progressbar1', secondsTxt);
}

// function to start a turn
function userTurn() {
  console.log(level);
  if (level >= 1) {
    deleteProgressbar();
  };
  keyboardActive = "active"
  userInput = [];
  randomSongSounds = [];
  rightAnswers = 0;
  createSong(numBeats);
  playSong();
  playButton.setAttribute('onclick','#');
  randomSongElement.innerHTML = randomSong;
}

// function to generate randomSong using 6 different sounds, length equal to the numBeats
function createSong(numBeats) {
  randomSong = Array.from({length: numBeats}, () => Math.floor((Math.random() * 6) + 1));
  for (i = 0; i < randomSong.length; i++) {
    randomNum = randomSong[i]
    randomSongSounds.push(soundArray[randomNum-1]);
  }
}
function removeClass(event) {
  let key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  key.classList.remove("active")
}
function PlaySound(event) {
  if (keyboardActive) {
    let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    let key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    key.classList.add("active");
    audio.currentTime = 0;

    // if the key pressed is correct, return the instrument sound,
    // else an error sound
    if (key.getAttribute("data-sound") == randomSong[userInput.length - 1]) {
      audio.play();
    } else {
      sound7.play();
    }
  }
}
// function that starts the user turn and returns results
function keyPress(key) {
  if (keyboardActive) {
    // get the data-sound number related to button pressed and append in the userInput array
    let keyPressed = document.querySelector(`div[data-key="${key.keyCode}"]`).getAttribute("data-sound")
    userInput.push(keyPressed);

    if (userInput.length == randomSong.length) {
      checkAnswer(randomSong,userInput);
      userScore = userScore + rightAnswers * 10
      score.innerHTML = userScore
      if (rightAnswers == randomSong.length) {  
      /*--------SweetAlert for lvl results------*/
      Swal.fire({
        title: rightAnswers + " out of " + numBeats,
        background: '#303841',
        padding: '1rem 0 3rem 0',
        icon: 'success',
        customClass: {
          popup: 'game-result-popup',
        },
        confirmButtonColor: "#A5DD86",
        confirmButtonText: "Level Up!",
        }).then((result) => {
          if (result.isConfirmed) {
            userInput = [];
          }
        });
        level = level + 1
        numBeats = numBeats + 1;
        question_counter.innerHTML = level;
        deleteProgressbar();
      }

      else {
        Swal.fire({
          title: rightAnswers + " out of " + numBeats,
          background: '#303841',
          padding: '1rem 0 3rem 0',
          icon: 'error',
          customClass: {
            popup: 'game-result-popup',
          },
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Sorry, try again!",
          }).then((result)=> {
            if (result.isConfirmed) {
              location.reload();
            }
          });
          userScore = 0
          score.innerHTML = userScore
      }
    }
    playButton.setAttribute('onclick','userTurn(this)');
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

/*
 *  Creates a progressbar.
 *  @param id the id of the div we want to transform in a progressbar
 *  @param duration the duration of the timer example: '10s'
 *  @param callback, optional function which is called when the progressbar reaches 0.
 */
function createProgressbar(id, duration, callback) {
  // We select the div that we want to turn into a progressbar
  var progressbar = document.getElementById(id);
  progressbar.className = 'progressbar';

  // We create the div that changes width to show progress
  var progressbarinner = document.createElement('div');
  progressbarinner.className = 'inner';

  // Now we set the animation parameters
  progressbarinner.style.animationDuration = duration;

  // Eventually couple a callback
  if (typeof(callback) === 'function') {
    progressbarinner.addEventListener('animationend', callback);
  }

  // Append the progressbar to the main progressbardiv
  progressbar.appendChild(progressbarinner);

  // When everything is set up we start the animation
  progressbarinner.style.animationPlayState = 'running';
}

function deleteProgressbar() {
  var progressbar = document.getElementById('progressbar1');
  progressbar.classList.remove('progressbar');
  progressbar.innerHTML = "";
}


function redirect(){
  link.onclick = () => {
    window.location.href = "game.html"
  }
}
function redirect1(){
  link1.onclick = () => {
    window.location.href = "instructions.html"
  }
}

document.addEventListener('keydown', keyPress)
document.addEventListener('keydown', PlaySound)
document.addEventListener('keyup', removeClass)
document.addEventListener('keypress', function(event) {
  if (event.key === "Enter" && userInput.length == 0) {
    event.preventDefault();
    playButton.click();
  }
});

redirect()
redirect1()
