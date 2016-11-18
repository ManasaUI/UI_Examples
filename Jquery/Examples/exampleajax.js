jQuery('#get_data').click(function () {

	jQuery.ajax({
		"type":"GET",
		"url":"data.html",
		"data":{"name":"arun","loc":"india"},
		"success":function(data)
		{
			jQuery('#div_id').html(data);
		}
	});
	// body...
});


