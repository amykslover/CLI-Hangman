//Function takes in a word and keeps track of the relevant game information

var Letter = require("./letter.js");
var splitArray = [];
var displayArray = [];

function Word(word) {
	this.word = word,
	this.wordLower = word.toLowerCase(),
	this.guessed = [],
	this.wordLength = this.word.length,
	this.splitWord = this.wordLower.split(""),
	this.getLetters = function () {
		for (var i = 0; i < this.word.length; i++) {
			letter = new Letter(this.word[i]);
			displayArray.push(letter.displayLetter())
		}
		return displayArray
    };    
}

//Testing
// var newWord = new Word('Austin and Supernatural Powers')
// console.log(newWord);

module.exports = Word;




