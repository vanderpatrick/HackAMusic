// function to compare two arrays and return the number of right values

const randomSong = [1, 2, 3, 1, 4];
const userInput = [1, 4, 2, 1, 3];

let rightAnswers = 0

for (let i = 0; i < randomSong.length; i++) {
    if (randomSong[i] == userInput[i]) {
        rightAnswers = rightAnswers + 1;
      }
  }

console.log(rightAnswers)