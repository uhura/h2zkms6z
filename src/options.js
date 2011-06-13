/**
 * options.js
 * require: base.js, jquery
 */

var RWO = {}; // as Random Words Options

RWO.mkSelectLettersForm = function (targetElementById) {
	
	var select_letters = localStorage["select_letters"];
	if (!select_letters) select_letters = defaultLetters;
	var word_length = localStorage["word_length"];
	if(!word_length) word_length = defaultLength;

	// title
	$('#' + targetElementById).append('<h2>Word length</h2>');
	$wordLength = $('<input type="text" id="word-length" size="3" style="text-align: right;" />');
	$wordLength.val(word_length);
	$('#' + targetElementById).append($wordLength).append('letters (MAX:' + maxLength + ', MIN: ' + minLength + ')');

	// title
	$('#' + targetElementById).append('<h2>Letters</h2>');

	// each letters group
	$.each(Letters, function(kind, v){
		// title
		$('#' + targetElementById).append('<h3>' + v.title + '</h3>');

		// on / off
		$('#' + targetElementById).append('<button onclick="javascript:RWO.checkAll(\'' + kind + '\', true);">all on</button><button onclick="javascript:RWO.checkAll(\'' + kind + '\', false);">all off</button><br />');

		// each letters
		$.each(v.letters, function(i, c){
			$label = $('<label for="'  + c + '" class="letters-block" />');
			$checkbox = $('<input type="checkbox" class="letter-cb ' + kind + '" />').attr('id', c).attr('value', c);
			if (select_letters.indexOf(c) != -1) $checkbox.attr('checked', true);
			$label.append(c + '<br />');
			$label.append($checkbox);
			$('#' + targetElementById).append($label);
			if ((i + 1) % 13 == 0)  $('#' + targetElementById).append('<br style="clear: both;" />');
		});
		
		$('#' + targetElementById).append('<br style="clear: both;" />');
	});

}

RWO.save_options = function () {
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

RWO.checkAll = function (class, on) {
	$('.' + class).each(function(){
		if (on) {
			$(this).attr('checked', true);
		} else {
			$(this).attr('checked', false);
		}
	});
}