// Global Variables
const levelText = document.getElementById('#level');
const scoreText = document.getElementById('#score');

let score = 0;
let level = 0;

// CAPITALIZED vars mean the value is immutable
const MAX_SCORE_POINTS = 10;
const MIN_SCORE_POINTS = 5;
const MAX_QUESTIONS = 10;

function startGame() {

    // starting variables
    score = 0;
    level = 1;
};

// Increment score 
incrementScore = (num) => {
    score +=num;
    scoreText.innerText = score;
};