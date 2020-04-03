



  $(window).scroll(function(){
    if($(document).scrollTop() > 50){
      $('.nav').addClass('shrink');
    }
    else{
      $('.nav').removeClass('shrink');
    }
  });



// navbar mobile

$(".mobile-navbar").on("click", function(event){
  event.preventDefault();
  $(".menu-items").slideToggle();
});
$(".paintings-mobile-link").click("click", function(){
  $(".paintings-mobile-menu").slideToggle();
});
$(".exhibitions-mobile-link").click("click", function(){
  $(".exhibitions-mobile-menu").slideToggle();
});
$(".fa-times").click("click", function(){
  $(".menu-items").slideToggle();
});
$(".paintings-mobile-menu a").click("click", function(){
  $(".menu-items").slideToggle();
});


