$( document ).ready(function() {
	
	$("#uploadView").hide();

	$("#theUploadButton").click(function(){
		$("#uploadView").show();
		$("#contentView").hide();
	});

	$("#contentButton").click(function(){
		$("#uploadView").hide();
		$("#contentView").show();
	});
	var w = $(document).width();

		$(".indvImg").css("width", "90%");
		$(".indvImg").css("height", w);


	$( window ).resize(function() {
		var w = $(document).width();

		$(".indvImg").css("width", "90%");
		$(".indvImg").css("height", w);

	});

	
});