
var $movies = $("#movies");
var chosefilm= [];
var filmlist = [];


//$(function (){
	

//	$.ajax({
//	
//	type: 'GET',
//	url:'data/detail.json',
//	success: function(movies){
//		$.each(movies,function(i,order){
//		  $movies.append('<img' + ' ' + 'src="' + order.cover  + '" >')
//			
//		});
//	}
//	
//	});
	$.getJSON("data/detail.json", function(json){
//   $movies.append('<img' + ' ' + 'src="' + json.movies[].cover  + '" >')
//   alert("JSON Data: " + json.movies[0].name);
     filmlist = json;
     });

    	$(function (){
//    $("#movies").append('<img' + ' ' + 'src="' + filmlist["movies"][0].cover + ''  + '" >');
//     localStorage.setItem("chosenFilm", JSON.stringify(filmlist["movies"][0]));
//     $("#opendoctorstange").click(function(){
//  	     localStorage.setItem("chosenFilm", JSON.stringify(filmlist["movies"][0]));
//  	     window.location.assign("html/Doctor Strange.html"); 
//  	     console.log("heell");
//      });
    	});
    	
function navigation(){
//	document.getElementById('opendoctorstange').addEventListener('click',function(){
//	window.location.assign("html/detail.html");
//	sessionStorage.setItem("chosenFilm", JSON.stringify(filmlist["movies"][2]));
//  })
    $("#opendoctorstange").click()(function(){
    sessionStorageStorage.setItem("chosenFilm", JSON.stringify(filmlist["movies"][2]));
    window.location.assign("html/detail.html"); 
    });
//	document.getElementById('openfanstasticbeasts').addEventListener('tap',function(){
//	window.location.assign("html/detail.html");
//	sessionStorage.setItem("chosenFilm", JSON.stringify(filmlist["movies"][0]));
    $("#openfanstasticbeasts").click(function(){
    localStorage.setItem("chosenFilm", JSON.stringify(filmlist["movies"][0]));
    window.location.assign("html/detail.html"); 
    });
   };

$(document).ready(function(){
    $("#opendoctorstange").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][2]));
    window.location.assign("html/detail.html"); 
   });
   
    $("#openfanstasticbeasts").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][0]));
    window.location.assign("html/detail.html"); 
    });
});

        

    	
    	


    


