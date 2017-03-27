
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

    	$(function (){
//    $("#movies").append('<img' + ' ' + 'src="' + filmlist["movies"][0].cover + ''  + '" >');
//     localStorage.setItem("chosenFilm", JSON.stringify(filmlist["movies"][0]));
//     $("#opendoctorstange").click(function(){
//  	     localStorage.setItem("chosenFilm", JSON.stringify(filmlist["movies"][0]));
//  	     window.location.assign("html/Doctor Strange.html"); 
//  	     console.log("heell");
//      });
    	});
    	
//function navigation(){
////	document.getElementById('opendoctorstange').addEventListener('click',function(){
////	window.location.assign("html/detail.html");
////	sessionStorage.setItem("chosenFilm", JSON.stringify(filmlist["movies"][2]));
////  })
//  $("#opendoctorstange").click()(function(){
//  	
//  sessionStorageStorage.setItem("chosenFilm", JSON.stringify(filmlist["movies"][2]));
//  window.location.assign("html/detail.html"); 
//  });
////	document.getElementById('openfanstasticbeasts').addEventListener('tap',function(){
////	window.location.assign("html/detail.html");
////	sessionStorage.setItem("chosenFilm", JSON.stringify(filmlist["movies"][0]));
//  $("#openfanstasticbeasts").click(function(){
//  localStorage.setItem("chosenFilm", JSON.stringify(filmlist["movies"][0]));
//  window.location.assign("html/detail.html"); 
//  });
// };

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
});

        

    	
    	


    


