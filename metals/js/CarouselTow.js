$(function(){
	var lenght=$(".module8_boxRight_sliderB>li").length-1
	$(".module8_boxRight_sliderB>li").eq(0).stop().animate({
			opacity: "1"
		})
		.siblings().stop().animate({
			opacity: "0"
		})
	var next = 0;
	
	function move(oth) {
		$(".module8_boxRight_sliderB>li").eq(oth).stop().animate({
				opacity: "1"
		})
		.siblings().stop().animate({
				opacity: "0"
		});
	}
	$(".module8_boxRight_slider>.left").click(function(){
		if(next==0){
			next=lenght
		}else{
			next--
		}
		move(next)
	})
	$(".module8_boxRight_slider>.right").click(function(){
		if(next==lenght){
			next=0
		}else{
		 next++			
		}
		move(next)
	})
	var time = setInterval(mov, 1000)
	
	function mov() {
		next++;
		if(next == lenght) {
			next = 0
		}
		move(next)
	}
	$(".module8_boxRight_slider").hover(function() {
		clearInterval(time)
	}, function() {
		time = setInterval(mov, 1000)
	})
	
})

	
