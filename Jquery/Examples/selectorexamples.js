/*selecting the elements by using the id
jQuery('p').html("Hello content chenged for p tag");
id selector
jQuery('#id_demo').html("content is chenged for div tag with id");
selecting the all elements.
jQuery('div *').html("hello will seeeeeeee");
select the all p,h1 elements.
jQuery('p , h1').html("hiiiiiiiiiiiii......");
jQuery('div + p').css({'background-color':'black','color':'red'});*/
//jQuery('*').hide();
jQuery('input').click(function () {
	alert("something clicked....");
	// body...
});
jQuery('button').click(function()
{
	jQuery('h1').clone().appendTo('body');
});
jQuery('h1').click(function()
{
	jQuery('h1').detach();
});
/*jQuery('p').click(function()
{
	jQuery('#para_demo').addClass('intro intro1');
});*/
jQuery('p').click(function()
{
	jQuery('#para_demo').removeClass('cls').addClass('intro intro1');
});
jQuery('#para_demo2').click(function()
{
	jQuery('p').append("<span>Hello Manasa........!</span>");
});
jQuery('img').click(function()
{
	jQuery('img').attr('width','270');
});

