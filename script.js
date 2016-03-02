var game = {
values: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'],
suits: ['Clubs', 'Diamonds', 'Hearts', 'Spades'],
valWorth: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
deck: [],
playerHand: [],
computerHand: [],
clickButton: $('#clicky'),
p: $('p'),
//this function builds the game deck
buildDeck: function() {
              for (var i = 0; i < game.values.length; i++) {
                for (var j = 0; j < game.suits.length; j++){
                    game.deck.push([game.values[i],game.suits[j], game.valWorth[i], "images/"+game.values[i]+"_of_"+game.suits[j].toLowerCase()+".png"]);
                }
              }
            },

//this function shuffles the deck. Thanks Stack Overflow! Fisher Yates style
shuffleDeck: function(array) {
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
            },

//deal function works only if there are two players right now
deal: function() {
        for (var i = 0; i < game.deck.length; i++)
        { //push up shuffled even indexed cards to player hand
          if (i%2===0) {game.playerHand.push(game.deck[i]);
          //otherwise push odd numbered index cards to computer hand
          }else{
            game.computerHand.push(game.deck[i]);
          }
        }
      },

replaceText: function(){
              $( "p" ).replaceWith( '<p>Player card: '+game.playerHand[0][0]+' '+game.playerHand[0][1]+ '<br>Computer card: '+game.computerHand[0][0]+' '+game.computerHand[0][1]+'<br>Player deck: '+game.playerHand.length+'<br>Computer deck: '+game.computerHand.length+'</p>');
            },

evalHands: function() {
              game.displayCards();
              //jQuery sends deck and cards to HTML p tag
              if (game.playerHand.length > 0 && game.computerHand.length > 0) {
              game.replaceText();
            }
              //if player wins
              if (game.playerHand[0][2] > game.computerHand[0][2]){
                game.moveToPlayerHand();
              //if computer wins
            }else if (game.playerHand[0][2] < game.computerHand[0][2]) {
                game.moveToComputerHand();
              //it's a tie, look at next card in hand to determine winner, computer wins if THAT is a tie
            }else{
                if (game.playerHand[1][2] > game.computerHand[1][2]) {
                  alert("There was a tie, your next card beats the computer's next! You are awarded three total cards.");
                  game.playerWonTie();
                }else {
                  alert("There was a tie, Computer's next card beats your card! Computer steals three cards from you.");
                  game.computerWonTie();
                }
              }
            },

//if player wins, move cards to their deck
moveToPlayerHand: function() {
                    //computer hand is transferred to player deck
                    game.playerHand.push(game.computerHand[0]);
                    //computer hand is removed from computer deck
                    game.computerHand.splice(0, 1);
                    //player hand should move to the back
                    game.playerHand.push(game.playerHand[0]);
                    game.playerHand.splice(0, 1);
                  },
//if computer wins, move cards to their deck
moveToComputerHand: function () {
                      //player hand put at end of comp deck
                      game.computerHand.push(game.playerHand[0]);
                      //player hand removed from player deck
                      game.playerHand.splice(0, 1);
                      //computer hand should move to the back
                      game.computerHand.push(game.computerHand[0]);
                      game.computerHand.splice(0, 1);
                    },

//jQuery function to sends card images to HTML and runs end game text
displayCards: function() {
  //replaces img tags with current hands
  if (game.playerHand.length > 0 && game.computerHand.length > 0){
  $('img.playerCard').replaceWith("<img class='playerCard' src="+game.playerHand[0][3]+">");
  $('img.compCard').replaceWith("<img class='compCard' src="+game.computerHand[0][3]+">");}
  //otherwise if deck is empty, send through final score log
  else if (game.computerHand.length == 52){
      $( 'p').replaceWith('<p>Player Deck: 0<br>Computer deck: 52</p>');
      $( 'div.gameOver' ).replaceWith( '<div class="gameOver">Game over, Computer has won.</div>');
    }else if (game.playerHand.length == 52){
      $( 'p').replaceWith('<p>Player Deck: 52<br>Computer deck: 0</p>');
      $( 'div.gameOver' ).replaceWith( '<div class="gameOver"><br>User has won!</div>');
  }
},

//if player wins tie, send them three cards
playerWonTie: function() {
                game.moveToPlayerHand();
                game.moveToPlayerHand();
                game.moveToPlayerHand();
              },
//if computer wins tie, send it three cards
computerWonTie: function () {
                  game.moveToComputerHand();
                  game.moveToComputerHand();
                  game.moveToComputerHand();
                },

//calling functions here, runs when page loads:

};
game.buildDeck();
game.shuffleDeck(game.deck);
game.deal();
game.clickButton.on("click", game.evalHands);

//some while loop stuff here for testing (end of the game)
// while (game.playerHand.length > 0 && game.computerHand.length > 0) {
//    game.evalHands();
//  }
