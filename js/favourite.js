
var filmlist = [];
var favouriteID;
var amount;

$(function (){
		if (localStorage.getItem('favourite') == null){
		$("#alert").show();
		$("#one").hide();
		$("#two").hide();
		$("#three").hide();
		$("#fourth").hide();
		$("#five").hide();
		$("#six").hide();
		$("#seven").hide();
		$("#eight").hide();
		$("#nine").hide();
		$("#ten").hide();
		
	}
		if (localStorage.getItem('favourite') == "[]"){
		$("#alert").show();
		$("#one").hide();
		$("#two").hide();
		$("#three").hide();
		$("#fourth").hide();
		$("#five").hide();
		$("#six").hide();
		$("#seven").hide();
		$("#eight").hide();
		$("#nine").hide();
		$("#ten").hide();
		
	}
	else
	{
		console.log("success")
		
	}
	
	
});

$.getJSON("../data/detail.json", function(json){
     filmlist = json;
     });
     
$(function(){
    favouriteID = JSON.parse(localStorage.getItem('favourite'));
    amount = favouriteID.length;
    
    switch (amount){
    	case 1:
    	    var a = favouriteID[0].id;
           $("#firstname").html(filmlist["movies"][a].name)
           $("#firstcover").attr("src",filmlist["movies"][a].cover)
        $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][a]));
        $("#two").hide();
		$("#three").hide();
		$("#fourth").hide();
		$("#five").hide();
		$("#six").hide();
		$("#seven").hide();
		$("#eight").hide();
		$("#nine").hide();
		$("#ten").hide();
    		break;
    		
    	case 2:
    	  var a = favouriteID[0].id;
    	  var b = favouriteID[1].id;
           $("#firstname").html(filmlist["movies"][a].name)
           $("#secondname").html(filmlist["movies"][b].name)
           $("#firstcover").attr("src",filmlist["movies"][a].cover)
           $("#secondcover").attr("src",filmlist["movies"][b].cover)
       $("#one").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][a]));
       window.location.assign("detail.html"); 
       });
       $("#one").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][a]));
       window.location.assign("detail.html"); 
       });
       $("#two").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][b]));
       window.location.assign("detail.html"); 
       });
       $("#two").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][b]));
       window.location.assign("detail.html"); 
       });
		$("#three").hide();
		$("#fourth").hide();
		$("#five").hide();
		$("#six").hide();
		$("#seven").hide();
		$("#eight").hide();
		$("#nine").hide();
		$("#ten").hide();
    		break;
    		
    	case 3:
    	  var a = favouriteID[0].id;
    	  var b = favouriteID[1].id;
    	  var c = favouriteID[2].id;
           $("#firstname").html(filmlist["movies"][a].name)
           $("#secondname").html(filmlist["movies"][b].name)
           $("#thirdname").html(filmlist["movies"][c].name)
           $("#firstcover").attr("src",filmlist["movies"][a].cover)
           $("#secondcover").attr("src",filmlist["movies"][b].cover)
           $("#thirdcover").attr("src",filmlist["movies"][c].cover)
       $("#one").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][a]));
       window.location.assign("detail.html"); 
       });
       $("#one").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][a]));
       window.location.assign("detail.html"); 
       });
       $("#two").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][b]));
       window.location.assign("detail.html"); 
       });
       $("#two").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][b]));
       window.location.assign("detail.html"); 
       });
       $("#three").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][c]));
       window.location.assign("detail.html"); 
       });
       $("#three").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][c]));
       window.location.assign("detail.html"); 
       });
		$("#fourth").hide();
		$("#five").hide();
		$("#six").hide();
		$("#seven").hide();
		$("#eight").hide();
		$("#nine").hide();
		$("#ten").hide();
    		break;
    		
    	case 4:
    	  var a = favouriteID[0].id;
    	  var b = favouriteID[1].id;
    	  var c = favouriteID[2].id;
    	  var d = favouriteID[3].id;
           $("#firstname").html(filmlist["movies"][a].name)
           $("#secondname").html(filmlist["movies"][b].name)
           $("#thirdname").html(filmlist["movies"][b].name)
           $("#fourthname").html(filmlist["movies"][d].name)
           $("#firstcover").attr("src",filmlist["movies"][a].cover)
           $("#secondcover").attr("src",filmlist["movies"][b].cover)
           $("#thirdcover").attr("src",filmlist["movies"][c].cover)
           $("#fourthcover").attr("src",filmlist["movies"][d].cover)
       $("#one").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][a]));
       window.location.assign("detail.html"); 
       });
       $("#one").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][a]));
       window.location.assign("detail.html"); 
       });
       $("#two").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][b]));
       window.location.assign("detail.html"); 
       });
       $("#two").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][b]));
       window.location.assign("detail.html"); 
       });
       $("#three").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][c]));
       window.location.assign("detail.html"); 
       });
       $("#three").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][c]));
       window.location.assign("detail.html"); 
       });
       $("#fourth").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][d]));
       window.location.assign("detail.html"); 
       });
       $("#fourth").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][d]));
       window.location.assign("detail.html"); 
       });
		$("#five").hide();
		$("#six").hide();
		$("#seven").hide();
		$("#eight").hide();
		$("#nine").hide();
		$("#ten").hide();
    		break;
    		
    	case 5:
    	 var a = favouriteID[0].id;
    	  var b = favouriteID[1].id;
    	  var c = favouriteID[2].id;
    	  var d = favouriteID[3].id;
    	  var e = favouriteID[4].id;
           $("#firstname").html(filmlist["movies"][a].name)
           $("#secondname").html(filmlist["movies"][b].name)
           $("#thirdname").html(filmlist["movies"][b].name)
           $("#fourthname").html(filmlist["movies"][d].name)
           $("#fifthname").html(filmlist["movies"][e].name)
           $("#firstcover").attr("src",filmlist["movies"][a].cover)
           $("#secondcover").attr("src",filmlist["movies"][b].cover)
           $("#thirdcover").attr("src",filmlist["movies"][c].cover)
           $("#fourthcover").attr("src",filmlist["movies"][d].cover)
           $("#fifthcover").attr("src",filmlist["movies"][e].cover)
       $("#one").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][a]));
       window.location.assign("detail.html"); 
       });
       $("#one").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][a]));
       window.location.assign("detail.html"); 
       });
       $("#two").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][b]));
       window.location.assign("detail.html"); 
       });
       $("#two").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][b]));
       window.location.assign("detail.html"); 
       });
       $("#three").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][c]));
       window.location.assign("detail.html"); 
       });
       $("#three").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][c]));
       window.location.assign("detail.html"); 
       });
       $("#fourth").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][d]));
       window.location.assign("detail.html"); 
       });
       $("#fourth").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][d]));
       window.location.assign("detail.html"); 
       });
       $("#five").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][e]));
       window.location.assign("detail.html"); 
       });
       $("#five").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][e]));
       window.location.assign("detail.html"); 
       });
		$("#six").hide();
		$("#seven").hide();
		$("#eight").hide();
		$("#nine").hide();
		$("#ten").hide();
    		break;
     case 6:
    		 var a = favouriteID[0].id;
    	     var b = favouriteID[1].id;
    	     var c = favouriteID[2].id;
    	     var d = favouriteID[3].id;
    	     var e = favouriteID[4].id;
    	     var f = favouriteID[5].id;
           $("#firstname").html(filmlist["movies"][a].name)
           $("#secondname").html(filmlist["movies"][b].name)
           $("#thirdname").html(filmlist["movies"][b].name)
           $("#fourthname").html(filmlist["movies"][d].name)
           $("#fifthname").html(filmlist["movies"][e].name)
           $("#sixthname").html(filmlist["movies"][f].name)
           $("#firstcover").attr("src",filmlist["movies"][a].cover)
           $("#secondcover").attr("src",filmlist["movies"][b].cover)
           $("#thirdcover").attr("src",filmlist["movies"][c].cover)
           $("#fourthcover").attr("src",filmlist["movies"][d].cover)
           $("#fifthcover").attr("src",filmlist["movies"][e].cover)
           $("#sixthcover").attr("src",filmlist["movies"][f].cover)
       $("#one").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][a]));
       window.location.assign("detail.html"); 
       });
       $("#one").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][a]));
       window.location.assign("detail.html"); 
       });
       $("#two").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][b]));
       window.location.assign("detail.html"); 
       });
       $("#two").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][b]));
       window.location.assign("detail.html"); 
       });
       $("#three").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][c]));
       window.location.assign("detail.html"); 
       });
       $("#three").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][c]));
       window.location.assign("detail.html"); 
       });
       $("#fourth").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][d]));
       window.location.assign("detail.html"); 
       });
       $("#fourth").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][d]));
       window.location.assign("detail.html"); 
       });
       $("#five").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][e]));
       window.location.assign("detail.html"); 
       });
       $("#five").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][e]));
       window.location.assign("detail.html"); 
       });
		$("#six").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][f]));
       window.location.assign("detail.html"); 
       });
       $("#six").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][f]));
       window.location.assign("detail.html"); 
       });
		$("#seven").hide();
		$("#eight").hide();
		$("#nine").hide();
		$("#ten").hide();
    		break;
    		case 7:
    		 var a = favouriteID[0].id;
    	     var b = favouriteID[1].id;
    	     var c = favouriteID[2].id;
    	     var d = favouriteID[3].id;
    	     var e = favouriteID[4].id;
    	     var f = favouriteID[5].id;
    	     var g = favouriteID[6].id;
           $("#firstname").html(filmlist["movies"][a].name)
           $("#secondname").html(filmlist["movies"][b].name)
           $("#thirdname").html(filmlist["movies"][b].name)
           $("#fourthname").html(filmlist["movies"][d].name)
           $("#fifthname").html(filmlist["movies"][e].name)
           $("#sixthname").html(filmlist["movies"][f].name)
           $("#seventhname").html(filmlist["movies"][g].name)
           $("#firstcover").attr("src",filmlist["movies"][a].cover)
           $("#secondcover").attr("src",filmlist["movies"][b].cover)
           $("#thirdcover").attr("src",filmlist["movies"][c].cover)
           $("#fourthcover").attr("src",filmlist["movies"][d].cover)
           $("#fifthcover").attr("src",filmlist["movies"][e].cover)
           $("#sixthcover").attr("src",filmlist["movies"][f].cover)
           $("#senventhcover").attr("src",filmlist["movies"][g].cover)
       $("#one").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][a]));
       window.location.assign("detail.html"); 
       });
       $("#one").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][a]));
       window.location.assign("detail.html"); 
       });
       $("#two").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][b]));
       window.location.assign("detail.html"); 
       });
       $("#two").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][b]));
       window.location.assign("detail.html"); 
       });
       $("#three").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][c]));
       window.location.assign("detail.html"); 
       });
       $("#three").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][c]));
       window.location.assign("detail.html"); 
       });
       $("#fourth").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][d]));
       window.location.assign("detail.html"); 
       });
       $("#fourth").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][d]));
       window.location.assign("detail.html"); 
       });
       $("#five").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][e]));
       window.location.assign("detail.html"); 
       });
       $("#five").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][e]));
       window.location.assign("detail.html"); 
       });
		$("#six").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][f]));
       window.location.assign("detail.html"); 
       });
       $("#six").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][f]));
       window.location.assign("detail.html"); 
       });
		$("#seven").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][g]));
       window.location.assign("detail.html"); 
       });
       $("#seven").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][g]));
       window.location.assign("detail.html"); 
       });
		$("#eight").hide();
		$("#nine").hide();
		$("#ten").hide();
    		break;
    		case 8:
    		 var a = favouriteID[0].id;
    	     var b = favouriteID[1].id;
    	     var c = favouriteID[2].id;
    	     var d = favouriteID[3].id;
    	     var e = favouriteID[4].id;
    	     var f = favouriteID[5].id;
    	     var g = favouriteID[6].id;
    	     var h = favouriteID[7].id;
           $("#firstname").html(filmlist["movies"][a].name)
           $("#secondname").html(filmlist["movies"][b].name)
           $("#thirdname").html(filmlist["movies"][b].name)
           $("#fourthname").html(filmlist["movies"][d].name)
           $("#fifthname").html(filmlist["movies"][e].name)
           $("#sixthname").html(filmlist["movies"][f].name)
           $("#seventhname").html(filmlist["movies"][g].name)
           $("#eighthtitle").html(filmlist["movies"][h].name)
           $("#firstcover").attr("src",filmlist["movies"][a].cover)
           $("#secondcover").attr("src",filmlist["movies"][b].cover)
           $("#thirdcover").attr("src",filmlist["movies"][c].cover)
           $("#fourthcover").attr("src",filmlist["movies"][d].cover)
           $("#fifthcover").attr("src",filmlist["movies"][e].cover)
           $("#sixthcover").attr("src",filmlist["movies"][f].cover)
           $("#senventhcover").attr("src",filmlist["movies"][g].cover)
           $("#eighthcover").attr("src",filmlist["movies"][h].cover)
       $("#one").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][a]));
       window.location.assign("detail.html"); 
       });
       $("#one").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][a]));
       window.location.assign("detail.html"); 
       });
       $("#two").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][b]));
       window.location.assign("detail.html"); 
       });
       $("#two").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][b]));
       window.location.assign("detail.html"); 
       });
       $("#three").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][c]));
       window.location.assign("detail.html"); 
       });
       $("#three").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][c]));
       window.location.assign("detail.html"); 
       });
       $("#fourth").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][d]));
       window.location.assign("detail.html"); 
       });
       $("#fourth").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][d]));
       window.location.assign("detail.html"); 
       });
       $("#five").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][e]));
       window.location.assign("detail.html"); 
       });
       $("#five").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][e]));
       window.location.assign("detail.html"); 
       });
		$("#six").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][f]));
       window.location.assign("detail.html"); 
       });
       $("#six").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][f]));
       window.location.assign("detail.html"); 
       });
		$("#seven").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][g]));
       window.location.assign("detail.html"); 
       });
       $("#seven").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][g]));
       window.location.assign("detail.html"); 
       });
       $("#eight").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][h]));
       window.location.assign("detail.html"); 
       });
       $("#eight").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][h]));
       window.location.assign("detail.html"); 
       });
		$("#nine").hide();
		$("#ten").hide();
    		break;
    		case 9:
    		var a = favouriteID[0].id;
    	     var b = favouriteID[1].id;
    	     var c = favouriteID[2].id;
    	     var d = favouriteID[3].id;
    	     var e = favouriteID[4].id;
    	     var f = favouriteID[5].id;
    	     var g = favouriteID[6].id;
    	     var h = favouriteID[7].id;
    	     var i = favouriteID[8].id;
           $("#firstname").html(filmlist["movies"][a].name)
           $("#secondname").html(filmlist["movies"][b].name)
           $("#thirdname").html(filmlist["movies"][b].name)
           $("#fourthname").html(filmlist["movies"][d].name)
           $("#fifthname").html(filmlist["movies"][e].name)
           $("#sixthname").html(filmlist["movies"][f].name)
           $("#seventhname").html(filmlist["movies"][g].name)
           $("#eighthtitle").html(filmlist["movies"][h].name)
           $("#ninthtitle").html(filmlist["movies"][i].name)
           $("#firstcover").attr("src",filmlist["movies"][a].cover)
           $("#secondcover").attr("src",filmlist["movies"][b].cover)
           $("#thirdcover").attr("src",filmlist["movies"][c].cover)
           $("#fourthcover").attr("src",filmlist["movies"][d].cover)
           $("#fifthcover").attr("src",filmlist["movies"][e].cover)
           $("#sixthcover").attr("src",filmlist["movies"][f].cover)
           $("#senventhcover").attr("src",filmlist["movies"][g].cover)
           $("#eighthcover").attr("src",filmlist["movies"][h].cover)
           $("#ninthcover").attr("src",filmlist["movies"][i].cover)
       $("#one").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][a]));
       window.location.assign("detail.html"); 
       });
       $("#one").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][a]));
       window.location.assign("detail.html"); 
       });
       $("#two").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][b]));
       window.location.assign("detail.html"); 
       });
       $("#two").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][b]));
       window.location.assign("detail.html"); 
       });
       $("#three").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][c]));
       window.location.assign("detail.html"); 
       });
       $("#three").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][c]));
       window.location.assign("detail.html"); 
       });
       $("#fourth").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][d]));
       window.location.assign("detail.html"); 
       });
       $("#fourth").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][d]));
       window.location.assign("detail.html"); 
       });
       $("#five").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][e]));
       window.location.assign("detail.html"); 
       });
       $("#five").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][e]));
       window.location.assign("detail.html"); 
       });
		$("#six").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][f]));
       window.location.assign("detail.html"); 
       });
       $("#six").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][f]));
       window.location.assign("detail.html"); 
       });
		$("#seven").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][g]));
       window.location.assign("detail.html"); 
       });
       $("#seven").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][g]));
       window.location.assign("detail.html"); 
       });
       $("#eight").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][h]));
       window.location.assign("detail.html"); 
       });
       $("#eight").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][h]));
       window.location.assign("detail.html"); 
       });
       $("#nine").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][i]));
       window.location.assign("detail.html"); 
       });
       $("#nine").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][i]));
       window.location.assign("detail.html"); 
       });
		$("#ten").hide();
    		
    		break;
    		case 10:
    		var a = favouriteID[0].id;
    	     var b = favouriteID[1].id;
    	     var c = favouriteID[2].id;
    	     var d = favouriteID[3].id;
    	     var e = favouriteID[4].id;
    	     var f = favouriteID[5].id;
    	     var g = favouriteID[6].id;
    	     var h = favouriteID[7].id;
    	     var i = favouriteID[8].id;
    	     var j = favouriteID[9].id;
           $("#firstname").html(filmlist["movies"][a].name)
           $("#secondname").html(filmlist["movies"][b].name)
           $("#thirdname").html(filmlist["movies"][b].name)
           $("#fourthname").html(filmlist["movies"][d].name)
           $("#fifthname").html(filmlist["movies"][e].name)
           $("#sixthname").html(filmlist["movies"][f].name)
           $("#seventhname").html(filmlist["movies"][g].name)
           $("#eighthtitle").html(filmlist["movies"][h].name)
           $("#ninthtitle").html(filmlist["movies"][i].name)
           $("#tenthtitle").html(filmlist["movies"][j].name)
           $("#firstcover").attr("src",filmlist["movies"][a].cover)
           $("#secondcover").attr("src",filmlist["movies"][b].cover)
           $("#thirdcover").attr("src",filmlist["movies"][c].cover)
           $("#fourthcover").attr("src",filmlist["movies"][d].cover)
           $("#fifthcover").attr("src",filmlist["movies"][e].cover)
           $("#sixthcover").attr("src",filmlist["movies"][f].cover)
           $("#senventhcover").attr("src",filmlist["movies"][g].cover)
           $("#eighthcover").attr("src",filmlist["movies"][h].cover)
           $("#ninthcover").attr("src",filmlist["movies"][i].cover)
           $("#tenthcover").attr("src",filmlist["movies"][j].cover)
       $("#one").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][a]));
       window.location.assign("detail.html"); 
       });
       $("#one").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][a]));
       window.location.assign("detail.html"); 
       });
       $("#two").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][b]));
       window.location.assign("detail.html"); 
       });
       $("#two").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][b]));
       window.location.assign("detail.html"); 
       });
       $("#three").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][c]));
       window.location.assign("detail.html"); 
       });
       $("#three").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][c]));
       window.location.assign("detail.html"); 
       });
       $("#fourth").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][d]));
       window.location.assign("detail.html"); 
       });
       $("#fourth").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][d]));
       window.location.assign("detail.html"); 
       });
       $("#five").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][e]));
       window.location.assign("detail.html"); 
       });
       $("#five").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][e]));
       window.location.assign("detail.html"); 
       });
		$("#six").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][f]));
       window.location.assign("detail.html"); 
       });
       $("#six").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][f]));
       window.location.assign("detail.html"); 
       });
		$("#seven").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][g]));
       window.location.assign("detail.html"); 
       });
       $("#seven").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][g]));
       window.location.assign("detail.html"); 
       });
       $("#eight").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][h]));
       window.location.assign("detail.html"); 
       });
       $("#eight").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][h]));
       window.location.assign("detail.html"); 
       });
       $("#nine").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][i]));
       window.location.assign("detail.html"); 
       });
       $("#nine").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][i]));
       window.location.assign("detail.html"); 
       });
		$("#ten").on("tap",function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][j]));
       window.location.assign("detail.html"); 
       });
       $("#ten").click(function(){
       $.session.set('chosenFilm', JSON.stringify(filmlist["movies"][j]));
       window.location.assign("detail.html"); 
       });
    		break;
    		case 11:
    		break;
    }
	
	
});








