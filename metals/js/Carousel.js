$(function(){
	var lenght=$(".Carousel>li").length
	$(".Carousel>li").eq(0).stop().animate({
			opacity: "1"
		})
		.siblings().stop().animate({
			opacity: "0"
		})
	var next = 0;
	
	function move(oth) {
		$(".Carousel>li").eq(oth).stop().animate({
				opacity: "1"
		})
		.siblings().stop().animate({
				opacity: "0"
		});
		$(".button_list>li>a").eq(oth).addClass("active").parents("li").siblings("li").find("a").removeClass("active")
	}
	
	$(".button_list>li").click(function() {
		var othis = $(this).index();
		$(this).find("a").addClass("active").parents("li").siblings("li").find("a").removeClass("active")
		move(othis)
	})
	var time = setInterval(mov, 1000)
	
	function mov() {
		next++;
		if(next == lenght) {
			next = 0
		}
		move(next)
	}
	$(".head_banner").hover(function() {
		clearInterval(time)
	}, function() {
		time = setInterval(mov, 1000)
	})
	$(".head_banner").hover(function() {
		clearInterval(time)
	}, function() {
		time = setInterval(mov, 1000)
	})
	/****/

})

	/**/
