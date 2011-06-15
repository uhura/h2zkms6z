/**
 * popup.js
 * require: jquery
 *
 * Copyright (c) 2011 uhura.jp. All rights reserved.
 * Licensed under the MIT License.
 */

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

RW.goOptions = function () {
	chrome.tabs.create({url:chrome.extension.getURL("/options.html")});
}