var map;
var infowindow;
var latitude;
var longitude;
var cinema =0;
var result;

navigator.geolocation.getCurrentPosition(getpostition, doesntwork);

function doesntwork(){
	alert("Please give location permission!!");
	console.log('There is an error when try to get the location!')
}

function getpostition(position) 
	{   
		latitude = position.coords.latitude;
		mui("#shows").progressbar().setProgress(30);
		longitude = position.coords.longitude;
		mui("#shows").progressbar().setProgress(45);
//		sessionStorage.setItem("latitude", "hekki");
//		sessionStorage.setItem("longitude", "heiii");
        console.log('Get current Location sucessful');
     	console.log('your loacation:'+'latitude: '+latitude +'  longitude: '+longitude);
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
    radius: 5000,
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
      cinema = cinema + 1;
      result = results[i];
      console.log(results);
      $("<p style='color: #000000; text-align: left' id='cinematotal'>Name: "+ result.name + " "+" " + " "+ "Rating:" + result.rating + "</br>" +"Address:" + " " + result.vicinity +"</p>").insertAfter("#cinematotal");
    }
  }
    mui("#shows").progressbar().setProgress(100);
    cinemas();
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



 function cinemas(){
	console.log("There are "+ "cinema" +" cinema around you.");
	$("#cinematotal").html("There are " + cinema +" cinemas in total around you:")
	
	
};

