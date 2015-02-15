//Javascript from http://www.paulund.co.uk/create-sticky-notes-to-do-list-in-css-and-jquery
//JSON. Here we go.

$(document).ready(function(){
	
	function createNotes(description){
	var header = '<h1>Weather</h1>';
	var desc = '<p>'+description+'</p>';
	
	var color = new Array();
	color[0] = 'green';
	color[1] = 'blue';
	color[2] = 'yellow';
	color[3] = 'purple';
	
	
	$('.sticky_notes').append('<li class="'+color[randomFromTo(0,(color.length - 1))]+' note">'+header+description+'</li>');
}
	//Add button click event
	$('#addWeather').click(function(){
		
		var position;
		function getLocation() {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(showPosition);
			} else {
				console.log ("no good");
				x.innerHTML = "Geolocation is not supported by this browser.";
			}
		}
		function showPosition(position) {
			
			$.ajax({
				url: "http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&mode=json",	
				dataType: "JSON",
				success: function(result){
					console.log(result.main);
					description = "Temperature: " + result.main.temp + ";    Minimum Temperature: " + result.main.temp_min + ";   Maximum Temperature: " + result.main.temp_max;
					createNotes(description);
				}
			}); 
		}
			getLocation();
			
	});
	
	//Add button click event
	//$('#addNew').click(function(){
		//addNewRow();
	//});
	
	//Refresh notes button click event
	//$('#refreshNotes').click(function(){
		//refreshNotes();
	//});
	$('.sticky_notes').on('click', '.note', function() {
		console.log ("hi");
		$(this).attr("id", 'selected');
	});
	
	//Delete button click event
	$('#deleteWeather').click(function(){
		$('#selected').remove();
	});
});

/*Make a New Note*/
//function addNewRow(){	
	//var numRows = $('#newTasks tr').length;
		
	//$('#newTasks').append('<tr><td><input type="text" id="title-'+numRows+'" /></td><td><input type="text" id="description-'+numRows+'" /></td></tr>');
//}

/*Generate Notes*/
//function refreshNotes(){
	
	//var tableRows = $('#newTasks tr');
	//
	//$('.sticky_notes li').remove();

	//$.each(tableRows,function(i){
		//var title = $(this).find('input[id^="title"]').val();
		//var description = $(this).find('input[id^="description"]').val();
		
		//if(title != undefined && description != undefined){
			//createNotes(title, description);
		//}	
	//});
//}

/*Add Sticky, Random Color*/


/*Random color generator from http://www.paulund.co.uk/create-sticky-notes-to-do-list-in-css-and-jquery*/
function randomFromTo(from, to){
    return Math.floor(Math.random() * (to - from + 1) + from);
 }

/*Delete grandparent of delete button*/
function deleteRow(thisButton){
	thisButton.parent().parent().remove();
}// JavaScript Document