$(document).ready(function(){
    $("#text_demo").click(function(){
    	text1="<p>Text1</p>";
    	text2=document.createElement('p');
    	text2.innerHTML="Text2";
    	text3=$('<p></p>').text('Text3');
      $("#h1_demo").prepend(text1,text2,text3);
    });
    $("#html_demo").click(function(){
        alert("HTML: " + $("h1").attr('id'));
    });
    $('#value_demo').click(function(){
    	$('input').val('Reddy');
    });
    $('div').click(function(){
    	$(this).toggleClass('div_demo');

    });
});

