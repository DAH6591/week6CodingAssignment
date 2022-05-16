/*  WAR CARD GAME 
-   Deal 26 Cards to two Players from a Deck. 
-	Iterate through the turns where each Player plays a Card
-	The Player who played the higher card is awarded a point
-   Ties result in zero points for either Player
-	After all cards have been played, display the score.
-   Do not need to accept any user input
-   print to console or use alert or another way to implement game
*/

// create some arrays which will include elements for the rank, face value and suit of a card - 
// and for two players with names
let rankValue = [2,3,4,5,6,7,8,9,10,11,12,13,14]; //assign values to J,Q, K, A - 11 to 14
let faceValue = ["2","3","4","5","6","7","8","9","10","Jack","Queen", "King", "Ace"];
let suitValues = ["Heart", "Diamond", "Clubs", "Spades"];
var darthVader = [];
var skywalker = [];

// build a class for cards of a deck; we want to include the suit, rank and face value for individual cards
class Card { 
    constructor(suit, rank, faceValue){
        this.suit = suit;
        this.rank = rank;
        this.faceValue = faceValue;
    }

// Lines 28 through 33 included for unit testing
    myFirstCard() {
        return `${this.suit}, ${this.rank}, ${this.faceValue}`;
    }
}
let c = new Card ("Hearts", 9, "nine");
console.log(c.myFirstCard());

// build a class for a card deck of 52 cards, to include shuffle, create and deal methods
class Deck {
    constructor() {  
        this.myDeck = []; 
    }
    get allCards(){
        return this.myDeck.length
    }
    
    shuffle() {
            for(var i = this.allCards - 1; i > 0; i--){
            var tempCard = this.myDeck[i];
            var randomIndex = Math.floor(Math.random() * 52);
            this.myDeck[i] = this.myDeck[randomIndex];
            this.myDeck[randomIndex] = tempCard;
        }
    }
 
    create() {  
        for(let i = 0; i < faceValue.length; i++){     
            for(let j = 0; j < suitValues.length; j++){
                this.myDeck.push(new Card(suitValues[j], rankValue[i], faceValue[i]));  
        }
      }   
    }
    
    dealCard(){
        return this.myDeck.pop();
    }
}

// Lines 68 through 70: this displays the created card deck, to make sure all 52 cards are displayed
// along with each card's suit, rank and face value
let myDeck = new Deck();
myDeck.create();
console.log(myDeck);

// create a function to run the War game: for loop to distribute 26 random cards to each player; 
// a for loop with IF, IF-ELSE and ELSE statements to display the rankings of cards and to keep track of
// player's score; a final set of IF, IF-ELSE and ELSE statements to display the final score for 
// each player and to show which player is the winner.
function playGame (){
    let darthVaderScore = 0;
    let skywalkerScore = 0;

    cleanDeck = new Deck();
    cleanDeck.create();
    cleanDeck.shuffle(); 
   
    for (let i = 0; i < 26; i++) {
        this.darthVader[i] = cleanDeck.dealCard();
        this.skywalker[i] = cleanDeck.dealCard();
    }
    
    // Lines 90 and 91 display the 26 random cards for each player
    console.log(darthVader);
    console.log(skywalker);
    
    for (let i = 0; i < 26; i++) {
        if (this.darthVader[i].rank > this.skywalker[i].rank) {
      console.log(`Darth Vader's card beats Skywalker's card:\n${this.darthVader[i].rank} beats ${this.skywalker[i].rank}`);
          darthVaderScore += 1;  
        } else if (this.skywalker[i].rank > this.darthVader[i].rank){
        console.log(`Skywalker's card beats Darth Vader's card:\n${this.skywalker[i].rank} beats ${this.darthVader[i].rank}`);
            skywalkerScore += 1;
        } else {
            console.log("Oh, no! It's a tie.");
        }
    }
    // Lines 105 and 106 display the final tally for each player once all 26 cards have been played
    console.log("Final score for Darth Vader: " + darthVaderScore + " points");
    console.log("Final score for Skywalker: " + skywalkerScore + " points");

    if (darthVaderScore > skywalkerScore) {
        console.log(`Darth Vader and the dark side win the game with ${darthVaderScore} points`);
    } else if (skywalkerScore > darthVaderScore) {
        console.log(`Skywalker wins the game with ${skywalkerScore} points, the force is with you`);
    } else {
        console.log("Game is a tie and neither the dark side nor the force is with you");
    }
}
playGame();