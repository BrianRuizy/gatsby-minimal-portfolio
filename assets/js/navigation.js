$(document).ready(function(){

	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		 if ($(this).scrollTop() > 80) {
			  $('.top-bar-home').addClass('scrolled');
		 } else {
			  $('.top-bar-home').removeClass('scrolled');
		 }
	});
 
 });		
 
		
  
 // Open/close navigation when clicked .nav-icon
	$(document).ready(function(){
		$('.nav-icon').click(function(){
            $('.nav-icon').toggleClass('active');
				$("#menu").toggleClass('active');
				$("body").toggleClass('active');
		});
  });

  
  $(document).ready(function(){
	// Select all links with hashes
	$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function(event) {
	// On-page links
	if (
		 location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		 && 
		 location.hostname == this.hostname
	) {
		 // Figure out element to scroll to
		 var target = $(this.hash);
		 target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		 // Does a scroll target exist?
		 if (target.length) {
		 // Only prevent default if animation is actually gonna happen
		 event.preventDefault();
		 $('html, body').animate({
			  scrollTop: target.offset().top -0
		 }, 500, function() {
			  // Callback after animation
			  // Must change focus!
			  var $target = $(target);
			  $target.focus();
		 });
		 }
	}
	});
});

$(document).ready(function(){
	window.addEventListener( "pageshow", function ( event ) {
	  var historyTraversal = event.persisted || 
	                         ( typeof window.performance != "undefined" && 
	                              window.performance.navigation.type === 2 );
	  if ( historyTraversal ) {
	    // Handle page restore.
	    window.location.reload();
	  }
	});
});

$(document).ready(function(){
	$(window).load(function(){
		 $("body").addClass("loaded");
	});
});

	
 $(document).ready(function() {
	$(".animatelink").click(function(e) {
		 e.preventDefault();
		 $link = $(this).attr("href");
		 $(".overlayclick").animate({height: '100%'},500,function(){
			window.location =  $link; 
		 });
	});
 });

 $(document).ready(function() {
	$(".animatemenu").click(function(e) {
		 e.preventDefault();
		 $link = $(this).attr("href");
		 $(".overlaymenu").hide().fadeIn(250,function(){
			window.location =  $link; 
		 });
	});
 });

