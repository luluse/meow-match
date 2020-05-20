function displayingCatMatches(){
  while (parentMatches.firstChild) {
    parentMatches.removeChild(parentMatches.firstChild);
  }
  for (var i = 0; i < matchedCats.length; i++) {
    //create match container
    var matchSectionEl = document.createElement('section');
    matchSectionEl.setAttribute('class', 'match-section');
    parentMatches.appendChild(matchSectionEl);
    //get inner array of two matched cats
    var pairOfMatchedCats = matchedCats[i];
    //create image container
    var imageSectionEl = document.createElement('section');
    imageSectionEl.setAttribute('class', 'match-images');
    //create left image
    var leftImageEl = document.createElement('img');
    leftImageEl.setAttribute('src', pairOfMatchedCats[0].filePath);
    leftImageEl.setAttribute('class', 'left-match-image');
    imageSectionEl.appendChild(leftImageEl);
    //create right image
    var rightImageEl = document.createElement('img');
    rightImageEl.setAttribute('src', pairOfMatchedCats[1].filePath);
    rightImageEl.setAttribute('class', 'right-match-image');
    imageSectionEl.appendChild(rightImageEl);
    //append image section to parent
    matchSectionEl.appendChild(imageSectionEl);
    //create story section
    var storySectionEl = document.createElement('section');
    storySectionEl.setAttribute('class', 'story-section');
    storySectionEl.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    matchSectionEl.appendChild(storySectionEl);
  }
}

restoreMatchedCatsFromStorage();
displayingCatMatches();
