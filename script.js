var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
var suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
var deck = [];
var playerHand = [];
var computerHand = [];

//this function builds the game deck
function buildDeck() {
  for (var i = 0; i < values.length; i++) {
    for (var j = 0; j < suits.length; j++){
        deck.push([values[i],suits[j]]);
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

//let's evaluate one hand for now
function evalHands () {
  console.log(playerHand[0][0]);
  console.log(computerHand[0][0]);
}

//calling functions here:
buildDeck();
shuffleDeck(deck);
deal();
evalHands();
