

function getUserPosition()
{
	function itWorks(position) 
	{
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
     	console.log('latitude: '+latitude);
     	console.log('longitude: '+longitude);
     	map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: latitude, lng: longitude},
        zoom: 16
       });
 	}

 	function itDoesntWork(error) 
 	{
      	console.log('There is an error '+error);
 	}
    navigator.geolocation.getCurrentPosition(itWorks, itDoesntWork);
}

function init(){
	getUserPosition()
}

window.addEventListener("load",init,false);