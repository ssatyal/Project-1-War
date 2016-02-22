var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
var suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
var valWorth = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
var suitWorth = [0, 1, 2, 3];
var deck = [];
var playerHand = [];
var computerHand = [];

//this function builds the game deck
function buildDeck() {
  for (var i = 0; i < values.length; i++) {
    for (var j = 0; j < suits.length; j++){
        deck.push([values[i],suits[j], valWorth[i], suitWorth[i]]);
    }
  }
}

//this function shuffles the deck. Thanks Stack Overflow! Fisher Yates style
function shuffleDeck(array) {
  var m = array.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
}

//deal function works only if there are two players right now
  function deal() {
    for (var i = 0; i < deck.length; i++)
    { //push up shuffled even indexed cards to player hand
      if (i%2===0) {playerHand.push(deck[i]);
      //otherwise push odd numbered index cards to computer hand
      }else{
        computerHand.push(deck[i]);
      }
    }
  }


function evalHands () {
  console.log('player: '+playerHand[0]);
  console.log('computer: '+computerHand[0]);
  //if the player wins
  {if (playerHand[0][2] > computerHand[0][2])
    {console.log('player won');
  //computer hand is transferred to player deck
  playerHand.push(computerHand[0]);
  //computer hand is removed from computer deck
  computerHand.splice(0, 1);
  //player hand should move to the back
  playerHand.push(playerHand[0]);
  playerHand.splice(0, 1);
  }else if (playerHand[0][2] < computerHand[0][2]){
  console.log('computer won');
  //player hand put at end of comp deck
  computerHand.push(playerHand[0]);
  //player hand removed from player deck
  playerHand.splice(0, 1);
  //computer hand should move to the back
  computerHand.push(computerHand[0]);
  computerHand.splice(0, 1);
}else{console.log('tie! suits determine winner...');
  //computer hand moved to back
  computerHand.push(computerHand[0]);
  computerHand.splice(0, 1);
  //player hand moved to back
  playerHand.push(playerHand[0]);
  playerHand.splice(0, 1);
}}
  console.log("Player deck: "+playerHand.length);
  console.log("Computer deck: "+computerHand.length);
}

//calling functions here:
buildDeck();
shuffleDeck(deck);
deal();
while (playerHand.length > 0 && computerHand.length > 0) {
  evalHands();
}
