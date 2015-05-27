//========================
//PRELOADER
//========================
$(window).load(function() { // makes sure the whole site is loaded 
  $('#status').delay(700).fadeOut('slow'); // will first fade out the loading animation
  $('#preloader').delay(1000).fadeOut('slow');
    // will fade out the white DIV that covers the website.
  $('body').delay(1000).css({'overflow':'visible'});
})

//========================
//CUSTOM SCROLLBAR
//========================
$("html").niceScroll({
    mousescrollstep: 70,
    cursorcolor: "#ea9312",
    cursorwidth: "5px",
    cursorborderradius: "10px",
    cursorborder: "none"
});

//========================
//SMOOTHSCROLL
//========================
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//========================
//NAVBAR
//========================
(function ($) {
  $(document).ready(function(){

    // hide .navbar first
    $(".navbar").hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 40) {
                $('.navbar')
                .removeClass('animated fadeOutUp')
                .addClass('animated fadeInDown')
                .fadeIn();
                
            } else {
                $('.navbar')
                .removeClass('animated fadeInDown')
                .addClass('animated fadeOutUp')
                .fadeOut();
            }
        });
    });

});
  }(jQuery));

//========================
//icon hover effect
//========================
$('#services img').hover(
       function(){ $(this).addClass('animated pulse infinite') },
       function(){ $(this).removeClass('animated pulse infinite') })

//========================
//window scroll hero background fade
//========================
$(window).on('scroll', function(){
  var topValue = $(window).scrollTop();
  if(topValue > 1800){
    $('.at4-share-outer').css('display', 'block');
  }
  else{
   $('.at4-share-outer').css('display', 'none'); 
  }
  if($(window).width() < 640){
    if(topValue < 1000){
      $('.herocontent').css('display', 'block');
    }
    else{
      $('.herocontent').css('display', 'none');
    }
  }
  if(topValue < 1000){
    var opacityValue = (topValue+1)/600;
    $('.overlay-hero').css('opacity', opacityValue);
  }
  if($(window).width() > 640 && topValue < 450){
    $('.herocontent').css('padding-top',topValue+150)
  }
})
    
// Elevator script included on the page, already.
window.onload = function() {
  var elevator = new Elevator({
    element: document.querySelector('.elevator-button'),
    mainAudio : 'media/elevator.mp3',
    endAudio: 'media/ding.mp3',
    duration: 3000 // milliseconds
  });
}

// Navbar should close after the selected item is clicked
if($(window).width() < 640){
  $('.nav.navbar-nav li a').on('click', function(){
    $('.navbar-header > button').trigger('click');
  })
}

//Initialize wow
new WOW().init();

//Submit contact form
$('.contactitems form').on('submit', function(e){
  e.preventDefault();
  var dataToSend = $(this).serialize();
  $.ajax({
    method: "GET",
    url: "mail.php",
    data: dataToSend
  })
  .done(function() {
    alert( "success" );
  })
  .fail(function() {
    alert( "error" );
  })
})

//Map fo Frazer town
function initialize() {
  var mapCanvas = document.getElementById('map-canvas');
  var mapOptions = {
    center: new google.maps.LatLng(12.9970772, 77.6150905),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var myMarker2 = new google.maps.Marker({
      position: new google.maps.LatLng(12.9970772, 77.6150905),
      map:map,
      title :"Shafeeq here"
  })
}
google.maps.event.addDomListener(window, 'load', initialize);

