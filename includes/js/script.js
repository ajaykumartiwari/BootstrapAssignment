
$(function() {
	
	$('#alertMe').click(function(e) {
		
		e.preventDefault();
		
		$('#successAlert').toggle();		
	});
	/*$('#alertMe').click(function(e) {
		
		e.preventDefault();
		
		$('#successAlert').slideUp();		
	});
*/

$(document).ready(function(){
    $('.img-zoom').hover(function() {
        $(this).addClass('transition');
 
    }, function() {
        $(this).removeClass('transition');
    });
  });

	
	$('a.pop').click(function(e) {
		e.preventDefault();
	});
	
	$('a.pop').popover();
	
	$('[rel="tooltip"]').tooltip();
	
	
});