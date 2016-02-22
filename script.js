var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
var suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
var valWorth = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
var suitWorth = [0, 1, 2, 3];
var deck = [];
var playerHand = [];
var computerHand = [];
var clickButton = document.getElementById('clicky');
clickButton.addEventListener("click", evalHands);

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
  //Show hands:
  console.log('Player: '+playerHand[0][0]+' '+playerHand[0][1]);
  console.log('Computer: '+computerHand[0][0]+' '+computerHand[0][1]);
  //if the player wins
  {if (playerHand[0][2] > computerHand[0][2]){
    moveToPlayerHand();
  //if computer wins
  }else if (playerHand[0][2] < computerHand[0][2]) {
    moveToComputerHand();
  //it's a tie, coin flip it
  }else{console.log('tie! coin flip determines winner...');
    if (Math.random() > 0.5) {
      moveToPlayerHand();
    }else{
      moveToComputerHand();
      }
    }
  console.log("Player deck: "+playerHand.length);
  console.log("Computer deck: "+computerHand.length);
  }
}

function moveToPlayerHand() {
  console.log('player won');
  //computer hand is transferred to player deck
  playerHand.push(computerHand[0]);
  //computer hand is removed from computer deck
  computerHand.splice(0, 1);
  //player hand should move to the back
  playerHand.push(playerHand[0]);
  playerHand.splice(0, 1);
}

function moveToComputerHand() {
  console.log('computer won');
  //player hand put at end of comp deck
  computerHand.push(playerHand[0]);
  //player hand removed from player deck
  playerHand.splice(0, 1);
  //computer hand should move to the back
  computerHand.push(computerHand[0]);
  computerHand.splice(0, 1);
}


//calling functions here:
buildDeck();
shuffleDeck(deck);
deal();

// some while loop stuff here:
// while (playerHand.length > 0 && computerHand.length > 0) {
//   evalHands();
// }



if (computerHand.length == 52){
  console.log('Computer won, better luck next time.');
}else if (playerHand.length == 52){console.log('You win! Congratulations.');
}
