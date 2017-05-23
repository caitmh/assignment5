$(document).ready(function(){

//listen for form submit or submit-btn click

$('#submit-btn').click(changeBackground);
//changeBackground



	
	// if it is change the body background image

//changeBackground
function changeBackground(){
	event.preventDefault();


	//get the city-type value
	var city = $('#city-type').val();

//check to see if it is one of our cities

//"San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
//"Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
//"Austin" or "ATX" make the background of the page austin.jpg
//"Sydney" or "SYD" make the background of the page sydney.jpg

	if(city === "New York" || city === "New York City" || city === "NYC"){
		$('body').attr('class', 'nyc');
	}	else if(city === "San Francisco" || city === "SF" || city === "Bay Area"){
		$('body').attr('class', 'sf');
	}	else if(city === "Los Angeles" || city === "LA" || city === "LAX"){
		$('body').attr('class', 'la');
	}	else if(city === "Austin" || city === "ATX"){
		$('body').attr('class', 'austin');
	}	else if(city === "Sydney" || city === "SYD"){
		$('body').attr('class', 'sydney');
	}	else {
		$('body').attr('class', '');
	}

	$('#city-type').val('');

}






});