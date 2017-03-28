var $movies = $("#movies");
var chosefilm= [];
var filmlist = [];
var selectfilm;


	$.getJSON("../data/detail.json", function(json){
     filmlist = json;
     });
     


$(document).ready(function(){
    $("#openAvatar").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][0]));
    window.location.assign("detail.html"); 
   });
    $("#openAvatar").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][0]));
    window.location.assign("detail.html"); 
   });
    $("#openBridgeofspies").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][1]));
    window.location.assign("detail.html"); 
   });
    $("#openBridgeofspies").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][1]));
    window.location.assign("detail.html"); 
   });
    $("#openBadMoms").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][3]));
    window.location.assign("detail.html"); 
   });
    $("#openBadMoms").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][3]));
    window.location.assign("detail.html"); 
   });
    $("#openBenHur").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][6]));
    window.location.assign("detail.html"); 
   });
   $("#openBenHur").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][6]));
    window.location.assign("detail.html"); 
   });
    $("#openBlueistheWarmestColour").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][18]));
    window.location.assign("detail.html"); 
    });
    $("#openBlueistheWarmestColour").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][18]));
    window.location.assign("detail.html"); 
    });
    $("#openBramStokersDracula").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][12]));
    window.location.assign("detail.html"); 
    });
    $("#openBramStokersDracula").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][12]));
    window.location.assign("detail.html"); 
    });
    $("#openBridgetJonessBaby").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][25]));
    window.location.assign("detail.html"); 
   });
    $("#openBridgetJonessBaby").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][25]));
    window.location.assign("detail.html"); 
   }); 
    $("#openBridgetJonessBaby").on("tap",function(){
    //selectfilm = JSON.stringify(filmlist["movies"][2]["id"]);
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][25]));
    window.location.assign("detail.html"); 
   });
    $("#openBridgetJonessBaby").click(function(){
    //selectfilm = JSON.stringify(filmlist["movies"][2]["id"]);
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][25]));
    window.location.assign("detail.html"); 
   });
    $("#openCinderella").on("tap",function(){
    //selectfilm = JSON.stringify(filmlist["movies"][2]["id"]);
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][10]));
    window.location.assign("detail.html"); 
   });
    $("#openCinderella").click(function(){
    //selectfilm = JSON.stringify(filmlist["movies"][2]["id"]);
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][10]));
    window.location.assign("detail.html"); 
   });
    $("#openDoctorStrange").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][2]));
    window.location.assign("detail.html"); 
    });
    $("#openDoctorStrange").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][2]));
    window.location.assign("detail.html"); 
    });
    $("#openDontBreathe").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][17]));
    window.location.assign("detail.html"); 
    });
    $("#openDontBreathe").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][17]));
    window.location.assign("detail.html"); 
    });
    $("#openFantasticBeasts").on("tap",function(){
    //selectfilm = JSON.stringify(filmlist["movies"][2]["id"]);
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][7]));
    window.location.assign("detail.html"); 
   });
    $("#openFantasticBeasts").click(function(){
    //selectfilm = JSON.stringify(filmlist["movies"][2]["id"]);
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][7]));
    window.location.assign("detail.html"); 
   });
    $("#openFiftyShades").on("tap",function(){
    //selectfilm = JSON.stringify(filmlist["movies"][2]["id"]);
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][24]));
    window.location.assign("detail.html"); 
   });
    $("#openFiftyShades").click(function(){
    //selectfilm = JSON.stringify(filmlist["movies"][2]["id"]);
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][24]));
    window.location.assign("detail.html"); 
   });
    $("#openFindingDory").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][5]));
    window.location.assign("detail.html"); 
    });
    $("#openFindingDory").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][5]));
    window.location.assign("detail.html"); 
    });
    $("#openFittestonEarth").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][19]));
    window.location.assign("detail.html"); 
    });
    $("#openFittestonEarth").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][19]));
    window.location.assign("detail.html"); 
    });
    $("#openIT").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][13]));
    window.location.assign("detail.html"); 
   });
    $("#openIT").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][13]));
    window.location.assign("detail.html"); 
   });
    $("#openJason").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][23]));
    window.location.assign("detail.html"); 
   });
   $("#openJason").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][23]));
    window.location.assign("detail.html"); 
   });
    $("#OpenJack").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][4]));
    window.location.assign("detail.html"); 
    });
    $("#OpenJack").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][4]));
    window.location.assign("detail.html"); 
    });
    $("#openMammaMia").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][21]));
    window.location.assign("detail.html"); 
    });
    $("#openMammaMia").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][21]));
    window.location.assign("detail.html"); 
    });
    $("#openMary").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][20]));
    window.location.assign("detail.html"); 
    });
    $("#openMary").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][20]));
    window.location.assign("detail.html"); 
    });
    $("#openMeBeforeYou").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][26]));
    window.location.assign("detail.html"); 
    });
    $("#openMeBeforeYou").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][26]));
    window.location.assign("detail.html"); 
    });
    $("#openOuija").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][16]));
    window.location.assign("detail.html"); 
    });
    $("#openOuija").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][16]));
    window.location.assign("detail.html"); 
    });
    $("#openSausage").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][14]));
    window.location.assign("detail.html"); 
    });
    $("#openSausage").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][14]));
    window.location.assign("detail.html"); 
    });
    $("#openTheAccountant").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][22]));
    window.location.assign("detail.html"); 
    });
    $("#openTheAccountant").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][22]));
    window.location.assign("detail.html"); 
    });
    $("#openTheGood").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][11]));
    window.location.assign("detail.html"); 
    });
    $("#openTheGood").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][11]));
    window.location.assign("detail.html"); 
    });
    $("#openTheLight").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][27]));
    window.location.assign("detail.html"); 
    });
    $("#openTheLight").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][27]));
    window.location.assign("detail.html"); 
    });
    $("#openTheSound").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][9]));
    window.location.assign("detail.html"); 
    });
    $("#openTheSound").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][9]));
    window.location.assign("detail.html"); 
    });
    $("#openTrain").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][15]));
    window.location.assign("detail.html"); 
    });
    $("#openTrain").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][15]));
    window.location.assign("detail.html"); 
    });
    $("#openTransformersAgeofExtinction").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][8]));
    window.location.assign("detail.html"); 
    });
    $("#openTransformersAgeofExtinction").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][8]));
    window.location.assign("detail.html"); 
    });
    $("#openCrashandBurn").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][30]));
    window.location.assign("detail.html"); 
    });
    $("#openCrashandBurn").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][30]));
    window.location.assign("detail.html"); 
    });
    $("#openDeadpool").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][28]));
    window.location.assign("detail.html"); 
    });
    $("#openDeadpool").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][28]));
    window.location.assign("detail.html"); 
    });
    $("#openMissPeregrine").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][31]));
    window.location.assign("detail.html"); 
    });
    $("#openMissPeregrine").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][31]));
    window.location.assign("detail.html"); 
    });
    $("#openTheDivergentSeries").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][29]));
    window.location.assign("detail.html"); 
    });
    $("#openTheDivergentSeries").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][29]));
    window.location.assign("detail.html"); 
    });
    $("#openIronMan3").on("tap",function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][32]));
    window.location.assign("detail.html"); 
    });
    $("#openIronMan3").click(function(){
    $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][32]));
    window.location.assign("detail.html"); 
    });
});