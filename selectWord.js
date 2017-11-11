var fs = require("fs");


function getWord(filename) {
	fs.readFile(filename, "utf8", function(error, data) {
		if (error) {
	  		return console.log(error);

	  	}
	  	else {
			var listLength = Math.floor(Math.random() * JSON.parse(data).length);
			var gameWord = JSON.parse(data)[listLength].Word_Phrase;
			console.log(gameWord);
	  	}
	})
}

getWord('list.json');

module.exports = getWord;