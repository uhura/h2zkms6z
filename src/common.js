/**
 * common.js
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