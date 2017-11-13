var fs = require("fs");

function getWord(filename) {
	var data = fs.readFileSync(filename, "utf8")
	var listLength = Math.floor(Math.random() * JSON.parse(data).length);
	var gameWord = JSON.parse(data)[listLength];
	return gameWord;
}


module.exports = getWord;