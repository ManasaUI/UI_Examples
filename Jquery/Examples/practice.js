
$('ol li:first-child').css('background-color','blue');
$('h1:first').css('background-color','red');
$('input').focus(function(){
	$(this).css('background-color','#566573');

});
$('input').blur(function(){
	$(this).css('background-color','#EDBB99');

});
$('#table_demo').click(function(){
	$('table').toggle(5000);
	$('tr:even').css('background-color','green');
});
$('p').on({
	mouseenter:function(){
	$(this).css('font-family','courier');
},
mouseleave:function(){
	$(this).css('font-family','arial');
}
});
$('#demo').click(function(){
	$('#fade_demo').fadeToggle(3000);
});
$(document).ready(function(){
    $('#demo2').click(function(){
        $('#animate_demo').animate({left: '250px'});
    });
});
$(document).ready(function(){
    $("button").click(function(){
        $("#h2_demo").css("color", "red").slideUp(2000).slideDown(2000);
    });
});