
var $movies = $("#movies");
var chosefilm= [];
var filmlist = [];
var store;


	

$.getJSON("../data/detail.json", function(json){

     filmlist = json;
     });


$(document).ready(function(){  //page navagation
    $("#openAction").on("tap",function(){
    store = 0;
    $.session.set('chosenFilm2', JSON.stringify(filmlist["movies"]));
    $.session.set('browsekind', "Action");
    $.session.set('chosenkind', store);
    window.location.assign("BrowseDetail.html"); 
   });
    $("#openAction").click(function(){
    store = 0;
    $.session.set('chosenFilm2', JSON.stringify(filmlist["movies"]));
    $.session.set('browsekind', "Action");
    $.session.set('chosenkind', store);
    window.location.assign("BrowseDetail.html"); 
   });
    $("#openAnimation").on("tap",function(){
    store = 1;
    $.session.set('chosenFilm2', JSON.stringify(filmlist["movies"]));
    $.session.set('browsekind', "Animation");
    $.session.set('chosenkind', store);
    window.location.assign("BrowseDetail.html"); 
   });
    $("#openAnimation").click(function(){
    store = 1;
    $.session.set('chosenFilm2', JSON.stringify(filmlist["movies"]));
    $.session.set('browsekind', "Animation");
    $.session.set('chosenkind', store);
    window.location.assign("BrowseDetail.html"); 
   });
    $("#openClassics").on("tap",function(){
    store = 2;
    $.session.set('chosenFilm2', JSON.stringify(filmlist["movies"]));
    $.session.set('browsekind', "Classics");
    $.session.set('chosenkind', store);
    window.location.assign("BrowseDetail.html"); 
   });
    $("#openClassics").click(function(){
    store = 2;
    $.session.set('chosenFilm2', JSON.stringify(filmlist["movies"]));
    $.session.set('browsekind', "Classics");
    $.session.set('chosenkind', store);
    window.location.assign("BrowseDetail.html"); 
   });
   $("#openComedy").on("tap",function(){
    store = 3;
    $.session.set('chosenFilm2', JSON.stringify(filmlist["movies"]));
    $.session.set('browsekind', "Comedy");
    $.session.set('chosenkind', store);
    window.location.assign("BrowseDetail.html"); 
   });
    $("#openComedy").click(function(){
    store = 3;
    $.session.set('chosenFilm2', JSON.stringify(filmlist["movies"]));
    $.session.set('browsekind', "Comedy");
    $.session.set('chosenkind', store);
    window.location.assign("BrowseDetail.html"); 
   });
   $("#openDrama").on("tap",function(){
    store = 4;
    $.session.set('chosenFilm2', JSON.stringify(filmlist["movies"]));
    $.session.set('browsekind', "Drama");
    $.session.set('chosenkind', store);
    window.location.assign("BrowseDetail.html"); 
   });
    $("#openDrama").click(function(){
    store = 4;
    $.session.set('chosenFilm2', JSON.stringify(filmlist["movies"]));
    $.session.set('browsekind', "Drama");
    $.session.set('chosenkind', store);
    window.location.assign("BrowseDetail.html"); 
   });
   $("#openHorror").on("tap",function(){
    store = 5;
    $.session.set('chosenFilm2', JSON.stringify(filmlist["movies"]));
    $.session.set('browsekind', "Horror");
    $.session.set('chosenkind', store);
    window.location.assign("BrowseDetail.html"); 
   });
    $("#openHorror").click(function(){
    store = 5;
    $.session.set('chosenFilm2', JSON.stringify(filmlist["movies"]));
    $.session.set('browsekind', "Horror");
    $.session.set('chosenkind', store);
    window.location.assign("BrowseDetail.html"); 
   });
   $("#openIndependent").on("tap",function(){
    store = 6;
    $.session.set('chosenFilm2', JSON.stringify(filmlist["movies"]));
    $.session.set('browsekind', "Independent");
    $.session.set('chosenkind', store);
    window.location.assign("BrowseDetail.html"); 
   });
    $("#openIndependent").click(function(){
    store = 6;
    $.session.set('chosenFilm2', JSON.stringify(filmlist["movies"]));
    $.session.set('browsekind', "Independent");
    $.session.set('chosenkind', store);
    window.location.assign("BrowseDetail.html"); 
    });
    $("#openMusic").on("tap",function(){
    store = 7;
    $.session.set('chosenFilm2', JSON.stringify(filmlist["movies"]));
    $.session.set('browsekind', "Music");
    $.session.set('chosenkind', store);
    window.location.assign("BrowseDetail.html"); 
   });
    $("#openMusic").click(function(){
    store = 7;
    $.session.set('chosenFilm2', JSON.stringify(filmlist["movies"]));
    $.session.set('browsekind', "Music");
    $.session.set('chosenkind', store);
    window.location.assign("BrowseDetail.html"); 
    });
    $("#openMystery").on("tap",function(){
    store = 8;
    $.session.set('chosenFilm2', JSON.stringify(filmlist["movies"]));
    $.session.set('browsekind', "Mystery");
    $.session.set('chosenkind', store);
    window.location.assign("BrowseDetail.html"); 
   });
    $("#openMystery").click(function(){
    store = 8;
    $.session.set('chosenFilm2', JSON.stringify(filmlist["movies"]));
    $.session.set('browsekind', "Mystery");
    $.session.set('chosenkind', store);
    window.location.assign("BrowseDetail.html"); 
    });
    $("#openRomance").on("tap",function(){
    store = 9;
    $.session.set('chosenFilm2', JSON.stringify(filmlist["movies"]));
    $.session.set('browsekind', "Romance");
    $.session.set('chosenkind', store);
    window.location.assign("BrowseDetail.html"); 
   });
    $("#openRomance").click(function(){
    store = 9;
    $.session.set('chosenFilm2', JSON.stringify(filmlist["movies"]));
    $.session.set('browsekind', "Romance");
    $.session.set('chosenkind', store);
    window.location.assign("BrowseDetail.html"); 
    });
    $("#openSifi").on("tap",function(){
    store = 10;
    $.session.set('chosenFilm2', JSON.stringify(filmlist["movies"]));
    $.session.set('browsekind', "Si-Fi");
    $.session.set('chosenkind', store);
    window.location.assign("BrowseDetail.html"); 
   });
    $("#openSifi").click(function(){
    store = 10;
    $.session.set('chosenFilm2', JSON.stringify(filmlist["movies"]));
    $.session.set('browsekind', "Si-Fi");
    $.session.set('chosenkind', store);
    window.location.assign("BrowseDetail.html"); 
    });
    $("#openSport").on("tap",function(){
    store = 11;
    $.session.set('chosenFilm2', JSON.stringify(filmlist["movies"]));
    $.session.set('browsekind', "Sport");
    $.session.set('chosenkind', store);
    window.location.assign("BrowseDetail.html"); 
   });
    $("#openSport").click(function(){
    store = 11;
    $.session.set('chosenFilm2', JSON.stringify(filmlist["movies"]));
    $.session.set('browsekind', "Sport");
    $.session.set('chosenkind', store);
    window.location.assign("BrowseDetail.html"); 
    });
});

        

    	
    	


    


