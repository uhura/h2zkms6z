/**
 * base.js
 * require: jquery, jqueryui
 */


var smallLetters = 'abcdefghijklmnopqrstuvwxyz';
var bigLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var symbols = '!"#$%&\'()=~|@[]+*{}<>,.?/_';
var defaultLetters = smallLetters + bigLetters + numbers + symbols;
var maxLength = 100;
var minLength = 4;
var defaultLength = 8;

var RW = {}; // as Random Words

RW.mkSelectLettersForm = function (targetElementById) {
	
	var select_letters = localStorage["select_letters"];
	if (!select_letters) select_letters = defaultLetters;
	var word_length = localStorage["word_length"];
	if(!word_length) word_length = defaultLength;

	$('#' + targetElementById).append('<h2>Word length</h2>');
	$wordLength = $('<input type="text" id="word-length" size="3" style="text-align: right;" />');
	$wordLength.val(word_length);
	$('#' + targetElementById).append($wordLength).append('letters (MAX:' + maxLength + ', MIN: ' + minLength + ')');

	$('#' + targetElementById).append('<h2>Letters</h2>');
	// smallLetters
	$('#' + targetElementById).append('<h3>Small Letters</h3>');
	$('#' + targetElementById).append('<button onclick="javascript:RW.checkAll(\'smallLetter\', true);">all on</button><button onclick="javascript:RW.checkAll(\'smallLetter\', false);">all off</button><br />');
	$.each(smallLetters, function(i, c){
		$label = $('<label for="'  + c + '" class="letters-block" />');
		$checkbox = $('<input type="checkbox" class="letter-cb smallLetter" />').attr('id', c).attr('value', c);
		if (select_letters.indexOf(c) != -1) $checkbox.attr('checked', true);
		$label.append(c + '<br />');
		$label.append($checkbox);
		$('#' + targetElementById).append($label);
		if ((i + 1) % 13 == 0)  $('#' + targetElementById).append('<br style="clear: both;" />');
	});
	$('#' + targetElementById).append('<br style="clear: both;" />');

	// bigLetters
	$('#' + targetElementById).append('<h3>Big Letters</h3>');
	$('#' + targetElementById).append('<button onclick="javascript:RW.checkAll(\'bigLetter\', true);">all on</button><button onclick="javascript:RW.checkAll(\'bigLetter\', false);">all off</button><br />');
	$.each(bigLetters, function(i, c){
		$label = $('<label for="'  + c + '" class="letters-block" />');
		$checkbox = $('<input type="checkbox" class="letter-cb bigLetter" />').attr('id', c).attr('value', c);
		if (select_letters.indexOf(c) != -1) $checkbox.attr('checked', true);
		$label.append(c + '<br />');
		$label.append($checkbox);
		$('#' + targetElementById).append($label);
		if ((i + 1) % 13 == 0)  $('#' + targetElementById).append('<br style="clear: both;" />');
	});
	$('#' + targetElementById).append('<br style="clear: both;" />');

	// numbers
	$('#' + targetElementById).append('<h3>Numbers</h3>');
	$('#' + targetElementById).append('<button onclick="javascript:RW.checkAll(\'number\', true);">all on</button><button onclick="javascript:RW.checkAll(\'number\', false);">all off</button><br />');
	$.each(numbers, function(i, c){
		$label = $('<label for="'  + c + '" class="letters-block" />');
		$checkbox = $('<input type="checkbox" class="letter-cb number" />').attr('id', c).attr('value', c);
		if (select_letters.indexOf(c) != -1) $checkbox.attr('checked', true);
		$label.append(c + '<br />');
		$label.append($checkbox);
		$('#' + targetElementById).append($label);
		if ((i + 1) % 13 == 0)  $('#' + targetElementById).append('<br style="clear: both;" />');
	});
	$('#' + targetElementById).append('<br style="clear: both;" />');

	// symbols
	$('#' + targetElementById).append('<h3>Symbols</h3>');
	$('#' + targetElementById).append('<button onclick="javascript:RW.checkAll(\'symbol\', true);">all on</button><button onclick="javascript:RW.checkAll(\'symbol\', false);">all off</button><br />');
	$.each(symbols, function(i, c){
		$label = $('<label for="'  + c + '" class="letters-block" />');
		$checkbox = $('<input type="checkbox" class="letter-cb symbol" />').attr('id', c).attr('value', c);
		if (select_letters.indexOf(c) != -1) $checkbox.attr('checked', true);
		$label.append(c + '<br />');
		$label.append($checkbox);
		$('#' + targetElementById).append($label);
		if ((i + 1) % 13 == 0)  $('#' + targetElementById).append('<br style="clear: both;" />');
	});
	$('#' + targetElementById).append('<br style="clear: both;" />');

	// $('#' + targetElementById).html('AWAWCC');
}

RW.save_options = function () {
	var select_letters = '';
	$('.letter-cb').each(function(){
		if ($(this).attr('checked')) select_letters += $(this).val();
	});
	localStorage["select_letters"] = select_letters;

	var word_length = parseInt($('#word-length').val());
	if (isNaN(word_length)) {
		word_length = 8;
	} else if (word_length > maxLength) {
		word_length = maxLength;
	} else if (word_length < minLength) {
		word_length = minLength;
	}
	localStorage["word_length"] = word_length;

	// Update status to let user know options were saved.
	var status = document.getElementById("status");
	status.innerHTML = "Options Saved.";
	setTimeout(function() {
		status.innerHTML = "";
		location.reload();
	}, 750);
}

RW.checkAll = function (class, on) {
	$('.' + class).each(function(){
		if (on) {
			$(this).attr('checked', true);
		} else {
			$(this).attr('checked', false);
		}
	});
}

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