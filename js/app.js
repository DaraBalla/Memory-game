/*
 * Create a list that holds all of your cards
 */
var cards = ['fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 
'fa-leaf', 'fa-bicycle', 'fa-bomb', 'fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 
'fa-bolt', 'fa-cube', 'fa-leaf', 'fa-bicycle', 'fa-bomb'];
 
/*Then in a separate function, you’ll want to loop through this array 
and for each loop, add the HTML to the individual card and append that HTML 
to the deck class. So each card gets generated and added to the page.*/


cards.forEach(function(element) {
    var deck = document.querySelector('.deck');
    deck.insertAdjacentHTML('beforeend', '<li class="card"><i class="fa"></i></li>');
})

/* Add a class name from an array 'cards' to each card */

var icko = document.querySelectorAll('.card i');

for (var i = 0; i < icko.length; i++) {
    icko[i].classList.add(cards[i]);
}

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

let shuffledCards = shuffle(cards);

var restart = document.querySelector('.restart i');

restart.addEventListener('click', shuffle(cards));


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
