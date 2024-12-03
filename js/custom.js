// Header menu js //
	$(document).ready(function() {
		$(function($) {
		  let url = window.location.href;
		  $('.header_sec .navbar .navbar-nav > li > a').each(function() {
			if (this.href === url) {
			  $(this).closest('li').addClass('active');
			}
		  });
		});
	});

	$('.header_sec .navbar .dropdown > .dropdown-toggle').click(function () {
		window.location = $(this).attr('href');
	});
// Sticky-Header js //
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
		   $('.header_sec').addClass('header_sticky');
		} else {
		   $('.header_sec').removeClass('header_sticky');
		}
	});


	// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// owl-carousel js
$(document).ready(function() {
	var owl = $('.owl-carousel');
	$('.testiSlide').owlCarousel({
		loop:true,
		autoplay:true,
		margin:0,
		nav:false,
		dots:true,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			1024:{
				items:2
			}
		}
	});
});

$(function(){
	setTimeout("$('.loader').fadeOut('slow')", 500) 
  })
  
AOS.init();


//Video Modal js
$('.btn-close').click(function() {
	$('#video').attr('src', ''); 
 });
 $(window).click(function() {
	$('#video').attr('src', ''); 
 });
 
 $(document).ready(function() {
	 // Gets the video src from the data-src on each button
	 var $videoSrc;  
	 $('.video-btn').click(function() {
		 $videoSrc = $(this).data( "src" );
	 });
	 console.log($videoSrc);
	 // when the modal is opened autoplay it  
	 $('#myModal').on('shown.bs.modal', function (e) {
	 // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
	 $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
	 })
	 // stop playing the youtube video when I close the modal
	 $('#myModal').on('hide.bs.modal', function (e) {
		 // a poor man's stop video
		 $("#video").attr('src',$videoSrc); 
	 }) 
	 // document ready  
 });




 