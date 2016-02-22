# Project-1-War

Project 1
WAR

#Task Tracking
Backlog:
- Create game logic to evaluate winner each round
- Send loser's card to game winner's deck
- Click function fires off a round
- Game round appends to page
- Counters keep track of scores and rounds
- CSS style page
- add HTML elements to append game logs to

Complete:
- Initialize HTML, CSS, JS files and link
- Gold/Silver/Bronze cases and MVP
- User Stories
- Create arrays for deck: cards + suits
- Create a shuffle function (auto-run)
- Create a deal function (auto-run)

Icebox:
- Reset button for the game

# User Stories
As a <role> I should be able to <goal> so that <reason>
- As a user, I should be able to click a button to initiate the game.
- As a user, I should be able to see what hand was played so that I see the winner of each round.
- As a user, I should be able to see previous rounds & the score so that I can asses who is currently winning.
- As a user, I should be able to see the final score to determine who won the game of WAR.
- As a user, I should be able to reset the game so that I can start over because I'm probably a sore loser.

# Gold/Silver/Bronze Analysis

Silver:
- shuffle/deal deck on page load
- 2 players
- ties will remain ties
- button click initiates each round
- evaluates cards using indices of arrays
- round scores/game log are updated after each round using DOM manipulation/appends
  computer had x, player had y, winner = x||y,
  current score comp a, player b
- counters indicate the current score and round

GOLD:
- shuffle/deal deck
- allows multiple users to play
- hands dealt account for 52 cards / x players,
  ex if 5 players, 2 cards randomly discarded
- has a counter for rounds, also indicates how many remain
- evaluates cards using indices of arrays
- after each round, score is updated and moves are shown
  - computer had x, player had y, winner = x||y,
    current score comp a, player b
- evaluates tie situations based on suits
- game log showing previous rounds/moves (DOM append)
- ability to reset game with a button
- everything handled/pushed up with DOM manipulation

BRONZE: MVP
- 2 players only, user and computer
- shuffle & deal deck automatically/page load
- press a button, all rounds run consecutively
- ties aren't broken
- evaluates cards based on ~~indices~~ worth
  - if that fails, some complex/convoluted switch statement will get us there
- an alert informs the user of the final score
  or alert after each round and make the user click through minimum 26 alerts... mwuahaha
