const sound1 = new Audio("assets/sounds/sound1.wav");
const sound2 = new Audio("assets/sounds/sound2.wav");
const sound3 = new Audio("assets/sounds/sound3.wav");
const sound4 = new Audio("assets/sounds/sound4.wav");
const sound5 = new Audio("assets/sounds/sound5.wav");
const sound6 = new Audio("assets/sounds/sound6.wav");
const sound7 = new Audio("assets/sounds/sound7.wav");

let arr = [sound1, sound2, sound4, sound5];

function play() {
  let interval = 1000;
  setTimeout(function () {}, arr.length * interval);
  arr.forEach(function (el,index){
    setTimeout(function () {
        arr[index].play()
    }, index * interval)
  })
}

function remove(event) {
  let keys = document.querySelector(`div[data-key="${event.keyCode}"]`);
  keys.classList.remove("active");
}

function sandbox(event) {
  let keys = document.querySelector(`div[data-key="${event.keyCode}"]`);
  let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  audio.play();
  audio.currentTime = 0;
  keys.classList.add("active");
}
document.addEventListener("keydown", sandbox);
document.addEventListener("keyup", remove);
