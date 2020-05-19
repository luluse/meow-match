'use strict';

var allCats = [];
var renderedCats = [];
// var totalRounds = [];
var parentLeft = document.getElementById('left-card');
var parentRight = document.getElementById('right-card');
var parentMatches = document.getElementById('matches-list');


// create my constructor function to hold my cats instances
function CatImages(url, alt, title){
  this.filePath = url;
  this.alt = alt;
  this.title = title;
  allCats.push(this);
}
CatImages.prototype.render = function(rootElement){
  var imageElement = document.createElement('img');
  imageElement.src = this.filePath;
  imageElement.alt = this.alt;
  imageElement.title = this.title;

  renderedCats.push(this);

  rootElement.appendChild(imageElement);
};

new CatImages('img/berlioz.jpg', 'berlioz', 'berlioz');
new CatImages('img/biscoff.jpg', 'biscoff', 'biscoff');
new CatImages('img/clawdia.jpg', 'clawdia', 'clawdia');
new CatImages('img/crumpet.jpg', 'crumpet', 'crumpet');
new CatImages('img/fritz.jpg', 'fritz', 'fritz');
new CatImages('img/judy.jpg', 'judy', 'judy');
new CatImages('img/poncho.jpg', 'poncho', 'poncho');
new CatImages('img/romy.jpg', 'romy', 'romy');
new CatImages('img/saffron.jpg', 'saffron', 'saffron');
new CatImages('img/sasha.jpg', 'sasha', 'sasha');
new CatImages('img/taz.jpg', 'taz', 'taz');
new CatImages('img/twizzers.jpg', 'twizzers', 'twizzers');


// get index for 2 random images
function getRandomIndex(){
  var index = randomNumber(allCats.length);
  var indexTwo = randomNumber(allCats.length);

  while(index === indexTwo){
    index = randomNumber(allCats.length);
    indexTwo = randomNumber(allCats.length);
  }
  // uniqueIndexArray.push(index, indexTwo);

  // if(uniqueIndexArray.length > 4){
  //   uniqueIndexArray.shift();
  // }

  return [index, indexTwo];
}

// helper function
function randomNumber(max){
  return Math.floor(Math.random() * max);
}

// diplay 2 random images
function displayImages(){
  renderedCats = [];
  var index = getRandomIndex();
  allCats[index[0]].render(parentLeft);
  allCats[index[1]].render(parentRight);

  // totalRounds++;
}

// create 12 rounds
// if (totalRounds === 12){
//stop the event listener
// }

displayImages();
// new CatImages('img/berlioz.jpg', 'berlioz', 'berlioz');
// new CatImages('img/biscoff.jpg', 'biscoff', 'biscoff');
// new CatImages('img/clawdia.jpg', 'clawdia', 'clawdia');
// new CatImages('img/crumpet.jpg', 'crumpet', 'crumpet');
// new CatImages('img/fritz.jpg', 'fritz', 'fritz');
// new CatImages('img/judy.jpg', 'judy', 'judy');
// new CatImages('img/poncho.jpg', 'poncho', 'poncho');
// new CatImages('img/romy.jpg', 'romy', 'romy');
// new CatImages('img/saffron.jpg', 'saffron', 'saffron');
// new CatImages('img/sasha.jpg', 'sasha', 'sasha');
// new CatImages('img/taz.jpg', 'taz', 'taz');
// new CatImages('img/twizzers.jpg', 'twizzers', 'twizzers');
// cats that match sent on local storage

function catsSendtoLocalStorage(){
  localStorage.setItem(JSON.stringify(new Date()), JSON.stringify(renderedCats));
}

// get matches from local storage to render on matches.html page
// function
// var renderMatches = localStorage.getItem('catsThatMatch');
// var renderDateMatch = localStorage.getItem('dateOfMatch');
// renderMatches = JSON.parse(renderMatches);
// renderDateMatch = JSON.parse(renderDateMatch);



// buttons event listener functions
function handleMatchButton(event){
  catsSendtoLocalStorage();

  parentLeft.textContent = '';
  parentRight.textContent = '';
  displayImages();
}

function handleNonMatchButton(event){
  parentLeft.textContent = '';
  parentRight.textContent = '';
  displayImages();
}

//event listener for match and non-match buttons
document.getElementById('match-button').addEventListener('click', handleMatchButton);
document.getElementById('non-match-button').addEventListener('click', handleNonMatchButton);


//Get out of local storage
function catsOutOfLocalStorage(){
  var jSonToJava = localStorage.getItem(JSON.stringify(new Date()));
  jSonToJava = JSON.parse(jSonToJava);
  for (var i=0; i<jSonToJava.length; i++){
    new CatImages(jSonToJava[i].filepath,jSonToJava[i].alt, jSonToJava[i].title);
    var matchesToMatchesPage = document.createElement('img');
    matchesToMatchesPage.src=this.filepath;
    matchesToMatchesPage.alt=this.alt;
    matchesToMatchesPage.title=this.title;
    parentMatches.appendChild(matchesToMatchesPage);
  }

}

//render to the DOM
// function displayMatchesToDom(){
// }


catsOutOfLocalStorage();

//render the bios to the matches in the DOM

//create an input box for the users to name the matches

//render the named matches to the DOM
