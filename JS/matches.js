
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
    rightImageEl.setAttribute('class', 'left-match-image');
    imageSectionEl.appendChild(rightImageEl);
    //append image section to parent
    matchSectionEl.appendChild(imageSectionEl);
  
    //create story section
    var storySectionEl = document.createElement('section');
    storySectionEl.setAttribute('class', 'story-section');
    storySectionEl.innerText =`${pairOfMatchedCats[0].title} ${pairOfMatchedCats[0].a} ${pairOfMatchedCats[0].b} ${pairOfMatchedCats[0].c} ${pairOfMatchedCats[0].d} ${pairOfMatchedCats[1].title}`;
    matchSectionEl.appendChild(storySectionEl);
  }
}


restoreMatchedCatsFromStorage();
displayingCatMatches();



//   var sentences = [`${pairOfMatchedCats[0].title} got too wound up on coffee and fell asleep, ${pairOfMatchedCats[1].title} was upset.`,
//     `${pairOfMatchedCats[0].title} went hosted a large party and invited all of their friends, and ${pairOfMatchedCats[1].title} came along for the fun.`,
//     `${pairOfMatchedCats[0].title} got lost in a book and never showed up for their playdate ${pairOfMatchedCats[1].title} kept calling and calling, but never got through.`,
//     `${pairOfMatchedCats[0].title} decided to ${pairOfMatchedCats[1].title} on a fun safari meeting all sorts of different animals.`];
// //get random sentences
// function getRandomSentence(){
//   var index = randomNumber(sentences.length);
  
//   while(uniqueIndexArray.includes(index)){
//     index = randomNumber(sentences.length);
//   }
//   uniqueIndexArray.push(index);
//   if (uniqueIndexArray.length>9){
//     uniqueIndexArray.shift();
//   }
  
//   return index;
// }