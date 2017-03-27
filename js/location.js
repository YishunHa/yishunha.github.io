var map;
var infowindow;
var latitude;
var longitude;

navigator.geolocation.getCurrentPosition(getpostition);

function getpostition(position) 
	{   
		latitude = position.coords.latitude;
		mui("#shows").progressbar().setProgress(30);
		longitude = position.coords.longitude;
		mui("#shows").progressbar().setProgress(45);
//		sessionStorage.setItem("latitude", "hekki");
//		sessionStorage.setItem("longitude", "heiii");
     	console.log('latitude: '+latitude);
     	console.log('longitude: '+longitude);
        initMap();
    }


function initMap() {
  var pyrmont = {lat: latitude, lng: longitude};

  map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 13,
    disableDefaultUI: true,
    zoomControl: true,
    scaleControl: true,
  });
    mui("#shows").progressbar().setProgress(55)
  infowindow = new google.maps.InfoWindow();

  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: pyrmont,
    radius: 200000,
    types: ['movie_theater']
  }, callback);
  

}

function callback(results, status) {
      var marker2 = new google.maps.Marker({
      position: {lat: 53.641313700000005, lng: -1.7764444},
        animation: google.maps.Animation.DROP,
        map: map,
        title: 'Current location'
        });
       google.maps.event.addListener(marker2, 'click', function() {
       infowindow.setContent("You are here");
       infowindow.open(map, this);
       });
     mui("#shows").progressbar().setProgress(85);
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
    mui("#shows").progressbar().setProgress(100);

}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,

  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });

}

