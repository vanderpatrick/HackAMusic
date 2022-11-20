// jshint esversion: 6

// Script to make the keyboard in the instruction usable

// remove active class to deactivate key
function remove(event) {
  let keys = document.querySelector(`div[data-key="${event.keyCode}"]`);
  keys.classList.remove("active");
}

// Play the selected sound
function sandbox(event) {
  let keys = document.querySelector(`div[data-key="${event.keyCode}"]`);
  let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  audio.play();
  audio.currentTime = 0;
  keys.classList.add("active");
}

// Add event listener to keyboard
document.addEventListener("keydown", sandbox);
document.addEventListener("keyup", remove);
