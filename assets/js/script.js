// Global variables
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

function CallGame(index) {
  let option_text = document.querySelector("#test");
  let option_content =
    '<div class="btn btn-dark round">' + questions[index].options[0] + "</div>"
    +'<div class="btn btn-dark round">' + questions[index].options[1] + "</div>"
    +'<div class="btn btn-dark round">' + questions[index].options[2] + "</div>"
    +'<div class="btn btn-dark round">' + questions[index].options[3] + "</div>"
    +'<div class="btn btn-dark round">' + questions[index].options[4] + "</div>"

  option_text.innerHTML = option_content;
}

CallGame(0);
