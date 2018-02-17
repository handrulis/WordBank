/**
 * 
 */

var sto = [];
var input = "";

$(document).ready(function () {
	var wordMap = new Map();
	var wordList = [];
	//displays the bank when clicked
	$('#testArea').keypress(function(){
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
		wordList = [];
	});
	//test adding word to word list
	//this should be view bank
	$('#addBtn').click(function(){
		
			var li = $("<li></li>");
		  var inputValue = $('#testArea').val();
		 if(!wordList.includes(inputValue)){
				wordList.push(inputValue);
		 }
		  $("testArea").val() = "";

		  var span = $("<span></span>");
		  var txt = $("\u00D7");
		  span.append(txt);
		  span.addClass('close');
		  li.append(span);
		  var close = $("#bankList").find(".close");
		  $('.close').each(function(){
		      var div = this.parentElement;
		      div.style.display = "none";
		  });
	});
	
});	
	

//	//create check boxes next to list items
//	var list = document.querySelector('ul');
//	list.addEventListener('click', function(ev) {
//	  if (ev.target.tagName === 'LI') {
//	    ev.target.classList.toggle('checked');
//	  }
//	}, false);
//	
//	//create new list item when new word is submitted
//	
//	
//	
//	function populateStorage(){
//		localStorage.setItem('sto', test);
//	}
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



