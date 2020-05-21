//renders the cat matches to the DOM
function displayingCatMatches(){
  //clear the parent element/node of children
  while (parentMatches.firstChild) {
    parentMatches.removeChild(parentMatches.firstChild);
  }
  for (var i = 0; i < allMatchedCats.length; i++) {
    var oneCatMatch = allMatchedCats[i];
    //create match container
    var matchSectionEl = document.createElement('section');
    //set a class for each matchSectionEl so we can identify the cats
    matchSectionEl.classList.add(
      'match-section',
      `${oneCatMatch.matchedCatOne.title}-${oneCatMatch.matchedCatTwo.title}`
    );
    matchSectionEl.addEventListener('submit', titleCatchMatch);
    parentMatches.appendChild(matchSectionEl);
    //create form or title
    createFormOrTitle(oneCatMatch, matchSectionEl);
    //create image container
    var imageSectionEl = document.createElement('section');
    imageSectionEl.setAttribute('class', 'match-images');
    //create left image
    var leftImageEl = document.createElement('img');
    leftImageEl.setAttribute('src', oneCatMatch.matchedCatOne.filePath);
    leftImageEl.setAttribute('class', 'left-match-image');
    imageSectionEl.appendChild(leftImageEl);
    //create right image
    var rightImageEl = document.createElement('img');
    rightImageEl.setAttribute('src', oneCatMatch.matchedCatTwo.filePath);
    rightImageEl.setAttribute('class', 'right-match-image');
    imageSectionEl.appendChild(rightImageEl);
    //append image section to parent
    matchSectionEl.appendChild(imageSectionEl);
    //create story section
    var storySectionEl = document.createElement('section');
    storySectionEl.setAttribute('class', 'story-section');
    storySectionEl.innerText = oneCatMatch.matchStory;
    matchSectionEl.appendChild(storySectionEl);
  }
}

//if cat match object already has a matchTitle, renders it,
//otherwise renders a form for capturing a matchTitle from the user
function createFormOrTitle(catMatch, parentEl) {
  if (!catMatch.matchTitle || catMatch.matchTitle === '') {
    var formEl = document.createElement('form');
    formEl.setAttribute('class', 'match-title-input');
    var formLabelEl = document.createElement('label');
    formLabelEl.innerText = 'Please name your cat match!';
    formEl.appendChild(formLabelEl);
    var textBoxEl = document.createElement('input');
    textBoxEl.setAttribute('type', 'text');
    formEl.appendChild(textBoxEl);
    var submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', 'submit');
    submitButton.innerText = 'Submit';
    formEl.appendChild(submitButton);
    parentEl.appendChild(formEl);
  } else {
    var catMatchTitleForStorage = document.createElement('h2');
    catMatchTitleForStorage.setAttribute('class', 'cat-match-title');
    catMatchTitleForStorage.innerText = catMatch.matchTitle;
    parentEl.appendChild(catMatchTitleForStorage);
  }
}

//function triggered when Submit button is hit on the cat match title form
function titleCatchMatch(event) {
  var catMatchSectionForm = event.target;
  //match event.target, which is a form, to the appropriate cat from its parent node
  var catMatchSection = catMatchSectionForm.parentNode;
  var catMatchPair = catMatchSection.classList[1];
  var matchTitle = event.target[0].value;
  //build h2 for match title and repalce the form with it
  var catMatchTitleEl = document.createElement('h2');
  catMatchTitleEl.setAttribute('class', 'cat-match-title');
  catMatchTitleEl.innerText = matchTitle;
  catMatchSection.replaceChild(catMatchTitleEl, catMatchSection.firstChild);
  updateMatchInStorageWithTitle(catMatchPair, matchTitle);
}

//updates allMatchedCats with new matchTitle, then writes it to localStorage
function updateMatchInStorageWithTitle(catMatchPair, matchTitle) {
  var titledCatOne = catMatchPair.split('-')[0];
  var titledCatTwo = catMatchPair.split('-')[1];
  for (var i = 0; i < allMatchedCats.length; i++) {
    var oneMatchedCat = allMatchedCats[i];
    if (oneMatchedCat.matchedCatOne.title === titledCatOne &&
        oneMatchedCat.matchedCatTwo.title === titledCatTwo) {
      oneMatchedCat.matchTitle = matchTitle;
      break;
    }
  }
  catsSendtoLocalStorage();
}
