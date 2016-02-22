var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
var suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
var deck = [];

function buildDeck() {
  for (var i = 0; i < values.length; i++) {
    for (var j = 0; j < suits.length; j++){
        deck.push(values[i] +" "+ suits[j]);
    }
  }
}

function shuffleDeck(array) {
  //Fisher Yates shuffle example used below, looked up online
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

//calling functions here:
buildDeck();
shuffleDeck(deck);
