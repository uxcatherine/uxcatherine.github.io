	$(document).ready(function() {
		$(".fancybox").fancybox();

		var windowHeight = $(window).height();

		$.localScroll.defaults.axis = 'y';
				
		$.localScroll({
			target: 'body', // could be a selector or a jQuery object too.
			queue:true,
			duration:800,
			hash:true,
			offset: -5
		});

		$(window).resize(function(){

			windowHeight = $(window).height();
		});

	});