// Global variables
let keys = document.querySelectorAll('.event');
let question_count = 0;
let next_btn = document.querySelector("#next_btn");
// Questions array
let questions = [
  {
    options: ["a", "b", "c", "j", "a"],
  },
  {
    options: ["g", "r", "t", "h", "k"],
  },
  {
    options: ["g", "g", "g", "a", "g"],
  },
];
function NextQuestion() {
  if (question_count < questions.length - 1) {
    question_count++;
    CallGame(question_count);
  }
}
function PlaySound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`button[data-key="${event.keyCode}"]`);
  if (!audio) return;
  key.classList.add("playing")
  audio.currentTime = 0
  audio.play()
}
function RemoveTransition(event) {
    if(event.propertyName == 'transform') return;
    event.target.classList.remove('playing')
}
/* Function to set inner html with the content from the questions this
function is just the base logic to undertand what the game should do, it will be changed
*/
function CallGame(index) {
  let option_text = document.querySelector("#test");
  let option_content =
    '<div class="btn btn-dark round">' +
    questions[index].options[0] +
    "</div>" +
    '<div class="btn btn-dark round">' +
    questions[index].options[1] +
    "</div>" +
    '<div class="btn btn-dark round">' +
    questions[index].options[2] +
    "</div>" +
    '<div class="btn btn-dark round">' +
    questions[index].options[3] +
    "</div>" +
    '<div class="btn btn-dark round">' +
    questions[index].options[4] +
    "</div>";
  option_text.innerHTML = option_content;
}
CallGame(0);
console.log(keys.values)
keys.forEach(key => key.addEventListener('transitionend', RemoveTransition));
window.addEventListener('keydown', PlaySound)