/**
 * 
 */
var wordMap = new Map();
var sto = [];
var input = "";
$(document).ready(function () {
	$('#viewBank').click(function() {
		$('#bank').html(Array.from(wordMap).join(", "));
	});
	
	$('#hideBank').click(function() {
		$('#bank').html("");
	});
	
//	$('.stored').keyup(function () {
//	    localStorage[$(this).attr('name')] = $(this).val();
//	});

//	$('#wordBankTest').submit(function() {
//		test.push([$(this).attr('name')]);
//	});
	$('#submit').click(function() {
		input = $('#testArea').val();
		//check to see if the word has been entered before
		var val = wordMap.get(input) + 1;
		if(!wordMap.has(input)){
			wordMap.set(input, 1);
		}
		else{
			wordMap.set(input, val);
		}
	});
	
	function populateStorage(){
		localStorage.setItem('sto', test);
	}
});

