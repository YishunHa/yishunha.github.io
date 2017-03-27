
var $movies = $("#movies");
var chosefilm= [];
var filmlist = [];
var selectfilm;


//$(function (){
	

	$.getJSON("../data/detail.json", function(json){
//   $movies.append('<img' + ' ' + 'src="' + json.movies[].cover  + '" >')
//   alert("JSON Data: " + json.movies[0].name);
     filmlist = json;
     });


$(document).ready(function(){
    $("#openAction").on("tap",function(){
    //selectfilm = JSON.stringify(filmlist["movies"][2]["id"]);
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"]));
    $.session.set('browsekind', "Action");
    window.location.assign("BrowseDetail.html"); 
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
});

        

    	
    	


    


