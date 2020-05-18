'use strict';

var allCats = [];
var uniqueIndexArray = [];
var totalRounds = [];
var parentLeft = document.getElementById('left-card');
var parentRight = document.getElementById('right-card');
// create my constructor function to hold my cats instances
function CatImages(url, alt, title){
  this.filePath = url;
  this.alt = alt;
  this.title = title;
  allCats.push(this);
}
CatImages.prototype.render = function(){
  var imageElement = document.createElement('img');
  imageElement.src = this.filePath;
  imageElement.alt = this.alt;
  imageElement.title = this.title;

  parentLeft.appendChild(imageElement);
  parentRight.appendChild(imageElement);
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


// helper function
function randomNumber(max){
  return Math.floor(Math.random() * max);
}

// get index for 2 random images
function getRandomIndex(){
  var index = randomNumber(allCats.length);

  while(uniqueIndexArray.includes(index)){
    index = randomNumber(allCats.length);
  }
  uniqueIndexArray.push(index);

  if(uniqueIndexArray.length > 4){
    uniqueIndexArray.shift();
  }
  return index;
}

// diplay 2 random images
function displayImages(){
  var index = getRandomIndex();
  allCats[index].render();
  totalRounds++;
}

// create 12 rounds
if (totalRounds === 12){
  //stop the event listener
}

displayImages();
