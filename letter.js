
//Create a constructor function that reads the letter and determines if the letter is a blank or not
//Blank spaces should be shown and real letters should be replaced by _
function Letter(letter) {
	this.letter = letter,
	this.display = false

	if (this.letter === ' ') {
		this.display = true
	}
}


Letter.prototype.displayLetter = function(letter,display) {
	if (this.display) {
		return ' '
	} else {
		return '_'
	}
}

//Testing to make sure our functions work
// var letterA = new Letter('a')
// console.log(letterA.displayLetter());

//Export the constructor to make it available for other parts of the application
module.exports = Letter;