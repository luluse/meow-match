'use strict';

//array to keep track of which cats are currently rendered in the match cards
var renderedCats = [];
//array to old all the MatchedCats objects
var allMatchedCats = [];
//array to hold all the cats currently available for matching
var allCats = [];
//key used for saving matched cat data to localStorage
var matchedCatsKey = 'cat-matches';

var leftCardParent = document.getElementById('left-card');
var rightCardParent = document.getElementById('right-card');

var leftImageFrontParent = document.getElementById('left-card-front');
var rightImageFrontParent = document.getElementById('right-card-front');
var parentMatches = document.getElementById('matches-list');
