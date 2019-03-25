window.addEventListener('load', init);

// Globals
let time = 5;
let score =0;
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

function init() {
  // Load word from array
  console.log("hello");
  showWord(words);
  //Call countdown every second
  setInterval(countdown,1000);
  //Check game status
  setInterval(checkStatus, 50);
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
  if(!isPlaying && time ===0) {
    message.innerHTML = "Game Over!!";
  }
}





























//end
