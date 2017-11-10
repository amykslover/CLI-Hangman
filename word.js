//Function takes in a word and keeps track of the relevant game information
var prompt = require('prompt');
var inquirer = require('inquirer');

var phraseChoice;
var phraseWordCount;

fs = require('fs');


function Phrase(phrase,wordcount,guessesLeft) {
	this.phrase = phrase,
	this.phraseWordCount = wordcount, 
	this.letters = [],
	this.guessed = [],
	this.phraseLength = this.phrase.length,
	this.guessesLeft = guessesLeft
	this.Letter()
	for (var i = 0; i < this.phrase.length; i++) {
		console.log(this.phrase[i])
	}
}

fs.readFile('list.json', function(error, data) {
	var listLength = JSON.parse(data).length;
	var listNumber = Math.floor(Math.random() * listLength);
	phraseChoice = JSON.parse(data)[listNumber].Word_Phrase;
	phraseWordCount = JSON.parse(data)[listNumber].Words_in_Phrase;
	var currentPhrase = new Phrase(phraseChoice,phraseWordCount,10);
});


prompt.start();

prompt.get(['guess'], function (error, result) {
	console.log(result.guess);
});