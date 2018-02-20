$ (function(){

	$('.icone').hover (function(){
		$(this).animate({
			"width":100,
			"height":120,
			"margin-top":-30
		}, 200);
	}, function(){
	
		$(this).animate({
			"width":90,
			"height":70,
			"margin-top":0
		}, 500);
	});

	$('.img').hover (function(){
		$(this).animate({
			"width":120,
			"height":120,
			"margin-top":-30
		}, 200);
	}, function(){
	
		$(this).animate({
			"width":80,
			"height":80,
			"margin-top":0
		}, 500);
	});

$ ('.icone').bind('click', function(){
 		alert ("Oláaaaa")

 	});


});



