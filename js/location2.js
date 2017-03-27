var infowindow;
var map;

function UserPosition()
{
	function itWorks(position) 
	{
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
     	console.log('latitude: '+latitude);
     	console.log('longitude: '+longitude);
     	var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: latitude, lng: longitude},
        zoom: 13,
        disableDefaultUI: true,
        zoomControl: true,
        scaleControl: true,
       });
//      var marker = new google.maps.Marker({
//      position: {lat: latitude, lng: longitude},
//      animation: google.maps.Animation.DROP,
//      map: map,
//      title: 'Click to zoom'
//      });
          infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
        location: {lat: 53.641313700000005, lng: -1.7764444},
        radius: 10000,
          types: ['movie_theater']
        }, callback);
 	}


   	function itDoesntWork(error) 
   	{
      	console.log('There is an error '+error);
   	}
    navigator.geolocation.getCurrentPosition(itWorks, itDoesntWork);
}
     function callback(results, status) {
     if (status === google.maps.places.PlacesServiceStatus.OK) {
       for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
        }
        }
     }

     function createMarker(place) {
     var placeLoc = place.geometry.location;
     var marker = new google.maps.Marker({
     map: map,
     position: place.geometry.location
    });
    
    google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
     });
    }

//function init(){
//	UserPosition()
//}

//window.addEventListener("load",init,false);