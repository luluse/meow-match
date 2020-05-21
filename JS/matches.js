
function displayingCatMatches(){
  while (parentMatches.firstChild) {
    parentMatches.removeChild(parentMatches.firstChild);
  }
  for (var i = 0; i < allMatchedCats.length; i++) {
    //create match container
    var matchSectionEl = document.createElement('section');
    matchSectionEl.classList.add(
      'match-section',
      `${allMatchedCats[i].matchedCatOne.title}-${allMatchedCats[i].matchedCatTwo.title}`
    );
    matchSectionEl.addEventListener('submit', titleCatchMatch);
    parentMatches.appendChild(matchSectionEl);
    //create form or title
    if (!allMatchedCats[i].matchTitle || allMatchedCats[i].matchTitle === '') {
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
      matchSectionEl.appendChild(formEl);
    } else {
      var h2El = document.createElement('h2');
    }
    //create image container
    var imageSectionEl = document.createElement('section');
    imageSectionEl.setAttribute('class', 'match-images');
    //create left image
    var leftImageEl = document.createElement('img');
    leftImageEl.setAttribute('src', allMatchedCats[i].matchedCatOne.filePath);
    leftImageEl.setAttribute('class', 'left-match-image');
    imageSectionEl.appendChild(leftImageEl);
    //create right image
    var rightImageEl = document.createElement('img');
    rightImageEl.setAttribute('src', allMatchedCats[i].matchedCatTwo.filePath);
    rightImageEl.setAttribute('class', 'right-match-image');
    imageSectionEl.appendChild(rightImageEl);
    //append image section to parent
    matchSectionEl.appendChild(imageSectionEl);
    //create story section
    var storySectionEl = document.createElement('section');
    storySectionEl.setAttribute('class', 'story-section');
    storySectionEl.innerText = allMatchedCats[i].matchStory;
    matchSectionEl.appendChild(storySectionEl);
  }
}

function titleCatchMatch(event) {
  var targetCatMatch = event.target;
}
