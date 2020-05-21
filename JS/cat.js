'use strict';

//CSS animation HTML classes
//Card presentation animations
var leftPresentationCSSAnim = 'left-presentation';
var rightPresentationCSSAnim = 'right-presentation';

//Card match and non-match animations
var leftCardMatchCSSAnim = 'left-card-match';
var rightCardMatchCSSAnim = 'right-card-match';
var leftCardNonMatchCSSAnim = 'left-card-non-match';
var rightCardNonMatchCSSAnim = 'right-card-non-match';

//Card flip animations
var leftCardFlipToBackCSSAnim = 'left-card-flip-to-back';
var rightCardFlipToBackCSSAnim = 'right-card-flip-to-back';
var leftCardFlipToFrontCSSAnim = 'left-card-flip-to-front';
var rightCardFlipToFrontCSSAnim = 'right-card-flip-to-front';

//CatImages
//Object for our cat profiles
function CatImages(url, alt, title, bio, stories) {
  this.filePath = url;
  this.alt = alt;
  this.title = title;
  this.bio = bio;
  this.stories = stories;
  this.addToAllCats();
}

//checks if object already exists in allCats before pushing it
CatImages.prototype.addToAllCats = function() {
  var pushNewCatImage = true;
  for (var i = 0; i < allCats.length; i++) {
    if (allCats[i].filePath === this.filePath) {
      pushNewCatImage = false;
      allCats.splice(i, 1, this);
      break;
    }
  }
  if (pushNewCatImage) {
    allCats.push(this);
  }
};

CatImages.prototype.renderCardFront = function(rootElement){
  var imageElement = document.createElement('img');
  imageElement.src = this.filePath;
  imageElement.alt = this.alt;
  imageElement.title = this.title;

  renderedCats.push(this);

  rootElement.appendChild(imageElement);
};

CatImages.prototype.renderCardBack = function(rootElement) {
  while (rootElement.firstChild) {
    rootElement.removeChild(rootElement.firstChild);
  }
  var catBioPEl = document.createElement('p');
  catBioPEl.setAttribute('class', 'cat-bio');
  catBioPEl.innerText = this.bio;
  rootElement.appendChild(catBioPEl);
};

//MatchedCats
//Object for our pairs of matched cat profiles (CatImages)
function MatchedCats(matchedCatOne, matchedCatTwo, matchTitle, storyFromStorage) {
  this.matchedCatOne = matchedCatOne;
  this.matchedCatTwo = matchedCatTwo;
  this.matchTitle = matchTitle;
  if (!storyFromStorage) {
    this.matchStory = this.storyBuilder();
  } else {
    this.matchStory = storyFromStorage;
  }
  allMatchedCats.push(this);
}

//MESSY - needs refactoring
//builds the story array from the MatchedCats two CatImage objects
MatchedCats.prototype.storyBuilder = function() {
  var storyArrayBuilder = [];
  var catOneRandomIndexOne = getRandomIndexValue(this.matchedCatOne.stories);
  var catOneRandomIndexTwo = getRandomIndexValue(this.matchedCatOne.stories);
  while (catOneRandomIndexOne === catOneRandomIndexTwo) {
    catOneRandomIndexTwo = getRandomIndexValue(this.matchedCatOne.stories);
  }
  var catTwoRandomIndexOne = getRandomIndexValue(this.matchedCatTwo.stories);
  var catTwoRandomIndexTwo = getRandomIndexValue(this.matchedCatTwo.stories);
  while (catTwoRandomIndexOne === catTwoRandomIndexTwo) {
    catTwoRandomIndexTwo = getRandomIndexValue(this.matchedCatTwo.stories);
  }

  var catOneStories = [];
  catOneStories.push(this.matchedCatOne.stories[catOneRandomIndexOne]);
  catOneStories.push(this.matchedCatOne.stories[catOneRandomIndexTwo]);
  this.storyMatching(catOneStories, this.matchedCatTwo);
  storyArrayBuilder.push(catOneStories[0]);
  storyArrayBuilder.push(catOneStories[1]);

  var catTwoStories = [];
  catTwoStories.push(this.matchedCatTwo.stories[catTwoRandomIndexOne]);
  catTwoStories.push(this.matchedCatTwo.stories[catTwoRandomIndexTwo]);
  this.storyMatching(catTwoStories, this.matchedCatOne);
  storyArrayBuilder.push(catTwoStories[0]);
  storyArrayBuilder.push(catTwoStories[1]);

  return shuffleArray(storyArrayBuilder).join();
};

MatchedCats.prototype.storyMatching = function(storiesArray, storyPartner) {
  for (var i = 0; i < storiesArray.length; i++) {
    // storiesArray[i] = storiesArray[i].replace('____', storyPartner.title);
    storiesArray[i] = storiesArray[i].replace(/____/g, storyPartner.title);
  }
};


//non-object functions
function cloneAndReplaceNodeWithAnimation(node, animationClassToAdd) {
  var cloneNode = node.cloneNode(true);
  cloneNode.className = '';
  cloneNode.classList.add(animationClassToAdd);
  node.parentNode.replaceChild(cloneNode, node);
}

function shuffleArray(arr) {
  var returnArray = [];
  while (arr.length > 0) {
    var randomIndex = getRandomIndexValue(arr);
    returnArray.push(arr.splice(randomIndex, 1));
  }
  return returnArray;
}

/*
We have two functions right now for getting random index values.
Fixing that will require a not insignificant refactoring, as they
work slightly differently.
*/
function getRandomIndexValue(arr) {
  return Math.floor(Math.random() * arr.length);
}

// get index for 2 random images
//return an array of two random indexes from the allCats array
function getRandomIndex(){
  var index = randomNumber(allCats.length);
  var indexTwo = randomNumber(allCats.length);

  while(index === indexTwo){
    index = randomNumber(allCats.length);
    indexTwo = randomNumber(allCats.length);
  }
  return [index, indexTwo];
}

// helper function
function randomNumber(max){
  return Math.floor(Math.random() * max);
}

// diplay 2 random images
function displayImages(){
  //empty the renderedCats array
  renderedCats = [];
  //get indexes of cats we're going to render
  var indexArray = getRandomIndex();
  //apply presentation animation and reset event listener for left card
  cloneAndReplaceNodeWithAnimation(leftCardParent, leftPresentationCSSAnim);
  leftCardParent = document.getElementById('left-card');
  leftCardParent.addEventListener('click', handleLeftCardClick);
  //reset ref after node clone
  leftImageFrontParent = document.getElementById('left-card-front');
  allCats[indexArray[0]].renderCardFront(leftImageFrontParent);
  var leftCardBack = document.getElementById('left-card-back');
  allCats[indexArray[0]].renderCardBack(leftCardBack);

  //apply presentation animation and reset event listener for right card
  cloneAndReplaceNodeWithAnimation(rightCardParent, rightPresentationCSSAnim);
  rightCardParent = document.getElementById('right-card');
  rightCardParent.addEventListener('click', handleRightCardClick);
  //reset ref after node clone
  rightImageFrontParent = document.getElementById('right-card-front');
  allCats[indexArray[1]].renderCardFront(rightImageFrontParent);
  var rightCardBack = document.getElementById('right-card-back');
  allCats[indexArray[1]].renderCardBack(rightCardBack);

}

function catsSendtoLocalStorage(){
  window.localStorage.setItem(matchedCatsKey, JSON.stringify(allMatchedCats));
}

function restoreMatchedCatsFromStorage() {
  var parsedMatchedCats = JSON.parse(window.localStorage.getItem(matchedCatsKey));
  if (parsedMatchedCats) {
    for (var i = 0; i < parsedMatchedCats.length; i++) {
      var oneMatchCatElement = parsedMatchedCats[i];
      new MatchedCats(
        new CatImages(
          oneMatchCatElement.matchedCatOne.filePath,
          oneMatchCatElement.matchedCatOne.alt,
          oneMatchCatElement.matchedCatOne.title,
          oneMatchCatElement.matchedCatOne.bio,
          oneMatchCatElement.matchedCatOne.stories
        ),
        new CatImages(
          oneMatchCatElement.matchedCatTwo.filePath,
          oneMatchCatElement.matchedCatTwo.alt,
          oneMatchCatElement.matchedCatTwo.title,
          oneMatchCatElement.matchedCatTwo.bio,
          oneMatchCatElement.matchedCatTwo.stories
        ),
        oneMatchCatElement.matchTitle,
        oneMatchCatElement.matchStory
      );
    }
  }
}

function displayingCatMatches(){
  var matchesToMatchesPage = document.createElement('img');
  matchesToMatchesPage.src = allCats;
  parentMatches.appendChild(matchesToMatchesPage);
}

// buttons event listener functions
function handleMatchButton(event){
  var newMatchedCats = new MatchedCats(renderedCats[0], renderedCats[1]);
  catsSendtoLocalStorage();

  // cloneAndReplaceNodeWithAnimation(leftCardParent, leftCardMatchCSSAnim);
  // leftCardParent = document.getElementById('left-card');
  // leftImageFrontParent = document.getElementById('left-card-front');
  leftImageFrontParent.textContent = '';

  // cloneAndReplaceNodeWithAnimation(rightCardParent, rightCardMatchCSSAnim);
  // rightCardParent = document.getElementById('right-card');
  // rightImageFrontParent = document.getElementById('right-card-front');
  rightImageFrontParent.textContent = '';

  displayImages();
}

function handleNonMatchButton(event){
  leftImageFrontParent.textContent = '';
  rightImageFrontParent.textContent = '';
  displayImages();
}

//rotation event handler functions for when a user clicks on the card
function handleLeftCardClick(event) {
  var eventTarget = event.target;
  var cardContianer = eventTarget;
  //since it's possible to click on the image, the text, or one of the inner containing divs
  //we need to make sure we're applying the animations to the container div
  while (cardContianer.id !== 'left-card') {
    cardContianer = cardContianer.parentNode;
  }
  var cloneCardContainer = cardContianer.cloneNode(true);
  cloneCardContainer.addEventListener('click', handleLeftCardClick);
  cloneCardContainer.classList.remove(leftPresentationCSSAnim);
  if (!cloneCardContainer.classList.toggle(leftCardFlipToBackCSSAnim)) {
    cloneCardContainer.classList.toggle(leftCardFlipToFrontCSSAnim);
  }
  cardContianer.parentNode.replaceChild(cloneCardContainer, cardContianer);
  //reset refs after node clone
  leftCardParent = document.getElementById('left-card');
  leftImageFrontParent = document.getElementById('left-card-front');
}

function handleRightCardClick(event) {
  var eventTarget = event.target;
  var cardContianer = eventTarget;
  //since it's possible to click on the image, the text, or one of the inner containing divs
  //we need to make sure we're applying the animations to the container div
  while (cardContianer.id !== 'right-card') {
    cardContianer = cardContianer.parentNode;
  }
  var cloneCardContainer = cardContianer.cloneNode(true);
  cloneCardContainer.addEventListener('click', handleRightCardClick);
  cloneCardContainer.classList.remove(rightPresentationCSSAnim);
  if (!cloneCardContainer.classList.toggle(rightCardFlipToBackCSSAnim)) {
    cloneCardContainer.classList.toggle(rightCardFlipToFrontCSSAnim);
  }
  cardContianer.parentNode.replaceChild(cloneCardContainer, cardContianer);
  //reset refs after node clone
  rightCardParent = document.getElementById('right-card');
  rightImageFrontParent = document.getElementById('right-card-front');
}
