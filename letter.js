


function Letters(letter) {
	this.letter = letter,
	if(this.letter = ' ') {
		show '  '
	}
	else {
		show '__'
	}

}

//Export the constructor to make it available for other parts of the application
module.exports = Letters;