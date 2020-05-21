//executables - cats.js
new CatImages('catImages/berlioz.png', 'berlioz', 'berlioz',
  'Hi Hi.  I\'m Berlioz, but you can call me Berlie.  I\'m 4 years old, and love a good book.  Although I work in a library, don\'t let my quiet dimeanor fool you.  In my spare time I work as an auuctioneer.  Fun fact, I sold the original A team van to Mr T. ',
  [
    'Since Berlioz gave  ____ a hat made from squirrel, they\'re best friends',
    'Now ____ and Berlioz are best friends, they don\'t need human cuddles anymore',
    'Berlioz and ____ will leave double the amount of hair wherever they go',
    'Berlioz completely bored ____ by talking about nothing all day.'
  ]
);

new CatImages('catImages/biscoff.png', 'biscoff', 'biscoff',
  'Wowzers, I\'m Biscoff.  I\'m 13.5 years old, and here to for adventure.  I spent the majority of my life hiking and working as a guide in the alps, and now I\'ve decided its time to come down from the mountain and live out the rest of my days.  Let\'s meet for coffee during the day.',
  [
    'Biscoff spent the afternoon making a great cup of coffee and enjoying a talk with ____.',
    'Biscoff decided to go back up the mountain and took three black diamond ski runs, ____ called it quits.',
    'Biscoff went parachuting and was never seen again, ____ was so confused.',
    'Biscoff finally decided to settle down and had a happy home life with ____.'
  ]
);

new CatImages('catImages/clawdia.png', 'clawdia', 'clawdia',
  'Hey! I\'m clawdia, and I\'m the life of the party!! I\'m 2 years old.  My friends wonder where I get all of my energy, and well, I just love life.  I wake up every morning so excited and it lasts all day.  No coffee or tea for me, I don\'t even need it. Let\'s meet up and read a book, or a hundred.',
  [
    'Clawdia got too wound up on coffee and fell asleep, ____ was upset',
    'Clawdia went hosted a large party and invited all of their friends, and ____ came along for the fun',
    'Clawdia got lost in a book and never showed up for their playdate ____ kept calling and calling, but never got through.',
    'Clawdia decided to ____ on a fun safari meeting all sorts of different animals.' 
  ]
);

new CatImages('catImages/crumpet.png', 'crumpet', 'crumpet',
  'Hello there, I\'m Crumpet.  I\'m .75 years old, and still learning a lot about life. I\'m currently in my "just sort of figuring it out" stage of life, and I\'m here mainly for friends.  I work as a stock associate at a florist, and am going to CIT next year to study medicinal catnip use to help with anxiety.',
  [
    'Since Crumpet and ____ became best friends, Crumpet gets super excited when they hang out and throws up on the carpet.',
    'Crumpet and ____ like to hide in bags to take a ride to the Market',
    'Crumpet likes to  share all the tuna cans he stole from the pantry with ____',
    'Crumpet and ____ will increase the number of dead birds you find in your yard by 2x'
  ]
);

// new CatImages('catImages/fritz.png', 'fritz', 'fritz');
// new CatImages('catImages/judy.png', 'judy', 'judy');
// new CatImages('catImages/poncho.png', 'poncho', 'poncho');
// new CatImages('catImages/romy.png', 'romy', 'romy');
// new CatImages('catImages/saffron.png', 'saffron', 'saffron');
// new CatImages('catImages/sasha.png', 'sasha', 'sasha');
// new CatImages('catImages/taz.png', 'taz', 'taz');
// new CatImages('catImages/twizzers.png', 'twizzers', 'twizzers');

//event listener for match and non-match buttons
document.getElementById('match-button').addEventListener(
  'click', handleMatchButton);
document.getElementById('non-match-button').addEventListener(
  'click', handleNonMatchButton);

document.getElementById('left-card').addEventListener('click', handleLeftCardClick);
document.getElementById('right-card').addEventListener('click', handleRightCardClick);

restoreMatchedCatsFromStorage();
displayImages();
