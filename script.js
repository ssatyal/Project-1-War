var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
var suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
var deck = [];

function buildDeck() {
  for (var i = 0; i < values.length; i++) {
    for (var j = 0; j < suits.length; j++){
      console.log(values[i]+' '+suits[j]);
        deck.push(values[i] +" "+ suits[j]);
    }
  }
}
buildDeck();
