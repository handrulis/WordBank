/**
 * 
 */


var input = "";

$(document).ready(function () {
	var wordMap = new Map();
	var wordList = [];
	var sto = [];
	var storedWords;
	
	function init() {
        if (localStorage.getItem('storedWords') != null) {
            wordList = localStorage.getItem('storedWords').split(",");
        }
    }
	init();
	//displays the bank when clicked
	$('#testArea').click(function(){
		$('#testArea').val("");
	});
	$('#viewBank').click(function() {
//		$('#bank').html(Array.from(wordMap).join(", "));
		$('#bankList ul').empty();
		 $.each(wordList, function(key, value) {
			    var word = value;
			    $('#bankList ul').append('<li>').append(word).append('</li>');
		  });
	});
	//hides the bank when clicked
	$('#hideBank').click(function() {
		//$('#bank').html("");
		$('#bankList ul').empty();
	});
	//add word the word map when clicked
//	$('#submit').click(function() {
//		input = $('#testArea').val();
//		//check to see if the word has been entered before
//		var val = wordMap.get(input) + 1;
//		if(!wordMap.has(input)){
//			wordMap.set(input, 1);
//		}
//		else{
//			wordMap.set(input, val);
//		}
//	});
	//clear the word bank
	$('#clearBank').click(function() {
		$('#bankList ul').empty();
		localStorage.clear();
		wordList = [];
	});
	//test adding word to word list
	//this should be view bank
	$('#addBtn').click(function(){
			var li = $("<li></li>");
		  var inputValue = $('#testArea').val();
		 if(!wordList.includes(inputValue)){
				wordList.push(inputValue);
				localStorage.setItem('storedWords', wordList.toString());
		 }
		  $("testArea").val() = "";
		//create a close button next to each list item
		  var span = $('<span>\u00D7</span>');
		  span.addClass('close');
		  li.append(span);
		  var close = $("#bankList").find(".close");
		  $('.close').each(function(){
		      var div = this.parentElement;
		      div.style.display = "none";
		  });
	});

});	
	


//	var list = document.querySelector('ul');
//	list.addEventListener('click', function(ev) {
//	  if (ev.target.tagName === 'LI') {
//	    ev.target.classList.toggle('checked');
//	  }
//	}, false);
//	
	
//	
//});
//
////create an x next to each list item
////var wordList = document.getElementsByTagName('LI');
////var i;
////for(i  = 0; i < wordList.length; i++){
////	var removeBox = document.createElement('SPAN');
////	var removeText = document.createTextNode("\u00D7");
////	span.className = "remove";
////	span.appendChild(removeText);
////	wordList[i].appendChild(removeBox);
////}
//var myNodelist = document.getElementsByTagName("LI");
//var i;
//for (i = 0; i < myNodelist.length; i++) {
//  var span = document.createElement("SPAN");
//  var txt = document.createTextNode("\u00D7");
//  span.className = "close";
//  span.appendChild(txt);
//  myNodelist[i].appendChild(span);
//}



