var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
var suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
var valWorth = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// var suitWorth = [0, 1, 2, 3];
var deck = [];
var playerHand = [];
var computerHand = [];
var clickButton = document.getElementById('clicky');
var p = document.getElementsByTagName('p');
clickButton.addEventListener("click", evalHands);

//this function builds the game deck
function buildDeck() {
  for (var i = 0; i < values.length; i++) {
    for (var j = 0; j < suits.length; j++){
        deck.push([values[i],suits[j], valWorth[i], "images/"+values[i]+"_of_"+suits[j].toLowerCase()+".png"]);
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
  if (playerHand[0][2] > computerHand[0][2]){
    moveToPlayerHand();
  //if computer wins
  }else if (playerHand[0][2] < computerHand[0][2]) {
    moveToComputerHand();
  //it's a tie, coin flip it
}else{
    if (Math.random() > 0.5) {
      moveToPlayerHand();
      alert("There was a tie, PLAYER wins coin flip!");
    }else{
      moveToComputerHand();
      alert("There was a tie, COMPUTER wins coin flip!");
      }
    }
  console.log("Player deck: "+playerHand.length);
  console.log("Computer deck: "+computerHand.length);
  if (playerHand.length > 0 && computerHand.length > 0) {
  $( "p" ).replaceWith( '<p>Player card: '+playerHand[0][0]+' '+playerHand[0][1]+ '<br>Computer card: '+computerHand[0][0]+' '+computerHand[0][1]+'<br>Player deck: '+playerHand.length+'<br>Computer deck: '+computerHand.length+'</p>');
  displayCards();
}
  }

function moveToPlayerHand() {
  console.log('Player won');
  //computer hand is transferred to player deck
  playerHand.push(computerHand[0]);
  //computer hand is removed from computer deck
  computerHand.splice(0, 1);
  //player hand should move to the back
  playerHand.push(playerHand[0]);
  playerHand.splice(0, 1);}

function moveToComputerHand() {
  console.log('Computer won');
  //player hand put at end of comp deck
  computerHand.push(playerHand[0]);
  //player hand removed from player deck
  playerHand.splice(0, 1);
  //computer hand should move to the back
  computerHand.push(computerHand[0]);
  computerHand.splice(0, 1);
}

function displayCards() {
  $('img.playerCard').replaceWith("<img class='playerCard' src="+playerHand[0][3]+">");
  $('img.compCard').replaceWith("<img class='compCard' src="+computerHand[0][3]+">");
}

//calling functions here:
buildDeck();
shuffleDeck(deck);
deal();
// var computerDeck = computerHand.length;
// var playerDeck = playerHand.length;

//some while loop stuff here for testing
// while (playerHand.length > 0 && computerHand.length > 0) {
//    evalHands();
//  }


//work around to show final tally
if (computerHand.length == 52){
  $( 'p').replaceWith('<p>Player Deck: 0<br>Computer deck: 52</p>');
  $( 'div.gameOver' ).replaceWith( '<br><div class="gameOver">Game over, Computer has won.</div>');
}else if (playerHand.length == 52){
  $( 'p').replaceWith('<p>Player Deck: 52<br>Computer deck: 0</p>');
  $( 'div.gameOver' ).replaceWith( '<div class="gameOver"><br>User has won!</div>');
}
