/**
 * base.js
 * require: jquery
 */

var Letters = {

	small  : {
		title : 'Small Letters',
		letters : 'abcdefghijklmnopqrstuvwxyz'
	},
	big    : {
		title : 'Big Letters',
		letters : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	},
	number : {
		title : 'Numbers',
		letters : '0123456789'
	},
	symbol : {
		title : 'Symbols',
		letters : '!"#$%&\'()=~|@[]+*{}<>,.?/_'
	}

}

var defaultLetters = Letters.small.letters + Letters.big.letters + Letters.number.letters + Letters.symbol.letters;
var maxLength = 100;
var minLength = 4;
var defaultLength = 8;

var RW = {}; // as Random Words

RW.generate = function () {
	var select_letters = localStorage["select_letters"];
	if (!select_letters) select_letters = defaultLetters;
	var word_length = localStorage["word_length"];
	if(!word_length) word_length = defaultLength;

	var rtn = '';
	
	for(i = 0; i < word_length; i++){
		rtn = rtn + select_letters.charAt(Math.floor( Math.random() * select_letters.length ));
	}
	return rtn;
}