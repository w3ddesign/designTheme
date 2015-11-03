$(document).ready(function() {


	// TOGGLE MENU
	
	$('.icon').click(function(){
		
		$('.icon span').toggleClass('is-active');
		
		$('.overlay-menu').toggleClass('open');
	
	});
	
	// SCROLL MENU
	
	$('.scroll').click(function(e){
		
		e.preventDefault();
		
		$('.overlay-menu').removeClass('open');
		
		$('.icon span').toggleClass('is-active');
		
		$('html,body').animate({
			scrollTop: $(this.hash).offset().top
		}, 2000);
		
	});
	
	// ARROW UP
	$('.top').click(function(e){
		
		e.preventDefault();

		$('html,body').animate({
			scrollTop: $(this.hash).offset().top - 100
		}, 2000);
		
	});
	// BUDGET SLIDER JQUERY UI
	
	var min_value = 800;
	var max_value = 15000;

	$('.budget').slider({
		
		min: min_value,
		max: max_value,
		step: 100,
		
		slide: function(event,ui) {
			
			$('.budget_value').html(ui.value + '  &euro;');
		
		}
	});

});

// SCROLL FUNCTIONS

$(window).scroll(function(){

	var wScroll = $(this).scrollTop();
	
	// LANDING PUZZLE AS USER SCROLLS
	
	if(wScroll > $('.puzzle').offset().top - $(window).height()){

    var offset = (Math.min(0, wScroll - $('.puzzle').offset().top +$(window).height() - 850));

    $('.listen').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.6) +'px)'});

    $('.design').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.1) +'px)'});
		
		$('.learn').css({'transform': 'translate('+ Math.abs(offset * 0.4) +'px, -'+ Math.abs(offset * 0.1) +'px)'});
		
		$('.develop').css({'transform': 'translate(-'+ Math.abs(offset * 0.3) +'px, +'+ Math.abs(offset) +'px)'});
  
	}
	
	// DISPLAY ARROW
	
	if(wScroll > $('#objectives').offset().top){
		
		 $('.arrow').addClass('active');
		 
	}else{
		$('.arrow').removeClass('active');
	}


});