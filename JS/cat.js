'use strict';

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

new CatImages('catImages/berlioz.png', 'berlioz', 'berlioz');
new CatImages('catImages/biscoff.png', 'biscoff', 'biscoff');
new CatImages('catImages/clawdia.png', 'clawdia', 'clawdia');
new CatImages('catImages/crumpet.png', 'crumpet', 'crumpet');
new CatImages('catImages/fritz.png', 'fritz', 'fritz');
new CatImages('catImages/judy.png', 'judy', 'judy');
new CatImages('catImages/poncho.png', 'poncho', 'poncho');
new CatImages('catImages/romy.png', 'romy', 'romy');
new CatImages('catImages/saffron.png', 'saffron', 'saffron');
new CatImages('catImages/sasha.png', 'sasha', 'sasha');
new CatImages('catImages/taz.png', 'taz', 'taz');
new CatImages('catImages/twizzers.png', 'twizzers', 'twizzers');


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
  window.localStorage.setItem(matchedCatsKey, JSON.stringify(matchedCats));
}

function restoreMatchedCatsFromStorage() {
  var parsedMatchedCats = JSON.parse(window.localStorage.getItem(matchedCatsKey));
  if (parsedMatchedCats) {
    for (var i = 0; i < parsedMatchedCats.length; i++) {
      var onePairOfMatchedCats = parsedMatchedCats[i];
      var pairOfMatchedCatsArray = [];
      for (var j = 0; j < onePairOfMatchedCats.length; j++) {
        var oneMatchedCat = onePairOfMatchedCats[j];
        pairOfMatchedCatsArray.push(
          new CatImages(oneMatchedCat.filePath, oneMatchedCat.alt, oneMatchedCat.title)
        );
      }
      matchedCats.push(pairOfMatchedCatsArray);
    }
  }
}



function displayingCatMatches(){
  var matchesToMatchesPage = document.createElement('img');
  matchesToMatchesPage.src = allCats;
  parentMatches.appendChild(matchesToMatchesPage);
}

displayingCatMatches();





























// get matches from local storage to render on matches.html page
// function
// var renderMatches = localStorage.getItem('catsThatMatch');
// var renderDateMatch = localStorage.getItem('dateOfMatch');
// renderMatches = JSON.parse(renderMatches);
// renderDateMatch = JSON.parse(renderDateMatch);



// buttons event listener functions
function handleMatchButton(event){
  matchedCats.push(renderedCats);
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

restoreMatchedCatsFromStorage();

//event listener for match and non-match buttons
document.getElementById('match-button').addEventListener('click', handleMatchButton);
document.getElementById('non-match-button').addEventListener('click', handleNonMatchButton);


//Get out of local storage
// function catsOutOfLocalStorage(){
//   var jSonToJava = localStorage.getItem(matchedCatsKey);
//   jSonToJava = JSON.parse(jSonToJava);
//   for (var i=0; i<jSonToJava.length; i++){
//     new CatImages(jSonToJava[i].filepath,jSonToJava[i].alt, jSonToJava[i].title);
//     var matchesToMatchesPage = document.createElement('img');
//     matchesToMatchesPage.src=this.filepath;
//     matchesToMatchesPage.alt=this.alt;
//     matchesToMatchesPage.title=this.title;
//     parentMatches.appendChild(matchesToMatchesPage);
//   }

// }




