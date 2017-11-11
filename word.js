//Function takes in a word and keeps track of the relevant game information

var Letter = require("./letter.js");

var displayArray = [];

function Word(word,guessesLeft) {
	this.word = word,
	this.guessed = [],
	this.wordLength = this.word.length,
	this.getLetters = function () {
		for (var i = 0; i < this.word.length; i++) {
			letter = new Letter(this.word[i]);
			displayArray.push(letter.displayLetter())
		}
		console.log(displayArray.join(""));
    };    
}

// Word.prototype.getLetters = function() {
// 	for (var i = 0; i < this.word.length; i++) {
// 		console.log(this.word[i])
// 	}
// };

module.exports = Word;




