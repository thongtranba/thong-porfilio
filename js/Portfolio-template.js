$(function(){

 // Submit form liên hệ
 $("form").submit(function(event) {
 	/ Act on the event /
        event.preventDefault(); //prevent default action
        var post_url = $(this).attr("action"); //get form action url
        var request_method = $(this).attr("method"); //get form GET/POST method
        var form_data = $(this).serialize(); //Encode form elements for submission
        $(".message").html("Waiting...");
        $("button[type=submit]").attr("disabled", "disabled");
        $.ajax({
        	url: post_url,
        	type: request_method,
        	data: form_data
        })
        .done(function(data) {
        	$(".message").html(data);
        	$("button[type=submit]").removeAttr("disabled");
        });
    });



 toggleBackToTop();

 $(window).scroll(function(envent){
 	console.log($(window).scrollTop());
 	if($(window).scrollTop() >= $("#about").offset().top -50) {
 		$(".navbar").addClass('fixed-top');
 		$("header").addClass('dummy-padding');

 	}
 	else {
 		$(".navbar").removeClass('fixed-top');
 		$("header").removeClass('dummy-padding');
 	}
 	toggleBackToTop();
 });
 $(".backtotop").click(function(event) {
		//vd:  2px/ms
		var v = 2;
		var currentPositionY = $(window).scrollTop();
		var top = 0;
		var distance = currentPositionY - top;
		var duration = distance / v;
		$("html,body").stop().animate({scrollTop:0}, duration);
	});
	// cho thanh menu hiện khi qua trang portfolio
	$("header nav ul li a").click(function(event){
		event.preventDefault();
		var hash = $(this).attr("href");
		if (hash) {
			var target = $(hash);
			targetTop = target.offset().top;
			var v = 2;
			var currentPositionY = $(window).scrollTop();

			var distance = Math.abs(currentPositionY - targetTop);
			var duration = distance / v;
			$("html,body").stop().animate({
				scrollTop: targetTop},
				
				duration, function() {
					window.location.hash = hash;
					/* stuff to do after animation is complete */
				});
			

		}

		// $("html,body").stop().animate({
		// 	scrollTop: 
		// 	param1: value1,
		// 	param2: value2},
		// 	speed, function() {
		// 	/* stuff to do after animation is complete */
		// });
	})
	
});

// hàm backtotop khi giá trị thanh cuộn khác không thì sẽ ẩn nút backtotop
// và ngược lại thì sẽ hiện nút backtotop
function toggleBackToTop() {
	if ($(window).scrollTop() == 0) {
		$(".backtotop").stop().hide();
	}
	else {
		$(".backtotop").stop().show();
	}
}

