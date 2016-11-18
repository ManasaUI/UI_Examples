$('#add_demo').click(function(){
	$('ul').append('<li>Black</li>');
	$('li').css("text-decoration","underline");
});

$('#remove_demo').click(function() {
	// $('select').empty();
	$('select').append('<option>Swimming</option>');
	// body...
});
var arr=[1,2,3,4];
var rItem=2;
console.log("Initial Array:-" +arr);
arr=$.grep(arr,function(value){
return value!=rItem;
});
console.log("Array after removing element:-" +arr);
// $(document).keypress(function(e) {
//     if(e.which == 13) {
//         console.log('You pressed enter!');
//     }
// });

$('tr:even').css('background-color','green');
$('#top').click(function () {
	// body...
	$('body').animate({'scrollTop':"slow"});
});
$('#checkbox_demo').click(function () {
	if($('button').is(':disabled')){
		$('button').removeAttr('disabled');
	}
	else{
		$('button').attr('disabled','disabled');
	}
	// body...
});
function blinkText(){
	$('#h1_demo').fadeOut(500);
	$('#h1_demo').fadeIn(500);
}
setInterval(blinkText,500);

// $('body').click(function () {
// 	window.print();
// 	// body...
// });
$('#text_demo').attr('maxlength',20);
var maxlength=15;
$('textarea').keyup(function () {
	var len=maxlength-$(this).val().length;
	$('#span_demo').text(len);

	// body...
});
function new_div() {
$(document).ready(function() {
  var test = {
    id: "div",
    class: "divclass",
    css: {
      "color": "Green"
    }
  };
  var $div = $("<div>", test);
  $div.html("New Division");
  $("body").append($div);
});
};


$.fn.rowCount = function() {
    return $('tr', $(this).find('tbody')).length;
};

$.fn.columnCount = function() {
    return $('th', $(this).find('tbody')).length;
};
var rowctr = $('#table1').rowCount();
var colctr = $('#table1').columnCount();

console.log('No of Rows:'+rowctr);
console.log('No of Columns:'+colctr);