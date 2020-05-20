'use strict';

var allCats = [];
var renderedCats = [];
var matchedCatsKey = 'cat-matches';
var matchedCats = [];
// var totalRounds = [];
var parentLeft = document.getElementById('left-card-front');
var parentRight = document.getElementById('right-card-front');
var parentMatches = document.getElementById('matches-list');

// buttons event listener functions
function handleMatchButton(event){
  var clickMatch = event.target.button;
}

function handleNonMatchButton(event){
  displayImages();
}

//event listener for match and non-match buttons
// document.getElementById('match-button').addEventListener('click', handleMatchButton);
// document.getElementById('non-match-button').addEventListener('click', handleNonMatchButton);


//event listener for flipping cards
//addEventListener('mouseover', flippingCards)
// event listener
// parentLeft.addEventListener('click', handleClick);
// parentRight.addEventListener('click', handleClick);

// function handleClick(event){
//   var imageThatWasClickedOn =
// }
