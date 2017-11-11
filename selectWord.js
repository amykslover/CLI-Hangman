var fs = require("fs");

var gameWord;
var gameWordCount;
var gameWordHint;

//Get the random word or phrase from our json file
// var getWord = function(file) {
// 	fs.readFile(file, "utf8", function(error, data) {
// 		if (error) {
// 	  		return console.log(error);
// 	  	}
// 	  	var listLength = JSON.parse(data).length;
// 	  	var listWord = Math.floor(Math.random() * listLength);

// 		return gameWord = JSON.parse(data)[listWord].word;
// 		return gameWordCount = JSON.parse(data)[listWord].countofwords;
// 		return gameWordHint = JSON.parse(data)[listWord].hint;

// 	});
// }

var getWord = function(file) {
  	var listLength = file.length;
  	var listWord = Math.floor(Math.random() * listLength);
	return gameWord = file[listWord];
}

module.exports = getWord;