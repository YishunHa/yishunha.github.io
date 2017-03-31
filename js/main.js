
var $movies = $("#movies");
var chosefilm= [];
var filmlist = [];
var selectfilm;


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
    	

$(document).ready(function(){
    $("#opendoctorstange").on("tap",function(){
    //selectfilm = JSON.stringify(filmlist["movies"][2]["id"]);
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][2]));
    window.location.assign("html/detail.html"); 
   });
    $("#openFindingDory").on("tap",function(){
    //selectfilm = JSON.stringify(filmlist["movies"][2]["id"]);
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][5]));
    window.location.assign("html/detail.html"); 
   });
    $("#openJackReacher").on("tap",function(){
    //selectfilm = JSON.stringify(filmlist["movies"][2]["id"]);
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][4]));
    window.location.assign("html/detail.html"); 
   });
    $("#openbadmons").on("tap",function(){
    //selectfilm = JSON.stringify(filmlist["movies"][2]["id"]);
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][3]));
    window.location.assign("html/detail.html"); 
   });
    $("#openbenhub").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][6]));
    window.location.assign("html/detail.html"); 
    });
    $("#openfanstasticbeasts").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][7]));
    window.location.assign("html/detail.html"); 
    });
    $("#openTransformersAgeofExtinction").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][8]));
    window.location.assign("html/detail.html"); 
    });
    $("#openIronMan3").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][32]));
    window.location.assign("html/detail.html"); 
    });
    
    $(function (){
    	if (localStorage.getItem('favourite') != null){
    var favouritefilm = JSON.parse(localStorage.getItem('favourite'));
    $("#favouritelist").html(favouritefilm.length);
    	 
		
	}
    
    else { 
    	$("#favouritelist").html("0");
	console.log("you don't have anything in your favourite list");
   
    }
    	
    });
    
    
    
});

        

    	
    	


    


