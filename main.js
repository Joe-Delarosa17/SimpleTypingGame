window.addEventListener('load', init);

// Globals

// Availible Levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 2
}

// To change Level
const currentLevel = levels.hard;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');


const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];

//Initialize Game

// show number of seconds in UI
seconds.innerHTML = currentLevel;

function init() {
  // Load word from array
  console.log("hello");
  showWord(words);
  // Start matching on word Input
  wordInput.addEventListener("input", startMatch);
  //Call countdown every second
  setInterval(countdown,1000);
  //Check game status
  setInterval(checkStatus, 50);
}

// startMatch
function startMatch() {
  if(matchWords()){
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }
  // if score is -1 display 0
  if (score === -1){
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// match the current word to the wordInput
function matchWords() {
  if(wordInput.value === currentWord.innerHTML) {
  message.innerHTML = 'Correct!!';
  return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

//Pick and show random words
function showWord(words){
  //generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output a random word
  currentWord.innerHTML = words[randIndex];
}

// countdown timer
function countdown() {
  // Make sure time is not run Out
  if(time > 0) {
    // Decrement
    time--;
  } else if(time === 0){
    isPlaying = false;
  }
  //show time
  timeDisplay.innerHTML = time;

}

// Check game checkStatus
function checkStatus() {
  if(!isPlaying && time === 0) {
    message.innerHTML = "Game Over!!";
    score = -1;
  }
  scoreDisplay.innerHTML = score;
}





























//end
