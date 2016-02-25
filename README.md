# Project-1-War

# Approach
- The WAR game emulates the card game comparing card values/worth against one another.
- I began tackling programming of the game by coding the core game logic in JavaScript.
  - Build the deck, shuffle, and deal cards when the page is visited.
  - The user clicks the button (event listener) to fire off the game and each subsequent round. The first cards in the decks (arrays) for both the user and computer are evaluated against one another and the winner of that round collects the two cards (then moved to the back of their personal deck (array).
At this point I needed a way to break the event of a tie. Originally I had planned for ties to just go back into each respective deck it came from, but this caused a never ending game!
  - ~~Ties are now broken by a random coin flip (Math.random).~~
  - I was able to add functionality to break a tie by evaluating the next card in each deck! Winner takes three cards from the opponent - Woohoo!
- Eventually, I added jQuery to the game in order to replace images and text in several HTML elements.
  - This allows the user to immediately asses how many cards are in their deck and computer deck (current score)

# Task Tracking

Complete:
- Initialize HTML, CSS, JS files and link
- Gold/Silver/Bronze cases and MVP
- User Stories
- Create arrays for deck: cards + suits
- Create a shuffle function (auto-run)
- Create a deal function (auto-run)
- Create game logic to evaluate winner each round
- Send loser's card to game winner's deck
- Click function fires off a round
- Add card images to page
- CSS style page
- Break tie by evaluating next card

Bugs:
- If a tie occurs near the 'end' of the game (i.e. less less than three cards in a deck) then the game logic cannot run as programmed.
- Minor annoyance, gameplay rules section looks wonky if you make the browser smaller

Icebox:
- Reset button for the game

Scrapped:
- Game round appends to page (score is based on deck anyway)
- Counters keep track of scores and rounds (see above)
- add HTML elements to append game logs to (logs would be lengthy and unnecessary additions to page)

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
- ~~round scores/game log are updated after each round using DOM manipulation/appends
  computer had x, player had y, winner = x||y,
  current score comp a, player b~~
- counters indicate the current score ~~and round~~

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
- evaluates tie situations based on "betting three cards and flipping a fourth (evaluate values of fourth for winner)"
- ~~game log showing previous rounds/moves (DOM append)~~
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
