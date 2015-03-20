
$(window).ready( function(){

$('#option_groups').click(function(){
	if ($('#option_groups').hasClass('opt_already_clicked') ){

		$('#option_groups').removeClass('opt_already_clicked');
		$('#option_groups').animate({'height':'50px'} ,500);
	}else{

		$('#option_groups').addClass('opt_already_clicked');
		$('#option_groups').animate( {'height':'500px'} ,2000);
	}

});		


	//Single Line

	/*multiline
	*/

	//$('#option_groups').fadeOut();


