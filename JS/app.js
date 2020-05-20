'use strict';

<<<<<<< HEAD

var parentElementRight = document.getElementById('right-card');




// event listener for flipping cards
parentElementLeft.addEventListener('mouseover',leftCardMovement)

function leftCardMovement(){
  var parentElementLeft = document.getElementsByClassName('left-card');
  if ('mouseover'=== true) 
  // then run css

  else(); 
  // do not run css





=======
var allCats = [];
var renderedCats = [];
var matchedCatsKey = 'cat-matches';
var matchedCats = [];
// var totalRounds = [];
var parentLeft = document.getElementById('left-card');
var parentRight = document.getElementById('right-card');
var parentMatches = document.getElementById('matches-list');

// buttons event listener functions
function handleMatchButton(event){
  var clickMatch = event.target.button;
>>>>>>> 3cb52f33fdfa8a46a417d30e63b7b88f97ebf0b9
}
parentLeft.addEventListener('click', handleClick);
parentRight.addEventListener('click', handleClick);

function handleClick(event){
  var imageThatWasClickedOn =
}

// left-presentation

// right-presentation

// left-card-match

// right-card-match

// left-card-non-match

// right-card-non-match

// buttons event listener functions
// function handleMatchButton(event){
//   var clickMatch = event.target.button;
// }

// function handleNonMatchButton(event){
//   displayImages();
// }

//event listener for match and non-match buttons
// document.getElementById('match-button').addEventListener('click', handleMatchButton);
// document.getElementById('non-match-button').addEventListener('click', handleNonMatchButton);
