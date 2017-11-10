# CLI-Hangman
Hangman command-line game using constructor functions and npm


The completed game should meet the following criteria:

1. The completed game should be able to receive user input using the `inquirer` or `prompt` npm packages.

2. Feel free to use as many different types of constructor functions as you are able to, but at a minimum, you must create the following constructor functions:

  * **Word**: Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.

  * **Letter**: Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.

3. You must keep track of the user's remaining guesses and prompt the user if they would like to end the game if none remain.

4. Each constructor function should be in it's own file and be exported and required wherever needed.

5. Look into [function prototypes](https://www.thecodeship.com/web-development/methods-within-constructor-vs-prototype-in-javascript/) and use them for a few of your constructor's methods.

Pseudocode:
- Words or phrases exists in some sort of separate file (list.json) containing structured data with a hint in addition to the word or phrase.
- Randomly select an entry from that list to get the word or phrase the user will need to guess during the game.
- Display a version of the word or phrase to the user that has the letters replaced by _ and spaces between words.
- Display a hint (maybe immediately or maybe when the user asks for a hint)
- Allow a user to guess letters that are in the word/phrase
	- Letters guessed correctly will replace the placeholder character in the word/phrase
	- Letters guessed incorrectly will be added to a list of letters that have been used and the wrong guesses counter will increment by 1 (alternately the number of guesses remaining could be decremented by 1)
- Display a list of letters that have already been used and do not add to the wrong guess count if the user guesses the same wrong letter.
- Validate user input to ensure that a user is guessing a real letter (not a number or special character)
- Game will end when the user either guesses are down to zero or the user has corrrectly guessed the word
- Ask if user wants to play again when the game ends


Word
These are the attributes associated with the word/phrase:
- letters in the word
- letters the user has guessed
- number of incorrect guesses
- number of correct guesses


Letter
These are the following attributes associated with each individual letter in the word:
- letter?
- space?
- guessed by user?

Every letter in the word should be replaced by a _ until it is guessed
Every space in the phrase should remain present so that the user can visualize the compenent words in the phrase

