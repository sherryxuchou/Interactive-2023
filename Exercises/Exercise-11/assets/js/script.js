 
//PART 1

$(document).ready(function(){

	// Hide or Show

		$('h1').hide(); 
		$('div').show(); 
		
	// Hide or Show with Fade

		$('h2.red').fadeOut('3000'); //millisecond – 1000ms = 1 second
		
		$('#intro').fadeIn('3000'); 

	//Delay an effect

		$('.secondary').delay('3000').fadeOut('3000');

	//Toggle
	$('img#maru').hover(function() {
		$('img#pig').toggle('3000');
	});

	//Fading Toggle
	$('img#pig').hover(function() {
		$('img#maru').delay('1000').toggle('1000');
	});

	//Click Event to toggle

	$('button#one').click(function(){
			$('div').toggle();
			$('h1').toggle();
	});

	//Leave & Enter
	$('#square').mouseenter(function(){
		$('#circle').fadeOut('3000');
	});

	$('#square').mouseleave(function(){
		$('#circle').fadeIn('3000');
	});


	alert('You just scrolled!');



});



/*
//PART 2 Effects

$(document).ready(function(){

	//$('h1').hide(); 

	$('button#one').click(function(){
		$('div').toggle();
	});

	$('#square').mouseenter(function(){
		$('img#pig').fadeToggle('3000');
	});

	$('#circle').mouseleave(function(){
		$('h1').fadeIn('3000');
	});

	$('#circle').mouseenter(function(){
		$('h1').fadeOut('3000');
	});

});
*/
/*
//PART 3 Hover
$(document).ready(function(){

	$('#square').hover(function(){
		$('img#pig').fadeToggle('3000');
	});

	$('#circle').hover(function(){
		$('h1').fadeOut('3000');
	}, function(){
		$('h1').fadeIn('3000');
	});

});

*/

/*
//PART 4 SCROLL

$(window).scroll(function(){
	alert('You just scrolled!');
});

*/


