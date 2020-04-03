
  $( '.newsletter input[type="email"]' ).off( '.addClassWhenEmail' );


( function( $, window, document, undefined )
{
'use strict';

var form        = '.newsletter',
    className   = 'newsletter--active',
    email       = 'input[type="email"]';


$( form ).each( function()
{
    var $form   = $( this ),
        $email  = $form.find( email ),
        val     = '';

    $email.on( 'keyup.addClassWhenEmail', function(event)
    {
      
        val = $email.val();
        $form.toggleClass( className, val != '' && /^([\w-\.]+@([\w-]+\.)+[\w-]{2,12})?$/.test( val ) );
    });

});
})( jQuery, window, document );


  $(window).scroll(function(){
    if($(document).scrollTop() > 50){
      $('.nav').addClass('shrink');
    }
    else{
      $('.nav').removeClass('shrink');
    }
  });