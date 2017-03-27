var filmlist = sessionStorage.getItem("chosenFilm2");
var browsetitle = sessionStorage.getItem("browsekind");
var chosenfilm;

filmlist = JSON.parse(filmlist);

$(function (){
   $("#browsetitle").html(browsetitle)
   $("#firstname").html(filmlist[0]["name"])
   $("#secondname").html(filmlist[2]["name"])
   $("#thirdname").html(filmlist[4]["name"])
   $("#firstcover").attr("src",filmlist[0]["cover"])
   $("#secondcover").attr("src",filmlist[2]["cover"])
   $("#thirdcover").attr("src",filmlist[4]["cover"])

});



$(document).ready(function(){
    $("#firstcover").on("tap",function(){
    //selectfilm = JSON.stringify(filmlist["movies"][2]["id"]);
    $.session.set('chosenFilm', JSON.stringify(filmlist[0]));
    window.location.assign("detail.html"); 
   });
    $("#firstcover").click(function(){
    //selectfilm = JSON.stringify(filmlist["movies"][2]["id"]);
    $.session.set('chosenFilm', JSON.stringify(filmlist[0]));
    window.location.assign("detail.html"); 
   });
    $("#secondcover").on("tap",function(){
    //selectfilm = JSON.stringify(filmlist["movies"][2]["id"]);
    $.session.set('chosenFilm', JSON.stringify(filmlist[2]));
    window.location.assign("detail.html"); 
   });
    $("#secondcover").click(function(){
    //selectfilm = JSON.stringify(filmlist["movies"][2]["id"]);
    $.session.set('chosenFilm', JSON.stringify(filmlist[2]));
    window.location.assign("detail.html"); 
   });
    $("#thirdcover").on("tap",function(){
    //selectfilm = JSON.stringify(filmlist["movies"][2]["id"]);
    $.session.set('chosenFilm', JSON.stringify(filmlist[4]));
    window.location.assign("detail.html"); 
   });
    $("#thirdcover").click(function(){
    //selectfilm = JSON.stringify(filmlist["movies"][2]["id"]);
    $.session.set('chosenFilm', JSON.stringify(filmlist[4]));
    window.location.assign("detail.html"); 
   });
});

