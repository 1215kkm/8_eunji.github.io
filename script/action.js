$(document).ready(function(){

//02 MBTI 모달 나와라
	$('.mbti_box').click(function(){
		$('.modal').slideToggle();
		$('.mbti_box').toggleClass('on')
	});







//03웹디자인 화면
	$('#wrap_left section').click(function(){
		var offsetTop = Math.ceil($(this).offset().top)
		console.log(offsetTop)
		console.log($(window).scrollTop())
		var wrapWidth = $('#wrap_left').width();

		$('#wrap').css({width:'200vw', transform:'scale(1)'})
		// $('#wrap #wrap_left').css({width:'50%'})
		$('#wrap #wrap_left .box').css({marginLeft:'0%'});
		// $('#wrap #wrap_right').css({width:'50%'}).hide()

		if(wrapWidth > 1920){
			$('html, body').animate({scrollTop:offsetTop*5},1000);
		} else {
			$('html, body').animate({scrollTop:offsetTop},1000);
		}
	})
	// $('section').mousemove(function(){
	//     console.log($(this).offset().top)
	// })
	$(window).scroll(function(){
		var scrT = $(this).scrollTop();
		if(scrT){
			$('.all').stop().animate({top:scrT+200})
		}
	})

	$('.all').click(function(){
		$('#wrap').css({width:'500vw', transform:'scale(0.2)'})
		$('#wrap #wrap_left').css({width:'50%'});
		$('#wrap #wrap_left .box').css({marginLeft:'30%'});
		$('#wrap #wrap_right').css({width:'50%'}).show()
	});









//풀스크린 메뉴
	$(document).ready(function(){
		$('.EJ_section li').eq(0).click(function(e){
			$('.EJ_box').css({transform:'scale(20) translate('+(30)+'%,'+(20)+'%)'});
			
			setTimeout(function(){
				location.href="01MAIN.html"
			},1300);
			return false;
		})

		$('.EJ_section li').eq(1).click(function(e){
			$('.EJ_box').css({transform:'scale(20) translate('+(30)+'%,'+(-40)+'%)'});
			
			setTimeout(function(){
				location.href="02ABOUTME.html"
			},1300);
			return false;
		})

		$('.EJ_section li').eq(2).click(function(e){
			$('.EJ_box').css({transform:'scale(20) translate('+(-40)+'%,'+(-10)+'%)'});
			
			setTimeout(function(){
				location.href="03WEBDESIGN.html"
			},1300);
			return false;
		})

		$('.EJ_section li').eq(3).click(function(e){
			$('.EJ_box').css({transform:'scale(20) translate('+(-25)+'%,'+(-50)+'%)'});
			
			setTimeout(function(){
				location.href="04Graphic.html"
			},1300);
			return false;
		})
	});

//햄버거 누르면 작동
	$('.hamberg').click(function(){
		$('.EJ_gnb').fadeToggle();
		$('.EJ_bg').toggleClass('on');
		$('.EJ_section').toggleClass('on');
		$('.hamberg').toggleClass('on');
		$('body').toggleClass('scrollFixed');
	 });
		
 //햄버거 누르면 따라오는 메뉴
	//  $(window).scroll(function(){
	// 	var scrT = $(window).scrollTop();
	// 	if(scrT){
	// 		$('.EJ_gnb').stop().animate({top:scrT},)

	// 	}
	// });






//스크롤시 보이기
	var bannerHeight = $("#bannerbox").offset().top; 
	var garoHeight = $("#garobox").offset().top; 

	$(".garobanner .garo img").hide();
	$("#bannerbox ul li").hide();

	$(window).scroll(function(){
		var rollIt = $(this).scrollTop() >= bannerHeight; 
		if(rollIt){ 
			$("#bannerbox ul li").show()
		}

		var rollIt2 = $(this).scrollTop() >= garoHeight; 
		if(rollIt2){ 
			$(".garobanner .garo img").show()
		}
	});

		
//----------------------------------------------------
	











//04그래픽 아이스533
	 $('.ice533_logo').click(function(){
		 $('.ice533_list li , .ice533_list button').fadeIn(500);
	 });
	 $('.ice533_list button ').click(function(){
		$('.ice533_list li , .ice533_list button').fadeOut(500);
	 })



	 $('.detail_page figure').click(function(){
		 $('.detail_view button').fadeIn(300)
	 })
	 $('.detail_view button').click(function(){
		$('.detail_view button').fadeOut(300)
	})




	 $('.detail_page figure').eq(0).click(function(){
		 $('.detail_view li').eq(0).fadeIn(500)
	 })
	 $('.detail_view button').click(function(){
		$('.detail_view li').fadeOut(500)
	 })






 });