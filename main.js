#!/usr/bin/env node

var inquirer = require("inquirer");
var prompt = require("prompt");
var fs = require("fs");
var getWord = require('./selectWord');
var Word = require("./word");

// Randomly select game word or phrase from file
var gameWord = getWord('answers.json');

//Create a new word object with the game word
var constructedWord = new Word(gameWord);

//Display the blank letters and spaces to the user
var maskedMessage = constructedWord.getLetters();
var splitWord = constructedWord.splitWord;

//Set the number of guesses the user can have to guess the letter
var guesses = 7;

//Call the starting function
playGame();


function playGame() {
	console.log('----------------------------------------------------')
	console.log('WORD OR PHRASE TO GUESS')
	console.log(maskedMessage);
	console.log('----------------------------------------------------')
	if(guesses === 0) {
		console.log('YOUR MAN IS HUNG! GAME OVER')
		console.log('THE WORD OR PHRASE WAS ' + constructedWord.word)
		return;
	} 
	if(maskedMessage.join('') === splitWord.join('')) {
		console.log('YOU WON! THE WORD OR PHRASE IS')
		console.log(constructedWord.word)
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
		if(constructedWord.guessed.includes(answer.guess)) {
			console.log('You already guessed that letter, please choose a new letter.')
			guessLetter()
		}
		else {
		checkForLetter(answer.guess);
		}
	})
}

function checkForLetter(letter){
	constructedWord.guessed.push(letter)
	console.log('YOU HAVE GUESSED THESE LETTERS')
	console.log(constructedWord.guessed)
	console.log('----------------------------------------------------')

	if(gameWord.toLowerCase().includes(letter)) {

		for (var i = 0; i < splitWord.length; i++) {	
			if(letter == splitWord[i]) {
				maskedMessage[i] = letter;	
			}
		}
		playGame()
	}
	else {
		guesses --
		console.log('YOU HAVE ' + guesses + ' GUESSES REMAINING')
		playGame()
	}
};

