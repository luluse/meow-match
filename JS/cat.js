'use strict';


var uniqueIndexArray = [];
var sentences = [`${pairOfMatchedCats[0].title} got too wound up on coffee and fell asleep, ${pairOfMatchedCats[1].title} was upset.`,
  `${pairOfMatchedCats[0].title} went hosted a large party and invited all of their friends, and ${pairOfMatchedCats[1].title} came along for the fun.`,
  `${pairOfMatchedCats[0].title} got lost in a book and never showed up for their playdate ${pairOfMatchedCats[1].title} kept calling and calling, but never got through.`,
  `${pairOfMatchedCats[0].title} decided to ${pairOfMatchedCats[1].title} on a fun safari meeting all sorts of different animals.`];


// create my constructor function to hold my cats instances
function CatImages(url, alt, title, a, uniqueIndexArray){
  this.filePath = url;
  this.alt = alt;
  this.title = title;
  this.a = a;
  this.b = uniqueIndexArray;
  // this.c = c;
  // this.d = d;



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



new CatImages('img/berlioz.jpg', 'berlioz', 'berlioz','', '', '', '');
new CatImages('img/biscoff.jpg', 'biscoff', 'biscoff', 'a', 'b', 'c', 'd');
new CatImages('img/clawdia.jpg', 'clawdia', 'clawdia', 'a', 'b', 'c', 'd');
new CatImages('img/crumpet.jpg', 'crumpet', 'crumpet', 'a', 'b', 'c', 'd');
new CatImages('img/fritz.jpg', 'fritz', 'fritz', 'a', 'b', 'c', 'd');
new CatImages('img/judy.jpg', 'judy', 'judy', 'a', 'b', 'c', 'd');
new CatImages('img/poncho.jpg', 'poncho', 'poncho', 'a', 'b', 'c', 'd');
new CatImages('img/romy.jpg', 'romy', 'romy', 'a', 'b', 'c', 'd');
new CatImages('img/saffron.jpg', 'saffron', 'saffron', 'a', 'b', 'c', 'd');
new CatImages('img/sasha.jpg', 'sasha', 'sasha', 'a', 'b', 'c', 'd');
new CatImages('img/taz.jpg', 'taz', 'taz', 'a', 'b', 'c', 'd');
new CatImages('img/twizzers.jpg', 'twizzers', 'twizzers', 'a', 'b', 'c', 'd');


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

//get random sentences
// function getRandomSentence(){
//   var index = randomNumber(sentences.length);

//   while(uniqueIndexArray.includes(index)){
//     index = randomNumber(sentences.length);
//   }
//   uniqueIndexArray.push(index);
//   if (uniqueIndexArray.length>9){
//     uniqueIndexArray.shift();
//   }
//   for(var i = 0; i< uniqueIndexArray.length; i++){
//     uniqueIndexArray[i].push(allCats[3]);
//   }

//   return index;
// }
// getRandomSentence();



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
          new CatImages(oneMatchedCat.filePath, oneMatchedCat.alt, oneMatchedCat.title, oneMatchedCat.a, oneMatchedCat.b, oneMatchedCat.c, oneMatchedCat.d)
        );
      }
      matchedCats.push(pairOfMatchedCatsArray);
    }
  }
}

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

//render to the DOM
// function displayMatchesToDom(){
// }


// catsOutOfLocalStorage();

//render the bios to the matches in the DOM

//create an input box for the users to name the matches

//render the named matches to the DOM


// help function, sentences array


// 'completely bored by talking about nothing all day.', 'likes to steal cat nip and enjoy it with .', 'Since  gave  a hat made from squirrel, they’re best friends.', ' and  will leave double the amount of hair wherever they go.', ' and  love to meet on weekends to grab sardine ice-cream.'
// Judy is never happy until she finds something to be unhappy about; then, she is overjoyed and ___ feels the same way, that’s why they matched.
// Judy and ___ like to climb on trees, and sometimes ___ falls. It makes Judy laugh.
// Judy and ___ like to spot squirrels in the yard, but they’re actually too lazy to chase them.
// 'completely bored by talking about nothing all day.', 'likes to steal cat nip and enjoy it with .', 'Since  gave  a hat made from squirrel, they’re best friends.', ' and  will leave double the amount of hair wherever they go.'