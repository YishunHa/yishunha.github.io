var filmlist = sessionStorage.getItem("chosenFilm2");
var browsetitle = sessionStorage.getItem("browsekind");
var chosenfilm;
var chosenkind = sessionStorage.getItem("chosenkind");

filmlist = JSON.parse(filmlist);

$(function(){
	switch(chosenkind) {
    case "0":
           $("#browsetitle").html(browsetitle)
           $("#firstname").html(filmlist[0]["name"])
           $("#secondname").html(filmlist[2]["name"])
           $("#thirdname").html(filmlist[4]["name"])
           $("#fourthname").html(filmlist[13]["name"])
           $("#fifthname").html(filmlist[31]["name"])
           $("#firstcover").attr("src",filmlist[0]["cover"])
           $("#secondcover").attr("src",filmlist[2]["cover"])
           $("#thirdcover").attr("src",filmlist[4]["cover"])
           $("#fourthcover").attr("src",filmlist[13]["cover"])
           $("#fifthcover").attr("src",filmlist[31]["cover"])
        break;
    case "1":
           $("#browsetitle").html(browsetitle)
           $("#firstname").html(filmlist[5]["name"])
           $("#secondname").html(filmlist[8]["name"])
           $("#firstcover").attr("src",filmlist[5]["cover"])
           $("#secondcover").attr("src",filmlist[8]["cover"])

        break;
    case "2":
           $("#browsetitle").html(browsetitle)
           $("#firstname").html(filmlist[9]["name"])
           $("#secondname").html(filmlist[10]["name"])
           $("#thirdname").html(filmlist[11]["name"])
           $("#fourthname").html(filmlist[12]["name"])
           $("#firstcover").attr("src",filmlist[9]["cover"])
           $("#secondcover").attr("src",filmlist[10]["cover"])
           $("#thirdcover").attr("src",filmlist[11]["cover"])
           $("#fourthcover").attr("src",filmlist[12]["cover"])
        break;
    case "3":
           $("#browsetitle").html(browsetitle)
           $("#firstname").html(filmlist[3]["name"])
           $("#secondname").html(filmlist[7]["name"])
           $("#thirdname").html(filmlist[14]["name"])
           $("#firstcover").attr("src",filmlist[3]["cover"])
           $("#secondcover").attr("src",filmlist[7]["cover"])
           $("#thirdcover").attr("src",filmlist[14]["cover"])
        break;
     case "4":
           $("#browsetitle").html(browsetitle)
           $("#firstname").html(filmlist[1]["name"])
           $("#secondname").html(filmlist[6]["name"])
           $("#firstcover").attr("src",filmlist[1]["cover"])
           $("#secondcover").attr("src",filmlist[6]["cover"])

        break;
     case "5":
           $("#browsetitle").html(browsetitle)
           $("#firstname").html(filmlist[15]["name"])
           $("#secondname").html(filmlist[16]["name"])
           $("#thirdname").html(filmlist[17]["name"])
           $("#firstcover").attr("src",filmlist[15]["cover"])
           $("#secondcover").attr("src",filmlist[16]["cover"])
           $("#thirdcover").attr("src",filmlist[17]["cover"])
        break;
      case "6":
           $("#browsetitle").html(browsetitle)
           $("#firstname").html(filmlist[18]["name"])
           $("#secondname").html(filmlist[19]["name"])
           $("#firstcover").attr("src",filmlist[18]["cover"])
           $("#secondcover").attr("src",filmlist[19]["cover"])
        break;
       case "7":
           $("#browsetitle").html(browsetitle)
           $("#firstname").html(filmlist[20]["name"])
           $("#secondname").html(filmlist[21]["name"])
           $("#firstcover").attr("src",filmlist[20]["cover"])
           $("#secondcover").attr("src",filmlist[21]["cover"])
        break;
        case "8":
           $("#browsetitle").html(browsetitle)
           $("#firstname").html(filmlist[22]["name"])
           $("#secondname").html(filmlist[23]["name"])
           $("#thirdname").html(filmlist[24]["name"])
           $("#firstcover").attr("src",filmlist[22]["cover"])
           $("#secondcover").attr("src",filmlist[23]["cover"])
           $("#thirdcover").attr("src",filmlist[24]["cover"])
        break;
        case "9":
           $("#browsetitle").html(browsetitle)
           $("#firstname").html(filmlist[25]["name"])
           $("#secondname").html(filmlist[26]["name"])
           $("#thirdname").html(filmlist[27]["name"])
           $("#firstcover").attr("src",filmlist[25]["cover"])
           $("#secondcover").attr("src",filmlist[26]["cover"])
           $("#thirdcover").attr("src",filmlist[27]["cover"])
        break;
       case "10":
           $("#browsetitle").html(browsetitle)
           $("#firstname").html(filmlist[28]["name"])
           $("#secondname").html(filmlist[29]["name"])
           $("#firstcover").attr("src",filmlist[28]["cover"])
           $("#secondcover").attr("src",filmlist[29]["cover"])
        break;
       case "11":
           $("#browsetitle").html(browsetitle)
           $("#firstname").html(filmlist[30]["name"])
           $("#firstcover").attr("src",filmlist[30]["cover"])
        break;
}
	
	
});




$(document).ready(function(){
   switch(chosenkind) {
    case "0":
    $("#firstcover").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[0]));
    window.location.assign("detail.html"); 
   });
    $("#firstcover").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[0]));
    window.location.assign("detail.html"); 
   });
    $("#secondcover").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[2]));
    window.location.assign("detail.html"); 
   });
    $("#secondcover").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[2]));
    window.location.assign("detail.html"); 
   });
    $("#thirdcover").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[4]));
    window.location.assign("detail.html"); 
   });
    $("#thirdcover").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[4]));
    window.location.assign("detail.html"); 
   });
    $("#fourthcover").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[13]));
    window.location.assign("detail.html"); 
   });
    $("#fourthcover").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[13]));
    window.location.assign("detail.html"); 
   });
    $("#fifthcover").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[31]));
    window.location.assign("detail.html"); 
   });
    $("#fifthcover").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[31]));
    window.location.assign("detail.html"); 
   });
        break;
    case "1":
    $("#firstcover").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[5]));
    window.location.assign("detail.html"); 
   });
    $("#firstcover").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[5]));
    window.location.assign("detail.html"); 
   });
    $("#secondcover").on("tap",function(){

    $.session.set('chosenFilm', JSON.stringify(filmlist[8]));
    window.location.assign("detail.html"); 
   });
    $("#secondcover").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[8]));
    window.location.assign("detail.html"); 
   });
        break;
   case "2":
    $("#firstcover").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[9]));
    window.location.assign("detail.html"); 
   });
    $("#firstcover").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[9]));
    window.location.assign("detail.html"); 
   });
    $("#secondcover").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[10]));
    window.location.assign("detail.html"); 
   });
    $("#secondcover").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[10]));
    window.location.assign("detail.html"); 
   });
    $("#thirdcover").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[11]));
    window.location.assign("detail.html"); 
   });
    $("#thirdcover").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[11]));
    window.location.assign("detail.html"); 
   });
    $("#fourthcover").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[12]));
    window.location.assign("detail.html"); 
   });
    $("#fourthcover").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[12]));
    window.location.assign("detail.html"); 
   });
        break;
    case "3":
    $("#firstcover").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[3]));
    window.location.assign("detail.html"); 
   });
    $("#firstcover").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[3]));
    window.location.assign("detail.html"); 
   });
    $("#secondcover").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[7]));
    window.location.assign("detail.html"); 
   });
    $("#secondcover").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[7]));
    window.location.assign("detail.html"); 
   });
    $("#thirdcover").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[14]));
    window.location.assign("detail.html"); 
   });
    $("#thirdcover").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[14]));
    window.location.assign("detail.html"); 
   });
        break;
    case "4":
    $("#firstcover").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[1]));
    window.location.assign("detail.html"); 
   });
    $("#firstcover").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[1]));
    window.location.assign("detail.html"); 
   });
    $("#secondcover").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[6]));
    window.location.assign("detail.html"); 
   });
    $("#secondcover").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[6]));
    window.location.assign("detail.html"); 
   });
     break;
    case "5":
    $("#firstcover").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[15]));
    window.location.assign("detail.html"); 
   });
    $("#firstcover").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[15]));
    window.location.assign("detail.html"); 
   });
    $("#secondcover").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[16]));
    window.location.assign("detail.html"); 
   });
    $("#secondcover").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[16]));
    window.location.assign("detail.html"); 
   });
    $("#thirdcover").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[17]));
    window.location.assign("detail.html"); 
   });
    $("#thirdcover").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[17]));
    window.location.assign("detail.html"); 
   });
     break;
   case "6":
    $("#firstcover").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[18]));
    window.location.assign("detail.html"); 
   });
    $("#firstcover").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[18]));
    window.location.assign("detail.html"); 
   });
    $("#secondcover").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[19]));
    window.location.assign("detail.html"); 
   });
    $("#secondcover").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[19]));
    window.location.assign("detail.html"); 
   });
     break;
   case "7":
    $("#firstcover").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[20]));
    window.location.assign("detail.html"); 
   });
    $("#firstcover").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[20]));
    window.location.assign("detail.html"); 
   });
    $("#secondcover").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[21]));
    window.location.assign("detail.html"); 
   });
    $("#secondcover").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[21]));
    window.location.assign("detail.html"); 
   });
     break;
    case "8":
    $("#firstcover").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[22]));
    window.location.assign("detail.html"); 
   });
    $("#firstcover").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[22]));
    window.location.assign("detail.html"); 
   });
    $("#secondcover").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[23]));
    window.location.assign("detail.html"); 
   });
    $("#secondcover").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[23]));
    window.location.assign("detail.html"); 
   });
    $("#thirdcover").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[24]));
    window.location.assign("detail.html"); 
   });
    $("#thirdcover").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[24]));
    window.location.assign("detail.html"); 
   });
     break;
     case "9":
    $("#firstcover").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[25]));
    window.location.assign("detail.html"); 
   });
    $("#firstcover").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[25]));
    window.location.assign("detail.html"); 
   });
    $("#secondcover").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[26]));
    window.location.assign("detail.html"); 
   });
    $("#secondcover").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[26]));
    window.location.assign("detail.html"); 
   });
    $("#thirdcover").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[27]));
    window.location.assign("detail.html"); 
   });
    $("#thirdcover").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[27]));
    window.location.assign("detail.html"); 
   });
     break;
     case "10":
    $("#firstcover").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[28]));
    window.location.assign("detail.html"); 
   });
    $("#firstcover").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[28]));
    window.location.assign("detail.html"); 
   });
    $("#secondcover").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[29]));
    window.location.assign("detail.html"); 
   });
    $("#secondcover").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[29]));
    window.location.assign("detail.html"); 
   });
     case "10":
    $("#firstcover").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[30]));
    window.location.assign("detail.html"); 
   });
    $("#firstcover").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist[30]));
    window.location.assign("detail.html"); 
   });
     break;
}
    
});

