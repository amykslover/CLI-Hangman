#!/usr/bin/env node
var inquirer = require("inquirer");
var prompt = require("prompt");
var fs = require("fs");

var selectWord = require("./selectWord");
var Word = require("./word");

//Randomly select game word or phrase from file
gameWord = selectWord(['Cat Simone','Dog Jet','word3']);

// playGame(gameWord);

var wrongGuesses = 0;
var newWord = new Word(gameWord);
//Create a new word object with the game word
console.log(newWord);
var currentWord;
//Display the blank letters and spaces to the user
newWord.getLetters();

playGame();


function playGame() {
	if(wrongGuesses > 7) {
		console.log('YOUR MAN IS HUNG! GAME OVER')
		return;
	} 
	if(currentWord === gameWord) {
		console.log('YOU WON!')
		return;
	}
	else {
		guessLetter()
	}
}


function guessLetter() {
	inquirer.prompt([
	{
		type: 'input',
		name: 'guess',
		message: 'What letter do you want to guess?',
		validate: function(letter){
		var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
		return regEx.test(letter);
		}
	}
	]).then(function(answer){
		if(newWord.guessed.includes(answer.guess)) {
			console.log('You already guessed that letter, please ick a new letter.')
			guessLetter()
		}
		else{
		checkForLetter(answer.guess);
		}
	})
}

function checkForLetter(letter){
	newWord.guessed.push(letter)
	console.log(newWord.guessed)

	if(gameWord.toLowerCase().includes(letter)) {
		playGame()
	}
	else {
		wrongGuesses ++
		console.log(wrongGuesses)
		playGame()

	}
};

